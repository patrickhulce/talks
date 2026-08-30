---
theme: ../../../themes/slidev-theme-nflx
title: Deploy Your Own VideoGen Model
command: VIDEOGEN
info: Commit Your Code · September 2026
layout: cover
event: Commit Your Code
date: September 2026
speaker: Patrick Hulce
email: patrick.hulce@gmail.com
link: talks.patrickhulce.com/cyc2026
label: AGENDA
sections:
  - AGENDA
  - DIFFUSION BASICS
  - CUSTOMIZATION
  - WALKTHROUGH
---

<HudTitle title="Deploy Your Own" accent="VideoGen Model" />

::media::

<img src="./images/qr-code-for-bit-ly-genai-4.avif" alt="QR code for bit.ly/genai-4-media" />

<!--
Alright everyone settled in? Thanks for coming to Commit Your Code and welcome to Dallas for those of you who are visiting us! My name is Patrick, and I’m an ML architect at a big red streaming company you may know that rhymes with Shmetflix, creating tools for Studio Production.
But I’m not here for them, I'm here for me, and today my grand goal is to introduce you to the basic concepts behind image and video generation in this era of GenAI. Then once you've obtained this understanding, I'll try to give you the *confidence* to go out and train, and deploy, your very own video generation model, all in a tight 25 minutes, crazy, right? Maybe. Time will tell.
We _are_ going to cover a LOT today though, so we’ll be speeding right along, if you get lost, follow along the slides at this QR code.
To kick things off, and to explain *why* I’m so excited about this topic, let me tell you a quick story.
TWENTY years ago, I produced a series of epic films about various aspects of world historya and a high school-level mastery of the German language, starring...
-->

---
layout: default
label: AGENDA
---

<h1 style="font-size: 4.4rem; margin-bottom: 0.8rem;">Our Inspiration</h1>

<div class="grid grid-cols-2 gap-3 w-full" style="flex: 1; min-height: 0; grid-template-rows: 1fr 1fr;">
  <MediaTile src="./images/high-school-still-1.avif" tone="dim" style="width: 100%; height: 100%; max-width: none; aspect-ratio: unset; min-height: 0; min-width: 0;" />
  <MediaTile src="./images/high-school-still-2.avif" tone="dark" style="width: 100%; height: 100%; max-width: none; aspect-ratio: unset; min-height: 0; min-width: 0;" />
  <MediaTile src="./images/high-school-still-3.avif" tone="deep" style="width: 100%; height: 100%; max-width: none; aspect-ratio: unset; min-height: 0; min-width: 0;" />
  <MediaTile src="./images/high-school-still-4.avif" tone="accent" style="width: 100%; height: 100%; max-width: none; aspect-ratio: unset; min-height: 0; min-width: 0;" />
</div>

<!--
...yours truly as a high school student.
They were my introduction to video production and VFX, opened doors to my first major entrepreneurial adventures, and the main reason working in Hollywood has been a dream come true.
But, there's a problem here, these beautiful masterpieces have some pretty glarring omissions and shoddy visual quality that I'd love to reshoot, and I'm not in my teens anymore. In fact I'm so old now that these were recorded on video cameras with physical _tapes_. How are we going to help deliver the extra shots we need?

So that’s what we’re solve today, we're going to be training a video generation model to replicate this beautiful 2000s era footage of a Patrick in high school.

Let's dive into the agenda...
-->

---
layout: agenda
label: AGENDA
title: Mission
accent: SCHEDULE
kicker: CYC PROTOCOL // INITIALIZED
---

::media::

<img src="./images/agenda-notebook.avif" alt="Agenda notebook" />

::default::

1. Diffusion Basics
   <small>History</small>
   <small>Mechanics</small>
   <small>Models</small>
2. Model Customization
   <small>ML 101</small>
   <small>LoRAs</small>
3. Practical Walkthrough
   <small>Training a custom model</small>
   <small>Deploying that custom model</small>
   <small>Live demo</small>

<!--
So, first, we’ll take a quick sprint through the history and mechanics of modern image and video generation models, and some of the common options out there.
Then, we’ll get to the fun part: customization.
How do you take a generic model and make it your own with data?
And finally, the practical part.
We'll talk about how to get the GPUs you need to train and deploy these models live for anyone to use.
How awesome is that!?
Sound good? Excellent. Let's dive in.
-->

---
layout: section
label: DIFFUSION BASICS
---

<HudTitle kicker="CHAPTER 01 // ORIGINS" title="Diffusion" accent="Basics" />

What are we talking about?

<!--
Image and video generation models didn't just appear out of nowhere.
We've actually been seeing quite a bit of steady progress for quite some time.
It started with things like...
-->

