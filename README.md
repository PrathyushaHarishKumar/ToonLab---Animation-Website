# 🎨 ToonLab — Animation Studio for Young Creators

> A free, browser-based animation studio designed for kids ages 11–13. Make flipbooks, animate tweens, pose stickmen, and direct your own mini-movies — no install, no account, no ads, no tracking.

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
- Drag-anywhere stage, resizable characters, mirror flip, speech bubbles
- Multi-scene timeline with smooth tweening between scenes
- **▶ Play Movie** mode with cinema bars, rainbow title card, soundtrack, and "⭐ The End"
- 5 synthesized soundtracks (Happy / Adventure / Mystery / Dance Party / Dreamy)
- Export the current scene as a PNG with a title credit bar

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
Pose-based character animation.
- 11-joint stick figure with draggable handles
- 6 preset poses (stand / wave / jump / run / dance / sit)
- Save poses as keyframes, play as flipbook

### 🧠 Learn
The **12 Principles of Animation** by Frank Thomas & Ollie Johnston, each with a live CSS demo, plus a history of animation, fun facts, and a glossary.

### 🏆 Quiz
30 original questions to test what you learned, split across Easy / Medium / Hard / Mix-All.
- Multiple-choice with instant feedback + plain-English explanations
- Animated progress bar, live score, and shuffled answers every play
- Medal system at the end (📒 → 🥉 → 🥈 → 🥇 → 🏆) with confetti, fanfare, and a per-question review

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
├── movie.html       # Movie Maker — multi-scene director tool
├── flipbook.html    # Frame-by-frame drawing animator
├── bouncer.html     # Keyframe tween animator
├── stickman.html    # Pose-based stickman animator
├── learn.html       # 12 Principles of Animation + history + glossary
├── quiz.html        # 30-question Easy/Medium/Hard quiz with medals + review
├── styles.css       # Shared design system (one file, no preprocessor)
├── fx.js            # Confetti, sparkles, Web Audio synth, toasts (~150 lines)
├── README.md
└── LICENSE
```

---

## 🛠 Tech & design notes

- **Zero dependencies, zero build step.** Pure HTML + CSS + JS. Works offline once loaded.
- **No tracking, no analytics, no third-party scripts.** Privacy-first by default.
- **Web Audio API** for all sound (synthesized in-browser — no `.mp3` files).
- **Canvas 2D** for the drawing tools (Flipbook, Bouncer, Stickman).
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
| Flipbook | Straight-ahead frame-by-frame animation |
| Bouncer | Tweening / in-betweening with easing curves |
| Stickman | Pose-to-pose keyframe animation + rigging |

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
