---
theme: ../../../themes/slidev-theme-compass
title: Performance Profiling & React 18 Improvements
info: ReactJS Dallas · May 2022
layout: cover
event: ReactJS Dallas
date: May 2022
speaker: Patrick Hulce
kicker: ENGINEERING
---

# Performance Profiling & React 18 Improvements

---
layout: intro
eyebrow: ABOUT PATRICK
---

::media::

<div class="grid grid-cols-2 gap-3">
  <img src="./images/mikes-cereal-shack-erin-hannon.avif" alt="Mike's Cereal Shack — Erin Hannon" />
  <img src="./images/mikes-cereal-shack-pam-beesly.avif" alt="Mike's Cereal Shack — Pam Beesly" />
</div>

::default::

**www.mikescerealshack.co**

---
layout: intro
eyebrow: ABOUT PATRICK
---

::media::

<div class="flex flex-col gap-3">
  <img src="./images/patrick-hulce.avif" alt="Patrick Hulce" />
  <div class="grid grid-cols-4 gap-2 items-center">
    <img src="./images/compass.avif" alt="Compass" />
    <img src="./images/chrome.avif" alt="Chrome" />
    <img src="./images/lighthouse.avif" alt="Lighthouse" />
    <img src="./images/the-office.avif" alt="The Office" />
  </div>
</div>

::default::

- Senior Staff Engineer at Compass
- Ex-Chrome, Lighthouse core team
- Loves JavaScript, The Office, photography

---
layout: default
eyebrow: AGENDA
---

1. React Lifecycle Overview
2. How to profile a React app
3. React 18 Concurrent Features

---
layout: section
---

# REACT LIFECYCLE

What is React doing under the hood?

---
layout: default
eyebrow: REACT LIFECYCLE • BACKGROUND
---

# DOM

**Document Object Model**

The set of state + APIs that browsers provide developers to build a webpage.

---
layout: default
eyebrow: REACT LIFECYCLE • BACKGROUND
---

# VIRTUAL DOM

A programming pattern that enables end developers to declare a desired DOM node tree and delegate actual DOM mutations to a framework.

---
layout: default
eyebrow: REACT LIFECYCLE • BACKGROUND
---

# VIRTUAL DOM

<div class="flex items-center justify-center gap-24 mt-16">
  <div class="text-3xl font-semibold">Imperative</div>
  <div class="text-3xl font-semibold">Declarative</div>
</div>

---
layout: default
eyebrow: REACT LIFECYCLE • BACKGROUND
---

<div class="grid grid-cols-2 gap-8">

<div>

**jQuery - 2008**

```js
$('.is-loading').show();
$('.cancel-btn').show();
$('.lets-hope-it-matches')
  .prop('disabled', true);
$('.cancel-btn').click(function () {
  $('.is-loading').hide();
  $('.cancel-btn').hide();
  $('.lets-hope-it-matches')
    .prop('disabled', false);
});
```

```html
<div class="is-loading hidden"></div>
<button class="cancel-btn hidden">
  Cancel
</button>
<button class="lets-hope-it-matches">
  Submit
</button>
```

</div>

<div>

**React - 2013**

```jsx
const loadingElements = <div>
  <LoadingSpinner />
  <button
    onClick={() => setIsLoading(false)}>
    Cancel
  </button>
</div>;

{isLoading ? loadingElements : null}
<button disabled={isLoading}>
  Submit
</button>
```

</div>

</div>

---
layout: default
eyebrow: REACT LIFECYCLE • RECONCILIATION
---

# RECONCILIATION

The process by which React determines the set of actual DOM mutations required to reach the declared virtual DOM tree.

---
layout: default
eyebrow: REACT LIFECYCLE • RECONCILIATION
---

<div class="grid grid-cols-2 gap-8">

<div>

**Virtual DOM**

```html
<div>
  <div class="loading-spinner"></div>
  <button onClick={someFunction}>
    Cancel
  </button>
  <button disabled>
    Submit
  </button>
</div>
```

</div>

<div>

**Actual DOM**

```html
<div>
  <button>
    Submit
  </button>
</div>
```

</div>

</div>

1. Create div. Insert into div before button.
    1. Append "loading-spinner" to classList.