---
layout: timeline
label: DIFFUSION BASICS
kicker: DEPLOYMENT SEQUENCE
---

<HudTitle title="Generation" accent="Models" />

<NetflixTimeline variant="axis" :items="[
  { year: '2014', label: 'GANs', body: 'High-quality but narrow scope. thispersondoesnotexist.com', src: './images/gan-face-quality-2014-2017.avif', tone: 'dark' },
  { year: '2020', label: 'DDPM', body: 'The start of something big — still slow and low-res.', tone: 'deep' },
  { year: '2021', label: 'Latent Diffusion', body: 'Speed and resolution solved by diffusing in latent space.', src: './images/astronaut-riding-a-horse.avif', tone: 'accent' },
  { year: '2022', label: 'SD 1.5 (OSS)', body: 'Latent diffusion goes open-source. The ecosystem explodes.', src: './images/dall-e-2-astronaut-riding-a-horse.avif', tone: 'deep' },
  { year: '2023', label: 'SD2 / SDXL', body: 'Faster and higher-resolution variants mature the stack.', src: './images/astronaut-riding-a-horse-on-the-moon.avif', tone: 'dark' },
  { year: '2024', label: 'OpenAI Sora', body: 'Realistic video appears to be within reach for the first time.', src: './images/sora-mammoth.avif', tone: 'accent' },
  { year: '2025', label: 'Wan', body: 'Open-source video models arrive — Wan, Hunyuan, and friends.', src: './images/wan-logo.avif', tone: 'deep' },
  { year: '2026', label: 'Video Is Viable', body: 'Many high-quality open-source video models up to 4K resolution.', tone: 'accent' },
]" />

<!--
...GANs or Generative Adversarial Networks all the way back in 2014.
I start here because this is the first time, most people, I think, were like "oh, this is actually a real thing. I can actually generate a photorealistic image out of thin air"
They were super cool and realistic looking, but very limited in what they could produce. If you ever saw, “thispersondoesnotexist.com”, it could give you a face of a person but that’s it, no body, no text prompts, just the face.
Even so, GANs were the king around town for quite a while.
But, around 2020, we got a new type of image called called a diffusion model, which is what we'll be covering today.
And this was the start of something big. Nothing really happened immediately, everyone was still distracted by COVID and the crypto psychosis.
But over the next couple years we got a series of improvements to diffusion in the open source community that really caused feasibility to explode, including the ability to generate not just realistic images, but video too.
-->

---
layout: default
label: DIFFUSION BASICS
title: Progress
accent: Timeline
kicker: WILL SMITH // EATING SPAGHETTI
---

<div class="grid grid-cols-2 gap-3 w-full" style="flex: 1; min-height: 0; grid-template-rows: 1fr 1fr;">
  <HudCard title="2023" kicker="EARLY ATTEMPTS" accent="bottom">
    <HudFrame fit="contain"><img src="./videos/will-smith-2023.avif" alt="Will Smith eating spaghetti, 2023 generation" /></HudFrame>
  </HudCard>
  <HudCard title="2024" kicker="SOME PROGRESS" accent="bottom">
    <HudFrame fit="contain"><img src="./videos/will-smith-2024.avif" alt="Will Smith eating spaghetti, 2024 generation" /></HudFrame>
  </HudCard>
  <HudCard title="2025" kicker="ALMOST REAL" accent="bottom">
    <HudFrame fit="contain"><img src="./videos/will-smith-2025.avif" alt="Will Smith eating spaghetti, 2025 generation" /></HudFrame>
  </HudCard>
  <HudCard title="2026" kicker="ALMOST CINEMATIC" accent="bottom">
    <HudFrame fit="contain"><img src="./videos/will-smith-2026.avif" alt="Will Smith eating spaghetti, 2026 generation" /></HudFrame>
  </HudCard>
</div>

<!--
If you've ever seen this amusing montage of "Will Smith eating spaghetti" you can see how far we've come in just a few short years.
But enough about where we've been, let's talk about how the task of generating an image or video actually works, and to do that we're going to start with a slightly different task...
-->

---
layout: default
label: DIFFUSION BASICS
title: Diffusion
accent: Process
kicker: IMAGE RESTORATION // ANALOGY
---

<div class="flex items-center justify-center gap-4 w-full" style="flex: 1; min-height: 0;">
  <HudFrame caption="DAMAGED"><img src="./images/damaged-photograph.avif" alt="Damaged photograph" /></HudFrame>
  <span class="hud-op">−</span>
  <HudFrame caption="NOISE"><img src="./images/isolated-scratches-and-stains.avif" alt="Isolated scratches and stains" /></HudFrame>
  <span class="hud-op">=</span>
  <HudFrame caption="RESTORED"><img src="./images/restored-original-photograph.avif" alt="Restored original photograph" /></HudFrame>
