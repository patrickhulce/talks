---
theme: ../../../themes/slidev-theme-compass
title: Technical Writing Workshop
info: ReactJS Dallas · September 2023
layout: cover
event: ReactJS Dallas
date: September 2023
speaker: Patrick Hulce
kicker: ENGINEERING
---

# Technical Writing Workshop

<!--
Hey everyone thanks for coming tonight, I’m Patrick here to share some of my personal approach to technical writing and hopefully teach you a little something about clearly communicating your wonderful ideas to other engineers.
First a little about me, why bother listening to me talk about writing instead of something way more fun like react 18, v8 de-opt performance gotchas, or generative AI….
-->

---
layout: intro
eyebrow: ABOUT PATRICK
---

::media::

<img src="./images/patrick-hulce.avif" alt="Patrick Hulce" />
<div style="display:flex;flex-wrap:wrap;gap:0.55rem;justify-content:center;margin-top:0.7rem;">
  <img src="./images/compass.avif" alt="Compass" style="height:1.7rem;width:auto;" />
  <img src="./images/chrome.avif" alt="Chrome" style="height:1.7rem;width:auto;" />
  <img src="./images/lighthouse.avif" alt="Lighthouse" style="height:1.7rem;width:auto;" />
  <img src="./images/the-office.avif" alt="The Office" style="height:1.7rem;width:auto;" />
</div>

::default::

- Principal Engineer at Compass
- Ex-Chrome, Lighthouse core team
- Loves JavaScript, The Office, photography
<!--
Well, I’m a Principal Engineer at a real estate company called Compass where I’m the uber tech lead for frontend architecture across the company, which currently spans around 200 applications. This means as far as dev years go I’m old and no fun and spend the vast majority of my time these days reviewing technical designs and other natural language proposals instead of coding in javascript, so hopefully my pain can benefit some of you today by sharing patterns and advice about what I see.
I do occasionally get to dive into code though. I also lead all of our generative AI and large language model development, so if anyone’s really deep into GPT please come see me later I’d love to chat more about how you’re using it. And before Compass I did a lot of different things, much more coding, mostly JavaScript related, I started a photography SaaS company using computer vision, ran a open source consulting firm for a while, and worked on the Chrome team at Google where I built a tool called Lighthouse for those of you that are deep into web performance and might be familiar.
-->

---
layout: default
eyebrow: AGENDA
---

1. What is a technical design?
1. How should I approach a large problem?
1. How do I write a technical design?
<!--
Quick agenda for today
We’ll talk about in what situations you’ll use any of this stuff we’re about to talk about. What do we even mean by a technical design?
Then we’ll dive into a generic process you can use to approach a large technical problem and break it down.
Then we’ll talk about how to use that process to actually write your document,
If at any point you have questions or don’t understand something I”m talking about, please raise your hand, feel free to stop me and we’ll chat. Chances are someone else has the same thought and isn’t confident enough to shout it out, so do them a solid and share your questions.
-->

---
layout: default
eyebrow: AGENDA
---

<div style="text-align:center;">
<p style="font-size: 1.7rem; font-weight: 600; margin: 0;">Communication for Engineers</p>
<p style="color: #9e9e9e; margin: 0.15rem 0 0.9rem;">12-week program</p>
<div style="display:flex;flex-wrap:wrap;gap:0.45rem;justify-content:center;">
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">STYLE &amp; TECHNIQUE</span>
  <span style="display:inline-block;background:#ffab40;color:#111;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">PROCESS &amp; STRUCTURE</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">DIAGRAMS</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">FEEDBACK</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">PRESENTATIONS</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">MEETINGS, EMAILS, PRs</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">TECHNICAL DESIGNS</span>
</div>
<p style="margin: 1rem 0 0.45rem; font-size: 0.95rem; font-weight: 700;">4-part series on technical design documents</p>
<div style="display:flex;flex-wrap:wrap;gap:0.45rem;justify-content:center;">
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">OVERVIEW</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">GOALS &amp; NON-GOALS</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">BACKGROUND</span>
  <span style="display:inline-block;background:#ffab40;color:#111;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">PROPOSAL</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">MlLESTONES</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">RISKS</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">OPERATIONS</span>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.68rem;font-weight:700;letter-spacing:0.06em;padding:0.35rem 0.55rem;border-radius:3px;">…</span>
</div>
<p style="margin: 1rem 0 0.35rem; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em;">14-section breakdown of a kitchen sink template</p>
<p style="margin: 0.8rem 0 0; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; color: #ffab40;">WHAT WE’LL COVER TODAY</p>
</div>
<!--
Now I expect a few questions because this agenda is actually a super condensed version of a program I teach on communication for engineers, and because of that I’m going to shake things up a bit from our normal talks and have an interactive component here where we’ll break out into groups and come back to chat.
Now normally in this program we go through meetings, emails, technical designs, and presentations where technical designs itself is a 4 part series covering style, diagrams, giving, and receiving feedback ,etc, And EVEN THEN just the structure covers 14 sections of the technical design. Today we’ll mostly just be talking about just the process and structure behind two core sections of any technical design: the proposed solution summary.
-->

---
layout: default
---

<div style="display:flex;align-items:center;justify-content:center;gap:2.4rem;height:100%;">
  <img src="./images/microsoft.avif" alt="Microsoft" style="max-height:4.2rem;width:auto;" />
  <img src="./images/google.avif" alt="Google" style="max-height:4.2rem;width:auto;" />
  <img src="./images/amazon.avif" alt="Amazon" style="max-height:4.2rem;width:auto;" />
</div>

---
layout: statement
---

# DISCLAIMER!

There is more than one way to write a technical design.

