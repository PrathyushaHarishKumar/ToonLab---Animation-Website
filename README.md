# 🎨 ToonLab — Animation Studio for Young Creators

> A free, browser-based animation studio designed for kids ages 11–13. Make flipbooks, animate tweens, pose a whole cast of stickmen, spin characters in 3D, take on challenges, build movies together, and direct your own mini-movies — no install, no account, no ads, no tracking. **Your work auto-saves and follows you between tools.**

![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Styled with CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black)
![No build step](https://img.shields.io/badge/Build%20step-None-success)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

---

## ✨ What's inside

ToonLab teaches real animation concepts through five hands-on tools, each one designed to feel like play but secretly teach a fundamental of the craft.

### 🎬 Movie Maker  *(the headline tool)*
Be the director of your own mini-movie.
- 8 magical worlds (Forest, Castle, Under-the-Sea, Outer Space, Sunny Beach, Night City, Desert, Snowy Mountain)
- 30 characters + 30 props (dragons, knights, princesses, fairies, robots, mermaids, ghosts…)
- **🧍 Body "Movers"** — articulated characters with arms and legs that actually **move**: pick Walk / Wave / Jump / Dance / Idle, and they keep moving right through playback
- Drag-anywhere stage, resizable characters, mirror flip, speech bubbles
- Multi-scene timeline with smooth tweening between scenes
- **▶ Play Movie** mode with cinema bars, rainbow title card, soundtrack, and "⭐ The End"
- 5 synthesized soundtracks (Happy / Adventure / Mystery / Dance Party / Dreamy)
- Export the current scene as a PNG with a title credit bar
- Auto-saves; download/open your movie as a `.toon` file

### 🧊 3D Studio  *(NEW)*
Animate a character in **real 3D** using the browser's 3D engine — zero libraries.
- 6-sided characters (Dice, Buddy, Robo, Cat, Space, Gift)
- Spin (turn), tilt, move left/right & up/down, and grow with live sliders
- Keyframe it, change it, keyframe again — **▶ Play** smoothly tweens through 3D space
- Built-in **prompt cards** ("spin a full 360°", "a slow lift-off…") for when you're stuck
- Speed control + loop; auto-saves and downloads

### 🏅 Challenges  *(NEW)*
Never run out of ideas.
- 12 hand-written challenges across Easy / Medium / Hard, each with a creative prompt, a goal, and a one-click jump into the right tool
- **🎲 Surprise-me** random prompt generator
- Tick **✓ I did it!** to earn challenges — your progress is remembered on the device
- Filter by difficulty or "not done yet"

### 👥 Group Project  *(NEW)*
Make an animation **together** — even with no internet.
- Everyone builds their own scene (world + characters + a caption)
- **Share codes**: get a code, send it to a friend any way you like, they paste it in — now you *both* have all the scenes
- Combine everyone's scenes into one **group movie** and press ▶ Play
- The whole project auto-saves and downloads

### 📒 Flipbook
Frame-by-frame drawing on canvas — the classic way.
- Brush + eraser, 8-color palette, brush-size slider
- **Onion-skinning** (see a ghost of the previous frame)
- Adjustable FPS, play/stop loop, save current frame as PNG

### 🏀 Bouncer
Keyframe tweening with 5 easing curves.
- Drop shapes (ball, box, wedge, star)
- Drag the START point, drag the END point
- Pick easing: Linear / Ease-out / Ease-in / Bounce / Elastic
- Looping playback

### 🕺 Stickman
Pose-based character animation — now with a **whole cast**.
- 13-joint stick figures with draggable handles
- **➕ Add as many stickmen as you want**, each its own color, all posable on one stage
- 6 preset poses (stand / wave / jump / run / dance / sit) applied to the picked figure
- Every keyframe remembers *all* the stickmen, so they can dance together
- Save poses as keyframes, play as a loop; auto-saves and downloads

### 🧠 Learn
The **12 Principles of Animation** by Frank Thomas & Ollie Johnston, each with a live CSS demo, plus a history of animation, fun facts, and a glossary.

### 🏆 Quiz
30 original questions to test what you learned, split across Easy / Medium / Hard / Mix-All.
- Multiple-choice with instant feedback + plain-English explanations
- Animated progress bar, live score, and shuffled answers every play
- Medal system at the end (📒 → 🥉 → 🥈 → 🥇 → 🏆) with confetti, fanfare, and a per-question review

---

## 💾 Save & share your work

ToonLab now remembers what you make.

- **Auto-save** — every tool (Movie, 3D, Flipbook, Bouncer, Stickman, Group) quietly saves to your browser as you work. A little **💾 Saved** pill blinks in the nav.
- **Your work follows you** — switch from Flipbook to Stickman and back, or close the tab and return tomorrow; it's still there. No more losing a drawing just because you opened another tool.
- **Download / Open** — every studio has a **⬇ Download my work** button that saves a small `.toon` project file, and **📂 Open a file** to load it back (great for backups or moving between computers).
- **Share codes** (Group Project) — turn your scenes into a code you can text or email to a friend.
- 100% on-device: it all uses `localStorage` and plain file downloads. No account, no upload, no server, no tracking.

---

## 🎁 Polish & delight

- 🌈 Animated rainbow-gradient sky background with floating sparkle stars
- 🤖 Hand-built SVG mascot on the homepage (waves, blinks, holds a paintbrush)
- 🎉 Confetti bursts on every major action
- 🔊 Real-time **Web Audio synthesizer** for sound effects (zero audio files)
- 🎯 Cursor sparkle trail that smartly disables itself over the drawing canvas
- 🏆 Achievement toasts ("Frame added! Now draw it a little different.")
- 🔇 Sound toggle persisted to `localStorage`
- ♿ Respects `prefers-reduced-motion`
- 📱 Fully responsive (works on phones and tablets)

---

## 🚀 Quick start

### Run it locally
Just double-click `index.html`. That's it.

For a slightly nicer experience (some browsers prefer this):
```bash
# from inside the ToonLab folder
python -m http.server 8000
# then open http://localhost:8000
```

### Deploy it free (pick your favorite)

| Platform | How |
|---|---|
| **Netlify Drop** | Go to [app.netlify.com/drop](https://app.netlify.com/drop) → drag the `ToonLab` folder onto the page. Done. |
| **GitHub Pages** | Push the repo → Settings → Pages → Source: main / root. Live at `https://USER.github.io/REPO/`. |
| **Cloudflare Pages** | [pages.cloudflare.com](https://pages.cloudflare.com) → Direct Upload → pick a name. |
| **Vercel** | [vercel.com](https://vercel.com) → Add New Project → drag the folder in. |

All four are free forever for static sites of this size, no credit card required.

---

## 🗂 Project structure

```
ToonLab/
├── index.html       # Landing page with hero mascot, featured Movie card, tools, ticker
├── movie.html       # Movie Maker — multi-scene director tool (+ animated body Movers)
├── world3d.html     # 3D Studio — CSS-3D keyframe animator with prompts
├── flipbook.html    # Frame-by-frame drawing animator
├── bouncer.html     # Keyframe tween animator
├── stickman.html    # Pose-based animator — supports a whole cast of stickmen
├── challenge.html   # Animation challenges + creative prompts (progress saved)
├── collab.html      # Group Project — build scenes, share codes, combine into one movie
├── learn.html       # 12 Principles of Animation + history + glossary
├── quiz.html        # 30-question Easy/Medium/Hard quiz with medals + review
├── styles.css       # Shared design system (one file, no preprocessor)
├── fx.js            # Confetti, sparkles, Web Audio synth, toasts (~150 lines)
├── store.js         # Save system: auto-save, download/open .toon files, "Saved" pill
├── README.md
└── LICENSE
```

---

## 🛠 Tech & design notes

- **Zero dependencies, zero build step.** Pure HTML + CSS + JS. Works offline once loaded.
- **No tracking, no analytics, no third-party scripts.** Privacy-first by default.
- **Web Audio API** for all sound (synthesized in-browser — no `.mp3` files).
- **Canvas 2D** for the drawing tools (Flipbook, Bouncer, Stickman).
- **CSS 3D transforms** (`perspective` + `rotateX/Y` + `translate3d`) power the 3D Studio — no WebGL, no three.js.
- **`localStorage` + JSON** for auto-save; downloads are plain `.toon` (JSON) files via a Blob.
- **SVG-rigged characters** for the Movie Maker's animated body "Movers" (limbs animated with CSS keyframes).
- **DOM + percentage positioning** for the Movie Maker stage (so it scales responsively).
- **CSS custom properties** for the entire color system — change them once in `:root` and the whole site re-themes.
- **Google Fonts**: Fredoka (display) + Nunito (body).
- **Emoji as character sprites** — universally available, instantly recognizable, zero bandwidth.

---

## 🎓 Pedagogy

Each tool intentionally maps to a real animation technique:

| Tool | Real-world equivalent |
|---|---|
| Movie Maker | Storyboarding + multi-scene direction (think: an animatic) |
| 3D Studio | 3D keyframe animation across the X/Y/Z axes |
| Flipbook | Straight-ahead frame-by-frame animation |
| Bouncer | Tweening / in-betweening with easing curves |
| Stickman | Pose-to-pose keyframe animation + rigging a cast |
| Group Project | Collaborative production — how real studios split the work |
| Challenges | Briefs & prompts — practising to a creative goal |

The Learn page reinforces this with the **12 Principles** every Disney/Pixar animator studies.

---

## 📜 License

MIT — see [LICENSE](LICENSE). Use it, fork it, remix it, give it to a kid you know.

---

## 🙌 Credits

Built as a free educational project for young creators.
Fonts: [Fredoka](https://fonts.google.com/specimen/Fredoka), [Nunito](https://fonts.google.com/specimen/Nunito) (SIL Open Font License).
All character artwork uses standard Unicode emoji glyphs.

> Drawing is a superpower. Keep going! 🚀
