---
theme: ../../../themes/slidev-theme-nflx
title: Intro to CV Applications
info: ReactJS Dallas · May 2024
layout: cover
event: ReactJS Dallas
date: May 2024
speaker: Patrick Hulce
email: patrick.hulce@gmail.com
link: bit.ly/intro-2-cv
---

# Intro to CV<br>Applications

::media::

<MediaTile icon="qr" tone="accent" />

<!--
Hey everyone thanks for coming tonight, I’m Patrick here to share some insight into building computer vision applications on the web.
First up, at little about me, why bother listening to what I have to say, and for that you’ll need to indulge me a personal life story.Well my connection to computer vision started a very, very long time ago, and actually motivated me to start learning to program at all with video games. In particular an old MMORPG called….
-->

---
layout: about
split: ABOUT / PATRICK
---

# IN THE BEGINNING…

::tiles::

<MediaTile src="./images/runescape.avif" tone="dim" caption="RuneScape" />
<MediaTile src="./images/inventory-pixel.avif" tone="dark" caption="inventory pixel" />
<div class="flex flex-col justify-center gap-3" style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 700; font-size: 1.8rem; letter-spacing: 0.02em; padding-top: 5.8rem;">
  <div>#0f0bae</div>
  <div>#1e0dda</div>
</div>

<!--
Runescape.
And in this game runescape, like many RPGs you have skills that you can level up, monsters to slay, loot to acquire, and gold to be earned. Back then there was actually enough interest in the game to have a legitimate real world black market for in-game items. So $1M gold in the game was roughly $8 USD, which with some investment you could earn in about 8 hours, or about $1/hour.
And for a poor kid like I was, this was amazing. Even more amazing if I could figure out how to automate earning this $1/hour, which of course I did. So to earn this money you had to click on items in your inventory and click on items in the world, etc. If everything is predictable, static, or labeled then this is pretty easy, if you’ve ever used UI automation tools you’ll be familiar with the steps. Now the problem was the company that made this game, knew about all of this and really wanted to discourage automation, so they threw randomness into the equation. When you put items into your inventory they randomized the slot that it went to. Then even if you tried to search all of your inventory slots for the matching color of the item, you were STILL out of luck because they randomized the color values in between logins! So the first time you see it it might be 0f0bae and the next time it might be a slightly different blue #1e0dda. So how do you solve this problem? How do I get a computer to be able to play the game the same way as a human was able to? What I needed was computer vision, and that set me on the path that leads us here today.
-->

---
layout: about
split: ABOUT / PATRICK
---

# ABOUT

<div class="flex items-start gap-5" style="margin-bottom: 0.35rem;">
  <img src="./images/patrick-hulce.avif" alt="Patrick Hulce" style="height: 6.4rem; width: 5.2rem; object-fit: cover; flex: none;" />
  <div style="font-size: 1.05rem; line-height: 1.4;">
    <div>ML Architect at Netflix</div>
    <div>Ex-CEO of Optyx (CV startup acquired in 2021)</div>
    <div>Ex-Chrome, Lighthouse core team</div>
    <div>Loves JavaScript, AI, The Office, visual media</div>
  </div>
</div>

::tiles::

<MediaTile src="./images/chrome.avif" tone="dark" caption="Chrome" />
<MediaTile src="./images/lighthouse.avif" tone="dim" caption="Lighthouse" />
<MediaTile src="./images/the-office.avif" tone="deep" caption="The Office" />
<MediaTile src="./images/netflix.avif" tone="accent" caption="Netflix" />

<!--
And whether that story impressed you with my skill or depressed you with my utterly apparent lack of friends in middle school, I’ve acquired quite a few more skills, and friends thankfully, since then.
Some of my proudest accomplishments include creating the Lighthouse tool in Chrome alongside Paul Irish, one of the original jQuery authors if you’re old enough like me to have that mean something.
After Chrome, I went on to found a computer vision startup for professional photographers called Optyx which I saw through acquisition in 2021 and now I’m an ML architect at Netflix getting to blend my passions for visual media and AI for Netflix Studios, which we’ll talk more about in a minute.
This is also where I pause and say that everything we’ll talk about today is just me Patrick, presenting my opinion and not some official Netflix position on things. All the Netflix hype and branding is just because I’m a hardcore koolaid drinker and think what we do is awesome, so please no one go on a twitter rant that “well Netflix told me that blah blah blah.” nuh uh, no ma’am. We coolio? Cool disclaimer done.
-->

---
layout: agenda
label: AGENDA
title: AGENDA
---

::media::

<img src="./images/agenda-notebook.avif" alt="Agenda notebook" />

