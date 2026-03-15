# GrainCraft — Craft Woodworker & Furniture Maker HTML Template

> **README Blueprint** — Technical specification and development plan for developers and AI coding tools (Cursor, Windsurf, etc.)

---

## 1. Template Overview

| Field | Details |
|---|---|
| **Template Name** | GrainCraft |
| **Template Category** | Portfolio / Creative / Small Shop |
| **Target Audience** | Independent furniture makers, bespoke woodworkers, craft artisans, and small-batch home goods sellers |
| **Dashboard Required** | No |
| **Template Purpose** | A richly visual, handcrafted-feeling website that showcases custom furniture portfolios, communicates the commission process, highlights materials and craftsmanship, and provides a lightweight shop for smaller goods — all while driving inquiry conversions through a custom quote form |

**Template Description:**
GrainCraft is a premium portfolio-first website template for independent craftspeople and furniture makers. The visual language is warm, editorial, and tactile — evoking the grain of real wood, the weight of handmade objects, and the intimacy of the maker's studio. It balances artisan credibility with a polished, professional web presence.

---

## 2. Design Direction

### Visual Style
- **Aesthetic**: Organic Luxury meets Editorial Craft — warm, unhurried, and deeply material. Think high-end woodworking studio catalogue crossed with a fine art portfolio.
- **Mood**: Tactile, refined, intimate. Every design decision should feel like it was made by a human hand.
- **Layout Approach**: Generous whitespace with asymmetric grid-breaking image placements. Large, full-bleed photography anchored by restrained typography.

### Color Palette

| Role | Light Mode | Dark Mode | Notes |
|---|---|---|---|
| Background Primary | `#F5F0E8` (warm cream) | `#1A1612` (deep charcoal brown) | Evokes raw linen / aged paper |
| Background Secondary | `#EDE7D9` (linen) | `#221E19` (dark walnut) | For alternating sections |
| Primary Text | `#1C1410` (near black, warm) | `#F0EAE0` (warm off-white) | |
| Secondary Text | `#6B5D4F` (warm grey-brown) | `#9C8E80` (muted tan) | |
| Accent / Brand | `#8B4A1C` (deep burnt sienna) | `#C47A3A` (amber gold) | Wood-tone accent |
| Accent Hover | `#6B3614` (dark mahogany) | `#E09050` (lighter amber) | |
| Border / Divider | `#D4C9B8` (warm grey) | `#3A322A` (dark border) | |
| Surface Cards | `#FFFFFF` (pure white) | `#2A2420` (dark card) | |

> All colors are defined as CSS custom properties (`--color-*`) on `:root` and overridden under a `[data-theme="dark"]` attribute on `<html>`.

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Headings | **"Cormorant Garamond"** (Google Fonts) | 300, 400, 600 | Elegant, editorial serif — feels handcrafted |
| Body / UI Text | **"DM Sans"** (Google Fonts) | 400, 500 | Clean, modern, legible at small sizes |
| Accent / Labels | **"Cormorant SC"** (Google Fonts) | 500 | Small caps for labels, tags, section eyebrows |

- Maximum 3 font families loaded
- Base font size: `16px`, line height: `1.7` for body
- Heading scale follows a modular ratio (1.333 — perfect fourth)
- Letter-spacing: slight positive tracking (`0.04em`) on uppercase labels

### UI Style Inspiration
- Bode furniture studio
- Clic by Vlad Dragu
- High-end Scandinavian woodworking ateliers
- Independent Japanese craft studios

---

## 3. Navigation Structure

### Primary Navigation (Desktop)

```
Logo (GrainCraft wordmark)
|
Home (dropdown)
  ├── Home 1 — Studio Portfolio
  └── Home 2 — Maker Story
|
Portfolio
|
Process
|
Materials
|
Shop
|
About
|
Contact
|
[Dark/Light Toggle Icon]  [RTL Toggle Icon (if applicable)]
```

