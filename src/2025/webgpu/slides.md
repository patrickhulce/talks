---
theme: ../../../themes/slidev-theme-nflx
title: AI in Your Browser with WebGPU
info: Commit Your Code · September 2025
layout: cover
event: Commit Your Code
date: September 2025
speaker: Patrick Hulce
email: patrick.hulce@gmail.com
link: bit.ly/CYC25-WebGPU
---

# AI in Your Browser with WebGPU

::media::

<img src="./images/qr-code-for-bit-ly-cyc25-webgpu.avif" alt="QR code for bit.ly/CYC25-WebGPU" />

<!--
Hey everyone! Thanks so much for coming out to Commit Your Code, and if you're visiting from afar, my adopted home of Dallas.
My name is Patrick, and I'm an ML Architect at Netflix working on GenAI for Hollywood.
We’ve got a real tight 25 minute window for this deal and we have a lot to cover, so if you want to follow along or revisit hit up that QR code on the screen here.
Before we get going, quick show of hands - how many of you have heard of WebGPU before this talk?
__WAIT_FOR_AUDIENCE_RESPONSE__
Alright, mix of hands. Perfect. By the end of this talk, I hope you'll be inspired about what's possible on the web in a whole new way.
And driving that inspiration, is my own passion for this topic...
-->

---
layout: about
---

# MY INSPIRATION…

::tiles::

<MediaTile src="./images/lighthouse.avif" tone="dim" caption="Lighthouse" />
<MediaTile src="./images/javascript.avif" tone="dark" caption="JavaScript" />
<MediaTile src="./images/js.avif" tone="dim" caption="JS" />
<MediaTile src="./images/chrome.avif" tone="deep" caption="Chrome" />

<!--
...because while I may be churning out AI models today, my past life was actually all about open-source web tech.
I lived and breathed JavaScript.
I worked on Chrome DevTools and web performance tooling,
Created and maintained npm packages with millions of downloads,
And built projects like Lighthouse which you may have used to check your website at some point.
So to say I've been a bit homesick while living in Python-land for the past few years would be an understatement.
Thankfully though, these two worlds - web development and AI - are finally merging in some really exciting ways, and that's exactly what we're going to be talking about today.
So my goal today is simple: I want you to leave this room positively giddy with the same excitement I have about what's possible these days using *only* web technologies.
No servers, no cloud APIs, no expensive GPU farms, no data leaving your browser.
And here's how we're going to do it...
-->

---
layout: agenda
label: AGENDA
title: AGENDA
---

::media::

<img src="./images/agenda-notebook.avif" alt="Agenda notebook" />

::default::

1. Evolution of the Web
   <small>How far have we come?</small>
2. WebAssembly
   <small>How did we get to WebGPU?</small>
3. WebGPU
   <small>What is it?</small>
   <small>How do you use with it?</small>
4. Video Captioning System
   <small>How do you use WebGPU practically?</small>
5. Live Demo
   <small>Does it really work?</small>
6. The Future
   <small>What’s next?</small>

<!--
We'll cover the basic evolution of the web and look at how far we've come.
Followed by a look at WebAssembly, the tech that paved the way for WebGPU.
Then, we'll actually talk about what WebGPU is and how to use it.
Then, I'm going to show you the building blocks to put together your own AI-powered web apps that run entirely client-side.
Then, we'll kick the tires on a _live_ demo using WebGPU for some real video production use cases.
And finally, we'll get all introspective and examine what this means for us moving forward.
We'll be moving pretty fast, because we're going...
-->

---
layout: timeline
label: EVOLUTION OF THE WEB
---

# Evolution of the Web

<NetflixTimeline :items="[
  { year: '1989', label: 'HTML', tone: 'dark' },
  { year: '1995', label: 'JavaScript', tone: 'deep' },
  { year: '1996', label: 'CSS', tone: 'dark' },
  { year: '…', label: 'Dark Ages', tone: 'accent' },
  { year: '2008', label: 'v8', tone: 'deep' },
  { year: '2010', label: 'Web Fonts', tone: 'dark' },
  { year: '2012', label: 'WebGL', tone: 'accent' },
  { year: '2014', label: 'Angular', tone: 'deep' },
  { year: '…', label: 'WASM', tone: 'dark' },
  { year: '2025', label: 'WebGPU', tone: 'accent' },
]" />