::default::

1. AI at Netflix
   <small>What do I do?</small>
2. AI + ML Crash Course
   <small>What’s the difference between AI and ML?</small>
   <small>How does machine learning work?</small>
3. CV Crash Course
   <small>What is computer vision?</small>
   <small>How does modern image AI work?</small>
4. Media APIs Crash Course
   <small>What media APIs does the browser offer?</small>
   <small>What libraries can we use to run CV models?</small>
5. Building a Real-Time CV App
   <small>Let’s turn ourselves into the Avatar…</small>

<!--
On that note, here’s a quick overview of what we’ll be covering today.
SEE SLIDE
Cool, let’s dive in.
-->

---
layout: section
label: AI AT NETFLIX
---

# AI at Netflix

What do I do?

<!--
AI at Netflix, aka. what do I do?
-->

---
layout: statement
label: AI AT NETFLIX
---

# ENTERTAIN THE WORLD

<img src="./images/netflix-availability-map.avif" alt="Netflix availability map" style="width: 38rem; max-width: 92%; margin: 1.2rem auto 0; display: block;" />

<!--
At Netflix our mission is to entertain the world (or at least this bright red subset).
That’s kinda cheesy, and super broad, so what does that mean for machine learning?
-->

---
layout: default
tone: dark
label: AI AT NETFLIX
---

<div class="flex items-stretch justify-center gap-5 h-full">
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/data-science.avif" alt="Data Science" style="width: 100%; height: 22rem; object-fit: cover;" />
    <div style="font-size: 1.7rem; font-weight: 900; letter-spacing: -0.02em;">Data Science</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/recommendations.avif" alt="Recommendations" style="width: 100%; height: 22rem; object-fit: cover;" />
    <div style="font-size: 1.7rem; font-weight: 900; letter-spacing: -0.02em;">Recommendations</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/content-production.avif" alt="Content Production" style="width: 100%; height: 22rem; object-fit: cover;" />
    <div style="font-size: 1.7rem; font-weight: 900; letter-spacing: -0.02em;">Content Production</div>
  </div>
</div>

<!--
There’s ML / AI everywhere but the three broad buckets that I think are the most interesting:
Traditional data science that any organization could benefit from, think back office work trying to measure how much consumers like their products, make sure they’re spending money investing in the rightones.
Then there’s what Netflix became somewhat famous for 10+ years ago in the ML space with is content recommendations. There’s enormous efforting going in to trying to find the right content to recommend to the right viewer at the right time.
Then there’s what I personally find the most excitign, the application of AI and ML to the creative production process.
Even just that creative production process is super broad…
-->

---
layout: default
tone: dark
label: AI AT NETFLIX
---

<div class="grid h-full" style="grid-template-columns: repeat(7, 1fr); gap: 0.55rem; align-items: start;">
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/pitch.avif" alt="Pitch" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.95rem; font-weight: 900; letter-spacing: 0.04em;">PITCH</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">SCREENPLAY<br>FINANCING<br>STORY RIGHTS</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/pre-production.avif" alt="Pre-production" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.78rem; font-weight: 900; letter-spacing: 0.02em;">PRE-PRODUCTION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">STORYBOARDS<br>SCHEDULING<br>PREVIZ</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/production.avif" alt="Production" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.95rem; font-weight: 900; letter-spacing: 0.04em;">PRODUCTION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">FILMING<br>DAILIES<br>REVIEW</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/post-production.avif" alt="Post-production" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.72rem; font-weight: 900; letter-spacing: 0.02em;">POST-PRODUCTION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">EDITING<br>VFX<br>SOUND DESIGN</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/localization.avif" alt="Localization" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.85rem; font-weight: 900; letter-spacing: 0.03em;">LOCALIZATION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">TESTING<br>SUBTITLES<br>DUBBING</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/distribution.avif" alt="Distribution" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.85rem; font-weight: 900; letter-spacing: 0.03em;">DISTRIBUTION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">TRANSCODING<br>VIEWING<br>POPCORNING</div>
  </div>
  <div class="flex flex-col items-center text-center gap-2">
    <img src="./images/promotion.avif" alt="Promotion" style="width: 100%; height: 7.2rem; object-fit: cover;" />
    <div style="font-size: 0.95rem; font-weight: 900; letter-spacing: 0.04em;">PROMOTION</div>
    <div style="font-size: 0.72rem; font-weight: 700; line-height: 1.35; color: #d5d5d5;">TRAILERS<br>POSTERS<br>HERO IMAGES</div>
  </div>
</div>

