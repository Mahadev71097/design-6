# 💍 Wedding Invitation — Template

A premium, mobile-first (9:16) animated wedding invitation website.
Everything for a new client is changed in **ONE file**: `config.js`.

---

## 🚀 Quick start

1. Unzip the folder.
2. Open `config.js` in any text editor (Notepad, VS Code, etc).
3. Change the text, dates and file names (see guide below).
4. Replace the photos / video / music in the `assets/` folder (keep the same file names — easiest).
5. Open `index.html` in a browser to preview.
6. Upload the whole folder to any web host (Netlify, Vercel, GitHub Pages, cPanel, etc).

> ⚠️ Open it through a web host or a local server, not by double-clicking, if the
> video/music don't load — some browsers block local file media. A free option:
> drag the folder onto **netlify.com/drop**.

---

## 📁 Folder structure

```
wedding/
├── index.html          ← the website (do not need to edit)
├── config.js           ← ✏️ EDIT THIS for each client
├── README.md           ← this file
└── assets/
    ├── img/            ← photos, icons, backgrounds
    ├── video/          ← hero video + poster + last frame
    └── music/          ← background music
```

---

## ✏️ What to change in `config.js`

Open `config.js`. Every setting is labelled. The main ones:

| Setting | What it does |
|--------|--------------|
| `groomName`, `brideName` | Names on the hero screen |
| `coupleShort` | "Rohan & Ananya" — intro screen + browser tab |
| `introQuote` | Quote on the opening screen |
| `heroDate`, `heroDay` | Big date under the names |
| `countdownTarget` | Date/time the countdown counts down to |
| `events[]` | The event cards (add/remove/reorder freely) |
| `gallery` | Gallery subtitle + which 6 photos to use |
| `venue` | Hotel name, address lines, map link + embed |
| `media.musicOnByDefault` | `true` = music tries to start when invite opens |

### Dates
- `heroDate` is just display text: `"20 · 12 · 2026"`.
- `countdownTarget` must be a real date in this exact format:
  `"2026-12-20T06:30:00+05:30"` (the `+05:30` is India time — change if needed).

### Events
Each event card looks like this — copy the block to add more, delete to remove:
```js
{ icon:"mehendi", title:"Mehendi", tagline:"A celebration of colours & joy",
  date:"18 Dec 2026", day:"Friday", time:"5:00 PM onwards" },
```
Built-in icons: `"mehendi"`, `"muhurta"`, `"reception"`.
To use a new icon, drop `myicon.png` into `assets/img/` and set `icon:"myicon"`.

### Map
- `mapLink` = opens Google Maps when the "View on map" button is tapped.
- `mapEmbed` = the live map preview shown on the page.
- Easiest way to get both: search the venue on Google Maps → **Share** →
  **Embed a map** → copy the `src="..."` link into `mapEmbed`, and copy the
  normal share link into `mapLink`.

---

## 🖼 How to change photos, video & music

Put your files in the right `assets/` sub-folder. **Keep the same file names**
and you won't need to touch `config.js` at all.

### Photos → `assets/img/`
| File | Where it appears | Suggested size |
|------|------------------|----------------|
| `g-left.jpg` `g-center.jpg` `g-right.jpg` | Gallery — top row (3 tall arches). Center is the tallest "doorway". | portrait, e.g. 500×750 (center 420×900) |
| `g-b1.jpg` `g-b2.jpg` `g-b3.jpg` | Gallery — bottom row (3 rounded) | square-ish, e.g. 500×520 |
| `venue.jpg` | Venue photo in Address section | landscape, e.g. 800×470 |
| `section-bg.jpg` | Decorative background behind Events/Gallery/Address | portrait 720×1280 |
| `icon-mehendi.png` etc | Small round icons on event cards | ~210×230, transparent PNG |

> There are also `.webp` versions of each photo (smaller/faster). If you add a
> new photo as `.jpg`, that's fine — the site falls back to `.jpg` automatically.
> To also make a `.webp`, any online "JPG to WebP" converter works.