</div>

<!--
...image restoration. Imagine you’ve found an incredibly old, grainy, damaged photograph.
Like, here this hand is missing with a torn piece, a giant stain over the face.
And our task is going to be to restore it.
Imagine we had a magic wand that could isolate _just_ the scratches and stains from this picture.
If we could identify just the parts that aren’t supposed to be there, we could subtract them from this image, and viola, get back our pristine original.
And this is actually _exactly_ what diffusion models are doing at their core.
Step-by-step, a diffusion model tries to *recover* the “original” image from an obscured, noisy version of it.
Let's take a look at a concrete example.
-->

---
layout: default
label: DIFFUSION BASICS
title: Diffusion
accent: MNIST
kicker: NOISE REMOVAL // LOOP
---

<div class="mnist-split">
  <HudFrame fit="contain" target="MNIST  //  NOISY INPUT VS PREDICTION">
    <img src="./images/mnist-diffusion-noisy-input-vs-model-prediction.avif" alt="MNIST diffusion: noisy input vs model prediction" />
  </HudFrame>
  <div class="hud-loop">
    <div class="hud-loop-block">
      <span>Pure randomness</span>
      <NetflixArrow direction="down" />
    </div>
    <div class="hud-loop-block hud-loop-cycle">
      <span class="hud-loop-return" aria-hidden="true" />
      <span>Predict the noise</span>
      <NetflixArrow direction="down" />
      <span>Remove some of it</span>
      <NetflixArrow direction="down" />
      <span>Repeat</span>
    </div>
  </div>
</div>

<!--
Here’s a super simplified look at a diffusion model built on a classic dataset in computer vision called the MNIST dataset which consists of just handwritten digits.
So we’re going to try to teach a model to generate a picture of a handwritten number.
At the top, you start with the ultimate obscured image, pure nonsense, just random noise.
We feed that random data, along with the text prompt (in this case, a single digit), into our diffusion model.
And now the model is going to try to predict the noise in the image. It's everything that's NOT the digit we want.
We then subtract a fraction of that predicted noise, and we get an ever so slightly less noisy image that's nudged a bit closer to our target digit.
Rinse and repeat, maybe 20, 50, even 100 times. Each step, the image gets a little clearer, a little more defined, at each step getting nudged a little closer to our goal, until voila!
We get out digit.
If you think back to our photo analogy, what we did basically started halfway through this process.
We saw what it looked like already, but it was very noisy and damaged.
All we're doing here is taking that to the extreme, and starting with a completely random image, so we're 100% imagining the image from the description alone.
Our goal for the rest of today is going to be adjusting how we *influence* this noise removal process to end up with the *specific* output we want.
-->

---
layout: section
label: CUSTOMIZATION
---

<HudTitle kicker="CHAPTER 02 // INFLUENCE" title="Model" accent="Customization" />

How do we hack the diffusion process?

<!--
So, how do we exert that influence? How do we teach these models our concepts?
-->

---
layout: default
label: CUSTOMIZATION
title: ML
accent: 101
kicker: CUSTOMIZATION // BRIEFING
---

<div class="briefing-grid">
  <HudCard variant="content" title="Model" accent="bottom" style="height: 16rem">
    <p v-click="1">A description of how to process data to derive some useful output.</p>
    <div class="briefing-sub-slot">
      <p v-click="4" class="briefing-sub">procedure + parameters</p>
    </div>
  </HudCard>
  <HudCard variant="content" title="Training" accent="bottom" style="height: 16rem">
    <p v-click="2">The process of deriving a model’s parameters using its procedure and a large set of observations.</p>
    <div class="briefing-sub-slot">
      <p v-click="5" class="briefing-sub">compute the parameters</p>
    </div>
  </HudCard>
  <HudCard variant="content" title="Inference" accent="bottom" style="height: 16rem">
    <p v-click="3">The process of deriving useful output using a model and input data.</p>
    <div class="briefing-sub-slot">
      <p v-click="6" class="briefing-sub">apply the procedure</p>
    </div>
  </HudCard>
</div>

<p class="briefing-link">bit.ly/intro-2-cv-video</p>

