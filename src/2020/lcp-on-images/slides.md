---
theme: default
title: This Is Your LCP On Images
info: Patrick Hulce · 2020
author: Patrick Hulce
highlighter: shiki
layout: cover
class: lcp-cover
---

# This Is Your LCP On Images

Patrick Hulce · [patrick.hulce@gmail.com](mailto:patrick.hulce@gmail.com)

<div class="cover-scores">
  <img src="./images/lighthouse-score-minus-99.avif" alt="Lighthouse performance score of -99" />
  <img src="./images/lighthouse-performance-score-of-100.avif" alt="Lighthouse performance score of 100" />
</div>

---
layout: default
---

# Patrick ❤️s Images

<div class="about-grid">
  <div class="about-icons">
    <img src="./images/lighthouse.avif" alt="Lighthouse" />
    <img src="./images/chrome.avif" alt="Chrome" />
    <img src="./images/third-party-web-treemap-2020.avif" alt="third-party-web treemap, © 2020" />
    <img src="./images/largest-contentful-paint.avif" alt="Largest Contentful Paint" />
  </div>
  <ul>
    <li>Lighthouse core team since 2016, wrote much of the image advice there.</li>
    <li>Maintain jpeg-js, @eris/exif, third-party-web.</li>
    <li>Images are also kinda my life outside of OSS work. Love photography, created Optyx App.</li>
  </ul>
</div>

---
layout: default
---

# ⚡️ Roadmap

1. What’s LCP?
2. Why is it so hard to deliver images quickly on the web?
3. How do you deliver a great experience with images?

---
layout: section
---

# What’s LCP?

---
layout: default
---

# What’s LCP?

[hulce.link/lcp-spec](https://hulce.link/lcp-spec)

**largest contentful paint**
Metric that captures the time at which the largest text block or image was painted.

**largest**
The largest initial in-viewport size the *first* time the contentful element was painted.

**contentful**
Text nodes, image elements, video elements with a poster, certain* CSS background images.

**paint**
The time at which the element was painted. Text: first paint in initial font. Image: paint after load event.

<small>* = background images on html/body element excluded, gradients excluded</small>

---
layout: default
---

# LCP by Example

<img src="./images/instagram-login-fcp-glyph-lcp-wordmark.avif" alt="Instagram login: FCP is the glyph, LCP is the wordmark" class="example-strip" />

---
layout: default
---

# Measuring LCP

<div class="measure-row">
  <img src="./images/lighthouse.avif" alt="Lighthouse" class="lh-logo" />
  <div>
    <img src="./images/npx-lighthouse-patrickhulce-com.avif" alt="npx lighthouse https://patrickhulce.com/" class="terminal" />
    <img src="./images/lighthouse-performance-96-with-lcp-2-3s.avif" alt="Lighthouse performance 96 with LCP 2.3s" class="report" />
  </div>
</div>

**Lighthouse**
Auditing tool that loads a URL and reports on various metrics, including Largest Contentful Paint.

---
layout: default
---

# Largest Contentful Paint was introduced May 2020.

<img src="./images/lighthouse-75-lcp-22s.avif" alt="Lighthouse 75 with LCP at 22.0s while other metrics are green" class="center-shot" />

Very common to have a poor LCP, we haven’t had time to optimize yet!

---
layout: section
---

# Why is LCP so hard to do well on?

---
layout: fact
---

# IMAGES

*and the laws of TCP

---
layout: default
class: waterfall-slide
---

# Delivering an LCP in &lt;2.5s on Fast 3G

The maximum theoretical image size is only ~144 KB.

**Assumptions**
- Hosted on a well-optimized server (10ms RT from user, TLS False Start, ~0ms response time).
- Page consists of only 4 resources: 50KB HTML, 80KB JS, 20KB CSS, and the image.
- Using static site generation, no client-side rendering.
- Hero image hosted on a dedicated image CDN.

<div class="waterfall">
  <div class="ticks"><span>0s</span><span>1s</span><span>2s</span><span>2.5s</span></div>
  <div class="row">
    <span class="bar html">example.com/page.html</span>
  </div>
  <div class="row handshake">
    <span class="chip">DNS</span><span class="chip">TCP</span><span class="chip">SSL</span><span class="chip wide">response</span>
  </div>
  <div class="row indent">
    <span class="bar css">bundle.css</span>
  </div>
  <div class="row indent">
    <span class="bar js">bundle.js</span>
  </div>
  <div class="row indent handshake">
    <span class="chip">DNS</span><span class="chip">TCP</span><span class="chip">SSL</span><span class="chip grow">response</span>
  </div>
  <div class="row indent">
    <span class="bar img">image-cdn.example.com/image.jpg</span>
  </div>
</div>

---
layout: section
---

# How do you deliver a great LCP?

---
layout: default
---

# How to deliver a great LCP with images.

1. Request the image **early**
2. Use **efficient** formats
3. Never waste **pixels**

---
layout: default
class: waterfall-slide
---

# Request the image early

Minimize request chains in the path to your LCP image.
Use `<link rel=preload>` if necessary.

**Without Preload — 2.25s**

<div class="waterfall compact">
  <div class="ticks"><span>0s</span><span>1s</span><span>2s</span><span>2.5s</span></div>
  <div class="row"><span class="bar html">example.com/page.html</span></div>
  <div class="row indent"><span class="bar js">bundle.js</span></div>
  <div class="row indent2"><span class="bar img">image.jpg</span></div>
</div>

**With Preload — 1.75s**

<div class="waterfall compact">
  <div class="ticks"><span>0s</span><span>1s</span><span>2s</span><span>2.5s</span></div>
  <div class="row"><span class="bar html">example.com/page.html</span></div>
  <div class="row indent">
    <span class="bar js short">bundle.js</span>
    <span class="bar img">image.jpg</span>
  </div>
</div>

---
layout: two-cols
---

# Use efficient formats

Use `<picture>` element to conditionally serve latest formats.

100 KB of a typical photograph gets you…

- 0.06 megapixels with PNG (never, ever, ever do this)
- 0.25 megapixels with Photoshop JPEG
- 0.64 megapixels with MozJPEG
- 0.75 megapixels with WebP
- 1.06 megapixels with AVIF

<img src="./images/picture-element-serving-avif-webp-then-jpeg.avif" alt="picture element serving AVIF, WebP, then JPEG" class="code-shot" />

::right::

<div class="meme">
  <img src="./images/the-office-theyre-the-same-picture.avif" alt="The Office: they're the same picture" />
  <div class="meme-labels"><span>JPEG</span><span>AVIF</span></div>
</div>

---
layout: default
---

# Never waste pixels

Use `srcset` and `<picture>` for responsive sizing.

<div class="waste-row">
  <img src="./images/nyt-homepage-september-2020.avif" alt="NYT homepage September 28, 2020 with a large hero photo" />
  <p>This image is 18MP but displayed as 1.2 MP.<br /><strong>It’s 1500% larger than it needs to be.</strong></p>
</div>

---
layout: default
---

# Lighthouse helps you catch all three 🎉

<div class="audits">
  <img src="./images/preload-lcp-image-9-49s-savings.avif" alt="Preload Largest Contentful Paint image, 9.49s savings" />
  <img src="./images/serve-images-next-gen-formats.avif" alt="Serve images in next-gen formats, 6.15s savings" />
  <img src="./images/properly-size-images-9-86s-savings.avif" alt="Properly size images, 9.86s savings" />
</div>

---
layout: end
---

# Thank You!

Patrick Hulce · [patrick.hulce@gmail.com](mailto:patrick.hulce@gmail.com)

<style>
.lcp-cover .cover-scores {
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
  width: 14rem;
  height: 14rem;
}
.lcp-cover .cover-scores img:first-child {
  position: absolute;
  right: 0;
  top: 0;
  width: 8.5rem;
  opacity: 0.95;
}
.lcp-cover .cover-scores img:last-child {
  position: absolute;
  right: 1.6rem;
  top: 5.4rem;
  width: 10rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1.5rem;
  align-items: center;
}
.about-icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
  align-items: center;
  justify-items: center;
}
.about-icons img {
  max-height: 5.4rem;
  width: auto;
  object-fit: contain;
}