### Mobile Navigation
- Hamburger icon (three horizontal lines, animated to ✕ on open)
- Full-screen overlay menu
- All nav items listed vertically with large, touch-friendly tap targets (min 44px)
- Home dropdown becomes an accordion on mobile
- Dark mode toggle visible in mobile menu

### Navigation Behavior
- Sticky on scroll with a subtle background blur effect (`backdrop-filter: blur(12px)`)
- Transparent over hero on page load, transitions to opaque on scroll
- Active page indicator: a subtle underline using `::after` pseudo-element in the accent color
- Smooth scroll-to-section behavior for anchor links

---

## 4. Page List

### Core Pages (Required by Architecture)

| # | Page | File | Notes |
|---|---|---|---|
| 1 | Home 1 — Studio Portfolio | `index.html` | Hero-led, portfolio-forward layout |
| 2 | Home 2 — Maker Story | `pages/home-2.html` | Narrative-led, process-forward layout |
| 3 | About | `pages/about.html` | Maker story, studio, values, credentials |
| 4 | Services | `pages/services.html` | Commission types, pricing tiers |
| 5 | Contact | `pages/contact.html` | Full contact form + map + social |
| 6 | 404 | `pages/404.html` | Custom error page |
| 7 | Coming Soon | `pages/coming-soon.html` | Pre-launch / maintenance page |

### Template-Specific Pages (Derived from Niche)

| # | Page | File | Notes |
|---|---|---|---|
| 8 | Portfolio — Grid | `pages/portfolio.html` | Full portfolio with category filters |
| 9 | Portfolio — Single Project | `pages/portfolio-single.html` | Individual piece detail page |
| 10 | Process | `pages/process.html` | Commission workflow, step-by-step guide |
| 11 | Materials | `pages/materials.html` | Wood types, finishes, sourcing philosophy |
| 12 | Shop — Listing | `pages/shop.html` | Small home goods product grid |
| 13 | Shop — Single Product | `pages/shop-single.html` | Individual product detail page |
| 14 | Custom Quote | `pages/quote.html` | Detailed multi-step inquiry form |
| 15 | FAQ | `pages/faq.html` | Common questions about commissions and care |

---

## 5. Homepage Layouts

### Home 1 — "Studio Portfolio" Layout

**Philosophy:** Lead with the work. Immediate visual impact through full-bleed imagery. Designed for visitors who are browsing and want to see quality fast.

**Section Order:**
1. Hero — Full-screen image with floating text overlay
2. Intro Statement — Single powerful sentence + short paragraph
3. Featured Portfolio — Asymmetric grid of 4–6 signature pieces
4. The Craft Bar — Three horizontal stat/value items (e.g., "Est. 2009", "Hand-finished", "Made to Order")
5. Process Teaser — 3-step horizontal card strip with icons
6. Materials Highlight — Split image + text section with wood grain close-up
7. Testimonials — Horizontal scrolling quote strip
8. Shop Preview — 3 featured small-goods product cards
9. Custom Quote CTA — Full-width warm-toned call to action
10. Instagram / Social Feed Strip — Linked image grid (6 cells)
11. Footer

---

### Home 2 — "Maker Story" Layout

**Philosophy:** Lead with the person behind the work. Narrative and intimacy first. Designed for referral visitors who want to understand the maker before they see the work.

**Section Order:**
1. Hero — Split layout: left half large portrait/studio photo, right half headline + short bio
2. "Why I Build" — Full-width editorial text section with a pull-quote
3. Materials Philosophy — Horizontal scroll or tabbed panel: three woods, three finishes
4. Portfolio Spotlight — Single large featured piece with detailed description
5. Portfolio Grid Teaser — 3 pieces in a masonry preview grid
6. Process Timeline — Vertical stepped timeline (Enquiry → Design → Build → Deliver)
7. Behind the Scenes — 2×2 studio/workshop photo grid
8. Testimonial — Large single quote, centered, serif display font
9. Shop Preview — Horizontal card row of 3 products
10. Custom Quote CTA — Centered, minimal style with animated border
11. Press / As Seen In — Logo strip (placeholder logos)
12. Footer