<!--
Before we dive into the specific method, I need to do a super-fast Machine Learning 101 recap. Quick show of hands, how many people here would be comfortable defining the terms, “model”, “training”, and “inference” for everyone?
__WAIT_FOR_AUDIENCE_RESPONSE__
Alright, don’t panic, we're about to speed through the basics.If you want to know more though, I actually gave a whole talk on these fundamentals here last year, so hit up that bitly link for more.
Alright, for now though, the first term you need to know is **model**.
I’ve used it a few times already.
A model is just a description of how to deterministically process some data to get some useful output.
It's a series of steps, an algorithm, a recipe...a humble function, that takes some input and spits out some output.
As part of this series of steps, you use a lot of different numbers to manipulate the input to get the output.
And these are your _parameters_, also known as _weights_.
So we have a model, which is just a procedure for turning inputs into outputs, and a set of parameters that we can tune to change the behavior of that procedure.
OK, so if we have all these billions of parameters, how do we actually figure out what they are?
Do we hire a team of PhDs to calculate, "well I think parameter 510537237 is 0.123456789"?
No, we do what any self-respecting engineer would do.
We automate it with data. And that's what we call **training**.
Training is the process of figuring out a model’s parameters using a description of the procedure and a buttload of data.
Training is when you ask the computer to figure out the best weights or set of parameters for your model that match your data.
And last but certainly not least, we have _inference_.
Inference is the process of getting some useful output using a model and input data that you haven't seen before.
Inference is when you take your trained model, with its perfectly tuned weights, and give it a *new* input and it predicts the appropriate output.
If all of that still sounded like gibberish, go take a look at that bitly link later. For now, just hang on to "a model has weights, training finds the weights, inference uses the weights to make new stuff". Got it? Close enough!
OK, so what does this mean for diffusion…
-->

---
layout: default
label: CUSTOMIZATION
title: ML 101
accent: text2img
kicker: CUSTOMIZATION // DIFFUSION
---

<ConceptFlow
  :examples="[
    { label: 'A CAT', src: './images/a-cat.avif', alt: 'A cat' },
    { label: 'A DOG', src: './images/a-dog.avif', alt: 'A dog' },
  ]"
  trainingCaption="THE BILLIONS OF PARAMETERS"
  inferencePrompt="A DOG AND A CAT"
  :inferenceImages="[
    { src: './images/cat-dog.avif', alt: 'A dog and a cat' },
  ]"
/>

<!--
…well in diffusion, our model is going to be taking some text prompt as input and generating an image, using billions of parameters.
We get that model through training, which is going to be giving a large set of images with a text description to a computer and asking it for the best parameters for our model.
And finally inference will be giving our model a new text description, expecting a new image in return.
Now thankfully for us, someone else has gone through all the effort to find billions of parameters that work really well with most words you can imagine, we just want to tweak it a bit for a specific person, pet, or concept.
So, we’re just going to pick right up where they left off and keep training on _our_ data with something called…
-->

---
layout: default
label: CUSTOMIZATION
title: LoRA
accent: Training
kicker: LOW-RANK ADAPTATION // A TARGETED TWEAK
---

<HudTitle kicker="LOW-RANK ADAPTATION // A TARGETED TWEAK" title="LoRA" accent="Training" :stacked="false" style="margin-bottom: 0.9rem;" />

<div class="lora-explainer">
  <div class="lora-shots">
    <Callout label="NICE EYES" overlay="top">
      <img src="./images/nice-eyes.avif" alt="Nice eyes" />
    </Callout>
    <Callout label="TAYLOR SWIFT" overlay="top">
      <img src="./images/taylor-swift.avif" alt="Taylor Swift" />
    </Callout>
    <Callout label="STRONG FLASH" overlay="bottom">
      <img src="./images/strong-flash.avif" alt="Strong flash" />
    </Callout>
    <Callout label="MASTER CHIEF" overlay="bottom">
      <img src="./images/master-chief.avif" alt="Master Chief" />
    </Callout>
  </div>
  <div class="hud-qa">
    <div>
      <p class="hud-qa-q">What is it?</p>
      <p class="hud-qa-a">Retrain <em>part</em> of the model with your data.</p>
    </div>
    <div>
      <p class="hud-qa-q">Requires?</p>
      <p class="hud-qa-a">A strong GPU (5090)<br>10s-100s of well-captioned videos</p>
    </div>
    <div>
      <p class="hud-qa-q">Good for?</p>
      <p class="hud-qa-a">Add a single style, character, or concept.</p>
    </div>
    <div>
      <p class="hud-qa-q">Bad for?</p>
      <p class="hud-qa-a">Massive changes.</p>
    </div>
    <div>
      <p class="hud-qa-q">How?</p>
      <p class="hud-qa-a">python libraries (diffusers, kohya_ss)</p>
    </div>
  </div>
</div>

<style>
  .lora-shots img[alt="Taylor Swift"] {
    object-position: center top;
  }
</style>


