
# Developer Log

## 📅 Initial Setup & Architecture
- **React 19:** Selected for the latest hook support.
- **TypeScript:** Enforced strict typing for data interfaces.
- **Tailwind via CDN:** Used for rapid prototyping.

## 🎨 Design Decisions

### Typography System
- **Headings (Coconat):** Distinct serif for an editorial look.
- **Body (Neue Montreal):** Clean sans-serif balance.
- **Scale:** Used viewport units for Hero text.

### Interaction Design
- **Cursor:** Custom blended cursor for a polished creative feel.
- **Scroll Reveal:** Lightweight `IntersectionObserver` implementation.

### Visual Polish
- **Footer Refactor:** 
  - Applied a distinct background shade (`#EAEAEA`) to visually separate the footer.
  - Enforced strict left alignment for "Let's talk" and "Drop me a line".
  - Styled contact links as white pill-shaped buttons for better affordance.
- **Experience Gallery:** Implemented grayscale-to-color hover transitions.

## ✅ Implementation Status
- [x] **Navbar:** Complete with scroll detection.
- [x] **Hero:** Complete with responsive ticker.
- [x] **About/Experience:** Accordion logic complete.
- [x] **Work:** Grid layout with hover effects complete.
- [x] **Coaching:** Cards complete.
- [x] **Footer:** Complete with latest design refinements.
- [x] **Mobile Responsiveness:** Implemented.
- [x] **Performance:** Implemented lazy loading for all heavy images.

## 📝 Notes for Future Development
- **Dark Mode Toggle:** A manual toggle button is needed (currently follows system preference).
- **Code Split:** Consider moving logic to custom hooks as components grow.