---

## 6. Section Breakdown

### 6.1 Hero Section

| Attribute | Details |
|---|---|
| **Purpose** | Immediate emotional engagement; establish aesthetic credibility |
| **Home 1 Layout** | Full-screen (`100vh`) background image of hero piece. Overlay: large serif headline (top-left), short subheadline, two CTA buttons (View Portfolio / Get a Quote) |
| **Home 2 Layout** | CSS Grid split: 50% portrait photo left / 50% warm cream background right with stacked text |
| **UI Components** | Background image or CSS object-fit cover, headline text block, dual CTA buttons, scroll indicator arrow |
| **Content Types** | Hero photography (high resolution), headline copy, 2–3 sentence subheadline, CTAs |
| **Interaction** | Subtle Ken Burns zoom on the hero image via CSS animation |

---

### 6.2 Portfolio Grid

| Attribute | Details |
|---|---|
| **Purpose** | Showcase breadth and quality of work; drive deeper engagement |
| **Layout** | CSS Grid with mixed column spans — some items span 2 columns for visual hierarchy |
| **UI Components** | Filterable category tabs (All, Seating, Tables, Storage, Outdoor, Custom), image cards with hover overlay showing piece name + material |
| **Content Types** | Portfolio photography, piece title, primary material, year, commission status badge |
| **Interaction** | JS-based filter (show/hide by category), hover reveals dark overlay with title + "View Project" link |

---

### 6.3 Portfolio Single Page

| Attribute | Details |
|---|---|
| **Purpose** | Deep-dive into one piece to build desire and trust |
| **Layout** | Full-width hero image, then two-column layout (large image gallery left, details right) |
| **UI Components** | Image lightbox gallery, piece spec table (Dimensions, Material, Finish, Lead Time), related works strip, inquiry CTA |
| **Content Types** | Multiple photos per piece, material specs, process notes, client testimonial specific to piece |
| **Interaction** | Lightbox image viewer (vanilla JS), scroll-triggered fade-in for details |

---

### 6.4 Process Section / Page

| Attribute | Details |
|---|---|
| **Purpose** | Reduce commission anxiety; build confidence in workflow |
| **Layout** | Alternating left/right steps (desktop), vertical stack (mobile) |
| **Steps** | 1. Initial Enquiry → 2. Consultation & Brief → 3. Design Proposal → 4. Build & Updates → 5. Finishing → 6. Delivery & Installation |
| **UI Components** | Numbered step cards, icon per step, connector line (CSS border), CTA at end |
| **Content Types** | Step title, short description, timing estimate per step |

---

### 6.5 Materials Page / Section

| Attribute | Details |
|---|---|
| **Purpose** | Educate clients on choices; showcase sourcing ethics |
| **Layout** | Tab panel or CSS scroll-snap horizontal cards per material |
| **Content Types** | Wood species name, origin, grain description, hardness rating, recommended use, close-up texture photo |
| **UI Components** | Tab switcher (CSS + minimal JS), material cards, specification micro-table |

---

### 6.6 Shop — Product Listing

| Attribute | Details |
|---|---|
| **Purpose** | Sell smaller home goods; lower barrier to entry purchase |
| **Layout** | 3-column grid (desktop), 2-column (tablet), 1-column (mobile) |
| **UI Components** | Product card (image, name, material, price, "Add to Enquiry" or "Buy Now" button), category filter strip, sort control |
| **Content Types** | Product photography, name, short description, price, material tag, availability badge |
| **Note** | No live cart required — "Add to Enquiry" routes to the quote form pre-filled with product name; "Buy Now" links to an external payment link placeholder |

---

### 6.7 Custom Quote Form