<div class="flex items-end justify-center gap-6" style="margin-top: 1.8rem;">
  <div class="flex flex-col items-center gap-2">
    <div class="flex gap-3">
      <img src="./images/flash.avif" alt="Flash" style="height: 4.6rem;" />
      <img src="./images/internet-explorer.avif" alt="Internet Explorer" style="height: 4.6rem;" />
    </div>
    <span style="font-size: 0.95rem; font-weight: 700; letter-spacing: 0.04em;">Dark Ages</span>
  </div>
  <img src="./images/golden-era-of-the-web.avif" alt="Golden Era of the Web" style="height: 5.4rem;" />
</div>

<p style="margin-top: 0.9rem; font-size: 1.05rem; text-align: center; color: #d5d5d5;">
  Golden Era — node.js · TypeScript · React · Service Workers · WASM
</p>

<!--
...all the way back in 1989.
If we go back to the beginning, the web used to be pretty simple, right?
We started out without even styles or JavaScript.
Fast forward a bit and we got CSS for styling, JavaScript for a little interactivity.
Then we went through the dark ages of Flash and the IE stranglehold.
And then we entered what I consider the golden era of the web when absolutely everything was coming online.
We've gotten faster JavaScript engines, WebGL for 3D graphics, WebFonts for typography, Angular, React, Node.js, TypeScript, WebSockets, service workers, and even WebAssembly for even running legacy desktop apps written in C, all in your browser!
Each one of these unlocks opened up entirely new possibilities that we couldn't even imagine before.
And now, we have direct access to powerful, raw parallel compute with the WebGPU API.
But let's back up a step or two because I expect that many web developers are mostly familiar with traditional JavaScript APIs and the DOM rather than these new-fangled additions.
Quick show of hands, how many of you have ever used a browser API that required compiling another language, TypeScript or CoffeeScript for my fellow old-timers doesn't count, I'm talking about WebGL, WASM, things like that?
__WAIT_FOR_AUDIENCE_RESPONSE__
Right, exactly! So what does it look like to compile another language for use on the web?
Let's take a look starting with...
-->

---
layout: section
label: WEBASSEMBLY
---

# WebAssembly

How did we get to WebGPU?

<!--
WebAssembly
-->

---
layout: chapter
label: WEBASSEMBLY
---

::marks::

<MediaTile src="./images/rust-logo.avif" size="sm" />
<MediaTile src="./images/cpp-logo.avif" size="sm" />
<MediaTile src="./images/python-logo.avif" size="sm" />
<MediaTile src="./images/go-logo.avif" size="sm" />

::default::

# WebAssembly

<img src="./images/chrome-edge-firefox-safari.avif" alt="Chrome, Edge, Firefox, Safari" style="height: 3.4rem; margin-top: 1.6rem;" />

<!--
WebAssembly (which you may also here as "wasm") lets you compile languages like C, C++, Rust, even Python, to a common assembly target to run in the browser at near-native speeds, a _web_ assembly language if you will.
This was a huge deal because suddenly, decades of existing software could run on the web.
Let's take a look at what it looks like...
-->

---
layout: two-cols
label: WEBASSEMBLY
title: WebAssembly - Hello World
---

::left::

<WindowChrome title="hello_world.c">

```c
#include <stdio.h>

int main() {
    printf("Hello Web!\n");
    return 0;
}
```

</WindowChrome>

::right::

<WindowChrome kind="screenshot" title="emcc">
  <img src="./images/emscripten-compile-hello-world.avif" alt="Emscripten compile: brew install emscripten; emcc hello_world.c -o hello.html" />
</WindowChrome>