**If you have other methods of writing a doc that have received positive feedback, please continue to use them, better yet share them with me!**
<!--
Alright before you start thinking, what the hell, if this guy thinks he teaches engineers how to give presentations this better be the best frickin’ talk I’ve ever seen or I’m not listening to anything he’s got to say, haha hold up. now that i’ve set expectations, time to lower ‘em back down. Just because I try help engineers be more effective in communicating doesn’t mean I’m anywhere near perfect myself!
So huge disclaimer, there is absolutely more than one way to write a tech spec or effectively communicate your ideas. Even between very senior engineers and different company cultures we have very different methods and that’s fine! The techniques we’ll be discussing throughout tonight have received some pretty positive feedback in the past at medium to largeish companies and are what I personally strive for when writing a document for my own clarity, but if you have your own methods that have received positive feedback, please continue to use them. Better yet share your experience with me so I can incorporate them into future workshops!
Alright, let’s dive in.
-->

---
layout: section
---

# What’s a Technical Design?

When and why should I follow this?
<!--
Let’s kick this off, why bother listening? When can you use this information?
-->

---
layout: default
eyebrow: WHY WRITE • DEFINITION
---

<div style="text-align:center;padding-top:3.2rem;">
<p style="font-size:1.45rem;line-height:1.4;">Writing is thinking on paper.</p>
<p style="font-size:1.45rem;line-height:1.4;margin-top:1.2rem;">Writing process ~= Thought process</p>
</div>
<!--
Writing is thinking on paper.
Which means the writing process should reflect your thought process.
Now there are lots of types of technical writing but we’ll focus on writing that proposes changes of some kind in response to a problem, which some might call a design doc, tech spec, technical design, doesn’t really matter what you call it
What matters is that
-->

---
layout: default
eyebrow: WHY WRITE • DEFINITION
---

<div style="text-align:center;padding-top:2.2rem;">
<p style="font-size:2.6rem;font-weight:700;margin:0.2rem 0 0.7rem;">TECHNICAL DESIGN</p>
<p style="font-size:1.45rem;line-height:1.4;">A written description of how you plan to solve a problem with technology.</p>
</div>
<!--
A design is just a written description of your thought process around how to solve a problem.
Putting your thoughts onto (digital) paper
With this broad definition…
-->

---
layout: default
eyebrow: WHY WRITE • EXAMPLES
---

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;text-align:center;margin-top:1.4rem;">
<p style="font-size:1.25rem;margin:0;"><strong>PR Description</strong></p>
<p style="font-size:1.25rem;margin:0;"><strong>Technical Design Document</strong></p>
<p style="font-size:1.25rem;margin:0;"><strong>TC39 RFC</strong></p>
</div>
<img src="./images/writing-spectrum-pr-to-rfc.avif" alt="Spectrum from a short PR description to a language-wide RFC" style="width: 100%; max-height: 11.5rem; object-fit: contain; margin-top: 1.2rem;" />
<!--
Many different things can be a technical design. Whether it’s as simple as a pull request description with a little extra detail you’re putting up for a single coworker to review or a TC39 RFC that modifies the JavaScript language that will be read by thousands of the world’s frontend experts, a technical design is a technical design and can benefit from some of the tips we’ll be discussing today.
But why, why bother writing a detailed pull request description…
-->

---
layout: default
eyebrow: WHY WRITE • REASONS AND GOALS
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.4rem;">
<p class="tw-xl">#1 - Yourself!</p>
<p class="tw-lg">Actually make the right decisions.</p>
<p style="margin-top: 1.1rem;">Think critically about the problem.</p>
<p>Clarify what you intend to do and why.</p>
</div>
<!--
Well, there are many good reasons.
First and foremost you write for yourself, so _you_ have a solid understanding of what you’re doing, why you’re doing it, and are confident you’re making the right decisions. Even if you’re literally the only engineer in the company this stuff can be valuable. There have been several times in my career when I sit down to write a design, work through a lot of the problems and never end up sharing that document with anyone. It accomplished its goal in helping me think through a complicated problem I was dealing with and that’s fine.
Because writing is thinking on paper, this is healthy, normal, and a great use of writing. When you do this your goals are really just to clarify what you intend to change and why. And Ensuring you’ve thought about the problem pretty hard, not just running with the first idea that popped into your head.
Many times, you’re not alone though, and it’s also a good idea to document….
-->

---
layout: default
eyebrow: WHY WRITE • REASONS AND GOALS
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.4rem;">
<p class="tw-xl">#2 - Others</p>
<p class="tw-lg">Appear to make the right decisions.</p>
<p style="margin-top: 1.1rem;">Share your thinking about the problem.</p>
<p>Clarify what you intend to do and why.</p>
</div>
<!--
…..For other people. Writing is an excellent form of communication, so you also want to follow the process we talk about today when you need to convince _other_ people that you’re making the right decisions. Maybe you’re already super confident in the way you plan to tackle a problem. Maybe you’ve done it 1000 times and got it all mapped out in your head, great! Unless everyone else on your team, your manager, your PM is a mind reader they may not have any clue about how the team is going to get this done.
Showing that you’ve _thought_ about this problem carefully, asked for feedback, and sought other opinions, not just coding whatever first hacky solution popped into your head, is super valuable for the success of your team and your project if anyone else is involved. This is the persuasive angle of your proposal where the primary tool at our disposal for persuasion is going to be thoroughness.
Finally, maybe you don’t need to convince anyone…
-->

---
layout: default
eyebrow: WHY WRITE • REASONS AND GOALS
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.4rem;">
<p class="tw-xl">#3 - Posterity</p>
<p class="tw-lg">Remember the right decisions.</p>
<p style="margin-top: 1.1rem;">Identify important constraints, context, &amp; decisions.</p>
<p>Clarify what you intend to do and why.</p>
</div>
<!--
….maybe you truly just want people from the future to understand the system you’ve built or decisions that were made. Including yourself! I once worked on a project as the only engineer for about 18 months and thank god I occasionally wrote some things down because I sure didn’t remember why I did it that way 1 year later.For this goal here you want to identify what makes this problem complex, why wasn’t this half the time. What constraints did you have that forced you to do it this way that, once removed in the future, might change your thinking?Identify the important decisions there are being made. This one often gets left behind, and if you’re early in your career it can take time to understand what decisions you’re making that have lasting consequences vs. the insignificant ones.
-->