<!--
…a **LoRA**, or Low-Rank Adaptation. This is clever. Instead of retraining everything, we freeze most of the original pre-trained model. Then, you train a *much smaller* set of its weights to tweak its output just a bit, usually to introduce a single concept or character.
So if you wanted to get really good images of Master Chief from Halo, you don’t need to mess with the model’s knowledge of everything else like cats and dogs, and books, and ancient egyptian pharohs. We just need to tweak it’s knowledge of sci-fi, human soldiers a bit.
So LoRAs are fantastic when you want to make smaller, more targeted changes. Teach the model a specific art style, a particular character, or a unique object.
Best of all, you only need 10 to 100 well-captioned data points, depending on your specificity, and can take minutes to train rather than days.
There are a couple python libraries that help you do this and in practice it looks something like this…
-->

---
layout: default
label: CUSTOMIZATION
title: LoRA Process
accent: Pets
kicker: CUSTOMIZATION // TRIGGER WORD
---

<ConceptFlow
  :examples="[
    { label: 'ZXFL DOG', src: './images/zxfl-dog-in-a-bed.avif', alt: 'ZXFL dog in a bed' },
    { label: 'ZXFL DOG', src: './images/zxfl-dog-portrait.avif', alt: 'ZXFL dog portrait' },
  ]"
  trainingCaption="JUST A FEW MILLION PARAMETERS"
  inferencePrompt="A CAT WITH ZXFL DOG"
  :inferenceImages="[
    { src: './images/cat-zxfl-dog.avif', alt: 'A cat with ZXFL dog' },
  ]"
/>

<!--
…we gather some examples of the concept we want to train, in this case a pet, and we pick a random word that will become our trigger word.
It’s important here that it’s something the model has no pre-existing ideas about, so I choose ZXFL here.
You’ll also notice the caption is including dog, or the class, of our concept. This way we can piggyback on everything the model already knows about dogs, to get ZXFL to focus on just the fact that it’s _your specific dog_ we’re talking about.
Then training is going to be training just a few million parameters instead of multi-billion of the full model.
And finally at inference time we’ll be able to use our trigger word to inject our concept into the image.
Everyone excited to do this for real? Let’s make it happ’n cap’n.
-->

---
layout: section
label: WALKTHROUGH
---

<HudTitle kicker="CHAPTER 03 // LIVE FIRE" title="Practical" accent="Walkthrough" />

How do we do all this in practice?

<!--
So how do we actually build this out? How do we train and deploy our LoRA?
Well there are a lot of ways we could go about doing this, but I've got a special treat for y'all….
-->

---
layout: default
label: WALKTHROUGH
title: Modal
accent: GPUs
kicker: WALKTHROUGH // INFRA
---

<HudFrame fit="cover" panel>
  <img src="./images/modal-serverless-cloud.avif" alt="Modal — Serverless cloud infrastructure for AI, ML, and data applications" />
  <template #overlay>
    <HudCard title="Serverless GPUs" kicker="MODAL" accent="left">
      <ul>
        <li>Per-second GPU billing.</li>
        <li>Hard billing limits.</li>
        <li>H100s and B200s on-demand.</li>
        <li>Generous free tier.</li>
      </ul>
    </HudCard>
  </template>
</HudFrame>

<!--
...enter **Modal**! Funny story -- a year and a half ago I gave a similar talk on image models and joked that Modal was #not-a-sponsor, I just happened to love them and invited them to slide into my DMs. Well a bit ago, you'll never guess who loved what I had to say and slide into my DMs!? So everyone here is getting some great Modal swag and $XXX in free GPU credits.

Anyway, Modal is awesome because they make getting started with this type of tricky AI training easy peasy.
They're a cloud provider that specializes in making python deployments with GPU access a breeze.
So an alternative to AWS, GCP, Azure, etc.
You can deploy backend jobs, web apps, all that good stuff, and you always get access to powerful GPUs.
Key things I love: **per-second GPU billing** – you only pay for what you really, really use, down to the second, no idle times.
Even better, HARD BILLING CAPS, no more forgotten instances (or *cough* cough too many CYC demo users) racking up huge surprise bills.
They give you access to powerful GPUs all the way up to B200s, have tons of great, working examples to get you started, and the biggest kicker, a generous free tier,
I know, easy to play fast and loose with my cash when I already knew it'd free, but hey it's even better news for you.
So, hopefully you're sold already, let's get to trying it out...
-->

---
layout: code
label: WALKTHROUGH
title: Setup
accent: Modal
kicker: WALKTHROUGH // TERMINAL
---


<WindowChrome title="setup">

```bash
$ pip install modal
$ modal setup
```

</WindowChrome>

<!--
...getting started is super straightforward.
You `pip install modal` if you already have python on your system.
You run `modal setup` and follow the prompts to link your account.
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our
accent: Environment
kicker: WALKTHROUGH // IMAGE
---