<!--
We write our code in another language just as we would normally for any other compile target.
For example, here we've written some super simple C code here for classic Hello World.
Then, instead of clang or gcc, we can compile it with the Emscripten toolkit which will spit out a `.wasm` file along with some helper HTML and javascript code.
Let's take a look at what it generated to get this C file running in a browser...
-->

---
layout: image
label: WEBASSEMBLY
title: WebAssembly - Hello World
---

::media::

<div class="flex items-stretch justify-center gap-4 w-full h-full">
  <WindowChrome kind="browser" title="hello.html" url="hello.html">
    <img src="./images/emscripten-hello-web-output.avif" alt="Emscripten Hello Web! output" />
  </WindowChrome>
  <img src="./images/hello-world-2208-lines-114kb.avif" alt="2208 lines and 114 KB for Hello World" style="max-height: 100%; object-fit: contain;" />
</div>

<!--
Oh God, maybe not! It burns. 2000 lines and 114 KB for a Hello World script.
I kid, and yet many a truth twas said in jest.
WASM is powerful and amazing but also pretty heavy handed.
You better have a pretty damn good reason to use it when you do, not just for some microoptimization.
And the cool thing is, there _have_ been really awesome reasons to use it.
-->

---
layout: image
label: WEBASSEMBLY
tone: dark
---

::media::

<div class="flex items-center justify-center gap-5 w-full">
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/photoshop.avif" alt="Photoshop" style="height: 3.4rem;" />
    <img src="./images/photoshop-on-the-web.avif" alt="Photoshop on the web" style="width: 100%; object-fit: contain;" />
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/ffmpeg.avif" alt="FFmpeg" style="height: 3.4rem;" />
    <img src="./images/ffmpeg-wasm-in-the-browser.avif" alt="ffmpeg.wasm in the browser" style="width: 100%; object-fit: contain;" />
  </div>
  <img src="./images/webgpu.avif" alt="WebGPU" style="height: 7rem; align-self: center;" />
</div>

<!--
With WebAssembly, Adobe was able to port all of _Photoshop_, millions of lines of C to work in your browser.
Thanks to WebAssembly, you can ask Claude Code to get you a fully featured video editor running completely in your browser with ffmpeg in under an hour.
Pretty much anything that was traditionally desktop-only can now run on the web. And that's pretty incredible.
But here's the problem y’all, WebAssembly, as its name suggested, was just giving us access to CPU instructions.
What if we wanted more? What if we wanted like over 9000 cores
-->

---
layout: section
label: WEBGPU
---

# WebGPU

What can it do?

<!--
...well that's where WebGPU comes in.
-->

---
layout: default
label: WEBGPU
title: WebGPU
---

<div class="flex items-center gap-8 h-full">
  <ul class="flex-1">
    <li>Direct access to GPUs’ parallel compute</li>
    <li>Not just for graphics, general purpose parallel computing API</li>
    <li><strong>2023 - Shipped in Chrome</strong></li>
    <li><strong>2025 - Shipped across browsers (Firefox in July, Safari in macOS Tahoe)</strong></li>
  </ul>
  <img src="./images/webgpu-2.avif" alt="WebGPU" style="width: 16rem; flex: none;" />
</div>

<!--
WebGPU is the next iteration of low-level web capabilities which gives us direct access to the parallel compute power in your GPU, right from JavaScript.
You’ll notice that I’m comparing it to WebAssembly and not WebGL.
That’s because unlike WebGL, it's not just buggy graphics APIs with spotty cross-browser compat this time around, no, no.
This is general-purpose computing. Massive parallelization for making complex calculations fast.
WebGPU is giving us a low-level target for GPU instructions the same way WebAssembly gave us low-level target for _CPU_ instructions.
And the timing here is frankly perfect because WebGPU is finally cross-browser this year.
Firefox shipped support in July, Safari just shipped it in macOS Tahoe.
Let me show you what WebGPU code looks like...
-->

---
layout: two-cols
label: WEBGPU
title: WebGPU - Hello Triangle
---

::left::

<WindowChrome title="triangle.ts">