---
layout: default
eyebrow: WHY WRITE • REASONS AND GOALS
---

- **You want to ensure you’re making the right decisions.**
  - Clarify what you intend to change and why.
  - Actually conduct a thorough exploration of the problem.
- **You want to convince others you’re making the right decisions.**
  - Clarify what you intend to change and why.
  - Demonstrate you’ve conducted a thorough exploration of the problem.
- **You want people from the future to understand your work.**
  - Clarify what you intend to change and why.
<!--
Well, there are many good reasons.
First and foremost you write for yourself, so _you_ have a solid understanding of what you’re doing, why you’re doing it, and are confident you’re making the right decisions. Even if you’re literally the only engineer in the company this stuff can be valuable. There have been several times in my career when I sit down to write a design, work through a lot of the problems and never end up sharing that document with anyone. It accomplished its goal in helping me think through a complicated problem I was dealing with and that’s fine.
Because writing is thinking on paper, this is healthy, normal, and a great use of writing. When you do this your goals are really just to clarify what you intend to change and why. And Ensuring you’ve thought about the problem pretty hard, not just running with the first idea that popped into your head.
—
Writing isn’t _just_ about you though. It’s also an excellent form of communication, so you want want to follow the process we talk about today when you need to convince _other_ people that you’re making the right decisions. Maybe you’re already super confident in the way you plan to tackle a problem. Maybe you’ve done it 1000 times and got it all mapped out in your head, great! Unless everyone else on your team, your manager, your PM is a mind reader they may not have any clue about how the team is going to get this done.
Showing that you’ve _thought_ about this problem carefully, asked for feedback, and sought other opinions, not just coding whatever first hacky solution popped into your head, is super valuable for the success of your team and your project if anyone else is involved. This is the persuasive angle of your proposal where the primary tool at our disposal for persuasion is going to be thoroughness.
—
And finally maybe you don’t need to convince anyone, you truly just want people in the future to understand the system you’ve built or decisions that were made. Including yourself! I once worked on a project as the only engineer for about 18 months and thank god I occasionally wrote some things down because I sure didn’t remember why I did it that way 1 year later.For this goal here you want to identify what makes this problem complex, why wasn’t this half the time. What constraints did you have that forced you to do it this way that, once removed in the future, might change your thinking?Identify the important decisions there are being made. This one often gets left behind, and if you’re early in your career it can take time to understand what decisions you’re making that have lasting consequences vs. the insignificant ones.
-->

---
layout: section
---

# Technical Problem Solving

How should you approach large problems?
<!--
Alright, some hopefully you’re super convinced now, you’re so excited about the possibilities of what you can accomplish by writing, but before we get there we’re gonna spend some time talking about the problem solving process itself.
Technical problem solving, how can you approach large problems?
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • THE PROCESS
---

<div style="text-align:center;">
<h2 style="font-size:2rem;margin:0.4rem 0 1.4rem;">Problem Solving Process</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
<div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">1</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">What do we need?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What do we need to solve and why do we need to solve it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">2</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How could we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What are our available options for solving it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">3</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How should we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">Which way should we solve it and why that way?</p></div>
</div>
</div>
<!--
We’re going to follow a 3 phase problem solving process.
1. Identify what you need to consider it solved.2. Identify how you _could_ achieve that3. Determine how you _should_ achieve itThis is what you need to be demonstrating in your writing. That you’ve thought through the options here carefully.Today we’re going to walk through a method for breaking down a large problem in each of these phases and writing a “working draft” of our tech spec in the process. The working draft isn’t necessarily something you’ll share with a broad audience, but you’re using the working draft to guide you through the problem solving process.
I know this is all a bit abstract, so we’re going to walk through a concrete example together.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center tw-xl" style="font-size: 2rem;">GitHub Pull Request App</p>
<div class="tw-shots">
  <img src="./images/pull-request-conversation-and-description.avif" alt="Pull request conversation and description" />
  <img src="./images/pull-request-code-diff-and-comments.avif" alt="Pull request code diff and comments" />
  <img src="./images/pull-request-ci-results.avif" alt="Pull request CI results" />
</div>
<!--
Let’s imagine we’re writing a spec for the GitHub Pull Request App. Something we’ve all hopefully used and are loosely familiar with
There’s a lot of complexity here, we have this overarching tabbed UI. Description and details on the pull request itself, we’ve got a diff view showing the code before and after, comments, threading, and CI test results too.In this situation imagine your team received some mocks and a product description of how the GitHub pull request UI works today.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

<div style="text-align:center;">
<h2 style="font-size:2rem;margin:0.4rem 0 1.4rem;">Problem Solving Process</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
<div style="background:#1f1a12;border:2px solid #ffab40;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">1</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">What do we need?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What do we need to solve and why do we need to solve it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">2</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How could we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What are our available options for solving it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">3</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How should we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">Which way should we solve it and why that way?</p></div>
</div>
</div>
<!--
Let’s apply Phase 1, what do we need to achieve to consider this problem solved.
We need to breakdown this product and identify the technical pieces necessary to get there without prescribing implementation details yet.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-shots">
  <img src="./images/pull-request-conversation-and-description.avif" alt="Pull request conversation" />
  <img src="./images/pull-request-code-diff-and-comments.avif" alt="Pull request diff" />
  <img src="./images/pull-request-ci-results.avif" alt="Pull request CI" />
</div>
<div class="tw-legend">
  <span><i class="tw-swatch" style="background:#83a7b8"></i> = UI</span>
  <span><i class="tw-swatch" style="background:#ffab40"></i> = Logic</span>
  <span><i class="tw-swatch" style="background:#6aa84f"></i> = Data</span>
</div>
<!--
For new product features like this, I like to identify, the key UI, data, and logic we need
For these screenshots it might look something like this, our major UI pieces are the page itself, our tabbed interface and the contents of each tab + our reusable comments component.Data is everywhere, but we’ve highlighted some data from the PR itself, the author has a little avatar, we have the code before/after, the comments, and the logs from CI.
And if we did this for the whole pull request app, we might end up with a list that looks something like this…
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

