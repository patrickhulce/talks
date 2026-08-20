---
theme: ../../../themes/slidev-theme-nflx
title: Deploy Your Own VideoGen Model
info: Commit Your Code · September 2026
layout: cover
event: Commit Your Code
date: September 2026
speaker: Patrick Hulce
email: patrick.hulce@gmail.com
link: talks.patrickhulce.com/cyc2026
---

# Deploy Your Own VideoGen Model

::media::

<img src="./images/qr-code-for-bit-ly-genai-4.avif" alt="QR code for bit.ly/genai-4-media" />

<!--
Alright everyone settled in? Thanks for coming to Commit Your Code and welcome to Dallas for those of you who are visiting us! My name is Patrick, and I’m an ML architect at a big red streaming company you may know that rhymes with Shmetflix, creating tools for Studio Production.
But I’m not here for them, I'm here for me, and today my grand goal is to introduce you to the basic concepts behind image and video generation in this era of GenAI, just enough for you to start googling on your own. Then ALSO give you not just an understanding, but the *confidence* to go out and train, and deploy, your very own video generation model, all in a tight 25 minutes, crazy, right? Maybe. Time will tell.
We _are_ going to cover a LOT today though, so we’ll be speeding right along, if you get lost, follow along the slides at this link below.
To kick things off, and to explain *why* I’m so excited about this, let me tell you a quick story.
Twenty years ago, I starred in...
-->

---
layout: about
---

# OUR INSPIRATION…

::tiles::

TODO__FILL_THIS_IN_WITH_STILLS_FROM_MY_MOVIES

<!--
...a series of epic films about various aspects of world history, produced by yours truly as a high school student.
They were my introduction to video production and VFX, opened doors to my first major entrepreneurial adventures, and the main reason I've loved working in Hollywood.
But, there's a problem here, these beautiful masterpieces have some pretty glarring omissions that I'd love to reshoot, and I'm not in my teens anymore. In fact I'm so old now that these were recorded on video cameras with physical _tapes_. How are we going to help deliver the extra shots we need?

So that’s what we’re solve today, we're going to be training a video generation model to replicate this beautiful 2000s era footage of a Patrick in high school.

Let's dive into the agenda...
-->

---
layout: agenda
label: AGENDA
title: AGENDA
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

# Diffusion<br>Basics

What are we talking about?

<!--
Image and video generation models didn't just appear out of nowhere.
We've actually been seeing quite a bit of steady progress for quite some time.
It started with things like...
-->

---
layout: timeline
label: DIFFUSION BASICS
---

# Media Generation Models Over Time

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
    <strong>2024 — Sora</strong><br>
    Realistic video appears to be within reach for first time.
  </div>
  <div>
    <strong>2025 — TODO___FIGURE_OUT_VIDEO_MILESTONE</strong><br>
    ...
  </div>
  <div>
    <strong>2026 — Video Is Viable</strong><br>
    Many high-quality open-source video models up to 4K resolution.
  </div>
</div>


TODO__INSERT_WILL_SMITH_SPAGHETTI_EVOLUTION_SEQUENCE

<div class="flex items-end justify-center gap-3" style="margin-top: 1.1rem;">
  <img src="./images/gan-face-quality-2014-2017.avif" alt="GAN face quality 2014–2017" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse.avif" alt="Astronaut riding a horse" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse-on-the-moon.avif" alt="Astronaut riding a horse on the moon" style="height: 4.4rem;" />
  <img src="./images/astronaut-riding-a-horse-in-a-desert.avif" alt="Astronaut riding a horse in a desert" style="height: 4.4rem;" />
  <img src="./images/dall-e-2-astronaut-riding-a-horse.avif" alt="DALL-E 2 astronaut riding a horse" style="height: 4.4rem;" />
</div>

<!--
...GANs or Generative Adversarial Networks all the way back in 2014.
I start here because this is the first time, most people, I think, were like "oh, this is actually a real thing. I can actually generate a photorealistic image out of thin air"
They were super cool and realistic looking, but very limited in what they could produce. If you ever saw, “thispersondoesnotexist.com”, it could give you a face of a person but that’s it, no body, no text prompts, just the face.
Even so, GANs were the king around town for quite a while.
But, around 2020, we got a new type of image called called a diffusion model, which is what we'll be covering today.
And this was the start of something big. Nothing really happened immediately, everyone was still distracted by COVID and the crypto psychosis.
But over the next couple years we got a series of improvements to diffusion in the open source community that really caused feasibility to explode, including the ability to generate not just realistic images, but video too.

If you've ever seen this amusing montage of "Will Smith eating spaghetti" you can see how far we've come in just a few short years. 

But enough about where we've been, let's talk about how the task of generating an image or video actually works, and to do that we're going to start with a slightly different task...
-->


---
layout: image
label: DIFFUSION BASICS
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
layout: image
label: DIFFUSION BASICS
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
If you think back to our photo analogy, what we did basically started halfway through this process.
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
    <p style="font-size: 1.15rem; line-height: 1.35;">a description of how to process data to derive some useful output</p>
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
- **Requires?** A strong GPU (5090)<br>10s-100s of well-captioned videos
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
So LoRAs are fantastic when you want to make smaller, more targeted changes. Teach the model a specific art style, a particular character, or a unique object.
Best of all, you only need 10 to 100 well-captioned data points, depending on your specificity, and can take minutes to train rather than days.
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

# Walkthrough

How do we do all this in practice?

<!--
So how do we actually build this out? How do we train and deploy our LoRA?
Well there are a lot of ways we could go about doing this, but I've got a special treat for y'all….
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
- H100s and B200s on-demand.
- Generous free tier.

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
layout: default
label: WALKTHROUGH
tone: dark
---

<WindowChrome title="terminal">

```bash
$ pip install modal
$ modal setup
EOF
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
title: Setup Our Environment
---

<div class="flex items-stretch gap-6">
<div style="flex: 1; min-width: 0;">

<WindowChrome title="train.py">

```python
import modal

pip_deps = ["accelerate==0.31.0", "torch~=2.2.0", ...]
apt_deps = ["git", "curl", "zip", ...]

image = (
  modal.Image
    .debian_slim(python_version="3.11")
    .pip_install(pip_deps)
    .apt_install(apt_deps)
)

volume = modal.Volume.from_name("mymodels", create_if_missing=True)
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
...then we'll set up the basics of our environment.
This is everything that Modal needs to know about in order to run our code.
We'll define our python dependencies with pip, system dependencies with apt, and then we build our debian-based docker image with those.
What Modal is doing here behind the scenes is making sure that our container has everything it needs to run our code before we even ask for a GPU, so you don't pay the huge setup cost you'd get with bare metal instances on other cloud providrs.
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
Here, we use a decorator to tell Modal that this function is going to use the image and volume we set up earlier, plus it'll run on a B200 with 80GB of VRAM.
That's way overkill for us, but if you've been around AI for a while, you will appreciate how awesome it is that we can just immediately get 80GB of VRAM with per-second billing.
Then, inside this function is where the actual LoRA training happens.
In our case we're going to be fine-tuning an open source model called LTX-2 which comes with a great starter repository for training a LoRA.
But feel free to poke around the lora.py file in the repo for more details if you're curious.

TODO__REPLACE_THIS_STUFF_FOR_ACTUAL_WORK
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
If you run this command, Modal will spin up a container with our deps and a B200, runs your training code, and saves your LoRA to that volume we defined earlier.
It takes about ~20 minutes, and once it's done we have our model!
But... a model file sitting on a disk isn't sufficient for our deployment promise is it?
We need a way to actually *use* it, to generate videos.
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
...INFERENCE that's right
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