<!--
So let’s break it down step by step. This is roughly what it looks like to produce a modern film / TV show, not Netflix specific at all, just general hollywood knowhow.
SEE SLIDE
And at every phase in this process, there are creative people involved usually doing _some_ sort of visual work to help shape what you ultimately see on your TV on home.
My team conducts cutting edge research in computer vision and generative AI to apply the entire process leading up to finalization.
-->

---
layout: default
tone: dark
label: AI AT NETFLIX
---

<div class="flex items-stretch justify-center gap-5 h-full">
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/magenta-green-screen.avif" alt="Magenta green screen" style="width: 100%; height: 20rem; object-fit: cover;" />
    <div style="font-size: 1.55rem; font-weight: 900; text-align: center;">Magenta Green Screen</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/scene-prediction-recurrent-cell.avif" alt="Scene prediction recurrent cell" style="width: 100%; height: 20rem; object-fit: contain; background: #111;" />
    <div style="font-size: 1.55rem; font-weight: 900; text-align: center;">Scene Prediction</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/match-cuts.avif" alt="Match cuts" style="width: 100%; height: 20rem; object-fit: cover;" />
    <div style="font-size: 1.55rem; font-weight: 900; text-align: center;">Match Cuts</div>
  </div>
</div>

<!--
Some things we’ve published in the past include…
So that’s what I do at Netflix, which generally requires a great deal of specialized knowledge, BUT you can get started in this field from just what we learn here tonight, so let’s get into the crash course.
-->

---
layout: section
label: AI + ML
---

# AI + ML

Crash Course

What is machine learning, really?

<!--
What is ML really? let’s start with some basic definitions and examples from my own personal mental model, for those of you already very familiar with machine learning, AI, or computer vision it might be a bit boring (or maybe you’ll hate my definitions and want to challenge them, in which case, please be spicy and raise your hand to call out my simplifcations ;), but this should be everything we need to get started.
-->

---
layout: statement
label: AI + ML CRASH COURSE
---

# ARTIFICIAL INTELLIGENCE (AI)

machines that …

---
layout: statement
label: AI + ML CRASH COURSE
---

# ARTIFICIAL INTELLIGENCE (AI)

machines that solve problems that were previously thought to be uniquely addressed by humans

---
layout: image
tone: dark
label: AI + ML CRASH COURSE
---

::media::

<div class="flex items-center justify-center gap-3 w-full h-full">
  <img src="./images/chatgpt.avif" alt="ChatGPT" style="height: 11.5rem; object-fit: cover; flex: 1; min-width: 0;" />
  <img src="./images/midjourney.avif" alt="Midjourney" style="height: 11.5rem; object-fit: cover; flex: 1; min-width: 0;" />
  <img src="./images/diffusion.avif" alt="Diffusion" style="height: 11.5rem; object-fit: cover; flex: 1; min-width: 0;" />
  <img src="./images/forward-train-reverse-generate.avif" alt="Forward train, reverse generate" style="height: 11.5rem; object-fit: cover; flex: 1; min-width: 0;" />
  <img src="./images/terminator.avif" alt="Terminator" style="height: 11.5rem; object-fit: cover; flex: 1; min-width: 0;" />
</div>

---
layout: statement
label: AI + ML CRASH COURSE
---

# THE OG AI

<p style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 700; font-size: 3.4rem; color: #fff; max-width: none;">Math.random()</p>

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col items-center justify-center h-full gap-6">
  <p style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 700; font-size: 3.6rem; margin: 0;">Math.random()</p>
  <div class="flex items-center justify-center gap-8 w-full">
    <img src="./images/monte-carlo-tree-search.avif" alt="Monte Carlo Tree Search" style="height: 16rem; object-fit: contain;" />
    <img src="./images/chessboard.avif" alt="Chessboard" style="height: 16rem; object-fit: contain;" />
  </div>
</div>

---
layout: quote
label: AI + ML CRASH COURSE
---

# In from three to eight years we will have a machine with the general intelligence of an average human being.

Marvin Minsky, Founder of MIT’s AI Lab

…in 1970

---
layout: statement
label: AI + ML CRASH COURSE
---

# MACHINE LEARNING (ML)

a technique frequently used in AI tasks that leverages relationships in a large amount of data rather than specific instructions from the programmer