| UI | Logic | Data |
| --- | --- | --- |
| Overall container | Generate diff | Title/Description |
| Tabs | Validate PR is mergeable | Commit History |
| Activity view | Threading/grouping comments | Author |
| Commit view | Interpreting markdown | Before Code |
| CI results view | | After Code |
| Code diff view | | Comments |
| Comments | | CI Results |
| Approvals | | Approvals / Reviews |
<!--
There’s a lot missing here, but already you can see we’ve started breaking down a single task “build PR app” into smaller, more manageable pieces.
But how do we translate this into a document?
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-draft">
<div>
<p class="tw-xl" style="font-size: 2rem; text-align: left;">Working Draft</p>
<p class="tw-lg" style="text-align: left;">Write down every concept you think you need and 1-sentence description.</p>
</div>
<img src="./images/working-draft-of-technical-concepts.avif" alt="Working draft of technical concepts" />
</div>
<!--
For the rest of this workshop we’ll be updating what I’ll call a “working draft” you can consider this a lightweight outline of your problem solving process. Nothing here needs to be polished, it’s just a raw stream of your thought process as you make decisions and explore the problem. We’ll start it off with a header called “Technical Concepts” that has a list of everything you think you need to achieve your result. You can see we’ve written just 1 sentence for each.
This is effectively the end of phase 1, we’ve taken an inventory of what we’re trying to achieve and said “Ah if I had all of these things working together, we’d have the PR app”
Now you might get through this exercise and realize that every individual component is actually really simple with no ambiguous decisions to be made, feel free to stop here. This is already way more useful than half of the Pull request descriptions I’ve ever seen. For most complex efforts though that aren’t going in a single PR, we need to get into some tough decisions which is where the rest of the problem solving process shines, let’s move on to phase 2.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

<div style="text-align:center;">
<h2 style="font-size:2rem;margin:0.4rem 0 1.4rem;">Problem Solving Process</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
<div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">1</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">What do we need?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What do we need to solve and why do we need to solve it?</p></div><div style="background:#1f1a12;border:2px solid #ffab40;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">2</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How could we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What are our available options for solving it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">3</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How should we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">Which way should we solve it and why that way?</p></div>
</div>
</div>
<!--
Phase 2 is How could we?
We examine each of our technical concepts and brainstorm some ideas about how we could get there. We’ll discuss the options and tradeoffs that we could make to achieve our goals.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

| UI | Logic | Data |
| --- | --- | --- |
| Overall container | Generate diff | Title/Description |
| Tabs | Validate PR is mergeable | Commit History |
| Activity view | Threading/grouping comments | Author |
| Commit view | Interpreting markdown | Before Code |
| CI results view | | After Code |
| Code diff view | | Comments |
| Comments | | CI Results |
| Approvals | | Approvals / Reviews |
<!--
So go back to your inventory of things and identify some related pieces. We’ll start with our UI.
In our first example we’ll look at the structure of the overall container and our tabbing mechanism.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

| Option 1 |  | Option 2 |  |
| --- | --- | --- | --- |
| **Single page, tabs are buttons** |  | **Multi-page, tabs are links** |  |
| Pros | Cons | Pros | Cons |
| Fast transition between tabs | All data loaded upfront | View only needs to fetch its own data | Slower transitions between tabs |
|  | Views not bookmarkable / Cmd+clickable | Each view gets its own URL |  |

<div class="tw-codepair">

```html
<PullRequestPage>
  <button
     onClick={() => setActiveTab('diff')}>
    Diff
  </button>
</PullRequestPage>
```

```html
<PullRequestPage>
  <a href="./diff">
    Diff
  </a>
</PullRequestPage>
```

</div>
<!--
Two main options we might consider, option 1 the tabs are buttons and the whole experience is a single pageOr maybe its’ multiple pages and tabs are links between URLsWe might do that analysis and end up with something like this. You might also say patrick, you’re leaving off major pros/cons and obviously forgetting a third option that gives me the best of both worlds, you’d be exactly right, and I want you to hold on to that energy because that’s exactly what you’re going to be doing with a partner in a few minutes.Note for all of this we aren’t making any decisions yet, just outlining some options with tradeoffs.
Now this is really important…
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 2.6rem;">
<p class="tw-xl">DO 👏<br>THIS 👏 WITH 👏<br>EVERY 👏 CONCEPT 👏</p>
</div>
<!--
…_do this with every concept_
you don’t have to write down _every_ decision like this in the full detail that we just saw _but_ you should at least be asking yourself these questions in your head as you think about each technical concept
A good rule of thumb…
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 2.4rem;">
<p class="tw-lg">If you spent more than 5 minutes thinking about it,<br>write down the options + tradeoffs.</p>
<p class="tw-lg" style="margin-top: 1.6rem;">If you spent more than 5 seconds thinking about it,<br>write down the decision.</p>
</div>
<!--
If you spent more than 5 minutes thinking about a decision, write down the options and tradeoffs
If you spent more than 5 seconds thinking about a decision, write down the outcome.
You might be thinking wow, patrick, 5 seconds, that sounds pretty short, and you’re right. The goal here is to capture everything you spent some time thinking about. That’s what a decision is, something you had to think about before picking an option. 5 seconds is meant as a threshold for the things that you never even second guessed, you don’t have to capture those. If your entire company writes every single app in TypeScript, it may have never crossed your mind to ever use plain old javascript, that’s fine feel free to skip it. But if you have both Angular and React at your company, and you’re proposing a new project, it’s worth mentioning which one you’re planning to use. It might help to take a look at some more examples.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center" style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.9rem;">Example: PR Review View</p>
<div class="tw-qs">
  <div class="tw-q"><img src="./images/decision.avif" alt="Decision" /><span>Will this live in an existing page or a new one?</span><span class="tag">DECISION</span></div>
  <div class="tw-q"><img src="./images/decision.avif" alt="Decision" /><span>Will this use existing design components or new ones?</span><span class="tag">DECISION</span></div>
  <div class="tw-q"><img src="./images/decision.avif" alt="Decision" /><span>What APIs will this feature use to fetch its data?</span><span class="tag">DECISION</span></div>
  <div class="tw-q"><img src="./images/assumed.avif" alt="Assumed" /><span>Will we use JavaScript or invent our own language?</span><span class="tag assumed">ASSUMED</span></div>
  <div class="tw-q"><img src="./images/assumed.avif" alt="Assumed" /><span>Will it be compatible with latest browsers?</span><span class="tag assumed">ASSUMED</span></div>
