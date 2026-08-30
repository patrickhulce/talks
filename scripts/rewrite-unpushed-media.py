#!/usr/bin/env python3
"""Rewrite origin/master..HEAD so new media is AVIF in the introducing commit."""
from __future__ import annotations

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

BASE = os.environ.get("BASE_REF", "origin/master")


def log(*args, **kwargs):
    print(*args, file=sys.stderr, flush=True, **kwargs)


def sh(*argv, check=True, capture=False):
    argv = [str(a) for a in argv]
    log("+", " ".join(a.replace("\n", "\\n") for a in argv))
    result = subprocess.run(argv, check=check, text=True, stdout=subprocess.PIPE if capture else None)
    return result.stdout if capture else result


def die(msg):
    log(f"error: {msg}")
    sys.exit(1)


def main():
    os.chdir(sh("git", "rev-parse", "--show-toplevel", capture=True).strip())
    optimize = Path(__file__).with_name("optimize-media.py")
    if not optimize.is_file():
        die(f"missing {optimize}")

    branch = sh("git", "rev-parse", "--abbrev-ref", "HEAD", capture=True).strip()
    if branch != "master":
        die(f"must run on master (currently {branch})")
    sh("git", "rev-parse", "--verify", "--quiet", BASE, capture=True)

    ahead = int(sh("git", "rev-list", "--count", f"{BASE}..HEAD", capture=True))
    if ahead <= 0:
        die(f"nothing to rewrite; HEAD is not ahead of {BASE}")
    if sh("git", "diff-index", "--quiet", "HEAD", "--", check=False).returncode:
        die("worktree has tracked changes; stash or commit first")
    if sh("git", "diff-index", "--quiet", "--cached", "HEAD", "--", check=False).returncode:
        die("index is dirty")

    tmp = Path(tempfile.mkdtemp())
    copied = tmp / "optimize-media.py"
    shutil.copy(optimize, copied)
    exec_cmd = (
        f"{sys.executable} {copied} --vs-base {BASE} --stage && "
        "(git diff --cached --quiet || git commit --amend --no-edit --no-verify)"
    )
    try:
        log(f"rebasing {ahead} commit(s) onto {BASE}...")
        sh("git", "rebase", BASE, "--exec", exec_cmd)
        log("converting remaining untracked media (not staged)...")
        sh(sys.executable, optimize, "--vs-base", BASE)
        log("rewrite complete.")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    main()