2. Create button. Insert into div before button.
    1. Add event listener someFunction.
    2. Create text node with content Cancel. Insert into div>button:nth-child(2).
3. Set property disabled to true on div>button:nth-child(3).

---
layout: default
eyebrow: REACT LIFECYCLE • RENDER + COMMIT
---

# RENDER

**Computing the virtual DOM tree.**

---
layout: default
eyebrow: REACT LIFECYCLE • RENDER + COMMIT
---

# COMMIT

**Creating the actual DOM tree.**

---
layout: default
eyebrow: REACT LIFECYCLE • RENDER + COMMIT
---

<div class="lifecycle">
  <div class="lifecycle-phase">
    <h2>RENDER</h2>
    <div class="lifecycle-tracks">
      <div class="lifecycle-track">
        <div class="lifecycle-label">CLASSES (mount)</div>
        <div class="lifecycle-steps">
          <code>constructor()</code>
          <code>render()</code>
          <code>reconciliation()</code>
        </div>
      </div>
      <div class="lifecycle-track">
        <div class="lifecycle-label">CLASSES (update)</div>
        <div class="lifecycle-steps">
          <code>shouldComponentUpdate()</code>
          <code>render()</code>
          <code>reconciliation()</code>
        </div>
      </div>
      <div class="lifecycle-track">
        <div class="lifecycle-label">HOOKS</div>
        <div class="lifecycle-steps">
          <code>render()</code>
          <code>reconciliation()</code>
        </div>
      </div>
    </div>
  </div>
  <div class="lifecycle-bridge">DOM updated</div>
  <div class="lifecycle-phase">
    <h2>COMMIT</h2>
    <div class="lifecycle-tracks">
      <div class="lifecycle-track">
        <div class="lifecycle-label">CLASSES (mount)</div>
        <div class="lifecycle-steps">
          <code>componentDidMount()</code>
        </div>
      </div>
      <div class="lifecycle-track">
        <div class="lifecycle-label">CLASSES (update)</div>
        <div class="lifecycle-steps">
          <code>componentDidUpdate()</code>
        </div>
      </div>
      <div class="lifecycle-track">
        <div class="lifecycle-label">HOOKS</div>
        <div class="lifecycle-steps">
          <code>useLayoutEffect()</code>
        </div>
      </div>
    </div>
    <p class="lifecycle-yield">Yields to browser render</p>
    <div class="lifecycle-steps">
      <code>useEffect()</code>
    </div>
  </div>
</div>

<style>
.lifecycle {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.2rem;
  align-items: start;
  margin-top: 0.4rem;
}
.lifecycle-phase h2 {
  font-size: 1.35rem;
  letter-spacing: 0.06em;
  margin-bottom: 0.7rem;
}
.lifecycle-tracks {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.lifecycle-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--c-muted);
  margin-bottom: 0.3rem;
}
.lifecycle-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}
.lifecycle-steps code {
  background: #1c1c1c !important;
  color: var(--c-accent) !important;
  font-size: 0.78rem !important;
  padding: 0.22rem 0.45rem !important;
}
.lifecycle-bridge {
  align-self: center;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--c-slate);
  letter-spacing: 0.04em;
}
.lifecycle-yield {
  margin: 0.7rem 0 0.4rem;
  font-size: 0.95rem;
  color: var(--c-chip-1);
}
</style>

---
layout: section
---

# PERFORMANCE PROFILING

How do we learn why React updates are taking so long?

---
layout: default
eyebrow: PERFORMANCE PROFILING • DEVTOOLS
---

# PERFORMANCE PANEL

**Visualizes JavaScript call stack over time.**

Built-in to Chromium (Chrome, Edge, Brave) DevTools

---
layout: default
eyebrow: PERFORMANCE PROFILING • REACT PROFILER
---

# REACT PROFILER

**Visualizes React component stack over time.**

Chrome browser extension (bit.ly/react-developer-tools)

---
layout: default
eyebrow: PERFORMANCE PROFILING • EXAMPLE APP
---

<div class="grid grid-cols-2 gap-6">