</div>
<!--
Some decision you might have to make even if they’re easy / obvious ones.
…
When in doubt, it’s always better to state your assumption as a decision, Experience and peers on your teams can help guide you in what’s expected to be assumed and what’s reconsidered for each project.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-draft">
<div>
<p class="tw-xl" style="font-size: 2rem; text-align: left;">Working Draft</p>
<p class="tw-lg" style="text-align: left;">Write down every decision about how we could build the concepts.</p>
</div>
<img src="./images/working-draft-with-options-and-tradeoffs.avif" alt="Working draft with options and tradeoffs" />
</div>
<!--
If we update our technical concepts section of our working draft, we’ll start seeing something like this for every concept.
Now it’s your turn!
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • WHAT DO WE NEED?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center tw-xl" style="font-size: 2rem; margin-bottom: 0.8rem;">🎉 WORKSHOP TIME! 🎉</p>
| UI | Logic | Data |
| --- | --- | --- |
| Overall container | Generate diff | Title/Description |
| Tabs | Validate PR is mergeable | Commit History |
| Activity view | Threading/grouping comments | Author |
| Commit view | Interpreting markdown | Before Code |
| CI results view | | After Code |
| Code diff view | | Comments |
| Comments | | CI Results |
| Approvals | | Approvals / Reviews |
<!--
OK Workshop time!  Imagine you are tasked with creating a technical specification for the GitHub Pull Request UI. I want you to find a partner near you, and pick ONE of the remaining technical concepts to outline. Write a 1-sentence description of it and list two options for how you could tackle with pros and cons. (Hint: for pretty much every piece of logic you can decide if it should be client-side or server-side) You’ll have 10 minutes.
Pick one person to be your presenter and we’re share a few when we come back. Folks on VC, I’m sorry I don’t have breakout room capabilities for ya, but try this exercise on your own, and we’ll try to grab a volunteer from Zoom too :)
<>
Awesome everyone! This is effectively the end of phase 2, for every thing we need to build we’ve explore different ways we could build it! Now on to phase 3
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<div style="text-align:center;">
<h2 style="font-size:2rem;margin:0.4rem 0 1.4rem;">Problem Solving Process</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;">
<div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">1</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">What do we need?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What do we need to solve and why do we need to solve it?</p></div><div style="background:#1c1c1c;border:2px solid #333;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:0.42;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">2</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How could we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">What are our available options for solving it?</p></div><div style="background:#1f1a12;border:2px solid #ffab40;border-radius:6px;padding:1.1rem 0.85rem 1.2rem;min-height:11rem;opacity:1;"><div style="width:2rem;height:2rem;margin:0 auto 0.55rem;border-radius:999px;background:#ffab40;color:#111;font-weight:700;font-size:1rem;line-height:2rem;">3</div><h3 style="color:#fff;font-size:1.05rem;margin:0 0 0.45rem;">How should we?</h3><p style="font-size:0.82rem;color:#cfcfcf;margin:0;line-height:1.35;">Which way should we solve it and why that way?</p></div>
</div>
</div>
<!--
Phase 3, How _should_ we? The fun part.
We examine each of our tradeoffs and identify the set of things we’ll actually build. This part should be made much much easier thanks to all our work in phases 1 and 2.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.2rem;">
<p class="tw-xl" style="font-size: 2.1rem;">STEP 1 - CHOOSE<br><span style="font-size: 1.15rem;">(with your gut)</span></p>
<p class="tw-lg">For each set of options, fill in the sentence…<br>“We should choose _______ because _______ is more important than _______.”</p>
</div>
<!--
For each set of options….
This might feel weird to you at first because we’re not justifying anything yet, but it’s important to understand what tradeoffs you’re making with your decision.
_Every_ decision you face will have tradeoffs, and at the end of the day, tradeoffs will prioritize one concern over a different concern. Making that explicit helps you understand who you’re prioritizing with your decisions and helps sus out the right decision.
An important note here is to be brutally honest with yourself about why you prefer something. There has definitely been more than one time in my career that I face this sentence and all I can really come up with is “easier is more important than the other benefits”. And that is OK! There are definitely times when simplicity or developer productivity are important reasons to prefer one path over another. don’t make up junk you don’t believe in those cases, just be honest!
Let’s look at a practical example.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<span class="tw-gut">GUT SAYS</span>
| Option 1 |  | Option 2 |  |
| --- | --- | --- | --- |
| **Single page, tabs are buttons** |  | **Multi-page, tabs are links** |  |
| Pros | Cons | Pros | Cons |
| Fast transition between tabs | Slower initial page load | Faster initial page load | Slower transitions between tabs |
|  | Views not bookmarkable / Cmd+clickable | Each view gets its own URL |  |

<p class="tw-center" style="margin-top: 0.9rem; font-size: 1.2rem; font-weight: 700;">
“We should choose Option 1 because<br>tab switching speed is more important<br>than initial page speed.”
</p>
<!--
Remember our single page vs. multi-page example from before, we may look at our tradeoffs and come up with a sentence like this.
You don’t have to agree with this statement and that’s fine, by making it explicit, this gives us an important starting point for discussion with our colleagues and reviewers and our own brain.
Once you’ve identified what you think the tradeoff should be, you can start checking yourself.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center">
<p class="tw-xl" style="font-size: 2.1rem;">STEP 2 - EVALUATE</p>
<p class="tw-lg">Evaluate the tradeoffs systematically,<br>think about your user and your constraints.</p>
</div>

