# The Financial Architect - Landing Page

A clean, professional landing page for investment coaching services built with Tailwind CSS (CLI build) and modern glassmorphism design.

## 🌐 Live Site

**[https://852-glitch.github.io/1-1/](https://852-glitch.github.io/1-1/)**

---

## 📁 Project Structure

```
1-1/
├── index.html              # Main landing page (Financial Architect)
├── clarity_protocol.html   # Alternative coaching page (Clarity Protocol)
├── thank-you.html          # Post-form submission confirmation page
├── favicon.svg             # SVG favicon (evil eye / 🧿)
├── input.css               # Tailwind CSS source file
├── tailwind.config.js      # Tailwind config (custom colors, fonts, plugins)
├── package.json            # Build scripts (build + watch)
├── dist/
│   └── output.css          # Compiled & minified Tailwind CSS (do not edit)
└── README.md               # This file
```

---

## 🛠️ Local Setup & Build

```bash
# 1. Clone the repo
git clone https://github.com/852-glitch/1-1.git
cd 1-1

# 2. Install dependencies
npm install

# 3. Build CSS (minified, production-ready)
npm run build

# 4. Or watch for changes during development
npm run watch
```

> **Note:** After editing Tailwind classes in any `.html` file, run `npm run build` and commit `dist/output.css`.

---

## ✏️ How to Edit Content

The `index.html` file is structured with **clear comment blocks** that mark all editable sections. Look for these markers:

```html
<!-- ── Section Name ── -->
```

### Editable Sections

#### 1. **Page Title & Meta** (Lines ~1-20)
```html
<title>The Financial Architect | Behavioral Investing Mentor</title>
<meta name="description" content="Behavioral investing mentor helping traders build rules-based systems for the U.S. market. Book a free strategy call."/>
```

#### 2. **Header / Brand Name**
```html
<div class="flex items-center gap-2 font-headline font-bold text-lg">
  The Financial Architect
</div>
```

#### 3. **Hero Section**
- Badge text: `Institutional-Grade Mentorship`
- Main headline: `Build a Rules-Based System for the U.S. Market`
- Subheadline: `Behavioral Investing Mentor. I help traders build repeatable systems...`
- CTA button text: `Book Free Strategy Call`
- Tagline: `Stop guessing. Start executing.`

#### 4. **Pillars / Features**
- Section title: `The Architecture of Success`
- Three pillar cards with icons, titles, and descriptions
- Icons use [Material Symbols](https://fonts.google.com/icons)

#### 5. **Testimonials**
- Two testimonial cards with quotes

#### 6. **Contact Form**
- Form headline: `Start Your Build`
- Stats: `500+ investors • 7+ years experience • No obligation`
- Button text: `Book a Free Consultation`
- Urgency note: `Limited monthly coaching slots available`

#### 7. **Footer**
- Copyright year: `© 2026`
- Footer links: Contact, Clarity Protocol

---

## 🎨 Design System

### Colors
```js
// tailwind.config.js
colors: {
  'primary':   '#0f172a',  // Dark slate (nav, CTA buttons, body text)
  'secondary': '#10b981',  // Emerald green (accents, highlights, icons)
  'surface':   '#f8fafc',  // Light off-white background
}
```

### Fonts
- **Headlines:** Manrope (bold, modern) — loaded via Google Fonts
- **Body:** Inter (clean, readable) — loaded via Google Fonts
- **Icons:** Material Symbols Outlined

### Key Components
- **Glass cards:** Semi-transparent white panels with `backdrop-filter: blur(24px)`
- **Hero background:** Dark gradient `from-primary via-slate-800 to-slate-900`
- **Animations:** `fadeInUp` on hero load; `IntersectionObserver` scroll-reveal on all other sections

---

## 🚀 Making Changes

### Option 1: Edit Locally in VS Code
```bash
# Start the CSS watcher (auto-rebuilds on save)
npm run watch

# Edit index.html, clarity_protocol.html, etc.
# Preview by opening index.html in a browser (Live Server extension recommended)

# When done — build final minified CSS
npm run build

# Commit everything
git add dist/output.css index.html
git commit -m "your message"
git push origin main
```

### Option 2: Edit Directly on GitHub
1. Go to [index.html](https://github.com/852-glitch/1-1/blob/main/index.html)
2. Click the ✏️ **Edit** button (top right)
3. Make your changes
4. Scroll down → **Commit changes**
5. Wait ~2 minutes → changes are live

> ⚠️ If you add new Tailwind classes via the GitHub editor, you'll need to run `npm run build` locally and push `dist/output.css` — GitHub Pages does not run build steps.

---

## 📝 Form Integration

The contact form uses **Formspree** (`https://formspree.io/f/xaqlyzlz`).

On success it redirects to `thank-you.html` via a client-side `fetch` + `window.location.href`. On failure (network error or 4xx/5xx), an inline error banner is shown — no `alert()`.

**Current form fields:**
- Full Name
- Email Address
- Phone Number
- Age
- Years Investing

**Spam protection:** Honeypot field (`name="_gotcha"`) — bots fill it, Formspree discards the submission.

```html
<form id="contact-form"
      action="https://formspree.io/f/xaqlyzlz"
      method="POST"
      novalidate>
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <!-- fields: name, email, phone, age, years_investing -->
  <button type="submit">Book a Free Consultation</button>
</form>
```

---

## 🔧 Tech Stack

- **HTML5** — Semantic structure
- **Tailwind CSS v3** (CLI build) — Utility-first styling, compiled to `dist/output.css`
- **@tailwindcss/forms** — Form element base styles
- **Google Fonts** — Manrope + Inter
- **Material Symbols** — Icon library
- **Formspree** — Form backend
- **GitHub Pages** — Free hosting

---

## 📄 License

This is a personal project. Feel free to customize for your own use.

---

## 🤝 Need Help?

If you need to:
- **Change colors** → Edit the `colors` object in `tailwind.config.js`, then run `npm run build`
- **Add new sections** → Follow the `<!-- ── Section Name ── -->` comment structure in `index.html`
- **Change icons** → Browse [Material Symbols](https://fonts.google.com/icons) and update the icon name text inside `<span class="material-symbols-outlined">`
- **Change fonts** → Update the Google Fonts `<link>` tags in `<head>` and the `fontFamily` object in `tailwind.config.js`

**Pro tip:** Run `npm run watch` in a VS Code terminal while editing — CSS rebuilds instantly on every save.

---

**Built with focus. Edited with ease. 🚀**