<div class="code-with-rail">
<WindowChrome title="ltx2_modal.py">

```python
import modal

image = (
  modal.Image.debian_slim(python_version="3.12")
    .apt_install("git", "ffmpeg", ...)
    .pip_install("uv", "huggingface_hub[cli]")
    .run_commands(
      "git clone https://github.com/Lightricks/LTX-2.git ...",
      "cd ... && uv sync",
    )
)

app = modal.App("patrick-ltx", image=image)
models_vol = modal.Volume.from_name("patrick-ltx-models", ...)
data_vol = modal.Volume.from_name("patrick-ltx-data", ...)
runs_vol = modal.Volume.from_name("patrick-ltx-runs", ...)
```

</WindowChrome>
<div class="hud-rail">
  <p>Our container</p>
  <p>Our dependencies</p>
  <p>Our storage</p>
</div>
</div>

<!--
...then we'll set up the basics of our environment.
This is everything that Modal needs to know about in order to run our code.
Up here we're building our container with a debian image, installing system deps like ffmpeg and git, before pulling in the repository of the open source model we'll be basing everything off of today, which is LTX-2, a high quality video generation model with great performance characteristics which will let us stretch our GPU budget really far. And last but not least we let `uv` install its python stack.

Next we're creating our modal app — that's just how Modal organizes our deployments — and three persistent storage volumes: one for base model weights so we don't redownload _every single time_ we run our training job, one for our training dataset of captioned videos, and one for run outputs and LoRA checkpoints.

All of this is to help make sure that our container has everything it needs to run our code before we even ask for a GPU, so we don't pay a huge setup cost you'd get with bare metal instances on other cloud providrs.

Once we've got our environment set up, we're ready to move on to the actual...
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our
accent: Training
kicker: WALKTHROUGH // LORA
---

<div class="code-with-rail">
<WindowChrome title="ltx2_modal.py">

```python
@app.local_entrypoint()
def run(run_name="v1", steps=2000, rank=32, ...):
  config = _patch_config(
    _load_config(),  # ← ltx2_lora.yml on disk
    run_name=run_name, steps=steps, rank=rank,
  )
  download_models.remote()           # HF → /models
  preprocess.remote()                # clips → latents on /data
  train_lora.remote(run_name, yaml.safe_dump(config))

@app.function(
  gpu="B200", timeout=24 * 60 * 60,
  volumes={"/models": models_vol, "/data": data_vol, "/runs": runs_vol},
)
def train_lora(run_name: str, config_yaml: str) -> str:
  config = Path(f"/runs/{run_name}/config.yaml")
  config.write_text(config_yaml)
  _run_in_ltx(["scripts/train.py", str(config)], cwd=TRAINER_DIR)
  runs_vol.commit()
```

</WindowChrome>
<div class="hud-rail">
  <p>Load + patch YAML</p>
  <p>Download base model</p>
  <p>Precompute latents</p>
  <p>Train LoRA on B200</p>
</div>
</div>

<!--
...training code.

Modal is doing some really smart things here behind the scenes. You'll notice that we have some of our python code annotated with `@app.local_entrypoint()` and others with `@app.function()`. Basically Modal is intelligently deciding when to run our code locally on your laptop and when to run it on a remote GPU, so that you only pay for GPU compute you absolutely need.


So locally, our run function is orchestrating the entire training process by farming out to a few different remote functions.
At first we are loading up the open source training config and patching in a few knobs to point to our own data on the volumes we set up earlier.
Then we need to make sure we've downloaded the big base model weights onto the storage volume that we'll be creating our LoRA off of.
Then we do a bit of preprocessing to prepare our training dataset to be ready for training. 
And finally we actually kick off the training process on a massively beefy B200 GPU. 
That's actually a bit of overkill for this particular task B200s have almost 200GB of VRAM while LTX-2 only needs about 80, but if you've been around AI for a while, you will appreciate how awesome it is that we can just immediately get that a B200 with per-second billing, at the drop of a hat. In fact while training my own I accidentally kicked off a job that farmed out to 96 B200s at once which on AWS is a terrifying idea. But thanks to per-second billing and low startup time it only cost me like $5.

Anyhoo, once the training job comes back, we commit our LoRA checkpoint to the storage volume so that we can use it in our deployment.
And that's really it for the training. In fact...
-->


---
layout: statement
label: WALKTHROUGH
kicker: WALKTHROUGH // EXECUTE
---

# RUN IT

```bash
$ modal run ltx2_modal.py::run
```

<style>
pre {
  font-size: 2rem !important;
  padding: 1.5rem !important;
}
</style>