```jsx
function App(props) {
  const [search, setSearch] = useState('');

  return <div>
    <input type="text" value={search} {/* onChange, etc */} />
    <button onClick={props.addItem}>Add item</button>
    <Grid items={props.items} />
  </div>;
}

function Grid(props) {
  return <>{items.map((item, index) => {
    return <Row item={item} key={index} />
  })}</>;
}

function Row(props) {
  return <div>{/* the data... */}</div>;
}
```

<div class="flex flex-col gap-3">
  <p class="text-right font-semibold">bit.ly/react-profiling-17v18</p>
  <img src="./images/example-app-commits-around-the-world.avif" alt="Example app — Commits around the world" />
</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • GENERIC PROCESS DEVTOOLS
---

<div class="grid grid-cols-2 gap-6">

<div>

1. Load your beginning state.
2. Open Chromium DevTools > Performance.
3. Enable 4x CPU Throttling.
4. Click Record.
    1. Manually perform the interactions you want to measure.
    2. Stop recording.

</div>

<div class="flex flex-col gap-3">
  <img src="./images/example-app-commits-around-the-world.avif" alt="Example app" />
  <img src="./images/chromium-devtools-performance-panel.avif" alt="Chromium DevTools Performance panel" />
</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • GENERIC PROCESS REACT PROFILER
---

<div class="grid grid-cols-2 gap-6">

<div>

1. Load your beginning state.
2. Open Chrome DevTools > ⚛️ Profiler.
3. Leave 4x CPU Throttling enabled.
4. Click Record.
    1. Manually perform the interactions you want to measure.
    2. Stop recording.

</div>

<div class="flex flex-col gap-3">
  <img src="./images/example-app-commits-around-the-world.avif" alt="Example app" />
  <img src="./images/react-profiler-empty-state.avif" alt="React Profiler empty state" />
</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • DEMO
---

<div class="demo-word">DEMO</div>