1. Pros are valued more highly than the other’s.
1. Cons are not as bad as the other’s.
1. The missing Pros can be achieved another way.
1. Cons can be more easily mitigated than the other’s.
<!--
Step 2, evaluate the tradeoffs you’ve outlined systematically, ignoring your gut. Think about your user and your constraints.
Do you value pros more highly than the others.
Are some cons….
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center tw-lg" style="font-weight: 700;">Option 1 &gt; Option 2<br>But is it?</p>

- Users only visit 1 tab per session
  - Option 1’s “Pro” isn’t very valuable.
- Users share links to a non-default tab with coworkers.
  - Option 2’s “Pro” is very valuable.
- Loading speed can be improved with prefetching.
  - Option 2’s “Con” can be easily mitigated.
<!--
So we started out saying option 1 is better, but What if we add some data to this problem
Maybe…
If you add all this up we may come to a differen conclusion from our gut, which brings us to step 3
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.2rem;">
<p class="tw-xl" style="font-size: 2.1rem;">STEP 3 - CHOOSE<br><span style="font-size: 1.15rem;">(with your brain)</span></p>
<p class="tw-lg">For each set of options, fill in the sentence…<br>“We should choose _______ because _______ is more important than _______.”</p>
</div>
<!--
Choose again, but this time using your brain and your systematic analysis.
You might be thinking, hm Patrick why did I come up with an answer using my gut before evaluating if all I’m going to do is think about it again here. Great question!
Choosing between two options and evaluating tradeoffs is ultimately a question of value judgements. You’re being forced to say “I care more about X than I do Y”. We do this all the time in engineering and in life but we rarely stop to critically self-examine if our gut reaction is right. By separating this process and _reevaluating with your brain_, I hope you can start to identify any blind spots you tend to have when making decisions and start to recognize them in your thinking elsewhere that’s less rigorous for example when coding a particular change or providing some PR feedback.
So let’s take a look at what our brain thinks of our SPA vs MPA decision…
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW SHOULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<span class="tw-gut">BRAIN SAYS</span>
<p style="font-size: 1.15rem; font-weight: 700; margin-top: 0.6rem;">We should choose Option 2 because having links to each view is more important than optimizing tab switching speed.</p>
<p style="font-size: 1.05rem; font-weight: 600;">Users explicitly need unique URLs as part of their workflow which cannot be achieved without routing. Additionally, usage data indicates that most sessions stay on one tab and even if those patterns change, it’s easier to improve interaction speed later with prefetching than it would be to add SPA routing later.</p>
<!--
In our example here, you can see that we’ve flipped. We think that having links to each view is actually more important than optimizing tab switching. We can now back this up with the fact that users need unique URLs for their workflow, most session wouldn’t benefit from tab speed, and even if they did, we can achieve that later more easily than we could retrofit with routing later.
-->

---
layout: default
eyebrow: TECHNICAL PROBLEM SOLVING • EXAMPLE • HOW COULD WE?
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-draft">
<div>
<p class="tw-xl" style="font-size: 2rem; text-align: left;">Working Draft</p>
<p class="tw-lg" style="text-align: left;">Write down the verdict for every decision that was worthy of listing the options.</p>
</div>
<img src="./images/working-draft-with-verdicts.avif" alt="Working draft with verdicts" />
</div>
<!--
If we update our technical concepts section of our working draft, we’ll start seeing something like this for every concept.
We’ve added a “Verdict” section that describes what tradeoff we made and a few quick points why we think that tradeoff is the right one.
At this point we’ve completed all three phases of our problem solving and have an amazing head start on the rest of our tech spec, let’s take a look at formalizing all of this into our actual document.
-->

---
layout: section
---

# Anatomy of a Tech Spec

How do you organize information in a technical specification?
<!--
Anatomy of a tech spec, how do you organize this information in a technical design
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • DEFINITION
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-spec">
<div>

1. Header
1. Overview
1. Goals
1. Non-Goals
1. Background
1. **Proposal**
1. Risks
1. Operations
1. …
1. **Supplemental Details**

</div>
<img src="./images/pr-review-design-document-outline.avif" alt="PR Review Design document outline" />
</div>
<!--
Now normally I would cover like 14 areas for a complete document tour, but today we’ll just be focusing on the meat of the proposal. This would apply to any shorter context like a pull request description as well.
It should be noted here for complete documents, what we’re covering is a bare minimum of what you should be addressing in these sections. As you get more comfortable feel free to add on additional precision and detail, as appropriate, but this is a fantastic starting point and framework for how to structure your information.
We’re going to set our working draft aside for the moment, and dive into…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 2rem;">
<p class="tw-xl">PROPOSAL</p>
<p class="tw-lg">How are you solving the problem<br><strong>at a high level?</strong></p>
</div>
<!--
The Proposed Solution section, this answers how are you solving the problem at a high level.
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

1. What technical components are we changing or creating?
1. How do they relate to each other?
1. How do they collectively solve the problem?
1. What key decisions did you make for each component?
<!--
Anyone reading your design after completing this section should understand at a high level 4 things…
1, 2, 3
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 2.2rem;">
<p class="tw-xl" style="font-size: 2rem;">USE YOUR WORKING DRAFT!</p>
<p class="tw-lg">Take the reader on a tour of your biggest decisions and introduce your technical concepts.</p>
</div>
<!--
The great news is we already wrote most of that! Use your working draft and take your reader on a tour of the biggest decisions. We’re introducing our main characters and big decisions in this section.
And we’ll structure it into two main parts.
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-split">
<img src="./images/proposal-summary-and-component-subsections.avif" alt="Proposal summary and component subsections" />
<div style="text-align: right; padding-top: 2.4rem;">
<p style="font-size: 1.5rem; font-weight: 700; margin: 0 0 1.6rem;">SUMMARY</p>
<p style="font-size: 1.5rem; font-weight: 700; margin: 0;">COMPONENTS</p>
</div>
</div>
<!--
Summary, where we give the highest of high level tours.
And components where we have subsections addressing each component that we need to change or modify in slightly more detail.
Starting with summary…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center tw-xl" style="font-size: 2rem;">SUMMARY ≈</p>

