---
theme: ../../../themes/slidev-theme-nflx
title: GenAI for Media — Build a SaaS
info: Dallas Software Developers · May 2025
layout: cover
event: Dallas Software Developers
date: May 2025
speaker: Patrick Hulce
email: patrick.hulce@gmail.com
link: bit.ly/genai-4-media
---

# GenAI for Media<br>Build a SaaS

::media::

<img src="./images/qr-code-for-bit-ly-genai-4.avif" alt="QR code for bit.ly/genai-4-media" />

<!--
Alright everyone settled in? Thanks for coming. My name is Patrick, and I’m an ML architect at Netflix.
But I’m not here to talk to you about Netflix, no, today my grand, ambitious goal is to introduce you to a bunch of GenAI concepts in media generation, just enough for you to start googling on your own. Then ALSO give you not just an understanding, but the *confidence* to go out and train, even deploy, your very own image generating model, all in under 20 minutes, crazy, right? Maybe. We'll see.
We _are_ going to cover a LOT today though, so we’ll be speeding right along, if you get lost, follow along the slides at this link below.
To kick things off, and to explain *why* I’m so excited about this, let me tell you a quick story.
A few years ago, I wrote...
-->

---
layout: about
---

# OUR INSPIRATION…

::tiles::

<div class="flex items-start justify-between gap-3 w-full" style="grid-column: 1 / -1;">
  <MediaTile src="./images/the-great-lion-escape.avif" tone="dim" caption="The Great Lion Escape" />
  <MediaTile src="./images/bear-and-lions-winter-forest.avif" tone="dark" />
  <MediaTile src="./images/lion-pride-sunset.avif" tone="dim" />
  <MediaTile src="./images/lion-pride-savanna-storm.avif" tone="deep" />
  <MediaTile src="./images/lions-climbing-snowy-mountain.avif" tone="accent" />
</div>

<!--
...a children's book.
It’s a story about my grandparents and their rather dramatic escape from the Soviets during the Cold War.
Obviously, "escaping Soviets" is a bit heavy for a 3-year-old, so it became a tale of two brave lions escaping "Boris the Bear" and their epic journey across "Iron Mountain."
It’s been a really fun way to bring a piece of my history to life for my kids, but you know what’s better than reading a book?
_Making_ a book.
What if my kids could keep making more pages of their own with the same style and characters? How awesome would that be?
So that’s what we’re going to do, today we're going to be building a...
-->

---
layout: statement
split: ABOUT / THE TALK
---

<p style="font-size: 1.6rem; font-weight: 600; letter-spacing: 0.02em; color: #999; margin: 0 0 0.5rem;">totally what SaaS means…</p>

# Storybook-as-a-Service

<!--
Storybook as a Service.
Because as everyone in the tech world *obviously* knows this is what "SaaS" has always been about. Am I right?
Jokes aside, let's dive into the agenda.
-->

---
layout: agenda
label: AGENDA
title: AGENDA
---

::media::

<img src="./images/agenda-notebook.avif" alt="Agenda notebook" />

::default::

1. ImageGen Basics
   <small>History</small>
   <small>Ecosystem</small>
   <small>Mechanics</small>
2. Model Customization
   <small>ML 101</small>
   <small>LoRAs</small>
3. Practical Walkthrough
   <small>Training a custom model</small>
   <small>Deploying that custom model</small>
   <small>Live demo</small>

<!--
So, first, we’ll take a quick sprint through the history of image generation models, what tools are available, and how they work.
Then, we’ll get to the fun part: customization.
How do you take a generic model and make it your own with a?
And finally, the "SaaS" part.
We'll talk about how to quickly deploy these models live for anyone to use.
How awesome is that!?
Sound good? Excellent. Let's dive in.
-->

---
layout: section
label: IMAGEGEN BASICS
---

# ImageGen<br>Basics

What are we talking about?

<!--
Image generation models haven't just appeared out of nowhere.
We've actually been seeing quite a bit of steady progress for quite some time.
It started with things like...
-->

---
layout: timeline
label: IMAGEGEN BASICS
---

# Image Generation Models Over Time