<!--
An analogy I like here is that solivng a problem with machine learning is sort of like gathering thousands of test cases for your code and never getting to write the implementation yourself. If that sounds awful, that’s definitely what I thought at first too when I first got into big ML models, but the other parts get better if you hang in there, trust me :)
-->

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col h-full" style="gap: 0.7rem;">
  <div class="text-center">
    <div style="font-size: 3.4rem; font-weight: 900; letter-spacing: -0.03em; line-height: 1;">CORE CONCEPTS</div>
    <div style="font-size: 2rem; font-weight: 600; margin-top: 0.35rem;">MODEL</div>
    <p style="font-size: 1.05rem; color: #d5d5d5; max-width: 46rem; margin: 0.45rem auto 0;">a description of how to deterministically process some data to derive some useful output</p>
    <p style="font-size: 1rem; font-weight: 700; margin-top: 0.45rem;">TWO PARTS: The procedure · The parameters</p>
  </div>
  <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 1.2rem; flex: 1;">
    <div style="border: 1px solid #333; padding: 1rem 1.1rem;">
      <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.55rem;">Model A (Multiply the input by 2, then add 4)</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.25rem;">Procedure (Architecture)</div>
      <div style="font-size: 1rem; font-family: 'IBM Plex Mono', ui-monospace, monospace;">y = x* p0 + p1</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin: 0.7rem 0 0.25rem;">Parameters</div>
      <div style="font-size: 1rem; font-family: 'IBM Plex Mono', ui-monospace, monospace;">p0=2</div>
      <div style="font-size: 1rem; font-family: 'IBM Plex Mono', ui-monospace, monospace;">p1=4</div>
    </div>
    <div style="border: 1px solid #333; padding: 1rem 1.1rem;">
      <div style="font-size: 1.05rem; font-weight: 800; margin-bottom: 0.55rem;">Model B (GPT-4)</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.25rem;">Procedure (Architecture)</div>
      <div style="font-size: 0.95rem; line-height: 1.4;">Apply self attention with positional encoding, alternate b/t linear transformations and normalization, intersperse with skip connections and feed-forward networks.</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin: 0.7rem 0 0.25rem;">Parameters</div>
      <div style="font-size: 1rem;">~1.7 trillion</div>
    </div>
  </div>
</div>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss tonight are best solved today using the same core concepts.
first of these is a MODEL, you’ve probably heard this one before if you’ve been alive and near software in the past 2 years, and all a model is is a…
-->

---
layout: two-cols
label: AI + ML CRASH COURSE
title: MODEL - EXAMPLE
---

::left::

<div style="font-size: 1.05rem; line-height: 1.45;">
  <div style="font-weight: 800; margin-bottom: 0.7rem;">Model A (Multiply the input by 2, then add 4)</div>
  <div style="font-weight: 800; font-size: 1.2rem;">Procedure (Architecture)</div>
  <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; margin: 0.3rem 0 0.8rem;">y = x* p0 + p1</div>
  <div style="font-weight: 800; font-size: 1.2rem;">Parameters</div>
  <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace;">p0=2</div>
  <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace;">p1=4</div>
</div>

::right::

<WindowChrome title="model.js">

```js
{
  architecture: {
    type: "linear",
    coefficient: "p0",
    intercept: "p1"
  },
  parameters: [
    {id: "p0", value: 2},
    {id: "p1", value: 4},
  ],
}
```

</WindowChrome>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss tonight are best solved today using the same core concepts.
first of these is a MODEL, you’ve probably heard this one before if you’ve been alive and near software in the past 2 years, and all a model is is a…
-->

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col items-center justify-center h-full text-center" style="gap: 0.85rem;">
  <div style="font-size: 3.4rem; font-weight: 900; letter-spacing: -0.03em; line-height: 1;">CORE CONCEPTS</div>
  <div style="font-size: 2rem; font-weight: 600;">TRAINING</div>
  <p style="font-size: 1.15rem; color: #d5d5d5; max-width: 42rem; margin: 0;">the process of deriving a model’s parameters using a definition of its procedure and a large set of observations</p>
  <div style="text-align: left; font-size: 1.25rem; font-weight: 700; line-height: 1.55; margin-top: 0.6rem;">
    <div>Training Model A</div>
    <div>Multiply the input by ???, then add ???.</div>
    <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace;">y = (x * PARAM_1) + PARAM_2</div>
    <div>Here are 1,000 x and y pairs.</div>
    <div>Figure out the ??? values.</div>
  </div>
</div>

---
layout: code
label: AI + ML CRASH COURSE
title: TRAINING - EXAMPLE
---

<WindowChrome title="train.js">

```js
import {Trainer} from 'cool-machine-learning-library';

const architecture = {
  type: "linear",
  coefficient: "p0",
  intercept: "p1",
};

const data = [
  {x: 5,   y:   2},
  {x: 158, y: 101},
  // ...
];

const trainer = new Trainer(architecture);
const model = trainer.fit(data);
fs.writeFileSync("model.json", JSON.stringify(model));
```

