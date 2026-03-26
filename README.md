# The Financial Architect - Landing Page

A clean, professional landing page for investment coaching services built with TailwindCSS and modern glassmorphism design.

## 🌐 Live Site

**[https://852-glitch.github.io/1-1/](https://852-glitch.github.io/1-1/)**

---

## 📁 Project Structure

```
1-1/
├── index.html              # Main landing page (Financial Architect)
├── clarity_protocol.html   # Alternative coaching page (Clarity Protocol)
├── thank-you.html          # Post-form submission confirmation page
└── README.md               # This file
```

---

## ✏️ How to Edit Content

The `index.html` file is structured with **clear comment blocks** that mark all editable sections. Look for these markers:

```html
<!-- ========================================
     SECTION NAME
     Edit: What you can change here
     ======================================== -->
```

### Editable Sections

#### 1. **Page Title & Meta** (Lines ~1-20)
```html
<title>The Financial Architect | Behavioral Investing Mentor</title>
<meta name="description" content="Behavioral investing mentor helping traders build rules-based systems for the U.S. market. Book a free strategy call."/>
```

#### 2. **Header / Brand Name**
```html
<span class="text-lg font-extrabold tracking-tight font-headline">The Financial Architect</span>
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
- Copyright year: `© 2025`
- Footer links: Contact, Clarity Protocol

---

## 🎨 Design System

### Colors
```css
--primary: #0f172a      /* Dark slate (CTA buttons, text) */
--secondary: #10b981    /* Emerald green (accents, highlights) */
--surface: #f8fafc      /* Light background */
```

### Fonts
- **Headlines:** Manrope (bold, modern)
- **Body:** Inter (clean, readable)
- **Icons:** Material Symbols Outlined

### Key Components
- **Glass cards:** Semi-transparent white panels with blur effect
- **Gradient background:** Soft emerald-blue-purple blend
- **Hover effects:** Lift animation on cards and buttons

---

## 🚀 Making Changes

### Option 1: Edit Directly on GitHub
1. Go to [index.html](https://github.com/852-glitch/1-1/blob/main/index.html)
2. Click the ✏️ **Edit** button (top right)
3. Make your changes (follow comment markers)
4. Scroll down → **Commit changes**
5. Wait ~2 minutes → changes are live at [https://852-glitch.github.io/1-1/](https://852-glitch.github.io/1-1/)

### Option 2: Edit Locally
```bash
# Clone the repository
git clone https://github.com/852-glitch/1-1.git
cd 1-1

# Edit index.html in your favorite editor
# Open index.html in a browser to preview

# Commit and push changes
git add index.html
git commit -m "Update content"
git push origin main
```

---

## 📝 Form Integration

The contact form uses **Formspree** (`https://formspree.io/f/xaqlyzlz`) and redirects to `thank-you.html` on successful submission.

```html
<form action="https://formspree.io/f/xaqlyzlz" method="POST" class="space-y-5">
  <input type="hidden" name="_replyto" value="1on1coach500@gmail.com">
  <input type="hidden" name="_subject" value="New Lead from Financial Architect">
  <input type="hidden" name="_next" value="https://852-glitch.github.io/1-1/thank-you.html">
  <input type="text" name="name" placeholder="Full Name" autocomplete="name" required />
  <input type="email" name="email" placeholder="Email Address" autocomplete="email" required />
  <button type="submit">Book a Free Consultation</button>
</form>
```

### Alternative Integrations

#### Google Forms
1. Create a Google Form
2. Get the pre-filled link
3. Replace form `action` with the Google Form URL

#### Netlify Forms (If hosting on Netlify)
```html
<form name="contact" method="POST" data-netlify="true" class="space-y-5">
  <!-- fields -->
</form>
```

---

## 🔧 Tech Stack

- **HTML5** — Semantic structure
- **TailwindCSS** (CDN) — Utility-first styling
- **Google Fonts** — Manrope + Inter
- **Material Symbols** — Icon library
- **GitHub Pages** — Free hosting

---

## 📄 License

This is a personal project. Feel free to customize for your own use.

---

## 🤝 Need Help?

If you need to:
- Change colors → Edit the `colors` object in `<script id="tailwind-config">`
- Add new sections → Follow the existing comment structure
- Change icons → Browse [Material Symbols](https://fonts.google.com/icons) and update icon names

**Pro tip:** Use your browser's **Inspect Element** (F12) to experiment with styles before editing the file.

---

**Built with focus. Edited with ease. 🚀**