```ts
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();

const vertexShader = device.createShaderModule({
  code: `
    @vertex fn main(@builtin(vertex_index) vertexIndex: u32)
      -> @builtin(position) vec4<f32> {
      // Triangle vertices
      var pos = array<vec2<f32>, 3>(
        vec2(0.0, 0.5),
        vec2(-0.5, -0.5),
        vec2(0.5, -0.5)
      );
      return vec4<f32>(pos[vertexIndex], 0.0, 1.0);
    }`
});
// CHEATING: ~100 more lines of render pipeline boilerplate...
```

</WindowChrome>

::right::

<img src="./images/hello-webgpu-triangle.avif" alt="Hello WebGPU Triangle" />

<!--
As you can tell from our demo here, we've stepped things up from our WebAssembly forebearers.
No more CLI and local compilation, we can access the GPU right inline with the rest of our JavaScript, passing kernels and shaders directly as strings.
This is a very basic example that draws a simple triangle.
Now it’s still cheating a bit, because there’s about 100 more lines of boilerplate that wouldn’t fit on this slide. But hey, at least it’s not 2000 like WebAssembly.
And I actually don't want you to worry at all about understanding every line here, the key point is that you now have direct access to the same parallel computing power that make modern experiences possible.
And people are already doing some wild stuff with this...
-->

---
layout: image
label: WEBGPU
tone: dark
bleed: true
---

::media::

<div class="flex items-stretch justify-center gap-4 w-full h-full">
  <img src="./images/webgpu-lava-metaballs.avif" alt="WebGPU lava metaballs" style="width: 50%; height: 100%; object-fit: cover;" />
  <img src="./images/webgpu-3d-graphics.avif" alt="WebGPU 3D graphics" style="width: 50%; height: 100%; object-fit: cover;" />
</div>

<!--
Animated lava metaballs, complex 3D graphics for games, physics simulations...
Anything requiring direct access to those delicious CUDA cores can now run in your webapps too.
And here's where it gets really interesting. Do you know what else runs on GPUs...
-->

---
layout: statement
label: WEBGPU
display: true
---

<p style="font-size: 0.85rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #999; margin: 0 0 0.4rem;">AI + ML CRASH COURSE</p>

# AI

<div class="flex items-center justify-center gap-3" style="margin-top: 1.1rem; max-width: 52rem;">
  <img src="./images/chatgpt.avif" alt="ChatGPT" style="height: 6.2rem; object-fit: cover;" />
  <img src="./images/midjourney.avif" alt="Midjourney" style="height: 6.2rem; object-fit: cover;" />
  <img src="./images/diffusion.avif" alt="Diffusion" style="height: 6.2rem; object-fit: cover;" />
  <img src="./images/forward-train-reverse-generate.avif" alt="Forward train, reverse generate" style="height: 6.2rem; object-fit: cover;" />
</div>

<!--
AI!
Neural networks are fundamentally matrix operations. Massively parallelized matrix operations.
And this is exactly what GPUs were designed to do.
So now that we can bring AI directly to the browser.
This means we can bring AI to our webapps without servers, no API keys, no data ever even leaving your client's machine.
To take a look at what this looks like in practice...
-->

---
layout: statement
label: VIDEO CAPTIONING
---

# MEDIA SEARCH:<br>VIDEO CAPTIONING

<img src="./images/video-captioning-pipeline.avif" alt="Video captioning pipeline" style="width: 36rem; max-width: 90%; margin: 1.2rem auto 0; display: block;" />

<div class="flex items-end justify-center gap-4 w-full" style="margin-top: 1.1rem;">
  <Callout label="File API">
    <MediaTile icon="film" tone="dim" size="sm" />
  </Callout>
  <NetflixArrow />
  <Callout label="Canvas API">
    <MediaTile icon="browser" tone="dark" size="sm" />
  </Callout>
  <NetflixArrow />
  <Callout label="WebGPU API">
    <MediaTile icon="chip" tone="accent" size="sm" />
  </Callout>
</div>