<style>
.demo-word {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
</style>

---
layout: default
eyebrow: PERFORMANCE PROFILING • DEVTOOLS
---

<div class="grid grid-cols-[1.4fr_1fr] gap-6">

<div>
  <img src="./images/devtools-performance-flame-graph.avif" alt="DevTools Performance flame graph" />
  <div class="flex justify-between mt-2 text-sm font-semibold">
    <span>Click event</span>
    <span>Key event (4 times)</span>
  </div>
  <p class="text-center text-sm font-semibold mt-1">Time since recording started</p>
</div>

<div>

Flame graph visualizes JS call stack over time.

Sees everything the browser is doing.

Very helpful for debugging any user-visible performance issue.

Not very helpful for identifying specific slow components.

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • REACT PROFILER
---

<div class="grid grid-cols-[1.4fr_1fr] gap-6">

<div>
  <img src="./images/react-profiler-flame-graph.avif" alt="React Profiler flame graph" />
  <div class="flex justify-between mt-2 text-sm font-semibold">
    <span>Navigate between commits</span>
    <span>Visualize component timing</span>
  </div>
</div>

<div>

⚛️ Profiler visualizes how long each of our components takes to render.

Each view is a single render/commit.

Each row is a layer of component tree.

Very helpful for pinpointing specific components with slow render funcs.

Not very helpful for debugging user-visible latency issues.

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FLAME GRAPH
---

<div class="grid grid-cols-[1.35fr_1fr] gap-6">

<div>
  <img src="./images/click-event-flame-graph.avif" alt="Click event flame graph" />
  <div class="flex justify-between mt-2 text-sm font-semibold">
    <span>Render</span>
    <span>Commit</span>
  </div>
  <p class="text-center text-xs font-semibold mt-1">Long Task Threshold 50ms &nbsp;•&nbsp; 30fps 33ms &nbsp;•&nbsp; 60fps 16ms</p>
  <p class="text-center text-sm font-semibold mt-1">Reason for execution</p>
</div>

<div>

Click event taking ~750ms.

Target is 100ms!

Slow render = slow 🏗 vDOM

Slow commit = slow 🏗 actual DOM

**Takeaway: both vDOM and actual DOM are slow for this click.**

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FLAME GRAPH
---

<div class="grid grid-cols-[1.35fr_1fr] gap-6">

<div>
  <img src="./images/keypress-event-flame-graph.avif" alt="Keypress event flame graph" />
  <div class="flex justify-between mt-2 text-sm font-semibold">
    <span>Render</span>
    <span>Commit</span>
  </div>
  <p class="text-center text-xs font-semibold mt-1">Long Task Threshold 50ms &nbsp;•&nbsp; 30fps 33ms &nbsp;•&nbsp; 60fps 16ms</p>
</div>

<div>

Keypress event is taking ~240ms.

Target is 16ms!

Slow render = slow 🏗 vDOM

Slow commit = slow 🏗 actual DOM

**Takeaway: mostly vDOM slowing down our keypresses.**

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • REACT PROFILER
---

<img src="./images/react-profiler-flame-graph.avif" alt="React Profiler flame graph" class="mx-auto" style="max-height: 14rem;" />

<p class="text-center font-semibold mt-6">⚛️ Profiler doesn’t tell us this!</p>
<p class="text-center font-semibold">It just shows the duration of our render functions.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FLAME GRAPH
---

<img src="./images/grid-and-row-flame-graph.avif" alt="Grid and Row flame graph" />

<div class="flex justify-between mt-2 text-sm font-semibold">
  <span>Us (Grid)</span>
  <span>React</span>
  <span>React</span>
  <span>Us (Row)</span>
</div>

<p class="text-center mt-4">Render is taking ~400ms.</p>
<p class="text-center">⚛️ Profiler only shows ~140ms.</p>
<p class="text-center font-semibold mt-2">Takeaway: it’s not just our components that are the problem; we’re asking React to do too much.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

```jsx
function App(props) {
  const [search, setSearch] = useState('');

  return <div>
    <button onClick={props.addItem}>Add item</button>
    <input
      type="text"
      value={search}
      onChange={(evt) => setSearch(evt.target.value)} />
    <Grid items={props.items} />
  </div>;
}
```

<p class="text-center font-semibold mt-4">On every keypress, we re-render the entire Grid.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<p class="text-center font-semibold">Fix: Only render Grid when Grid changes</p>
<p class="text-center font-semibold mb-3">(React.memo)</p>

<div class="grid grid-cols-2 gap-8">

<div>

**Before**

```jsx
export function Grid(props) {
  return <>{items.map((item, index) => {
    return <Row item={item} key={index} />
  })}</>;
}
```

</div>

<div>

**After**

```jsx
function Grid_(props) {
  return <>{items.map((item, index) => {
    return <Row item={item} key={index} />
  })}</>;
}

export const Grid = React.memo(Grid_);
```

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<div class="grid grid-cols-2 gap-6">

<div>
  <img src="./images/keypress-flame-graph-after-memo.avif" alt="Keypress flame graph after memo" />
  <p class="text-center font-semibold mt-3">🎉 Keypress handler down to ~10ms 🎉</p>
</div>

<div>
  <img src="./images/grid-memo-did-not-render.avif" alt="Grid_ memo did not render" />
  <p class="text-center font-semibold mt-3">🎉 Component renders &lt;1ms 🎉</p>
</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FLAME GRAPH
---

<img src="./images/click-event-flame-graph.avif" alt="Click event commit flame graph" />

<p class="text-center text-sm font-semibold mt-2">Commit</p>
<p class="text-center mt-3">Commit is taking ~250ms.</p>
<p class="text-center font-semibold">Takeaway: we’re asking React to do too many actual DOM mutations.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<div class="grid grid-cols-2 gap-8">

```jsx
function Grid(props) {
  return <>{props.items.map((item, index) => {
    return <Row item={item} key={index} />
  })}</>;
}
```

```jsx
function Grid(props) {
  return <>{props.items.map((item, index) => {
    return <Row item={item}             />
  })}</>;
}
```

</div>

<p class="text-center font-semibold mt-4">On every insertion at the front of items, we throw away and recreate every row.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<p class="text-center font-semibold">Fix: Reuse the Row elements.</p>
<p class="text-center font-semibold mb-3">(proper key usage)</p>

<div class="grid grid-cols-2 gap-8">

<div>

**Before**

```jsx
export function Grid(props) {
  return <>{items.map((item, index) => {
    return <Row item={item} key={index} />
  })}</>;
}
```

</div>

<div>

**After**

```jsx
export function Grid(props) {
  return <>{items.map((item, index) => {
    return <Row item={item} key={item.id} />
  })}</>;
}
```

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<img src="./images/click-handler-flame-graph-after-keys.avif" alt="Click handler flame graph after keys" />

<div class="flex justify-between mt-2 text-sm font-semibold">
  <span>Render</span>
  <span>Commit</span>
</div>

<p class="text-center font-semibold mt-4">🎉 Click handler down to ~400ms 🎉</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

```jsx
function Grid(props) {
  return <>{props.items.map((item, index) => {
    return <Row item={item} key={item.id} />
  })}</>;
}
```

<p class="text-center font-semibold mt-4">On every new item, we re-render every Row.</p>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<p class="text-center font-semibold">Fix: Only render Row when Row changes</p>
<p class="text-center font-semibold mb-3">(React.memo)</p>

<div class="grid grid-cols-2 gap-8">

<div>

**Before**

```jsx
export function Row(props) {
  return <div>{/* the data... */}</div>;
}
```

</div>

<div>

**After**

```jsx
function Row_(props) {
  return <div>{/* the data... */}</div>;
}

export const Row = React.memo(Row_);
```

</div>

</div>

---
layout: default
eyebrow: PERFORMANCE PROFILING • FIXES
---

<div class="grid grid-cols-2 gap-6">

<div>
  <img src="./images/click-handler-flame-graph-after-row-memo.avif" alt="Click handler flame graph after Row memo" />
  <p class="text-center font-semibold mt-3">🎉 Click handler down to ~100ms 🎉</p>
</div>

<div>
  <img src="./images/row-memo-did-not-render.avif" alt="Row_ memo did not render" />
  <p class="text-center font-semibold mt-3">🎉 Component renders ~20ms 🎉</p>
</div>

</div>

---
layout: section
---

# REACT 18 IMPROVEMENTS

What improvements did React 18 to interaction performance?

---
layout: default
eyebrow: REACT 18 • CONCURRENT FEATURES
---

# CONCURRENT FEATURES

Enable React to work on the render phase in the background, so main thread remains available.

---
layout: default
eyebrow: REACT 18 • CONCURRENT FEATURES
---

```jsx
import {createItem} from './data'

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [isPending, startTransition] = useTransition();

  const asyncRenderedClickHandler = () => {
    startTransition(() => setItems([...items, createItem(search)]));
  };

  return <div>
    <input type="text" value={search}
        onChange={evt => setSearch(evt.target.value)} />
    <button disabled={isPending}
        onClick={asyncRenderedClickHandler}>
      Add item
    </button>
    <Grid items={items} />
  </div>;
}
```

---
layout: default
eyebrow: REACT 18 • DEMO
---

<div class="demo-word">DEMO</div>

<style>
.demo-word {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}
</style>

---
layout: default
eyebrow: REACT 18 • CONCURRENT FEATURES
---

<div class="grid grid-cols-[1.35fr_1fr] gap-6">

<div>
  <img src="./images/concurrent-render-flame-graph.avif" alt="Concurrent render flame graph" />
  <div class="flex justify-between mt-2 text-sm font-semibold">
    <span>Render</span>
    <span>Commit</span>
  </div>
</div>

<div>

<p class="text-5xl font-semibold mb-4">????</p>

React broke up the render phase of our Grid into hundreds of tiny chunks.

**This keeps the main thread available for the keypress changes to run concurrently.**

When Grid is done with render phase, the same large, synchronous commit phase is triggered.

</div>

</div>

---
layout: default
eyebrow: REACT 18 • CONCURRENT FEATURES
---

1. `startTransition` signals large state changes.
2. **React maintains interactivity for other state changes.**
3. Does not magically improve latency of large state changes themselves.

<p class="text-center font-semibold mt-8">Much More - https://reactjs.org/blog/2022/03/29/react-v18.html</p>

---
layout: end
eyebrow: THANK YOU
---

# Questions? Concerns? Feedback?

- 🐦 @patrickhulce
- 📧 patrick.hulce@gmail.com