<NetflixTimeline :items="[
  { year: '2014', label: 'GANs', tone: 'dark' },
  { year: '2020', label: 'DDPM', tone: 'deep' },
  { year: '2021', label: 'Latent Diffusion', tone: 'accent' },
  { year: '2022', label: 'SD 1.5 (OSS)', tone: 'deep' },
  { year: '2023', label: 'SD2 / SDXL', tone: 'dark' },
  { year: '2024', label: 'FLUX', tone: 'accent' },
  { year: '…', label: '…', tone: 'dark' },
  { year: '2025', label: 'GPT-4o', tone: 'deep' },
]" />

<div class="grid grid-cols-4 gap-3" style="margin-top: 1.4rem; font-size: 0.78rem; line-height: 1.25; color: #d5d5d5;">
  <div>
    <strong>2014 — Generative Adversarial Networks (GANs)</strong><br>
    High-quality but narrow scope.<br>
    thispersondoesnotexist.com
  </div>
  <div>
    <strong>2020 — OG Diffusion Paper (DDPM)</strong><br>
    The start of something big, but too slow and low resolution.
  </div>
  <div>
    <strong>2021 — Latent Diffusion</strong><br>
    Speed and resolution are “solved” by diffusing in latent space instead of pixel space.
  </div>
  <div>
    <strong>2022 — Stable Diffusion 1.5 (OSS)</strong><br>
    Latent diffusion goes open-source and the ecosystem explodes.
  </div>
  <div>
    <strong>2023 — SD Variants (SD2, SDXL)</strong><br>
    The ecosystem continues to mature with faster and higher resolution models.
  </div>
  <div>
    <strong>2024 — FLUX</strong><br>
    Original SD team releases a brand new breed of diffusion models.
  </div>
  <div>
    <strong>2025 — Autoregressive Token Models (GPT 4o)</strong><br>
    The limitations of diffusion are shed in multi-modal LLMs.
  </div>
  <div>
    <strong>Diffusion</strong>
  </div>
</div>

<div class="flex items-end justify-center gap-3" style="margin-top: 1.1rem;">
  <img src="./images/gan-face-quality-2014-2017.avif" alt="GAN face quality 2014–2017" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse.avif" alt="Astronaut riding a horse" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse-on-the-moon.avif" alt="Astronaut riding a horse on the moon" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse-in-a-desert.avif" alt="Astronaut riding a horse in a desert" style="height: 4.4rem;" />
  <img src="./images/dall-e-2-astronaut-riding-a-horse.avif" alt="DALL-E 2 astronaut riding a horse" style="height: 4.4rem;" />
</div>

<!--
...GANs or Generative Adversarial Networks all the way back in 2014.
I start here because this is the first time, most people, I think, were like "oh, this is actually a real thing. I can actually generate a photorealistic image"
They were super cool and realistic looking, but very limited in what they could produce. If you ever saw, “thispersondoesnotexist.com”, it could give you a face of a person but that’s it, no body, no text prompts, just the face.
Even so, GANs were the king around town for quite a while.
But, around 2020, we got a new type of image called called a diffusion model.
And this was the start of something big. Nothing really happened immediately, everyone was still distracted by COVID and crypto hype.
But by 2022 with an innovation called "latent diffusion", we had sparked a revolution which unleashed models you might have heard of like DALL-E, Midjourney, and the open-source hero, Stable Diffusion.
And once this went open-source, the community exploded. With whole ecosystems of tools and models and techniques to customize and deploy these models on consumer-grade GPUs.
The last update I’ll touch on is that we’re even approaching the next generation of image models with the recent release of OpenAI's model back in March which isn't diffusion-based at all but token-based instead.
That’s all very exciting too, but we only have 20 minutes, so we're just going to focus on the diffusion models for today.
"But Patrick why aren't we talking about those fancy new models? Diffusion models are so last year!"
Great question! Short answer...
-->

---
layout: chapter
label: IMAGEGEN BASICS
---

::marks::

<MediaTile src="./images/comfyui-logo.avif" size="sm" />
<MediaTile src="./images/civitai-logo.avif" size="sm" />
<MediaTile src="./images/black-forest-labs-logo.avif" size="sm" />
<MediaTile src="./images/wan-logo.avif" size="sm" />

::default::

# ECOSYSTEM