.example-strip,
.center-shot {
  display: block;
  width: 100%;
  max-height: 14rem;
  object-fit: contain;
  margin: 0.6rem auto;
}

.measure-row {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}
.measure-row .lh-logo {
  width: 7.5rem;
  height: auto;
}
.measure-row .terminal {
  width: 16rem;
  display: block;
  margin-bottom: 0.4rem;
}
.measure-row .report {
  width: 18rem;
}

.waterfall {
  font-size: 0.72rem;
  margin-top: 0.4rem;
}
.waterfall .ticks {
  display: flex;
  justify-content: space-between;
  color: #5f6368;
  margin-bottom: 0.15rem;
}
.waterfall .row {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin: 0.12rem 0;
}
.waterfall .indent { padding-left: 28%; }
.waterfall .indent2 { padding-left: 42%; }
.waterfall .bar,
.waterfall .chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 0.08rem 0.35rem;
  line-height: 1.2;
  color: #202124;
}
.waterfall .html { background: #cfe2f3; width: 28%; }
.waterfall .css { background: #d9d2e9; width: 12%; }
.waterfall .js { background: #fff2cc; width: 38%; }
.waterfall .js.short { width: 26%; }
.waterfall .img { background: #b6d7a8; width: 70%; }
.waterfall .chip { background: #efefef; min-width: 2.4rem; }
.waterfall .chip.wide { min-width: 5.4rem; }
.waterfall .chip.grow { flex: 1; }
.waterfall.compact .html { width: 28%; }
.waterfall.compact .js { width: 26%; }
.waterfall.compact .img { width: 32%; }

.code-shot {
  width: 100%;
  margin-top: 0.6rem;
}
.meme {
  position: relative;
}
.meme img {
  width: 100%;
  max-height: 16rem;
  object-fit: contain;
}
.meme-labels {
  position: absolute;
  top: 18%;
  left: 12%;
  right: 12%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
}

.waste-row {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1rem;
  align-items: center;
}
.waste-row img {
  width: 100%;
  max-height: 13rem;
  object-fit: contain;
  outline: 3px solid #ff0000;
  outline-offset: -3px;
}

.audits {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem;
}
.audits img {
  width: 100%;
  object-fit: contain;
  background: #fff;
}
.audits img:last-child {
  grid-column: 1;
}
</style>