<!--
...we're ready to run it!
If you run this command, Modal will spin up a container with our deps and a B200, download the base model if needed, preprocess our clips, run training, and save the LoRA to that runs volume we defined earlier.
It takes a bit, and once it's done we have our model!
But... a model file sitting on a disk isn't sufficient for our deployment promise is it?
We need a way to actually *use* it, to generate videos.
Anyone remember what that's called from ML 101 a few slides ago?
If a _model_ was our procedure and weights, and _training_ was computing the parameters, what was it called when we use the model?
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our
accent: Inference
kicker: WALKTHROUGH // SERVE
---

<div class="code-with-rail">
<WindowChrome title="ltx2_modal.py">

```python
@app.function(
  gpu="B200", timeout=2 * 60 * 60,
  volumes={"/models": models_vol, "/runs": runs_vol},
)
@modal.asgi_app()
def web_app():
  api = FastAPI()

  

  @api.post("/generate")
  async def generate(req: GenerateRequest):
    checkpoint_path = _find_latest_checkpoint(runs_vol)
    lora = Path(checkpoint_path)
    output = Path("/tmp/out.mp4")
    _run_in_ltx([
      "-m", "ltx_pipelines.ti2vid_one_stage",
      "--transformer-path", TRANSFORMER,
      "--text-encoder-path", TEXT_ENCODER,
      "--video-vae-path", VIDEO_VAE, ...
      "--lora", str(lora), str(req.strength),
      "--prompt", req.prompt,
      "--output-path", str(output),
    ])
    return FileResponse(
      output, media_type="video/mp4", filename="out.mp4"
    )

  return api
```

</WindowChrome>
<div class="hud-rail">
  <p>Define GPU + Volumes</p>
  <p>Load OUR LoRA</p>
  <p>RUN LTX-2 pipeline</p>
  <p>Stream mp4 bytes</p>
</div>
</div>

<!--
...INFERENCE that's right.
So we're going to attach the same fancy GPU and storage volumes from our training function but this time wrapped with an HTTP handler.
The `/generate` route takes a prompt and how much we want to apply our lora, called strength. 

and then it's going to find our latest LoRA checkpoint that we trained, and use LTX-2's `ti2vid_one_stage` pipeline to generate a video for us.
We write the mp4 to disk, then return a `FileResponse` so the client gets the video bytes
And that's it! We're ready to rock...
-->

---
layout: statement
label: WALKTHROUGH
kicker: WALKTHROUGH // PROMOTE
---

# DEPLOY IT

```bash
$ modal deploy ltx2_modal.py
```

<style>
pre {
  font-size: 2rem !important;
  padding: 1.5rem !important;
}
</style>

<!--
And with that `modal deploy` command, our "VideoGen as a Service" is live on the internet!
Modal gives you a URL, and anyone can POST a prompt with the ZXFL trigger to `/generate`.
How awesome is that? From a few training clips to a deployed web service in minutes.
Let's see how well it does on our high school Patrick data!
-->

---
layout: default
label: WALKTHROUGH
title: The LoRA
accent: Difference
kicker: WALKTHROUGH // BEFORE / AFTER
---

<div class="grid grid-cols-2 gap-4" style="flex: 1; min-height: 0;">
  <HudCard title="Without LoRA" kicker="BASE MODEL" accent="bottom">
    <HudFrame fit="contain">
      <img src="./videos/without-lora.avif" alt="Base model without LoRA" />
    </HudFrame>
  </HudCard>
  <HudCard title="With LoRA" kicker="TRIGGER INJECTED" accent="bottom">
    <HudFrame fit="contain">
      <img src="./videos/with-lora.avif" alt="LoRA-styled generation" />
    </HudFrame>
  </HudCard>
</div>

<p style="margin: 1rem 0; font-family: var(--n-font-mono); font-size: 1.5rem; line-height: 1.35; letter-spacing: 0.02em; color: var(--n-muted); text-align: center;">
  In a tracking medium shot, a <span style="color: var(--n-accent); font-weight: 700;">&lt;ZXFL&gt;</span> caucasian male teenager with light brown hair walks confidently down a city street at night in a black and red hoodie.
</p>

<!--
...it's not bad.
So these two videos have the same prompt shown up here, but the one on the right is using our trigger word and LoRA. 
On the left, it's a person walking, sure, but it's not me, he's a got a little more "Hollywood model" look about him, and it's definitely not that shoddy 2000s camcorder look.
On the right, we inject the trigger word and our trained LoRA. Same prompt, totally different identity. That's high-school Patrick. The LoRA did its job.
This was all from a dataset of only 22 5s clips and less than a hour training of a single B200.  
With more time and more data, we could get even better results. But this is already a pretty good start.
-->