</WindowChrome>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss tonight are best solved today using the same core concepts.
first of these is a MODEL, you’ve probably heard this one before if you’ve been alive and near software in the past 2 years, and all a model is is a…
-->

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col items-center justify-center h-full text-center" style="gap: 0.85rem;">
  <div style="font-size: 3.4rem; font-weight: 900; letter-spacing: -0.03em; line-height: 1;">CORE CONCEPTS</div>
  <div style="font-size: 2rem; font-weight: 600;">INFERENCE</div>
  <p style="font-size: 1.15rem; color: #d5d5d5; max-width: 38rem; margin: 0;">the process of deriving useful output using a model and input data</p>
  <div style="text-align: left; font-size: 1.35rem; font-weight: 700; line-height: 1.6; margin-top: 0.8rem; font-family: 'IBM Plex Mono', ui-monospace, monospace;">
    <div>My model is y = (x * 2) + 4 and x=3.5.</div>
    <div>Solve for y.</div>
  </div>
</div>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss today are best solved in 2024 using these same core concepts.
all machine learning involves 3 main concepts, first is a MODEL, you’ve probably heard this one before, and all a model is is a…
now the way you come up with this description is through TRAINING. so training is just the process of deriving a model…
and once you have the model you can perform INFERENCE, which is the valuable part of actually using your model to solve the task it was trained for out in the world with data you didn’t already have the answer to.
and if you’re an engineer or scientist working with machine learning, your day is usually spent solving one of the following problems
-->

---
layout: code
label: AI + ML CRASH COURSE
title: INFERENCE - EXAMPLE
---

<WindowChrome title="infer.js">

```js
import {runInference} from 'cool-machine-learning-library';

const model = JSON.parse(fs.readFileSync("model.json"));
const input = {x: Math.random()};

const prediction = await runInference(model, input);
console.log("Model predicted:", prediction.y);
```

</WindowChrome>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss tonight are best solved today using the same core concepts.
first of these is a MODEL, you’ve probably heard this one before if you’ve been alive and near software in the past 2 years, and all a model is is a…
-->

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE CONCEPTS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr; gap: 1.2rem; margin-top: 1.4rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">MODEL</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin: 0.55rem 0;">procedure + parameters</div>
      <p style="font-size: 1rem; color: #d5d5d5; margin: 0;">a description of how to deterministically process some data to derive some useful output</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">TRAINING</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin: 0.55rem 0;">compute the parameters</div>
      <p style="font-size: 1rem; color: #d5d5d5; margin: 0;">the process of deriving a model’s parameters using its procedure and a large set of observations</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">INFERENCE</div>
      <div style="font-size: 1.15rem; font-weight: 800; margin: 0.55rem 0;">apply the procedure</div>
      <p style="font-size: 1rem; color: #d5d5d5; margin: 0;">the process of deriving useful output using a model and input data</p>
    </div>
  </div>
</div>

<!--
so there you have it your three essential concepts of ML,
the algorithm itself or your model, computing the algirthm aka training, and using the algorithm to do something useful, aka inferenceand if you’re an engineer or scientist working with machine learning, your day is usually spent solving one of the following problems
-->

---
layout: default
tone: dark
label: AI + ML CRASH COURSE
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE PROBLEMS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem; margin-top: 1.6rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">INPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">OUTPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">ARCHITECT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">what do we enable the model to learn?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">DATA</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we obtain/clean/validate it?</p>
    </div>
  </div>
</div>

<!--
Starting with the simplest one…
How do we represent the input?
computers are ultimately really good at working with numbers, so almost universally we need to figure out how to convert our input data into numbers. how specifically we do that is up to us. should we use the raw bits? convert to Integers? floats? a tough one we’ll revisit in a minute is how do you represent an entire video?
same question for the output?
A much trickier, also known as model architecture, what transformations of the data do we permit the model to learn?
just linear coefficients? Exponential? Non-differentiable equations? if that question didn’t  even make sense to you, no worries! chances are unless you have studied this area for decades, you’re probably not going to be contributing new answers to this particular question, and that’s fine there is plenty of room for you in AI answering these other three questions.
Last and perhaps most politically controversial today is
How do we obtain the right training data to be able to train our model?
Let’s take a look at everything we’ve learned with a concrete example of the worlds’ simplest model.
-->

---
layout: section
label: CV
---

# CV

Crash Course

What is a video, really?

---
layout: statement
label: CV CRASH COURSE
---