<div class="flex items-center justify-center gap-3" style="margin-top: 1.4rem; max-width: 52rem;">
  <img src="./images/automatic1111-stable-diffusion-web-ui.avif" alt="Automatic1111 Stable Diffusion Web UI" style="height: 5.2rem; object-fit: cover;" />
  <img src="./images/civitai-model-marketplace.avif" alt="Civitai model marketplace" style="height: 5.2rem; object-fit: cover;" />
  <img src="./images/stability-matrix.avif" alt="Stability Matrix" style="height: 5.2rem; object-fit: cover;" />
  <img src="./images/lora-fine-tuning-diagram.avif" alt="LoRA Fine Tuning diagram" style="height: 5.2rem; object-fit: cover;" />
  <img src="./images/controlnet-conditioning-grid.avif" alt="ControlNet conditioning grid" style="height: 5.2rem; object-fit: cover;" />
  <img src="./images/ecosystem-tool-mark.avif" alt="Ecosystem tool mark" style="height: 5.2rem; object-fit: cover;" />
</div>

<!--
...ecosystem.
The ecosystem around diffusion models is far more mature and has a HUGE, vibrant community.
Today you can download dozens of off-the-shelf models, UIs, and customization options that simply don’t exist for anything else yet.
And perhaps most crucially, unlike the monster LLMs that need a small power station and an $80K GPU to run, many diffusion models and these customization techniques can actually run on consumer-grade GPUs you’d find on a gaming rig, or even on your laptop!
But before we dive into how to contribute to this amazing ecosystem or bend these models to our will, we need a basic grasp of how diffusion actually works.
-->

---
layout: image
label: IMAGEGEN BASICS
tone: dark
---

# DIFFUSION PROCESS

::media::

<div class="flex items-center justify-center gap-4 w-full h-full">
  <img src="./images/damaged-photograph.avif" alt="Damaged photograph" style="height: 18rem; object-fit: contain;" />
  <span style="font-size: 6rem; font-weight: 800; line-height: 1;">−</span>
  <img src="./images/isolated-scratches-and-stains.avif" alt="Isolated scratches and stains" style="height: 18rem; object-fit: contain;" />
  <span style="font-size: 6rem; font-weight: 800; line-height: 1;">=</span>
  <img src="./images/restored-original-photograph.avif" alt="Restored original photograph" style="height: 18rem; object-fit: contain;" />
</div>

<!--
...so we're going to start with an analogy: imagine you’ve found an incredibly old, grainy, damaged photograph.
Like, here this hand is missing with a torn piece, a giant stain over the face.
And our task is going to be to restore it.
Imagine we had a magic wand that could isolate _just_ the scratches and stains from this picture.
If we could identify just the parts that aren’t supposed to be there, we could subtract them from this image, and viola, get back our pristine original.
And this is actually _exactly_ what diffusion models are doing.
Step-by-step, a diffusion model tries to *recover* the “original” image from an obscured version of it.
Let's take a look at a concrete example.
-->

---
layout: image
label: IMAGEGEN BASICS
tone: dark
---

# DIFFUSION (MNIST)

::media::

<div class="flex flex-col items-center justify-center gap-4 w-full">
  <img src="./images/mnist-diffusion-noisy-input-vs-model-prediction.avif" alt="MNIST diffusion: noisy input vs model prediction" style="max-height: 16rem; width: auto; object-fit: contain;" />
  <div class="flex items-center justify-center gap-6 w-full" style="font-size: 1.35rem; font-weight: 700;">
    <span>Pure randomness</span>
    <NetflixArrow />
    <span>Predict the noise</span>
    <NetflixArrow />
    <span>Remove some of it</span>
    <NetflixArrow />
    <span>Repeat</span>
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
If you think back to our photo analogy, we basically did started halfway through this process.
We saw what it looked like already, but it was very noisy and damaged.
All we're doing here is taking that to the extreme, and starting with a completely random image, so we're 100% imagining the image from the description alone.
Our goal for the rest of today is going to be adjusting how we *influence* this noise removal process to end up with the *specific* output we want.
-->

---
layout: section
label: CUSTOMIZATION
---

# Customization

How do we hack the diffusion process?

<!--
So, how do we exert that influence? How do we teach these models our concepts?
-->