### Video → `assets/video/`
| File | What it is |
|------|-----------|
| `hero.mp4` | The hero video (plays once when the invite opens) |
| `hero.webm` | Smaller version for modern browsers (optional but nice) |
| `poster.jpg` | **First frame** of the video — shown on the intro screen |
| `hero-last.jpg` | **Last frame** — stays as the hero background after the video ends |

If you swap the video, also update `poster.jpg` (first frame) and
`hero-last.jpg` (last frame) so the freeze effect looks seamless. Keep the video
in a 9:16 shape (e.g. 720×1280) so it fills the screen without stretching.

**Tip:** keep the video short (~3 s) and compressed so it loads fast on phones.
The hero text/heart animation begins the moment the video finishes and freezes
on its last frame, so a short clip means guests reach the reveal quickly. If your
clip is longer, the reveal also auto-triggers after 3.5 s as a safety.

### Music → `assets/music/`
- Replace `ambient.mp3` with any `.mp3` (keep the name, or update
  `media.music` in `config.js`).
- The music button (top-right) lets guests turn it on/off any time.
- Set `media.musicOnByDefault: true` to try starting it automatically — note
  some phones block autoplay until the guest taps once (our Open button handles
  that).

---

## 🎨 Colours & fonts (optional)

Colours live at the top of `index.html` inside `:root { ... }` as CSS variables
(`--maroon`, `--gold`, `--cream`, etc). Change a hex value to re-theme the whole
site. Fonts are loaded from Google Fonts in the `<head>`.

---

## 🖼 Hero heart photo

The couple photo shown inside the gold heart on the hero is a single ready-made
image: `assets/img/hero-heart.png` (with a smaller `.webp` beside it).

To use a different couple photo, easiest options:
1. Open `hero-heart.png` in any photo editor, and paste your photo *behind* the
   gold heart outline (the transparent middle), then re-export as
   `hero-heart.png`. Or
2. Ask your designer for a "couple photo inside a gold heart frame, transparent
   background PNG" and save it as `assets/img/hero-heart.png`.

Keep it a tall PNG with a transparent background so it floats over the video.

## ✨ Animations (GSAP)

The site uses **GSAP + ScrollTrigger** (loaded from a public CDN in `index.html`)
for the letter-by-letter names, scroll reveals, parallax depth, countdown flip
and card pops. You don't need to install anything — it loads automatically when
the page is online. If the visitor is fully offline, the site still shows all
content (animations simply don't run).

## 🎞 Gallery slideshow & fullscreen

- The 6 frames each run their **own** slideshow on independent timers, so they
  never all change at once (always looks alive).
- **Tap any photo** to open it fullscreen; swipe left/right or use the arrows to
  browse, tap ✕ or the backdrop to close.
- All 6 gallery photos are used across every frame, so add variety by giving all
  six files different images.

## 🔤 Fonts

Loaded from Google Fonts (in the `<head>`): **Cinzel** (headings),
**Great Vibes** (names), **Cormorant Garamond** (body/timer),
**Poppins** (buttons), **EB Garamond** (address).

## ✅ Built-in quality

- Tuned for **390 × 844** phones — every section fits one screen, safe-area aware.
- Works on all modern browsers + phones, tablets, desktop.
- Smooth 60fps GSAP scroll animations, layered parallax, floating gold particles.
- Glassmorphism cards & buttons with gold accents (no solid black boxes).
- Lazy-loaded images, compressed video (WebM + MP4), WebP photos with JPG
  fallback — fast on mobile data.
- Respects "reduce motion" accessibility setting.

---

## ❓ Common questions

**The video/music won't play when I double-click index.html.**
Browsers block media on `file://`. Use a host (netlify.com/drop is free) or a
local server. On VS Code, the "Live Server" extension also works.

**The map preview is blank.**
Check `mapEmbed` in `config.js` is a valid Google Maps *embed* link
(`...&output=embed`).

**I want more/fewer events or gallery photos.**
Events: add/remove blocks in `events[]`. Gallery is fixed at 6 photos to keep the
signature layout — just replace the images.

---

Made as a reusable template — duplicate the folder per client, edit `config.js`,
swap the assets, done. 💫
