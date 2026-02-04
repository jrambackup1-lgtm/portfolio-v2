# Project Roadmap: Dousan Miao Portfolio Replica

## 🌟 Core Features
This project is a high-fidelity replica of a senior UX designer's portfolio, focusing on micro-interactions, typography, and layout precision.

### UI/UX
- **Custom Cursor:** A custom-blended cursor (`mix-blend-mode: difference`) that inverts colors over backgrounds, providing a distinct "designer" feel.
- **Scroll Reveals:** Elements fade in and slide up as they enter the viewport using `IntersectionObserver`.
- **Smooth Scrolling:** Native smooth scrolling behavior for navigation links.
- **Glassmorphism Navbar:** Navigation bar gains a frosted glass effect and border upon scrolling.

### Components
- **Hero Section:** Responsive typography that scales from mobile to desktop (`clamp` or viewport units).
- **Work Grid:** A gallery of projects with hover states (zoom, opacity changes, "Shipped" badges).
- **Experience Accordion:** Expandable career history with smooth height transitions.
- **Coaching Section:** A card-based layout for services offered.
- **Interactive Footer:** Large call-to-action headings with animated arrows and pill-shaped contact links.
- **Image Gallery:** Grayscale-to-color hover effects for the photography section.

### Theming
- **Dark Mode Support:** Built-in Tailwind classes (`dark:`) for a seamless transition between light and dark themes.
- **Design Tokens:** Strict color palette using CSS variables and Tailwind config (e.g., `token-dark-green`, `token-light-green`).

---

## 🚀 Future Upgrades & Enhancements

### Functionality
- [ ] **Project Detail Pages:** Create dedicated routes/pages for each case study to display full content.
- [ ] **Contact Form:** Replace the `mailto` link with a functional contact form (using Formspree or emailjs).
- [ ] **CMS Integration:** Connect to a headless CMS (Sanity, Contentful) to manage projects and experience data dynamically instead of `constants.ts`.

### Performance & Tech
- [ ] **Build Optimization:** Migrate from Tailwind CDN to a proper PostCSS build pipeline for production-ready CSS.
- [ ] **Image Optimization:** Implement lazy loading and responsive `srcset` for images to improve Core Web Vitals.
- [ ] **SEO:** Add `react-helmet` for per-page meta tags and OpenGraph data.

---

## ⚠️ Known Limitations
- **Data Source:** All content is currently hardcoded in `constants.ts`.
- **Assets:** Images rely on external placeholders (Unsplash/Picsum). Production deployment requires hosting actual assets.
- **Routing:** Currently a single-page application with anchor links. No client-side router (React Router) is installed yet.

---

## 🛠 Technology Stack
- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS (configured via script injection)
- **Animation:** CSS Transitions & Native IntersectionObserver API
- **Fonts:** Custom `@font-face` (Coconat, Neue Montreal, Inter Display)
- **Icons:** SVG Icons (Lucide-style inline SVGs)