---
layout: default
label: CUSTOMIZATION
title: ML 101
---

<div class="grid grid-cols-3 gap-6 h-full text-center" style="align-items: start;">
  <div>
    <h2>MODEL</h2>
    <p style="font-size: 1.15rem; line-height: 1.35;">a description of how to deterministically process some data to derive some useful output</p>
    <p style="margin-top: 1.2rem; font-size: 1.35rem; font-weight: 800;">procedure + parameters</p>
  </div>
  <div>
    <h2>TRAINING</h2>
    <p style="font-size: 1.15rem; line-height: 1.35;">the process of deriving a model’s parameters using its procedure and a large set of observations</p>
    <p style="margin-top: 1.2rem; font-size: 1.35rem; font-weight: 800;">compute the parameters</p>
  </div>
  <div>
    <h2>INFERENCE</h2>
    <p style="font-size: 1.15rem; line-height: 1.35;">the process of deriving useful output using a model and input data</p>
    <p style="margin-top: 1.2rem; font-size: 1.35rem; font-weight: 800;">apply the procedure</p>
  </div>
</div>

<p style="text-align: center; font-size: 1.5rem; font-weight: 800; margin-top: 1.4rem;">bit.ly/intro-2-cv-video</p>

<!--
Before we dive into the specific method, I need to do a super-fast Machine Learning 101 recap.Quick show of hands, how many people here would be comfortable defining the terms, “model”, “training”, and “inference” for everyone?
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
title: ML 101 - text2img
---

<div class="grid grid-cols-3 gap-6 h-full text-center" style="align-items: start;">
  <div>
    <h2>MODEL</h2>
    <p style="font-size: 1.2rem; font-weight: 800; margin: 0.6rem 0 0.35rem;">A CAT</p>
    <img src="./images/a-cat.avif" alt="A cat" style="width: 100%; max-height: 8.5rem; object-fit: cover;" />
    <p style="font-size: 1.2rem; font-weight: 800; margin: 0.7rem 0 0.35rem;">A DOG</p>
    <img src="./images/a-dog.avif" alt="A dog" style="width: 100%; max-height: 8.5rem; object-fit: cover;" />
  </div>
  <div>
    <h2>TRAINING</h2>
    <p style="margin-top: 2.2rem; font-size: 1.35rem; font-weight: 800;">THE BILLIONS OF PARAMETERS</p>
    <p style="margin-top: 1.6rem; font-size: 1.6rem; font-weight: 800;">????</p>
  </div>
  <div>
    <h2>INFERENCE</h2>
    <p style="margin-top: 2.2rem; font-size: 1.35rem; font-weight: 800;">A DOG AND A CAT</p>
  </div>
</div>

<!--
…well in diffusion, our model is going to be taking some text prompt as input and generating an image, using billions of parameters.
We get that model through training, which is going to be giving a large set of images with a text description to a computer and asking it for the best parameters for our model.
And finally inference will be giving our model a new text description, expecting a new image in return.
Now thankfully for us, someone else has gone through all the effort to find billions of parameters that work really well with most words you can imagine, we just want to tweak it a bit for a specific person, pet, or concept.
So, we’re just going to pick right up where they left off and keep training on _our_ data with something called…
-->

---
layout: two-cols
label: CUSTOMIZATION
title: LoRA (Low-Rank Adaptation)
---

::left::

- **What is it?** Retrain *part* of the model with your data.
- **Requires?** A strong GPU (4090)<br>10s-100s of well-captioned images
- **Good for?** Add a single style, character, or concept.
- **Bad for?** Massive changes.
- **How?** python libraries (diffusers, kohya_ss)

::right::

<div class="grid grid-cols-2 gap-3">
  <Callout label="NICE EYES">
    <img src="./images/nice-eyes.avif" alt="Nice eyes" />
  </Callout>
  <Callout label="TAYLOR SWIFT">
    <img src="./images/taylor-swift.avif" alt="Taylor Swift" />
  </Callout>
  <Callout label="MASTER CHIEF">
    <img src="./images/master-chief.avif" alt="Master Chief" />
  </Callout>
  <Callout label="STRONG FLASH">
    <img src="./images/strong-flash.avif" alt="Strong flash" />
  </Callout>