# COMPUTER VISION (CV)

a specialty branch of AI that involves the <strong>processing and understanding of visual information</strong>

---
layout: default
tone: dark
label: CV CRASH COURSE
title: Common CV Tasks
---

# Common CV Tasks

<div class="flex items-stretch justify-center gap-5" style="margin-top: 0.6rem;">
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/face-detection.avif" alt="Face detection" style="width: 100%; height: 16rem; object-fit: cover;" />
    <div style="font-size: 1.35rem; font-weight: 800; letter-spacing: 0.06em;">DETECTION</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/semantic-segmentation.avif" alt="Semantic segmentation" style="width: 100%; height: 16rem; object-fit: cover;" />
    <div style="font-size: 1.35rem; font-weight: 800; letter-spacing: 0.06em;">SEGMENTATION</div>
  </div>
  <div class="flex flex-col items-center gap-3" style="flex: 1; min-width: 0;">
    <img src="./images/cat-classification.avif" alt="Cat classification" style="width: 100%; height: 16rem; object-fit: cover;" />
    <div style="font-size: 1.35rem; font-weight: 800; letter-spacing: 0.06em;">CLASSIFICATION</div>
    <div style="font-size: 1.2rem; font-weight: 800;">CAT</div>
  </div>
</div>

---
layout: default
tone: dark
label: CV CRASH COURSE
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE PROBLEMS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem; margin-top: 1.6rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">INPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">OUTPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">ARCHITECT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">what do we enable the model to learn?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">DATA</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we obtain/clean/validate it?</p>
    </div>
  </div>
</div>

---
layout: statement
label: CV CRASH COURSE
---

# IMAGE == PIXEL[][][]

pixel usually = uint8, 0-255

<img src="./images/rgb-3d-matrix.avif" alt="RGB 3d matrix" style="width: 22rem; max-width: 80%; margin: 1.1rem auto 0; display: block;" />

---
layout: default
tone: dark
label: CV CRASH COURSE
---

<div class="flex flex-col items-center justify-center h-full text-center gap-5">
  <div style="font-size: 3.6rem; font-weight: 900; letter-spacing: -0.03em;">VIDEO == IMAGE[]</div>
  <div class="flex items-center justify-center gap-8 w-full">
    <img src="./images/60fps-vs-24fps.avif" alt="60fps vs 24fps" style="height: 11rem; object-fit: contain;" />
    <img src="./images/the-horse-in-motion-muybridge.avif" alt="The Horse in Motion, Muybridge" style="height: 14rem; object-fit: contain;" />
  </div>
</div>

---
layout: statement
label: CV CRASH COURSE
display: true
---

# VIDEO == PIXEL[][][][]

---
layout: default
tone: dark
label: CV CRASH COURSE
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE PROBLEMS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem; margin-top: 1.6rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">INPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">OUTPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">ARCHITECT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">what do we enable the model to learn?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">DATA</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we obtain/clean/validate it?</p>
    </div>
  </div>
</div>

---
layout: image
label: CV CRASH COURSE
title: IS THIS A HOT DOG?
image: ./images/hotdog-not-hotdog.avif
---

---
layout: image
label: CV CRASH COURSE
title: WHERE IS THE HOT DOG?
image: ./images/hotdog-not-hotdog.avif
---

---
layout: default
tone: dark
label: CV CRASH COURSE
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE PROBLEMS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem; margin-top: 1.6rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">INPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">OUTPUT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we represent it?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">ARCHITECT</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">what do we enable the model to learn?</p>
    </div>
    <div class="text-center">
      <div style="font-size: 1.7rem; font-weight: 700;">DATA</div>
      <p style="font-size: 1.05rem; color: #d5d5d5; margin: 0.6rem 0 0;">how do we obtain/clean/validate it?</p>
    </div>
  </div>
</div>

---
layout: statement
label: CV CRASH COURSE
---

# NEURAL NETWORK

a specific model architecture that mirrors how the human brain processes information

---
layout: image
label: CV CRASH COURSE
title: NEURAL NETWORKS
image: ./images/neural-network-diagram.avif
---

---
layout: code
label: AI + ML CRASH COURSE
title: NEURAL NETWORK - EXAMPLE
---

<WindowChrome title="network.js">

```js
{
  architecture: {
    type: "NeuralNetwork",
    layers: [
      {type: "input", shape: [128, 128, 3]},
      {type: "dense", activation: "relu", nodes: 100},
      {type: "output", activation: "softmax", nodes: 1},
    ],
  },
  parameters: [
    {id: "l1.0->l2.0", value: 0.152151},
    {id: "l1.1->l2.0", value: 0.953725},
    {id: "l1.2->l2.0", value: 0.532521},
    // and 128 * 128 * 3 * 10 other parameters...
    {id: "l2.0->l3.0", value: 0.312421},
    // and 100 * 1 other parameters...
  ],
}
```