| Attribute | Details |
|---|---|
| **Purpose** | Primary lead generation — structured commission inquiry |
| **Layout** | Multi-step form (3 steps shown in a progress indicator) |
| **Step 1** | Project type (dropdown), furniture category, rough dimensions |
| **Step 2** | Material preferences (checkboxes with images), finish preference, timeline |
| **Step 3** | Name, email, phone, upload inspiration images (file input), budget range (slider), message |
| **Validation** | Client-side HTML5 validation + JS custom error messages |
| **Submission** | Formspree-compatible `action` URL placeholder |

---

### 6.8 Testimonials

| Attribute | Details |
|---|---|
| **Purpose** | Social proof and trust building |
| **Layout** | Horizontal scroll strip (Home) or 2-column grid (About/dedicated section) |
| **UI Components** | Quote card with large opening quotation mark, client name, project type, star rating |
| **Interaction** | Auto-scroll carousel with pause on hover (pure CSS preferred, JS fallback) |

---

### 6.9 Footer

| Attribute | Details |
|---|---|
| **Layout** | 4-column grid: Brand + tagline | Navigation | Contact details | Newsletter signup |
| **Content** | Logo, 1-line brand statement, quick links, address, phone, email, social icons, copyright, legal links |
| **Feature** | Newsletter signup input (Mailchimp placeholder), social media icon row |

---

## 7. Component Library

The following reusable UI components must be built as standalone, self-contained HTML/CSS blocks that can be dropped into any page:

| Component | Description |
|---|---|
| `c-navbar` | Sticky transparent-to-opaque nav, with dropdown support and dark mode toggle |
| `c-hero-fullscreen` | 100vh hero with image, overlay, headline, and dual CTA buttons |
| `c-hero-split` | 50/50 split grid hero for Home 2 |
| `c-section-eyebrow` | Small-caps label above section headings (e.g., "Our Work") |
| `c-portfolio-card` | Image card with hover overlay — title + material + link |
| `c-portfolio-grid` | Asymmetric CSS Grid container for portfolio cards |
| `c-product-card` | Shop product card — image, name, price, material tag, CTA button |
| `c-process-step` | Numbered step with icon, title, description |
| `c-process-timeline` | Vertical or horizontal container for process steps |
| `c-material-card` | Material swatch card with name, origin, properties |
| `c-testimonial-card` | Blockquote card with decorative quotation mark |
| `c-testimonial-slider` | Horizontal scrolling container for testimonial cards |
| `c-stat-bar` | Horizontal row of 3 stat/value items |
| `c-cta-band` | Full-width call-to-action section with headline, subtext, button |
| `c-form-input` | Styled text/email/textarea input with label and error state |
| `c-form-step` | Multi-step form step container with progress indicator |
| `c-lightbox` | Vanilla JS image lightbox overlay |
| `c-badge` | Small inline badge (e.g., "Available", "Made to Order", "Sold") |
| `c-social-strip` | 6-cell Instagram-style linked image grid |
| `c-press-strip` | Greyscale logo strip for press mentions |
| `c-breadcrumb` | Page breadcrumb for inner pages |
| `c-back-to-top` | Floating scroll-to-top button (appears after 400px scroll) |
| `c-footer` | Full 4-column footer with newsletter and social icons |
| `c-404-block` | Centered error state with navigation options |
| `c-coming-soon` | Countdown timer block with email capture |
| `c-faq-accordion` | Expandable FAQ items using `<details>` / `<summary>` |
| `c-tag` | Category or material tag pill |
| `c-skeleton-loader` | Skeleton loading placeholder for image and text blocks |

---

## 8. Feature List