<!--
...solve a real problem that my team is hiring for _right now_, so consider this your interview advantage.
And that is Media Search.
Netflix obviously has a ton of video, and people need help all the time finding that perfect clip of thunderstruck opening (IYKYK, y'all).
So to help them out, we're going to build a video captioning system, something that will automatically produce text describing what happens in the video.
First up, we need access to a video which is pretty straightforward with the file API.
Next, we'll extract a few frames from the video with the canvas.
And finally, we'll use a Vision Language Model running on WebGPU to generate some captions.
The beautiful part? Everything runs entirely in the browser, 100% local.
Now before we walk through each component in a bit more detail, I'm curious, how many of you already knew about all three of these components before this talk?
__WAIT_FOR_AUDIENCE_RESPONSE__
How many feel like you could go build this right now, talk schmalk, who needs it?
__WAIT_FOR_AUDIENCE_RESPONSE__
Hahaha, alright, love to see it, well for my humble friends in the audience, let's drill down a bit...
-->

---
layout: code
label: VIDEO CAPTIONING
---

# File API

<div class="flex flex-col gap-4">
<WindowChrome title="HTML">

```html
<input id="da-video" type="file" />
```

</WindowChrome>

<WindowChrome title="JavaScript">

```js
const fileInput = document.getElementById('da-video');
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  const video = document.createElement('video');
  video.src = URL.createObjectURL(file);
  document.body.append(video);
  video.play();
});
```

</WindowChrome>
</div>

<!--
Easy stuff first, getting the file is pretty straightforward.
HTML has a built-in file input type that triggers all the usual UI we would want to pick a local file on our filesystem.
We use that file input to let users select a video file, and we just listen for its change event to create a video element, so that we're ready to go.
If that JavaScript looks odd to you because you joined team web in the framework-only era, I highly recommend brushing up on some vanilla JavaScript, you're going to love it, promise.
Anywho, next up is actually getting some frames out of that video, and for that we'll need...
-->

---
layout: code
label: VIDEO CAPTIONING
---

# Canvas API

<WindowChrome title="frames.ts">

```ts
function extractFrames(video: HTMLVideoElement) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const frames = [];
  const timestamps = [0, video.duration/2, video.duration]; // Start, middle, end

  timestamps.forEach(time => {
    video.currentTime = time;
    ctx.drawImage(video, 0, 0);
    frames.push(canvas.toDataURL());
  });

  return frames;
}
```

</WindowChrome>

<!--
…the Canvas element.
We can use canvas to extract a few frames at different timestamps within the video.
Start, middle, and end frames seem like a good start to give us a decent overview of what's happening in the video.
For this, we just set the desired timestamp on the video, draw it to the canvas at that time, render our canvas to a data URL, and move on to the next one.
Now for the fun part and our AI magic...
-->

---
layout: code
label: VIDEO CAPTIONING
---

# A Pythonic Diversion - Transformers

<WindowChrome title="generate.py">

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Create a text generation pipeline
tokenizer = AutoTokenizer.from_pretrained("microsoft/DialoGPT-medium")
model = AutoModelForCausalLM.from_pretrained("microsoft/DialoGPT-medium")

# Encode the message
msg_tokens = tokenizer.encode(
  "Hello, how are you?" + tokenizer.eos_token,
  return_tensors='pt'
)

# Generate a response
output = model.generate(msg_tokens, max_length=100, num_return_sequences=1)
print(tokenizer.decode(output[0], skip_special_tokens=True))
```

</WindowChrome>

<!--
To help us out with the WebGPU part, we're going to be using a helpful library from HuggingFace.
If you've been around machine learning or GenAI at all on the backend these past few years, you've probably used the transformers package in python at _some_ point.
And using it looks like what I have up here.
We import the library, create a pipeline that references a model on HuggingFace, and we run some input through it.
Pretty straightforward considering how much is going on behind the scenes!
Lucky for us, transformers.js is the JavaScript counterpart to this incredibly popular library in python from Hugging Face.
And double lucky for us, the web version is arguably even easier to use.
_This_...
-->

---
layout: code
label: VIDEO CAPTIONING
---

# WebGPU Transformers.js

<WindowChrome title="generate.js">

```js
import { pipeline } from '@huggingface/transformers';

// Create a text generation pipeline
const generator = await pipeline(
  'text-generation',
  'microsoft/DialoGPT-medium',
  { device: 'webgpu' }
);

// Generate a response
const output = await generator('Hello, how are you?', {
  max_length: 50,
  num_return_sequences: 1,
});

console.log(output[0].generated_text);
```

</WindowChrome>

<!--
...is what that same flow looks like in transformers.js.
Not bad! We import the transformers library, create a pipeline, say we want to use the webgpu device, and then run our input through it! We even get to skip the tokenized encoding step from python earlier!
Problem though, we want to work with images, not just text and for that we'll need something a little better than a large language model.
We need...
-->

---
layout: statement
label: VIDEO CAPTIONING
---

# VISION
LANGUAGE MODEL (VLM)

a multimodal large language model capable of
processing both images and text

<!--
A vision language model! Not all open weight language models are as adept as ChatGPT, and not all of them can process images.
So we can’t use any old LLM, we need a _V_ LM, or vision language model.
Vision language models are trained with multimodal data and are exactly what we want to be able to accept both text and our video frames as input.
-->

---
layout: statement
label: VIDEO CAPTIONING
---

# FastVLM
(Apple, CVPR 2025)

a small and fast vision language model that’s 10x faster on mobile devices than prior state-of-the-art

<!--
Lucky for us again, man we’re getting so lucky y’all it’s almost as if there’s a reason I picked this talk, heh.
Anyway over this past summer, Apple released a paper on FastVLM - an open-weight Vision Language Model that's 10 times faster than the previous state-of-the-art.
It's specifically designed for real-time applications and small enough to run in browsers even on mobile phones!
This is _EXACLTY_ what we want for our WebGPU video captioning system.
-->

---
layout: code
label: VIDEO CAPTIONING
---

# FastVLM Transformers.js

<WindowChrome title="caption.js">

```js
import { pipeline } from '@huggingface/transformers';

// Create a text generation pipeline
const generator = await pipeline(
  'image-to-text',
  'apple/FastVLM-7B',
  { device: 'webgpu' }
);

// Generate a response
const output = await generator(
  imageElement, {
    prompt: "Describe what's happening in this video frame",
    num_return_sequences: 1,
  });

console.log(output[0].generated_text);
```

</WindowChrome>

<!--
Triple lucky for us, that's what we're on now, right? Triple luck?
Swapping it out in transformers.js is a piece of cake.
Same simple API. Now we're just changing our model reference to FastVLM and passing in an image element too.
At this point, we are tantilizingly close. You can taste the AI goodness can't you.
We just have one last problem left to solve which is that a video isn't just a single image, I snuck a bit of hint into the slides a bit ago did anyone pick up on it?
How are we going to get some sense of time passing in our questions? Anyone catch it?
__WAIT_FOR_AUDIENCE_RESPONSE__
That's right! Our VLM can't process the video element directly. Instead...
-->

---
layout: image
label: VIDEO CAPTIONING
title: Filmstrip Method
---

::media::

<div class="flex flex-col items-center justify-center gap-4 w-full">
  <img src="./images/filmstrip.avif" alt="Filmstrip" style="width: 28rem; max-width: 90%;" />
  <div class="flex items-center justify-center gap-3 w-full">
    <img src="./images/dallas-cowboys-cheerleaders.avif" alt="Dallas Cowboys Cheerleaders" style="height: 11rem; object-fit: cover; flex: 1;" />
    <img src="./images/dallas-cowboys-cheerleaders-jump-split.avif" alt="Dallas Cowboys Cheerleaders jump-split" style="height: 11rem; object-fit: cover; flex: 1;" />
    <img src="./images/dallas-cowboys-cheerleaders-kick-line.avif" alt="Dallas Cowboys Cheerleaders kick line" style="height: 11rem; object-fit: cover; flex: 1;" />
  </div>
</div>

<!--
...we're going to use a filmstrip. We'll extract a few frames using our canvas and toss them into our VLM all at once to get a sense of what's going on.
Alright, enough with the theory. Let's see this thing in action!
-->

---
layout: demo
label: VIDEO CAPTIONING
link: bit.ly/CYC25-WebGPU-Demo
---

# LIVE DEMO

::media::

<img src="./images/qr-code-cyc25-webgpu-demo.avif" alt="QR code for bit.ly/CYC25-WebGPU-Demo" style="width: 12.5rem; height: 12.5rem;" />

<!--
Demo gods, please be kind to me today... I sacrificed 2 rubber ducks and iPhone 6 in your honor this morning
*uploads a video file*
So I'm uploading a video here of our beloved Dallas Cowboys Cheerleaders viral opener from America’s Sweethearts on Netflix.
If you haven’t seen America’s Sweethearts, you definitely should. If you love football, this is seriously the new Hard Knocks.
If you don’t football, they’re still just amazing athletes and all around people, so check it out on Netflix.
Anyway, the system is extracting frames, sending them to our FastVLM model running entirely in the browser...
*waits for processing*
And there we go!
Look at these captions - ""
This is all happening client-side. No data left my browser. This AI model is running entirely on WebGPU.
-->

---
layout: section
label: THE FUTURE
---

# The Future

What’s on the horizon?

<!--
… the future is even brighter! So far we’ve been talking about WebGPU but that still ultimately requires your users to have a GPU! What if they don’t!
You’re in luck.
-->

---
layout: two-cols
label: WEBNN
title: WebNN to the Rescue
---

::left::

- **Web Neural Network API already landed in Chrome/Edge**
- **Leverages any available hardware including Neural Processing Units (NPUs)**
- The marketing fluff “AI PC” will finally become useful!

::right::

<div class="flex flex-col items-center justify-center gap-5">
  <img src="./images/web-neural-network.avif" alt="Web Neural Network" style="width: 18rem;" />
  <img src="./images/copilot-pc-snapdragon.avif" alt="Copilot+ PC, Snapdragon X Elite, Snapdragon X Plus" style="width: 16rem;" />
</div>

<!--
WebNN - the Web Neural Network API - is on the horizon which will give us access to dedicated neural processing units, not just GPUs.
Meaning PCs that don't have a GPU and the rise of AI PCs with dedicated NPUs can take advantage of hardware acceleration too.
Now, because it's on the horizon, you need to do a bit of browser tinkering to test it out.
-->

---
layout: two-cols
label: WEBNN
title: WebNN to the Rescue
---

::left::

1. Go to chrome://flags
2. Search for “WebNN”

<img src="./images/enable-all-the-things.avif" alt="ENABLE ALL THE THINGS" style="width: 16rem; margin-top: 1.2rem;" />

::right::

<WindowChrome kind="browser" title="Experiments" url="chrome://flags">
  <img src="./images/chrome-flags-search-for-webnn.avif" alt="chrome://flags search for WebNN" />
</WindowChrome>

<!--
You can actually enable this today by going to your secret stash of Chrome flags, searching for "WebNN", enabling it, and restarting your browser.
It's experimental, but it works! Just change your device property in your transformers.js pipeline from “webgpu” to “webnn” to start leveraging it.
-->

---
layout: image
label: WEBNN
tone: dark
---

# WebNN vs. WebGPU

Image Classification Frames per Second, Macbook M3 Pro

::media::

<img src="./images/fps-boxplot-js-wasm-webgpu.avif" alt="FPS box plot: JavaScript 0.3, WASM 18.9, WebGPU 177.0, WebNN-NPU 1250.0" />

<!--
Recall our evolution of the web here, the performance improvements have been dramatic at every stage of the process.
We’re looking at a full order of magnitude improvement. The pure javascript implementation of MobileNet I wrote back for my startup back in the day took almost 3 seconds per frame. WASM sped that up all the way to a 1/20th of a second! That’s huge! 2 Orders of magnitude!
Then WebGPU comes along and gives that another full order to go to 200 frames per second.
Now WebNN is poised to go even further to bring us to over 1000 frames per second!
What this means is truly real-time AI interactions in web browsers. No more waiting for responses. Absolutely mind blowing what we have now at our fingertips.
But I do want to be honest about the limitations...
======Data=======
Image Classification ms per frame min/p50/max
cpu (wasm) = 52/53/85
webgpu = 2.9/5.65/22
webnn-npu = 0.6/0.8/4.8
FPScreate a beautiful black and red box and whisker plot of the following data
Backend
Max FPS
p25 FPS
Average FPS
p75 FPS
Min FPS
CPU (WASM)
19.2
19.0
18.9
17.8
11.8
WebGPU
344.8
272.1
177.0
149.0
45.5
WebNN-NPU
1666.7
1495.1
1250.0
1120.3
208.3
-->

---
layout: default
label: THE FUTURE
title: Limitations
---

- Models are BIG
  - “Tiny” FastVLM is a ~300MB download
- Accuracy leaves a lot to be desired
  - Not close to frontier models (GPT-5, Gemini, Claude)
- Choose the appropriate performance-privacy-cost tradeoff for you!

<!--
Models are big. Even our "small" FastVLM is about 300MB to download. That's stored in browser cache, but the initial load time is significant.
And while these models are getting better rapidly, they're still not as accurate as frontier models like GPT-5 or Claude 4.
But that's the trade-off. You choose privacy and zero server costs versus slightly lower accuracy.
For many use cases, this trade-off is absolutely worth it. On top of this, there are even steps to start shipping LLMs as part of browsers themselves so you don’t even have to worry about that first case!
So what are our takeaways here? Well I have 3 spicy hot take predictions for you. Number 1…
-->

---
layout: beat
number: '#1'
label: THE FUTURE
image: ./images/ai-coming-to-every-web-app.avif
---

# AI IS COMING TO EVERY WEB APPLICATION

<!--
…AI is coming to every web app. Not as an expensive add-on, but as a core capability. LLMs unlocked “common sense” about the world as a fundamental programming primitive and it will become dead simple to integrate.
Prediction #2…
-->

---
layout: beat
number: '#2'
label: THE FUTURE
image: ./images/privacy-preserving-ai.avif
---

# PRIVACY PRESERVING AI

<!--
…these uses of AI will be private by default. When everything happens locally, there’s no opportunity for data hoarding, and we might finally see more general awareness of these issues by the general public.
Prediction #3…
-->

---
layout: beat
number: '#3'
label: THE FUTURE
image: ./images/actual-democratization.avif
---

# ACTUAL DEMOCRATIZATION

<!--
…with no server costs for inference we’ll see an actual democratization of access to powerful AI capabilities, not just those with massive VC capital to burn in a house of cards in bad unit economics.
Prediction #4…
-->

---
layout: end
---

# Thank You.

- <NetflixIcon name="at" /> patrickhulce
- <NetflixIcon name="mail" /> patrick.hulce@gmail.com
- <NetflixIcon name="link" /> /in/patrickhulce

::media::

<div class="flex flex-col items-end gap-4">
  <div class="flex items-center gap-3">
    <img src="./images/threads.avif" alt="Threads" style="height: 2.2rem;" />
    <img src="./images/linkedin.avif" alt="LinkedIn" style="height: 2.2rem;" />
  </div>
  <img src="./images/qr-code.avif" alt="QR code" style="width: 12rem; height: 12rem;" />
</div>

<!--
...you go build something awesome!
I hope this gave you a bit of inspiration and the confidence to try some of this out yourself.
The tools are more accessible than ever!
Remember, we're hiring at Netflix for exactly this kind of work. If you build something cool with WebGPU and AI, I want to see it.
Find me after the talk, or hit me up on LinkedIn. I'd love to chat about what you're building.
Happy to take any questions you might have just outside the doors
-->