</WindowChrome>

<!--
regardless of what you want to call it between AI, ML, voodoo magic, all of the techniques and tasks we discuss tonight are best solved today using the same core concepts.
first of these is a MODEL, you’ve probably heard this one before if you’ve been alive and near software in the past 2 years, and all a model is is a…
-->

---
layout: statement
label: CV CRASH COURSE
---

# CONVOLUTION

transformation of an image using the relative values of neighboring pixels

---
layout: image
label: CV CRASH COURSE
title: CONVOLVE
---

::media::

<div class="flex items-center justify-center gap-5 w-full h-full">
  <img src="./images/digit-1.avif" alt="Digit 1" style="height: 8rem; object-fit: contain;" />
  <img src="./images/digit-0.avif" alt="Digit 0" style="height: 8rem; object-fit: contain;" />
  <img src="./images/convolution-kernel-math.avif" alt="Convolution kernel math" style="height: 18rem; object-fit: contain; flex: 1;" />
</div>

---
layout: image
label: CV CRASH COURSE
title: CONVOLVE
---

::media::

<div class="flex items-center justify-center gap-5 w-full h-full">
  <img src="./images/blur-and-shift-convolution.avif" alt="Blur and shift convolution" style="height: 18rem; object-fit: contain; flex: 1.4;" />
  <img src="./images/digit-1.avif" alt="Digit 1" style="height: 8rem; object-fit: contain;" />
  <img src="./images/digit-0.avif" alt="Digit 0" style="height: 8rem; object-fit: contain;" />
</div>

---
layout: statement
label: CV CRASH COURSE
---

# CONVOLUTIONAL<br>NEURAL NETWORK (CNN)

a neural network model architecture where layers are connected in patterns that connect neighboring input values to extract high-level features

---
layout: image
label: CV CRASH COURSE
title: CONVOLUTIONAL NEURAL NET
---

::media::

<div class="flex flex-col items-center justify-center gap-4 w-full">
  <img src="./images/convolutional-neural-network.avif" alt="Convolutional neural network" style="width: 100%; max-height: 16.5rem; object-fit: contain;" />
  <div class="flex justify-between w-full" style="font-size: 1.05rem; font-weight: 800; padding: 0 1rem;">
    <div>Vertical line?<br>Dot?</div>
    <div>Tall line?<br>Stripes?</div>
    <div>Striped leg?<br>Floppy ears?</div>
    <div>Zebra?<br>Dog?</div>
    <div>…</div>
  </div>
</div>

---
layout: section
label: MEDIA APIs
---

# Media APIs

Crash Course

How can I do this in JavaScript?

---
layout: statement
label: MEDIA APIs
---

# navigator.mediaDevices

Browser API that enables interacting from user media devices such as webcams, microphones, and displays.

---
layout: code
label: MEDIA APIs
title: navigator.mediaDevices.getUserMedia()
---

<WindowChrome title="webcam.js">

```js
const options = {
  video: {width: 1280, height: 720},
  audio: true,
};

const stream = await navigator.mediaDevices.getUserMedia(options);
const $video = document.querySelector('video');
$video.srcObject = stream;
$video.onloadedmetadata = () => $video.play();
```

</WindowChrome>

---
layout: statement
label: MEDIA APIs
display: true
---

# Where’s our Pixel[][][]?

---
layout: statement
label: MEDIA APIs
---

# HTMLCanvasElement

Browser API that enables rich graphics applications including vector drawing and pixel manipulation.

---
layout: statement
label: MEDIA APIs
---

# $canvas.putImageData(pixels, x0, y0)

CanvasElement API that displays pixels starting at the specified location.

---
layout: two-cols
label: MEDIA APIs
title: Canvas Image Data
---

::left::

<img src="./images/rgb-3d-matrix.avif" alt="RGB 3d matrix" />

::right::

<div class="flex flex-col items-center justify-center h-full gap-4">
  <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-size: 1.35rem; line-height: 1.55;">
    [<br>
    &nbsp;&nbsp;r0, g0, b0, r1, g1, b1,<br>
    &nbsp;&nbsp;r2, g2, b2, r3, g3, b3,<br>
    &nbsp;&nbsp;r4, g4, b4, r5, g5, b5,<br>
    ]
  </div>
  <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 800; font-size: 1.8rem;">Uint8Array</div>