| Feature | Description |
|---|---|
| **Portfolio Filter** | JS-based category filter on portfolio grid (no page reload) |
| **Image Lightbox** | Vanilla JS lightbox for portfolio and product images |
| **Multi-Step Quote Form** | 3-step commission inquiry form with progress indicator |
| **File Upload in Form** | Inspiration image upload field in quote form |
| **Budget Slider** | Range input for budget in quote form with live value display |
| **Dark / Light Mode** | Toggle with `localStorage` persistence and system preference detection |
| **RTL Support** | Full layout flip using `[dir="rtl"]` attribute on `<html>` |
| **Sticky Navigation** | Transparent-to-opaque transition on scroll |
| **Scroll Animations** | Intersection Observer API — fade/slide-in on scroll for sections |
| **Animated Counters** | Number count-up animation on stat items (years, pieces, clients) |
| **Testimonial Carousel** | Auto-scrolling horizontal testimonial strip |
| **Material Tabs** | Tab switcher for materials page panels |
| **Newsletter Signup** | Mailchimp-compatible email input (placeholder endpoint) |
| **Formspree Integration** | Contact and quote forms compatible with Formspree |
| **Google Maps Placeholder** | Embedded map placeholder in Contact page |
| **Skeleton Loaders** | Loading state for shop product grid |
| **Accessibility** | WCAG 2.1 AA — keyboard nav, ARIA labels, focus states, screen reader support |
| **Back to Top Button** | Floating button appears after scroll depth threshold |
| **FAQ Accordion** | Native HTML `<details>` accordion (no JS required) |
| **Breadcrumb Navigation** | On all inner pages |

---

## 9. Folder Structure

```
graincraft/
│
├── assets/
│   ├── css/
│   │   ├── dark-mode.css       # Dark mode overrides via [data-theme="dark"]
│   │   ├── variables.css       # All CSS custom properties (colors, fonts, spacing)
│   │   ├── typography.css      # Font imports, scale, heading styles
│   │   ├── components.css      # All reusable UI component styles
│   │   ├── layout.css          # Grid, flexbox layout utilities
│   │   ├── dark-mode.css       # Dark mode overrides via [data-theme="dark"]
│   │   ├── rtl.css             # RTL overrides via [dir="rtl"]
│   │   └── animations.css      # Keyframes, transitions, scroll animation classes
│   │
│   ├── js/
│   │   ├── main.js             # Init file — imports and calls all modules
│   │   ├── nav.js              # Sticky nav, mobile menu, dropdown
│   │   ├── theme.js            # Dark/light mode toggle + localStorage
│   │   ├── rtl.js              # RTL toggle logic
│   │   ├── portfolio.js        # Portfolio filter logic
│   │   ├── lightbox.js         # Vanilla JS lightbox
│   │   ├── form.js             # Multi-step form, validation, budget slider
│   │   ├── animations.js       # Intersection Observer scroll animations
│   │   ├── counter.js          # Animated stat counters
│   │   ├── carousel.js         # Testimonial slider
│   │   └── coming-soon.js      # Countdown timer logic
│   │
│   ├── images/
│   │   ├── portfolio/          # Portfolio project photography (WebP + JPG fallback)
│   │   ├── products/           # Shop product photos
│   │   ├── materials/          # Material/texture close-ups
│   │   ├── studio/             # Studio / workshop behind-the-scenes photos
│   │   ├── team/               # Maker portrait
│   │   ├── press/              # Greyscale press logos
│   │   └── ui/                 # Icons, brand marks, decorative SVGs
│   │
│   └── fonts/                  # Local font fallbacks (optional if using Google Fonts)
│
├── pages/
│   ├── home-2.html             # Home 2 — Maker Story layout
│   ├── about.html
│   ├── portfolio.html
│   ├── portfolio-single.html
│   ├── process.html
│   ├── materials.html
│   ├── services.html
│   ├── shop.html
│   ├── shop-single.html
│   ├── quote.html
│   ├── contact.html
│   ├── faq.html
│   ├── 404.html
│   └── coming-soon.html
│
├── documentation/
│   ├── installation.md
│   ├── customization.md
│   ├── page-structure.md
│   ├── credits.md
│   └── changelog.md
│
├── index.html                  # Home 1 — Studio Portfolio layout
├── README.md                   # This file
└── robots.txt
```