```js
while (concepts.length > 5) {
  concepts = concepts
    .groupBy(concept => getGroup(concept));
}

return concepts
 .map(group => summarize(group, {length: '1-sentence'}))
 .join('\n');
```
<!--
An algorithm for it looks roughly like this…
Translated to natural english it should follow some format like…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL
---

**&lt;project name&gt; consists of…**

- **&lt;technical concept 1&gt; that &lt;reason for existence&gt;.**
- **Updating &lt;technical concept 2&gt; to &lt;how it changes&gt;.**
- **…**

&lt;summary of how together they solve the problem&gt;

[optional] &lt;high-level diagram of entire system&gt;
<!--
This.
Start with your <your project name>, describe your components
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • EXAMPLE
---

GitHub Pull Request Reviewer consists of…

- PR View, a new Next.js page that implements the web UI.
- usePRData, a React hook that aggregates associated pull request data from multiple downstream APIs.
- /pulls/*, new API routes that store and retrieve pull request specific data.
- Updating /repos/* routes to retrieve code for a particular commit hash.
- Updating /actions/* routes to retrieve CI logs for a particular commit hash.

The user will visit the PR view in their browser. All requests for data will go through the usePRData hook which requests from either /pulls/* routes, /repos/* routes, or /actions/* routes.
<!--
To make that concrete, this is what it might look for our Pull request example.
<read slide>
Very simple, very high level, but I walk away understanding so much already. Ah OK so this project is a new Next.js page, mostly reusing existing APIs with a bit of extra data, and a hook that brings it all together. If you can’t express your plan this simply, you either don’t understand it well enough or you’ve done something wrong. I don’t care how big it is. I’ve seen projects successfully proposed and delivered using this format that took 30 engineering-years to complete. If you find yourself writing too much, you’ll probably want to move that content to what we’re discussing next…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<p class="tw-center tw-xl" style="font-size: 2rem;">COMPONENT SUBSECTIONS ≈</p>

1. What does the component do?
1. How are you creating or changing it?
1. What major decisions did you make for it?
<!--
Our component subsections! Here we’re diving a bit deeper and trying to answer these questions…
<slide content>
If these sound familiar…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 2.2rem;">
<p class="tw-xl" style="font-size: 2rem;">WE ALREADY WROTE THIS!</p>
<p class="tw-lg">Use your concept groups from the summary and bring in details from the working draft.</p>
</div>
<!--
It’s because we already wrote this!
<slide content>
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-draft">
<div>
<p class="tw-xl" style="font-size: 1.8rem; text-align: left;">Recall Working Draft</p>
<p>We wrote down…</p>

1. A sentence explaining what it is.
1. Every decision we spent &gt;5s on.
1. Every option we spent &gt;5m on.
</div>
<img src="./images/working-draft-decisions-and-options.avif" alt="Working draft decisions and options" />
</div>
<!--
Remember in our working draft we already wrote down…
<slide content>
To convert this into a component subsection we just need to make a few adjustments.
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT
---

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.6rem;">
<div>
<p style="font-size:1.25rem;margin-bottom:0.8rem;">Concept with options</p>
<div style="display:grid;grid-template-columns:auto 1fr;gap:0.55rem 0.7rem;align-items:center;">
  <span style="display:inline-block;background:#ffab40;color:#111;font-size:0.72rem;font-weight:700;letter-spacing:0.06em;padding:0.2rem 0.45rem;text-align:center;">WINNING OPTION</span>
  <div style="background:#1c1c1c;border:1px solid #3a3a3a;border-radius:4px;padding:0.55rem 0.7rem;">Proposal<br>Component</div>
  <span style="display:inline-block;background:#2a2a2a;color:#eee;font-size:0.72rem;font-weight:700;letter-spacing:0.06em;padding:0.2rem 0.45rem;text-align:center;">EVERYTHING ELSE</span>
  <div style="background:#1c1c1c;border:1px solid #3a3a3a;border-radius:4px;padding:0.55rem 0.7rem;">SupplementalDetails</div>
</div>
</div>
<div>
<p style="font-size:1.25rem;margin-bottom:0.8rem;">Concept without options</p>
<div style="background:#1c1c1c;border:1px solid #3a3a3a;border-radius:4px;padding:0.7rem 0.8rem;">Proposal<br>Component</div>
</div>
</div>
<!--
For any concept with multiple options, describe the winning option in the appropriate subsection as you decided it should be done, don’t do lots of justification. Just explain what you’re proposing. Move all the rest of your content into an “Alternatives Considered” section in your supplemental details.
For any concept without multiple options where you just wrote down result of the decision, stick those in your bullets.
When you’re done, you should end up with something like this…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT
---

&lt;concept&gt; is a &lt;technical description&gt; that &lt;reason for its existence&gt;. &lt;1-2 setnences about how it works&gt;

[optional] &lt;diagram or code snippet of structure / interface&gt;

&lt;bulleted list of key decisions you made&gt;

&lt;subsections for child concepts&gt;
<!--
A single sentence about what it _is_. 1-2 sentences about how it works. Including  diagram or SHORT code snippet of the interface if you think it would help understand what it does, then your bulleted list of decisions that you made, no justification necessary here! Just the decision! Everything else you thought of in your working draft gets put down into supplemental details
Then recurse for any child components you may have grouped together.
To look at a concrete example…
-->

---
layout: default
eyebrow: ANATOMY OF A TECH SPEC • PROPOSAL • COMPONENT • EXAMPLE
---

**PR APIs**
PR APIs are new API routes on our Next.js app that store and retrieve pull request information. These routes are the source of truth for information specific to a pull request but do not embed or provide aggregated access to associated information such as individual commits.

Key Decisions
- New routes, not data added to existing API calls.
- Stores data in a new `pull_requests` table in our postgres database.
- Does not duplicate / aggregate data available in other services.

**GET /pulls/:id**
getPullRequest is a GET endpoint that retrieves the pull request data for a given ID.

Key Decisions
- Retrieves by ID only, no property-based querying.
- Does not retrieve embedded child entities such as comments.
<!--
Our overarching component group is a set of pull request APIs. Very simply they are a few new routes in our Next.js app that store and retrieve information about pull requests.
Then we have a brief 1-sentence description for each route we’re proposing.
And Bada-bing-bada-boom, we’re done!
-->

---
layout: default
eyebrow: TECHNICAL WRITING WORKSHOP • RECAP
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 3.4rem;">
<p class="tw-xl" style="font-size: 3.2rem;">RECAP</p>
</div>

---
layout: default
eyebrow: TECHNICAL WRITING WORKSHOP • RECAP
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.8rem;">
<p class="tw-xl">WHY WRITE?</p>
<div class="tw-three">
<p>Yourself</p>
<p>Others</p>
<p>Posterity</p>
</div>
</div>

---
layout: default
eyebrow: TECHNICAL WRITING WORKSHOP • RECAP
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.6rem;">
<p class="tw-xl">3 STEPS OF<br>PROBLEM SOLVING</p>
<div class="tw-three">
<p>What do we need?</p>
<p><strong>How could we?</strong></p>
<p><strong>How should we?</strong></p>
</div>
</div>

---
layout: default
eyebrow: TECHNICAL WRITING WORKSHOP • RECAP
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

<div class="tw-center" style="padding-top: 1.2rem;">
<p class="tw-xl">PROPOSAL</p>
<p class="tw-lg">Introduce your main characters.</p>
<p class="tw-lg">How do they relate to each other?</p>
<p class="tw-lg">How do they collectively solve the problem?</p>
<p class="tw-lg">What major decisions did you make?</p>
</div>

---
layout: end
eyebrow: THANK YOU
---

<style>
.tw-process { text-align: center; }
.tw-process h2 { font-size: 2rem; margin: 0.4rem 0 1.4rem; }
.tw-steps { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
.tw-step { background: #1c1c1c; border: 2px solid #333; border-radius: 6px; padding: 1.1rem 0.85rem 1.2rem; min-height: 11rem; }
.tw-step.is-on { border-color: #ffab40; background: #1f1a12; }
.tw-step.is-off { opacity: 0.42; }
.tw-num { width: 2rem; height: 2rem; margin: 0 auto 0.55rem; border-radius: 999px; background: #ffab40; color: #111; font-weight: 700; font-size: 1rem; line-height: 2rem; }
.tw-step h3 { color: #fff; font-size: 1.05rem; margin: 0 0 0.45rem; }
.tw-step p { font-size: 0.82rem; color: #cfcfcf; margin: 0; line-height: 1.35; }
.tw-chips { display: flex; flex-wrap: wrap; gap: 0.45rem; justify-content: center; }
.tw-chip { background: #2a2a2a; color: #eee; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; padding: 0.35rem 0.55rem; border-radius: 3px; }
.tw-chip.on { background: #ffab40; color: #111; }
.tw-legend { display: flex; gap: 1.4rem; justify-content: center; margin-top: 0.6rem; font-weight: 700; }
.tw-legend span { display: flex; align-items: center; gap: 0.4rem; font-size: 0.95rem; }
.tw-swatch { width: 0.85rem; height: 0.85rem; border-radius: 2px; display: inline-block; }
.tw-box { background: #1c1c1c; border: 1px solid #3a3a3a; border-radius: 4px; padding: 0.7rem 0.8rem; text-align: center; }
.tw-box strong { display: block; font-size: 0.85rem; letter-spacing: 0.06em; color: #ffab40; }
.tw-logos { display: flex; align-items: center; justify-content: center; gap: 2.4rem; height: 100%; }
.tw-logos img { max-height: 4.2rem; width: auto; }
.tw-shots { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.7rem; align-items: start; }
.tw-shots img { width: 100%; height: 13.5rem; object-fit: cover; object-position: top; border-radius: 3px; }
.tw-draft { display: grid; grid-template-columns: 1.05fr 1fr; gap: 1.2rem; align-items: start; }
.tw-draft img { width: 100%; max-height: 16.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-codepair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.tw-codepair pre { font-size: 0.72rem !important; margin: 0; }
.tw-gut { display: inline-block; background: #ffab40; color: #111; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; padding: 0.2rem 0.5rem; margin-bottom: 0.5rem; }
.tw-qs { display: flex; flex-direction: column; gap: 0.55rem; }
.tw-q { display: grid; grid-template-columns: auto 1fr auto; gap: 0.7rem; align-items: center; background: #1c1c1c; padding: 0.45rem 0.7rem; border-radius: 4px; }
.tw-q img { height: 1.35rem; width: auto; }
.tw-q .tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; color: #ffab40; }
.tw-q .tag.assumed { color: #e57373; }
.tw-center { text-align: center; }
.tw-xl { font-size: 2.6rem; font-weight: 700; margin: 0.2rem 0 0.7rem; }
.tw-lg { font-size: 1.45rem; line-height: 1.4; }
.tw-three { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; text-align: center; margin-top: 1.4rem; }
.tw-three p { font-size: 1.25rem; margin: 0; }
.tw-spec { display: grid; grid-template-columns: 1.1fr 1fr; gap: 1.2rem; align-items: start; }
.tw-spec img { width: 100%; max-height: 16rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-split { display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.1rem; align-items: center; }
.tw-split img { width: 100%; max-height: 15.5rem; object-fit: contain; background: #fff; border-radius: 3px; }
.tw-about-logos { display: flex; flex-wrap: wrap; gap: 0.55rem; justify-content: center; margin-top: 0.7rem; }
.tw-about-logos img { height: 1.7rem; width: auto; }
</style>

# Thank You

Questions? Concerns? Feedback?

- 🐦 patrickhulce
- 📧 patrick.hulce@gmail.com
- /in/patrickhulce

<div class="tw-about-logos" style="justify-content: flex-start; margin-top: 1.2rem;">
  <img src="./images/threads.avif" alt="Threads" />
  <img src="./images/linkedin.avif" alt="LinkedIn" />
</div>
