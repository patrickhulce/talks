---
theme: ./
title: Tactical Deployment
command: AERO-NET COMMAND
info: |
  Command-center HUD starter. Layouts: cover, about, agenda, section, chapter,
  statement, quote, timeline, default, code, image, two-cols, split, beat, demo, end.
event: STABLE BUILD
date: v4.0.2
speaker: Operator One
email: ops@aero.net
link: talks.patrickhulce.com
sections:
  - STRATEGY
  - TACTICAL
  - INTEL
  - LOGISTICS
layout: cover
label: TACTICAL
kicker: SECURE PROTOCOL // INITIALIZED
---

<HudTitle title="Tactical" accent="Deployment" />

---
layout: default
label: TACTICAL
---

<div class="cover-grid" style="height: 100%;">
  <div class="cover-copy" style="display: flex; flex-direction: column; min-height: 0;">
    <HudTitle kicker="SECURE PROTOCOL // INITIALIZED" title="Tactical" accent="Deployment" />
    <HudCard accent="none" style="flex: 1; margin-top: 1rem;">
      <HudList :items="[
        { title: 'Orbit Insertion', body: 'Lock trajectory and confirm thermal shields before the burn window.' },
        { title: 'Relay Handshake', body: 'Authenticate the mesh and flood telemetry to the surface teams.' },
        { title: 'Payload Release', body: 'Stage the habitat module and wait for green on all clamps.' },
      ]" />
    </HudCard>
    <div style="display: flex; gap: 0.7rem; margin-top: 1rem;">
      <HudButton>Execute Plan</HudButton>
      <HudButton kind="ghost">Abort</HudButton>
    </div>
  </div>
  <HudFrame target="TARGET: ORBITAL HABITAT X-9" caption="ALT 408KM  //  SIG 0.94">
    <MediaTile icon="layers" tone="dark" />
  </HudFrame>
</div>

---
layout: default
label: TACTICAL
kicker: // PHASE 3 DEPLOYMENT METRICS
title: Tactical Overview
---

<div class="grid grid-cols-3 gap-4" style="flex: 1; min-height: 0;">
  <HudCard title="Radar Telemetry" kicker="SECTOR 7G SURVEILLANCE" accent="bottom">
    - Real-time object tracking
    - Doppler drift compensation
    - Ghost-echo rejection
  </HudCard>
  <HudCard title="Shield Lattice" kicker="PRIORITY DEFENSE GRID" accent="bottom">
    - Encrypted communications
    - Failover across three bands
    - Auto-rearm on breach
  </HudCard>
  <HudCard title="Supply Vector" kicker="LOGISTICS NODE 12" accent="bottom">
    - On-demand mass drivers
    - Cold-storage for payload
    - 14-minute resupply loop
  </HudCard>
</div>

---
layout: timeline
label: STRATEGY
kicker: DEPLOYMENT SEQUENCE
---

<HudTitle title="Operation" accent="Nexus" kicker="" />

<NetflixTimeline variant="phases" :items="[
  { year: '01', kicker: 'INITIATION', title: 'Core Boot', body: 'Bring reactors online and verify the mesh heartbeat.' },
  { year: '02', kicker: 'UPLINK', title: 'Relay Lock', body: 'Authenticate ground stations and flood the command channel.' },
  { year: '03', kicker: 'INSERTION', title: 'Orbit Burn', body: 'Commit the trajectory window and stage thermal shields.' },
  { year: '04', kicker: 'HANDOFF', title: 'Habitat Drop', body: 'Release the module and confirm clamp telemetry.' },
]" />

---
layout: about
label: INTEL
---

# Field Assets

::tiles::

<MediaTile icon="browser" tone="dim" caption="Web" />
<MediaTile icon="chip" tone="dark" caption="GPU" />
<MediaTile icon="film" tone="dim" caption="Media" />
<MediaTile icon="wave" tone="deep" caption="Signal" />

---
layout: agenda
label: TACTICAL
title: Mission
accent: Agenda
kicker: SECURE PROTOCOL // INITIALIZED
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
label: STRATEGY
---

<HudTitle kicker="CHAPTER 01 // ORIGINS" title="Origin" accent="Story" />

How did we get to this point?

---
layout: chapter
label: INTEL
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
label: INTEL
kicker: DEFINITION // LOCKED
---

# WebAssembly

How did we get to WebGPU?

---
layout: statement
label: INTEL
display: true
---

# AI

---
layout: quote
label: LOGISTICS
kicker: VIDEO CAPTIONING
---

# a multimodal large language model capable of processing both images and text

---
layout: default
label: LOGISTICS
title: Direct Access
accent: GPUs
kicker: WALKTHROUGH // BRIEFING
---

<HudList :items="[
  { title: 'Parallel compute', body: 'Not just graphics pipelines — general GPU work.' },
  { title: '2023 — Chrome', body: 'Shipped in the browser that already had the users.' },
  { title: '2025 — Everywhere', body: 'Cross-browser, finally boring enough to bet on.' },
]" />

---
layout: code
label: LOGISTICS
title: Hello
accent: Triangle
kicker: WALKTHROUGH // SOURCE
---

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
label: LOGISTICS
title: Filmstrip
accent: Method
kicker: WALKTHROUGH // PIPELINE
---

::media::

<div class="flex items-end justify-center gap-4 w-full h-full">
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
label: LOGISTICS
title: One Idea
accent: Each
kicker: WALKTHROUGH // SPLIT
---

::left::

<WindowChrome kind="screenshot" title="Live output" />

::right::

The frame is a wireframe, not a screenshot. Swap the slot for a still when you have one.

- Observation
- Consequence

---
layout: split
label: INTEL
---

::left::

# WebNN to the Rescue

::right::

- Neural Network API already landed
- Leverages NPUs, not just GPUs
- The “AI PC” finally has an API

---
layout: demo
label: TACTICAL
link: bit.ly/your-demo
---

# Live Demo

::media::

<MediaTile icon="qr" tone="accent" />

---
layout: beat
number: '#1'
label: STRATEGY
---

# AI is coming to every web application

---
layout: beat
number: '#2'
label: STRATEGY
---

# Privacy preserving inference

---
layout: end
label: TACTICAL
---

# Thank You.

- <NetflixIcon name="at" /> yourhandle
- <NetflixIcon name="mail" /> you@example.com
- <NetflixIcon name="link" /> /in/yourname

::media::

<MediaTile icon="qr" tone="accent" />