---

## 10. Responsive Design Strategy

### Breakpoints

```css
/* Mobile First */
--bp-mobile:  < 640px
--bp-tablet:  640px  — 1024px
--bp-desktop: 1024px — 1280px
--bp-large:   > 1280px
```

### Adaptation Rules by Breakpoint

#### Mobile (`< 640px`)
- Single-column layout throughout
- Hamburger menu — full-screen overlay navigation
- Hero: full-height with text stacked below image (not overlaid) — legibility first
- Portfolio grid: 1 column, standard cards (no asymmetric spans)
- Shop grid: 1 column
- Process steps: vertical stack with left-border connector line
- Material tabs: horizontal scroll (snap scroll)
- Testimonials: single card, swipe-enabled scroll
- Quote form: 1-column field layout, touch-friendly inputs
- Touch targets: minimum `44px` height
- Reduced CSS animations (prefer `prefers-reduced-motion` query)
- Font sizes scaled down by ~15% for display headings

#### Tablet (`640px — 1024px`)
- 2-column layout for portfolio grid and shop grid
- Side-by-side layout for process steps (2 per row)
- Nav: hamburger still used, or condensed inline nav
- Hero split layout adapted to stacked (image on top, text below)
- Material cards: 2 per row horizontal scroll

#### Desktop (`1024px — 1280px`)
- Full 3–4 column portfolio grid with asymmetric spans
- 3-column shop grid
- Full horizontal navigation with dropdown
- Hero: full-screen layouts fully active
- Split sections: true 50/50 CSS Grid layouts
- Process: horizontal step strip

#### Large (`> 1280px`)
- Max content width: `1440px` centered with `margin: 0 auto`
- Generous whitespace — padding scales up proportionally
- Hero images: higher resolution sources loaded via `srcset`
- Portfolio grid: up to 4 columns with larger feature items

---

## 11. Animation & Interaction Ideas

### Scroll Animations (Intersection Observer)
- Section headings: fade-up with slight Y-transform on enter (`translateY(24px)` → `translateY(0)`)
- Portfolio cards: staggered fade-in with `animation-delay` increments per card
- Process steps: slide-in from alternating left/right sides
- Stat bar numbers: count-up animation triggered on first viewport entry

### Hover Effects
- Portfolio card: dark overlay fades in over image + title slides up from bottom
- Product card: image subtle scale (`transform: scale(1.04)`) + shadow increase
- Navigation links: custom animated underline (`::after` pseudo with width transition)
- CTA buttons: background fills from left to right (clip-path or background-position trick)
- Social strip images: slight desaturate → full color on hover

### Page-Level Interactions
- Hero image: subtle Ken Burns effect (slow scale from `1.0` to `1.06` over 8s, CSS keyframe)
- Lightbox: fade-in overlay + scale-up image from `0.92` to `1.0`
- Mobile nav: slide-down from top with staggered menu item appearance
- Dark mode toggle: smooth transition on all color properties (`transition: background 0.3s, color 0.3s`)
- Multi-step form: horizontal slide transition between steps
- Budget slider: live price display updates with smooth number transition

### Micro-interactions
- Form inputs: colored bottom-border highlight on focus
- Checkbox/radio in quote form: custom-styled with CSS, animated checkmark via `clip-path`
- FAQ accordion: smooth `max-height` expand/collapse with easing
- Back-to-top button: fade in/out + slight bounce on click

### Decorative Details
- Grain texture overlay: SVG noise texture at 3–5% opacity on cream backgrounds
- Section dividers: thin hand-drawn style SVG wave or diagonal clip-path transitions between sections
- Pull quotes: oversized decorative `"` character in accent color, positioned absolutely

---

## 12. SEO & Performance Strategy