</div>

---
layout: code
label: MEDIA APIs
title: getUserMedia() with HTMLCanvasElement
---

<WindowChrome title="frames.js">

```js
const stream = await navigator.mediaDevices.getUserMedia();
// ... same as previous;

const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

function renderFrame() {
  ctx.drawImage($video, 0, 0, $canvas.width, $canvas.height);
  const pixels = ctx.getImageData(0, 0, $canvas.width, $canvas.height);

  requestAnimationFrame(renderFrame)
}

renderFrame()
```

</WindowChrome>

---
layout: statement
label: MEDIA APIs
---

# @mediapipe/tasks-vision

An NPM package maintained by Google that offers a collection of ready-to-use CV models using WASM.

---
layout: code
label: MEDIA APIs
title: @mediapipe/tasks-vision
---

<WindowChrome title="landmarker.js">

```js
import vision from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;

let wasmUrl = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm";
let modelPath = "face_landmarker/face_landmarker/float16/1/face_landmarker.task"
let filesetResolver = await FilesetResolver.forVisionTasks(wasmUrl);
let faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/${modelPath}`,
      delegate: "GPU"
    },
    runningMode: "IMAGE",
  });

faceLandmarker.detect(document.querySelector('img'));
```

</WindowChrome>

<!--
example: https://codepen.io/mediapipe-preview/pen/OJBVQJm
-->

---
layout: image
label: MEDIA APIs
title: @mediapipe/tasks-vision Face Landmarker Result
image: ./images/mediapipe-face-landmarker-result.avif
---

<!--
example: https://codepen.io/mediapipe-preview/pen/OJBVQJm
-->

---
layout: section
label: BUILDING AN APP
---

# Building a CV<br>Application

How do I put it all together?

---
layout: default
tone: dark
label: BUILDING AN APP
---

<div class="flex flex-col h-full">
  <div class="text-center" style="font-size: 3.2rem; font-weight: 900; letter-spacing: -0.03em;">CORE PROBLEMS</div>
  <div class="grid" style="grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1rem; margin-top: 1.4rem; flex: 1;">
    <div class="text-center">
      <div style="font-size: 1.55rem; font-weight: 700;">INPUT</div>
      <p style="font-size: 0.95rem; color: #d5d5d5; margin: 0.45rem 0 0.7rem;">how do we represent it?</p>
      <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 800; font-size: 1.25rem;">getUserMedia()</div>
    </div>
    <div class="text-center">
      <div style="font-size: 1.55rem; font-weight: 700;">OUTPUT</div>
      <p style="font-size: 0.95rem; color: #d5d5d5; margin: 0.45rem 0 0.7rem;">how do we represent it?</p>
      <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 800; font-size: 1.25rem;">Canvas API</div>
    </div>
    <div class="text-center">
      <div style="font-size: 1.55rem; font-weight: 700;">ARCHITECT</div>
      <p style="font-size: 0.95rem; color: #d5d5d5; margin: 0.45rem 0 0.7rem;">what do we enable the model to learn?</p>
      <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 800; font-size: 1.25rem;">@mediapipe/*</div>
    </div>
    <div class="text-center">
      <div style="font-size: 1.55rem; font-weight: 700;">DATA</div>
      <p style="font-size: 0.95rem; color: #d5d5d5; margin: 0.45rem 0 0.7rem;">how do we obtain/clean/validate it?</p>
      <div style="font-family: 'IBM Plex Mono', ui-monospace, monospace; font-weight: 800; font-size: 1.25rem;">@mediapipe/*</div>
    </div>
  </div>
</div>

<!--
Recall we had these four core problems to deal with for any ML application, well given the APIs we just learned, we’ve got answers now.
For our input, we can use getUserMedia to grab the webcam.
For the output, we can write the results to our Canvas API.
And for the model transformations and data cleaning we have @mediapipe to thank for prepaing all the models for us.
-->

---
layout: demo
label: BUILDING AN APP
link: intro-to-pixel-bending.surge.sh
---

# LIVE DEMO

::media::

<MediaTile icon="qr" tone="accent" />

---
layout: end
---

# Thank You.

- <NetflixIcon name="at" /> patrickhulce
- <NetflixIcon name="mail" /> patrick.hulce@gmail.com
- <NetflixIcon name="link" /> /in/patrickhulce

::media::

<div class="flex items-center gap-3">
  <img src="./images/threads.avif" alt="Threads" style="height: 2.4rem;" />
  <img src="./images/linkedin.avif" alt="LinkedIn" style="height: 2.4rem;" />
</div>
