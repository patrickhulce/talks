#!/usr/bin/env python3
"""Convert media not already on origin/master to AVIF ≤1080p."""
from __future__ import annotations

import argparse
import os
import subprocess
import sys
from pathlib import Path

MEDIA = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".mp4", ".webm", ".mov", ".avif"}
VIDEO = {".mp4", ".webm", ".mov"}
TEXT = {".md", ".mdx", ".js", ".jsx", ".ts", ".tsx", ".vue", ".html", ".json", ".css"}
SKIP = {"node_modules", "dist", "dist-www", ".slidev", "favicons"}
VF = (
    "scale=w='min(1920,iw)':h='min(1080,ih)':force_original_aspect_ratio=decrease"
    ":flags=lanczos,pad=ceil(iw/2)*2:ceil(ih/2)*2"
)


def log(*args, **kwargs):
    print(*args, file=sys.stderr, flush=True, **kwargs)


def sh(*argv, check=True, capture=False):
    argv = [str(a) for a in argv]
    log("+", " ".join(a.replace("\n", "\\n") for a in argv))
    result = subprocess.run(argv, check=check, text=True, stdout=subprocess.PIPE if capture else None)
    return result.stdout if capture else result


def skipped(path: Path) -> bool:
    return any(part in SKIP for part in path.parts)


def media_paths():
    for root in ("src", "themes", "assets"):
        for path in Path(root).rglob("*"):
            if path.is_file() and path.suffix.lower() in MEDIA and not skipped(path):
                yield path.as_posix()


def dims(path):
    out = sh("magick", "identify", "-format", "%w %h\n", path, capture=True)
    width = height = 0
    for line in out.splitlines():
        w, h = map(int, line.split())
        width, height = max(width, w), max(height, h)
    return width, height


def needs_convert(path):
    if Path(path).suffix.lower() != ".avif":
        return True
    w, h = dims(path)
    return w > 1920 or h > 1080


def search_root(rel):
    parts = Path(rel).parts
    if parts[0] == "src" and len(parts) >= 3:
        return Path(*parts[:3])
    if parts[0] == "themes" and len(parts) >= 2:
        return Path(*parts[:2])
    return Path(rel).parent


def rewrite_refs(old, new, root: Path):
    if old == new or not root.is_dir():
        return
    for path in root.rglob("*"):
        if path.suffix.lower() not in TEXT or skipped(path) or not path.is_file():
            continue
        text = path.read_text()
        if old in text:
            path.write_text(text.replace(old, new))
            log(f"rewrote refs in {path.as_posix()}: {old} -> {new}")


def convert(src, dest):
    tmp = f"{dest}.tmp.avif"
    Path(tmp).unlink(missing_ok=True)
    if Path(src).suffix.lower() in VIDEO:
        result = sh(
            "ffmpeg", "-y", "-hide_banner", "-i", src, "-vf", VF,
            "-an", "-c:v", "libsvtav1", "-crf", "35", tmp, check=False,
        )
        ok = result.returncode == 0 and Path(tmp).exists() and Path(tmp).stat().st_size
        if not ok:
            Path(tmp).unlink(missing_ok=True)
            sh("magick", src, "-coalesce", "-resize", "1920x1080>", "-quality", "50", f"AVIF:{tmp}")
    else:
        sh("magick", src, "-coalesce", "-resize", "1920x1080>", "-quality", "50", f"AVIF:{tmp}")
    Path(dest).parent.mkdir(parents=True, exist_ok=True)
    Path(tmp).replace(dest)
    if src != dest:
        Path(src).unlink(missing_ok=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    parser.add_argument("--vs-base", default="origin/master")
    parser.add_argument("--tracked-only", action="store_true")
    parser.add_argument("--stage", action="store_true")
    args = parser.parse_args()

    os.chdir(sh("git", "rev-parse", "--show-toplevel", capture=True).strip())
    sh("git", "rev-parse", "--verify", "--quiet", args.vs_base, capture=True)

    on_base = set(sh("git", "ls-tree", "-r", "--name-only", args.vs_base, capture=True).splitlines())
    tracked = set(sh("git", "ls-files", capture=True).splitlines())

    converted = skipped_base = already_ok = violations = bytes_in = bytes_out = 0
    for rel in media_paths():
        if rel in on_base:
            skipped_base += 1
            continue
        if (args.tracked_only or args.stage) and rel not in tracked:
            continue
        if not needs_convert(rel):
            already_ok += 1
            continue
        dest = str(Path(rel).with_suffix(".avif"))
        if args.check:
            log(f"violation: {rel}")
            violations += 1
            continue
        log(f"converting: {rel} -> {dest}")
        src_bytes = Path(rel).stat().st_size
        convert(rel, dest)
        bytes_in += src_bytes
        bytes_out += Path(dest).stat().st_size
        converted += 1
        rewrite_refs(Path(rel).name, Path(dest).name, search_root(rel))
        if args.stage:
            sh("git", "add", dest)
            if rel != dest and rel in tracked:
                sh("git", "rm", "-f", "--quiet", rel, check=False)
            sh("git", "add", "-u", search_root(rel))

    log(
        f"summary: converted={converted} skipped-on-base={skipped_base} "
        f"already-ok={already_ok} violations={violations} bytes-in={bytes_in} bytes-out={bytes_out}"
    )
    if args.check and violations:
        sys.exit(1)


if __name__ == "__main__":
    main()