### On-Page SEO

| Element | Specification |
|---|---|
| `<title>` | Unique per page, max 60 chars — e.g., `"Custom Handmade Furniture — GrainCraft Studio"` |
| `<meta name="description">` | Unique per page, 150–160 chars, benefit-led copy |
| `<h1>` | One per page, semantically describes the page topic |
| Heading Hierarchy | H1 → H2 → H3, never skipped |
| Image `alt` attributes | Descriptive alt text on all `<img>` tags — e.g., `"Handcrafted white oak dining table with dovetail joinery"` |
| Canonical tags | `<link rel="canonical">` on all pages |
| Open Graph tags | `og:title`, `og:description`, `og:image`, `og:type` on all pages |
| Twitter Card | `twitter:card`, `twitter:title`, `twitter:image` on all pages |

### Structured Data (JSON-LD)

Include in `<head>` or just before `</body>`:

- **Homepage & About**: `LocalBusiness` schema — name, address, telephone, openingHours, sameAs (social profiles)
- **Portfolio Single**: `CreativeWork` schema — name, creator, material, dateCreated, description
- **Shop Product**: `Product` schema — name, description, image, offers (price, availability)
- **FAQ Page**: `FAQPage` schema — all Q&A pairs
- **Breadcrumbs**: `BreadcrumbList` schema on all inner pages
- **XML Sitemap**: `sitemap.xml` listing all pages with `<lastmod>` and `<priority>`
- **robots.txt**: Allow all crawlers, reference sitemap URL

### Image Performance

- All images delivered in **WebP format** with `<picture>` fallback to JPG
- `loading="lazy"` on all below-fold images
- `srcset` for responsive image sizes (mobile / tablet / desktop sources)
- Hero images: `loading="eager"` with explicit `width` and `height` attributes to prevent CLS
- All images pre-compressed (target < 200KB per image)
- Decorative images: CSS backgrounds (not `<img>`) to exclude from accessibility tree

### Performance Targets

| Metric | Target |
|---|---|
| PageSpeed Score (Mobile) | 90+ |
| PageSpeed Score (Desktop) | 95+ |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

### CSS/JS Performance

- CSS: Load `style.css` in `<head>`; it imports the shared base, dark mode, and RTL styles used across the template
- JS: All scripts load with `defer` attribute — no render-blocking scripts
- No unused CSS — each page imports only what it needs
- Google Fonts: loaded with `rel="preconnect"` and `display=swap`
- Critical CSS inlined in `<head>` for above-fold styles (hero, nav)

### Accessibility (WCAG 2.1 AA)

- All interactive elements reachable and operable by keyboard
- Visible focus ring on all focusable elements (never `outline: none` without replacement)
- Color contrast: minimum 4.5:1 for body text, 3:1 for large text
- ARIA labels on icon-only buttons (e.g., dark mode toggle, social icons)
- `role` and `aria-expanded` on dropdown menus and accordion items
- `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>` used throughout
- Form inputs have associated `<label>` elements (never `placeholder` as sole label)
- Error messages associated with inputs via `aria-describedby`
- `prefers-reduced-motion` media query disables or reduces all animations

---

## 13. Development Notes

### Setup & Initialization

- No build tool required — pure HTML/CSS/JS with Tailwind loaded from CDN
- `style.css` is the shared visual layer for all pages, and `main.js` handles interactive behavior
- `main.js` uses ES6 module imports (`type="module"`) — ensure server context or use a local dev server (e.g., VS Code Live Server, `npx serve`)
- All JS files follow module pattern — functions not exposed to global scope

### Theme System

- Dark/light mode: driven entirely by `data-theme="dark"` attribute on `<html>` element
- Toggle script reads `localStorage.getItem('theme')` on page load; falls back to `prefers-color-scheme`
- All theme-sensitive values are CSS custom properties — no hardcoded colors anywhere in component CSS

### RTL Implementation