</div>

<!--
…a **LoRA**, or Low-Rank Adaptation. This is clever. Instead of retraining everything, we freeze most of the original pre-trained model. Then, you train a *much smaller* set of its weights to tweak its output just a bit, usually to introduce a single concept or character.
So if you wanted to get really good images of Master Chief from Halo, you don’t need to mess with the model’s knowledge of everything else like cats and dogs, and books, and ancient egyptian pharohs. We just need to tweak it’s knowledge of sci-fi, human soldiers a bit.
So LoRAs are fantastic when you want to make smaller, more targeted changes. Teach the model a specific art style (like my children's book!), a particular character, or a unique object.
Best of all, you only need 10 to 100 well-captioned images, and can take only a few minutes to train.
There are a couple python libraries that help you do this and in practice it looks something like this…
-->

---
layout: default
label: CUSTOMIZATION
title: LoRA Process - Pets
---

<div class="grid grid-cols-3 gap-6 h-full text-center" style="align-items: start;">
  <div>
    <h2>MODEL</h2>
    <p style="font-size: 1.1rem; font-weight: 800; margin: 0.5rem 0 0.3rem;">ZXFL DOG</p>
    <img src="./images/zxfl-dog-in-a-bed.avif" alt="ZXFL dog in a bed" style="width: 100%; max-height: 8rem; object-fit: cover;" />
    <p style="font-size: 1.1rem; font-weight: 800; margin: 0.6rem 0 0.3rem;">ZXFL DOG</p>
    <img src="./images/zxfl-dog-portrait.avif" alt="ZXFL dog portrait" style="width: 100%; max-height: 8rem; object-fit: cover;" />
  </div>
  <div>
    <h2>TRAINING</h2>
    <p style="margin-top: 2.2rem; font-size: 1.25rem; font-weight: 800;">JUST A FEW MILLION PARAMETERS</p>
    <p style="margin-top: 1.6rem; font-size: 1.6rem; font-weight: 800;">????</p>
  </div>
  <div>
    <h2>INFERENCE</h2>
    <p style="margin-top: 2.2rem; font-size: 1.25rem; font-weight: 800;">A CAT WITH ZXFL DOG</p>
    <p style="font-size: 1.1rem; font-weight: 800; margin-top: 1.4rem;">ZXFL DOG</p>
    <p style="font-size: 1.1rem; font-weight: 800;">ZXFL DOG</p>
  </div>
</div>

<!--
…we gather some images of the concept we want to train, in this case a pet, and we pick a random word that will become our trigger word.
It’s important here that it’s something the model has no pre-existing ideas about, so I choose ZXFL here.
You’ll also notice the caption is including dog, or the class, of our concept. This way we can piggyback on everything the model already knows about dogs, to get ZXFL to focus on just the fact that it’s _your specific dog_ we’re talking about.
Then training is going to be tweaking just a few million parameters instead of the full multi-billion of the entire model.
And finally at inference time we’ll be able to use our trigger word to inject our concept into the image.
Everyone excited to do this for real? Let’s make it happ’n cap’n.
-->

---
layout: section
label: WALKTHROUGH
---

# Walkthrough

How do we do all this in practice?

<!--
So how do we actually build our "Storybook as a Service,"? How do we train and deploy our LoRA?
Well there are a lot of ways we could go about doing this, but I took the chance to try out a new vendor to make it as easy for you as possible….
-->

---
layout: two-cols
label: WALKTHROUGH
tone: dark
---

::left::

<img src="./images/modal-serverless-cloud.avif" alt="Modal — Serverless cloud infrastructure for AI, ML, and data applications" />

::right::

- Per-second GPU billing.
- Hard billing limits.
- H100s and A100s on-demand.
- Generous free tier.

<!--
...enter **Modal**! Hashtag not-a-sponsor, haha I wish, Modal if you're listening, slide into my DMs please, haha,
but anyway, they made getting started with this type of work easy peasy.
They're a cloud provider that specializes in making python deployments with GPU access a breeze.
So an alternative to AWS, GCP, Azure, etc.
They let you deploy backend jobs, web apps, all that good stuff, and you always get access to powerful GPUs.
Key things I love: **per-second GPU billing** – you only pay for what you really, really use, down to the second, no idle times.
Even better, HARD BILLING CAPS, no more forgotten instances (or *cough* cough too many meetup demo users) racking up huge surprise bills.
They give you access to powerful GPUs all the way up to H100s, have tons of great, working examples to get you started, and the biggest kicker, a generous free tier,
so I didn't even have to whip out any of those $10 I found.
I know, easy to play fast and loose with my cash when I already knew it'd free, but hey it's even better news for you.
So, hopefully you're sold already, let's get to trying it out...
-->

---
layout: default
label: WALKTHROUGH
tone: dark
---

<WindowChrome title="terminal">

```bash
$ pip install modal
$ modal setup
$ curl -L https://hulce.link/modal-lora > lora.py
$ cat > example_urls.txt <<EOF
https://picsum.photos/seed/lions/512/512
https://picsum.photos/seed/tigers/512/512
https://picsum.photos/seed/bears/512/512
https://picsum.photos/seed/oh/512/512
https://picsum.photos/seed/my/512/512
EOF
```

</WindowChrome>

<!--
...getting started is super straightforward.
You `pip install modal` if you already have python on your system.
You run `modal setup` and follow the prompts to link your account.
Then, for this talk, you'd grab the example code I've put together from a GitHub repo at this handy-dandy personalized link.
The last bit here is a simple text file, `example_urls.txt`, with direct URLs to your training images that you're going to be using for your LoRA.
For our storybook, these would be URLs to my beautiful lion illustrations.
That’s pretty much it to get ready for training!
There's a ton in that lora.py file and you'd actually already be ready to go without any changes,
but for our lightning talk, let's walkthrough some of the code at a really high level...
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our Environment
---

<div class="flex items-stretch gap-6">
<div style="flex: 1; min-width: 0;">

<WindowChrome title="lora.py">

```python
import modal

pip_deps = ["accelerate==0.31.0", "torch~=2.2.0", ...]
apt_deps = ["git", "curl", "zip", ...]

image = (
  modal.Image
    .debian_slim(python_version="3.10")
    .pip_install(pip_deps)
    .apt_install(apt_deps)
)

volume = modal.Volume.from_name("lora-result", create_if_missing=True)
```

</WindowChrome>

</div>
<div style="flex: 0 0 13rem; display: flex; flex-direction: column; justify-content: space-around; font-weight: 800; font-size: 1.15rem;">
  <p>Our dependencies</p>
  <p>Our container</p>
  <p>Our persistent storage</p>
</div>
</div>

<!--
...first we set up the basics of our environment.
This is everything that Modal needs to know about in order to run our code.
We define python dependencies with pip, system dependencies with apt, and then we define our debian-based docker image with those.
What Modal is doing here behind the scenes is making sure that our container has everything it needs to run our code before we even ask for a GPU, so you don't pay the huge setup cost you'd get with AMIs and bare metal instances on other cloud providrs.
Fianlly, we set up a `volume`, which is like a persistent network disk.
This is where we'll store our downloaded base models and our eventual trained LoRA, so we don't have to re-download or re-train everything **every** **single** **time**.
Next up...
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our Training
---

<div class="flex items-stretch gap-6">
<div style="flex: 1; min-width: 0;">

<WindowChrome title="lora.py">

```python
import name_of_training_library

app = modal.App(name="example-lora")

@app.function(
  image=image,
  volumes={"/model": volume},
  gpu="A100-80GB",
)
def train(example_urls: string[]):
    name_of_training_library.launch(
      instance_name="zxflStoryBook",
      instance_image_urls=example_urls,
      class_name="illustration",
      base_model="black-forest-labs/FLUX.1-dev",
      model_dir="/model",
    )

    volume.commit()
```

</WindowChrome>

</div>
<div style="flex: 0 0 13rem; display: flex; flex-direction: column; justify-content: space-around; font-weight: 800; font-size: 1.15rem;">
  <p>Our environment</p>
  <p>Our trigger word</p>
  <p>Our training data</p>
</div>
</div>

<!--
...training code.
We create an app, which is just how Modal organizes our deployments.
Then, we're going to attach a function to it.
Here, we use a decorator to tell Modal that this function is going to use the image and volume we set up earlier, plus it'll run on an A100 with 80GB of VRAM.
That's way overkill for us, but if you've been around AI for a while, you will appreciate how awesome it is that we can just immediately get 80GB of VRAM with per-second billing.
Then, inside this function is where the actual LoRA training happens.
Here I've completely blanked out the actual training code because that's not what I want you to take away from this, and we couldn't get through everything there in 20 minutes even if I wanted to.
But feel free to poke around the lora.py file in the repo for more details if you're curious.
What I do want you to understand at least though are these few parameters we pass in.
First, we pass our trigger word, the name we want to associate with our new concept in our LoRA.
Then, we pass in our set of URLs to our training images.
Then, we pass in the fundamental type of thing that our new concept is.
This is actually one of the major innovations here of LoRA in general.
The reason this entire approach can work at all with so few images is that the model _already_ knows a ton of stuff.
If you're training a LoRA for a particular pet cat, you'd pass in "cat" here, and your LoRA would work because the model has already seen a billion cats, so it's going to be able to piggyback on already generally knowing what a cat looks like, and just slightly adjust it's cat output to match your training images.
In our case, the model has already seen a billion different illustrations, we just want a particular type of illustration.
Then, we pass in the base model we're using and where we want to save the results of our training.
Finally, when training has all wrapped up, we commit the changes to our mounted volume, which is how Modal knows to save the results of our training for later use.
And that's really it for the training. In fact...
-->

---
layout: statement
label: WALKTHROUGH
---

# RUN IT

<p style="font-family: var(--slidev-font-mono), ui-monospace, monospace; font-size: 2.4rem; font-weight: 700; color: #e50914;">$ modal run lora.py</p>

<!--
...we're ready to run it!
If you run this command, Modal will spin up a container with our deps and an A100, runs your training code, and saves your LoRA to that volume we defined earlier.
It takes about ~20 minutes, and once it's done we have our model!
But... a model file sitting on a disk isn't sufficient for our "Storybook as a Service," is it?
We need a way to actually *use* it, to generate images.
Anyone remember what that's called from ML 101 a few slides ago?
If a _model_ was our procedure and weights, and _training_ was computing the parameters, what was it called when we use the model?
-->

---
layout: code
label: WALKTHROUGH
title: Setup Our Inference
---

<WindowChrome title="lora.py">

```python
from diffusers import DiffusionPipeline
from fastapi import FastAPI

@app.function(image=image, gpu="A100", volumes={"/model": volume})
def web_app():
  pipeline = DiffusionPipeline.from_pretrained("/model").to("cuda")
  pipeline.load_lora_weights("/model")

  app = FastAPI()

  @app.post("/generate")
  async def generate(image_request: ImageRequest):
    results = pipeline(image_request.prompt)
    return results.images[0]

  return app
```

</WindowChrome>

<!--
For inference, we're going to set up another Modal function, but this time we'll be returning a FastAPI app.
For those of you who aren't as familiar with python, FastAPI is a popular web framework in python, think like express for node if you're familiar with that.
And here we're going to load the base model and our LoRA from the volume using the diffusers library,
and then we're going to define a simple endpoint `/generate` that takes the text prompt from the network request and runs that model we loaded.
And that's it! We're ready to rock...
-->

---
layout: statement
label: WALKTHROUGH
---

# DEPLOY IT

<p style="font-family: var(--slidev-font-mono), ui-monospace, monospace; font-size: 2.4rem; font-weight: 700; color: #e50914;">$ modal deploy lora.py</p>

<!--
And with that `modal deploy` command, our "Storybook as a Service" is live on the internet!
Modal gives you a URL, and anyone can hit it to generate images in your unique style.
How awesome is that? From a few image URLs to a deployed web service in minutes.
Let's see what it can do!
_opens browser to the deployed URL_
We'll run the basics here of the recommended prompt, and we'll get a result here in a minute.
So remember here it's actually running that diffusion process we learned about earlier.
Inference takes a while because we're taking this massive, multi-billion parameter procedure that is predicting the noise to remove from randomness in order to get a picture.
And then it's removing just a little bit of it.
And then running another multi-billion parameter procedure.
And another.
And another.
And another.
Another ~50 times until we finally get a crisp result. So the fact that we can get it in under a minute at all, is pretty incredible.
BOOM! Here we are, and it kinda worked! Phew! To save us a bit of time though, I ran a few more before this talk to compare how we're doing and...
-->

---
layout: default
label: WALKTHROUGH
title: The LoRA Difference
---

<div class="grid grid-cols-3 gap-5 h-full text-center" style="align-items: start;">
  <div>
    <h2>ORIGINAL</h2>
    <img src="./images/original-storybook-bear-illustration.avif" alt="Original storybook bear illustration" style="width: 100%; max-height: 18rem; object-fit: cover;" />
  </div>
  <div>
    <h2>WITHOUT LoRA</h2>
    <img src="./images/base-model-bear-without-lora.avif" alt="Base model bear without LoRA" style="width: 100%; max-height: 18rem; object-fit: cover;" />
  </div>
  <div>
    <h2>WITH LoRA</h2>
    <img src="./images/lora-styled-bear-illustration.avif" alt="LoRA-styled bear illustration" style="width: 100%; max-height: 18rem; object-fit: cover;" />
  </div>
</div>

<!--
...it's not bad.
I trained this LoRA with only 10 random crops of my storybook illustrations, and it's already doing a decent job of capturing the style.
On the left, one of our original training illustrations.
In the middle, what the base model might give you for the prompt "a ferocious brown bear, icy cave, illustration"
It's fine, but not really the style we're going for.
And on the right... this is what we get when we use the *same* base model, the *same* prompt, but we inject our trained LoRA and our trigger word.
Look at that! It’s clearly captured the unique art style of the book.
If I did a more meticulous job of caption writing, and curating crops, we could get even better results.
But this is already a pretty good start.
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
layout: image
label: WALKTHROUGH
tone: dark
---

::media::

<div class="grid grid-cols-2 gap-5 w-full h-full">
  <div class="flex items-center gap-4">
    <span style="font-size: 6.5rem; font-weight: 800; line-height: 0.85;">A</span>
    <div>
      <img src="./images/diver-in-a-data-center.avif" alt="Diver in a data center" style="width: 100%; height: 8.6rem; object-fit: cover;" />
      <p style="margin-top: 0.45rem; font-size: 1.15rem; font-weight: 800; letter-spacing: 0.04em;">ML INFERENCE<br>OPTIMIZATIONS DEEP DIVE</p>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <span style="font-size: 6.5rem; font-weight: 800; line-height: 0.85;">B</span>
    <div>
      <img src="./images/hand-reaching-for-red-building-blocks.avif" alt="Hand reaching for red building blocks" style="width: 100%; height: 8.6rem; object-fit: cover;" />
      <p style="margin-top: 0.45rem; font-size: 1.15rem; font-weight: 800; letter-spacing: 0.04em;">USER-CENTRIC<br>HOW TO USE GENAI TOOLS</p>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <span style="font-size: 6.5rem; font-weight: 800; line-height: 0.85;">C</span>
    <div>
      <img src="./images/editing-a-talk-at-a-computer.avif" alt="Editing a talk at a computer" style="width: 100%; height: 8.6rem; object-fit: cover;" />
      <p style="margin-top: 0.45rem; font-size: 1.15rem; font-weight: 800; letter-spacing: 0.04em;">HANDS-ON<br>ML WEB APP CODE</p>
    </div>
  </div>
  <div class="flex items-center gap-4">
    <span style="font-size: 6.5rem; font-weight: 800; line-height: 0.85;">D</span>
    <div>
      <img src="./images/speaker-on-stage.avif" alt="Speaker on stage" style="width: 100%; height: 8.6rem; object-fit: cover;" />
      <p style="margin-top: 0.45rem; font-size: 1.15rem; font-weight: 800; letter-spacing: 0.04em;">META-TALK<br>HOW TO GIVE A TALK</p>
    </div>
  </div>
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
  <img src="./images/scan-me-qr-code.avif" alt="SCAN ME QR code" style="width: 12rem; height: auto;" />
</div>

<!--
...that’s all I’ve got for the planned content.
I hope this gave you a bit of inspiration and the confidence to try some of this out yourself.
The tools are more accessible than ever!
Happy to take any questions you might have.
-->
