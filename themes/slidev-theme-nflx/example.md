---
theme: ./
title: Netflix Theme Starter
info: |
  Copy this file to start a black/red talk.
  Layouts: cover, about, agenda, section, chapter, statement, quote,
  timeline, default, code, image, two-cols, split, beat, demo, end.
  Color scheme only — no brand marks or licensed fonts.
---

---
layout: cover
event: Conference Name
date: Month 2026
speaker: Your Name
email: you@example.com
link: bit.ly/your-talk
---

# Talk Title Goes Here

::media::

<MediaTile icon="qr" tone="accent" />

---
layout: about
---

# My inspiration…

::tiles::

<MediaTile icon="browser" tone="dim" caption="Web" />
<MediaTile icon="chip" tone="dark" caption="GPU" />
<MediaTile icon="film" tone="dim" caption="Media" />
<MediaTile icon="wave" tone="deep" caption="Signal" />

---
layout: agenda
label: AGENDA
title: Agenda
---

::media::

<MediaTile icon="layers" tone="dark" />

::default::

1. How we got here
   <small>The path from scripts to shaders</small>
2. What the system actually is
   <small>A mental model you can hold</small>
3. A live walkthrough
   <small>The interesting bit, not the setup</small>
4. What is next
   <small>Two bets worth watching</small>

---
layout: section
label: HOW WE GOT HERE
---

# Origins

How did we get to this point?

---
layout: chapter
split: WEB / GPU
---

::marks::

<MediaTile icon="chip" size="sm" tone="dark" />
<MediaTile icon="browser" size="sm" tone="dim" />
<MediaTile icon="layers" size="sm" tone="deep" />
<MediaTile icon="wave" size="sm" tone="accent" />

::default::

# Origins

---
layout: statement
label: ORIGINS
---

# WebAssembly

How did we get to WebGPU?

---
layout: statement
label: WEB / GPU
display: true
---

# AI

---
layout: quote
label: VIDEO CAPTIONING
---

# a multimodal large language model capable of processing both images and text

---
layout: timeline
label: ORIGINS
---

# Evolution of the stack

<NetflixTimeline :items="[
  { year: '1995', label: 'Scripts', tone: 'dark' },
  { year: '2008', label: 'V8', tone: 'deep' },
  { year: '2012', label: 'WebGL', tone: 'accent' },
  { year: '2017', label: 'WASM', tone: 'deep' },
  { year: '2022', label: 'WebGPU', tone: 'accent' },
  { year: '2026', label: 'On-device', tone: 'dark' },
]" />

---
layout: default
label: WALKTHROUGH
---

# Direct access to GPUs

- Parallel compute, not just graphics
- **2023** — shipped in Chrome
- **2025** — shipped across browsers

---
layout: code
label: WALKTHROUGH
---

# WebGPU — Hello Triangle

<WindowChrome title="triangle.ts">

```ts
const adapter = await navigator.gpu.requestAdapter()
const device = await adapter.requestDevice()

const vertexShader = device.createShaderModule({
  code: `
    @vertex fn main(@builtin(vertex_index) i: u32)
      -> @builtin(position) vec4<f32> {
      var pos = array<vec2<f32>, 3>(
        vec2(0.0, 0.5),
        vec2(-0.5, -0.5),
        vec2(0.5, -0.5)
      );
      return vec4<f32>(pos[i], 0.0, 1.0);
    }`,
})
```

</WindowChrome>

---
layout: image
label: WALKTHROUGH
title: Filmstrip Method
---

::media::

<div class="flex items-end justify-center gap-4 w-full">
  <Callout label="File API">
    <MediaTile icon="film" tone="dim" />
  </Callout>
  <NetflixArrow />
  <Callout label="Canvas API">
    <MediaTile icon="browser" tone="dark" />
  </Callout>
  <NetflixArrow />
  <Callout label="WebGPU API">
    <MediaTile icon="chip" tone="accent" />
  </Callout>
</div>

---
layout: two-cols
label: WALKTHROUGH
title: One idea per column
---

::left::

<WindowChrome kind="screenshot" title="Live output" />

::right::

The frame is a wireframe, not a screenshot. Swap the slot for a still when you have one.

- Observation
- Consequence

---
layout: split
label: WEB / NN
---

::left::

# WebNN to the Rescue

::right::

- Neural Network API already landed
- Leverages NPUs, not just GPUs
- The “AI PC” finally has an API

---
layout: demo
label: VIDEO CAPTIONING
link: bit.ly/your-demo
---

# Live Demo

::media::

<MediaTile icon="qr" tone="accent" />

---
layout: beat
number: '#1'
label: THE FUTURE
---

# AI is coming to every web application

---
layout: beat
number: '#2'
label: THE FUTURE
---

# Privacy preserving inference

---
layout: end
---

# Thank You.

- <NetflixIcon name="at" /> yourhandle
- <NetflixIcon name="mail" /> you@example.com
- <NetflixIcon name="link" /> /in/yourname

::media::

<MediaTile icon="qr" tone="accent" />