- RTL: driven by `dir="rtl"` attribute on `<html>` element
- `rtl.css` overrides specific directional properties: `margin-left` → `margin-right`, `padding-left` → `padding-right`, `text-align: left` → `text-align: right`, flex-direction reversals
- Use CSS logical properties (`margin-inline-start`, `padding-inline-end`) wherever possible to reduce RTL override bloat
- Test all pages in both `dir="ltr"` and `dir="rtl"` before submission

### Portfolio Filter

- Filter implemented with `data-category` attributes on portfolio card elements
- JS toggles `display: none` / `display: block` (or `opacity` + `pointer-events` for animated transitions)
- No page reload — all filtering client-side
- Active filter tab gets `.is-active` class for CSS accent styling

### Multi-Step Form

- Form steps controlled by JS: only the current step's `<fieldset>` is visible at a time
- Progress indicator bar updates `width` as percentage via JS
- Validation runs per-step before advancing — prevents advancing with empty required fields
- Final submission sends to Formspree-compatible `action` URL (developer replaces placeholder)
- File input for inspiration images: show filename preview on select

### Image Lightbox

- Self-contained `lightbox.js` — no dependencies
- Triggered by `data-lightbox` attribute on `<a>` wrapping portfolio images
- Keyboard accessible: `Escape` closes, arrow keys navigate gallery
- Focus trapped inside lightbox when open

### Coming Soon Page

- Countdown timer reads a target date from a `data-target-date` attribute on the timer element
- Developer sets the launch date in the HTML attribute — no JS config file needed
- Email capture form: Mailchimp-compatible `action` URL placeholder

### Code Comments Convention

```html
<!-- ============================================================
     SECTION: Portfolio Grid
     ============================================================ -->

<!-- TODO: Replace placeholder images with real portfolio photography -->
```

```css
/* ===== COMPONENT: Portfolio Card ===== */
/* ===== DARK MODE OVERRIDE ===== */
```

```js
// FUNCTION: initPortfolioFilter
// PURPOSE: Filters portfolio cards by data-category attribute on click
// DEPENDENCY: None
```

### Browser Support Targets

| Browser | Minimum Version |
|---|---|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

- Do NOT use `IE11` support as a requirement
- CSS Grid and `gap` property used freely
- `backdrop-filter` used with progressive enhancement (check browser support, provide fallback solid background)

### Pre-Submission Checklist

- [ ] All pages pass W3C HTML validator
- [ ] All CSS passes W3C CSS validator
- [ ] No broken links (test with a link checker tool)
- [ ] Responsive tested on 320px, 640px, 1024px, 1440px viewports
- [ ] Cross-browser tested: Chrome, Firefox, Safari, Edge
- [ ] Dark mode: all components correctly themed
- [ ] Light mode: all components correctly themed
- [ ] RTL: all pages layout correctly in `dir="rtl"`
- [ ] All images have descriptive `alt` text
- [ ] All forms validate client-side and show clear error messages
- [ ] Keyboard navigation tested across all pages
- [ ] Screen reader tested (VoiceOver or NVDA)
- [ ] PageSpeed Insights run on homepage — score 90+
- [ ] No `console.log` statements in production JS
- [ ] All placeholder content is clearly marked with `<!-- TODO -->` comments
- [ ] `sitemap.xml` generated and referenced in `robots.txt`
- [ ] Documentation complete in `/documentation/` folder
- [ ] License and third-party credits listed in `documentation/credits.md`

---

## Credits Placeholder

| Resource | Type | License |
|---|---|---|
| Cormorant Garamond | Google Font | Open Font License |
| DM Sans | Google Font | Open Font License |
| Cormorant SC | Google Font | Open Font License |
| Placeholder images | Photography | Replace with licensed photography |
| SVG Icons | Icon set | Specify icon library used |

---

*GrainCraft HTML Template — Blueprint v1.0 | Generated for development reference*