---
layout: demo
label: WALKTHROUGH
link: bit.ly/dsd-lora-app-2025
---

# LIVE DEMO

::media::

<img src="./images/qr-code-for-bit-ly-dsd-lora.avif" alt="QR code for bit.ly/dsd-lora-app-2025" style="width: 12.5rem; height: 12.5rem;" />

<!--
...but don't take my word for it, go try it out for yourself!
The wonderful Modal billing cap feature should mean y'all can go nuts here and I won't go bankrupt, so have at it!
Alright, deep breath, we made it! That was a marathon in 20 minutes. Thank you for your attention!
I always try to learn something myself about the audience before I go, so I'd appreciate indulging me in a few quick questions.
Number one, quick show of hands: how many of you feel like you learned something genuinely new or useful today?
__WAIT_FOR_AUDIENCE_RESPONSE__
Awesome.
How many felt like parts of that were a bit too advanced, like I was just throwing jargon at you?
If you don't really feel comfortable trying this yourself after today, your hand should be up!
Be honest, it really helps me prepare appropriately for future talks!
__WAIT_FOR_AUDIENCE_RESPONSE__
Okay, duly noted.
And for the certified geniuses in the room, how many felt this was way too basic, you already knew all this stuff and could’ve given this talk in your sleep?
__WAIT_FOR_AUDIENCE_RESPONSE__
I respect your honesty!
Finally, if I were to do another one of these talks, what would you be most interested in?
And here are your options...
-->

---
layout: default
label: WALKTHROUGH
title: Next
accent: Briefing
kicker: AUDIENCE  //  VOTE
---

<div class="grid grid-cols-2 gap-4" style="flex: 1; min-height: 0;">
  <HudCard title="A  //  Inference Deep Dive" kicker="ML OPTIMIZATIONS" accent="left">
    <HudFrame caption="DISTILLATION / TENSORRT"><img src="./images/diver-in-a-data-center.avif" alt="Diver in a data center" /></HudFrame>
  </HudCard>
  <HudCard title="B  //  User-Centric Tools" kicker="HOW TO USE GENAI" accent="left">
    <HudFrame caption="COMFY / PIPELINES"><img src="./images/hand-reaching-for-red-building-blocks.avif" alt="Hand reaching for red building blocks" /></HudFrame>
  </HudCard>
  <HudCard title="C  //  Hands-On Web App" kicker="ML WEB APP CODE" accent="left">
    <HudFrame caption="FULL STACK"><img src="./images/editing-a-talk-at-a-computer.avif" alt="Editing a talk at a computer" /></HudFrame>
  </HudCard>
  <HudCard title="D  //  Meta-Talk" kicker="HOW TO GIVE A TALK" accent="left">
    <HudFrame caption="STAGECRAFT"><img src="./images/speaker-on-stage.avif" alt="Speaker on stage" /></HudFrame>
  </HudCard>
</div>

<!--
First option, I could go super deep into advanced ML model inference optimizations, distillation of models, tensorRT optimizations, etc.
Second option, I could go the opposite direction and talk about how to use these tools in a real video generation pipeline, using GUI-based editors like ComfyUI which I mentioned a lot earlier.
Third option, I could go even further here but focus much more hands on with the code and talk about building a full web app around this.
Fourth option, I could go super meta and give a talk about how to give a talk.
You can vote for as many as you want, but only raise your hand if you'd honestly show up.
Alright who'd show up for A, the deep dive?
__WAIT_FOR_AUDIENCE_RESPONSE__
Okay, who'd show up for B, the user perspective?
__WAIT_FOR_AUDIENCE_RESPONSE__
And who'd show up for C, the hands-on?
__WAIT_FOR_AUDIENCE_RESPONSE__
And who'd show up for D, the meta-talk?
__WAIT_FOR_AUDIENCE_RESPONSE__
Awesome, thank you all for your honesty and participation...
-->

---
layout: end
label: WALKTHROUGH
---

# Thank You.

- <NetflixIcon name="at" /> patrickhulce
- <NetflixIcon name="mail" /> patrick.hulce@gmail.com
- <NetflixIcon name="link" /> /in/patrickhulce

::media::

<div class="end-socials">
  <div class="end-socials-icons">
    <img src="./images/threads.avif" alt="Threads" />
    <img src="./images/linkedin.avif" alt="LinkedIn" />
  </div>
  <HudFrame hug fit="contain">
    <img src="./images/scan-me-qr-code.avif" alt="SCAN ME QR code" />
  </HudFrame>
</div>

<!--
...that’s all I’ve got for the planned content.
I hope this gave you a bit of inspiration and the confidence to try some of this out yourself.
The tools are more accessible than ever!
Happy to take any questions you might have.
-->
