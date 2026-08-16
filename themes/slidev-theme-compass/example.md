---
theme: ./
title: Compass Theme Starter
info: |
  Copy this file to start a Compass-styled talk.
  Layouts: cover, intro, default, section, statement, end.
---

---
layout: cover
event: Meetup Name
date: Month 2026
speaker: Your Name
kicker: ENGINEERING
---

# Talk Title Goes Here

---
layout: intro
eyebrow: ABOUT THE SPEAKER
---

::media::

<div class="w-full h-48 bg-[#83a7b8]" />

::default::

- Role or one-line bio
- Previous team or project
- What you like building

---
layout: default
eyebrow: AGENDA
---

- What problem are we solving?
- How should you approach it?
- A concrete walkthrough

---
layout: section
---

# First Chapter

What this section is about

---
layout: default
eyebrow: FIRST CHAPTER • BACKGROUND
---

# Name the idea

A short definition the room can hold onto. Keep this to two or three sentences, then show the shape of the work.

- One implication
- One constraint
- One thing you will demo

---
layout: default
eyebrow: FIRST CHAPTER • CODE
---

# Show the interesting bit

```ts
export function prepare(input: string) {
  const trimmed = input.trim()
  if (!trimmed)
    throw new Error('empty input')
  return trimmed.toLowerCase()
}
```

---
layout: statement
---

# Disclaimer!

There is more than one way to do this. If you already have a method that works, keep using it.

---
layout: end
eyebrow: THANK YOU
---

# Thank You

Questions? Concerns? Feedback?

- yourhandle
- you@example.com
- /in/yourname
