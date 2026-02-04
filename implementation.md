Overview
This is a comprehensive analysis of the HTML file for recreating the portfolio website of Dousa Miao | UX Designer at Google. The site is built using Framer and contains sophisticated animations, custom fonts, and interactive elements.

1. META INFORMATION & SEO
Page Title & Description
Title: "Dousa Miao | UX Designer at Google"
Description: "Product designer with 5 years of experience, based in London, UK. Currently with Google working on Android – the most used OS on the planet."
Meta Tags
Open Graph tags for social media sharing
Twitter card metadata
Favicon (SVG format)
Canonical URL: https://www.dousanmiao.com/
2. TYPOGRAPHY & FONTS
Primary Fonts
Coconat - Custom font (main headings)
Neue Montreal (Regular, Bold, Medium)
Neue Haas Grotesk (Text Regular, Display Pro 55 Roman)
Inter (Multiple weights: 100-900, regular and italic)
Inter Variable
Inter Display
DM Sans (400 weight)
Material Icons (Regular, Sharp, Symbols, Symbols Sharp)
Jersey 15 (from Google Fonts)
Font Loading
Uses @font-face declarations with multiple unicode ranges
Font display: swap for performance
Placeholder fonts for fallback (Arial-based)
3. COLOR SCHEME & DESIGN TOKENS
CSS Custom Properties (Design Tokens)
Primary Colors:
- --token-1f090d1e: #14261f (Dark green)
- --token-af406324: #3cda64 (Bright green - accent)
- --token-4c347797: #61e88a (Light green)
- --token-5689bdeb: #000 (Black)
- --token-0471d2e9: #fff (White)
Grayscale:
- --token-b3cabfe1: gray
- --token-0c334040: #787878
- --token-6cac3c9f: #0a0a0a
- --token-8b78209c: #f0f0f0
- --token-87bb1238: #e3e3e3
- --token-86d68901: #d4d4d4
- --token-231b17ac: #fefefd
- --token-876628f5: #dedede
- --token-fb7f94fe: #333
Transparency/Overlays:
- --token-c5369c4b: #ababab4d
- --token-bb21d19f: #0000001a
- --token-443e60bb: #8080804d
- --token-5eb70977: #ffffff8a
- --token-39074aa2: #0000004d
- --token-ac39dfb3: #0000004d
Dark Mode Support
Uses @media (prefers-color-scheme: dark) for automatic theme switching
Different color values for dark mode
Text Selection
::selection {
  background-color: #61E88A;
  color: #000000;
}
4. LAYOUT STRUCTURE
Responsive Breakpoints
Desktop: min-width: 1400px (.hidden-72rtr7)
Tablet: 810px - 1399.98px (.hidden-10jkukj)
Mobile: max-width: 809.98px (.hidden-1h7a1r9)
Main Container
Max-width: 1400px
Centered layout with flexbox
Background: #fefefd (light) / #080808 (dark)
5. KEY SECTIONS & COMPONENTS
A. Hero Section
Class: .framer-ved43p
Full viewport height (100vh)
Centered content
Contains:
Large heading (Coconat font, 80px desktop)
Subtitle text
Bottom section with links/info
Animated background elements
B. Navigation/Header
Class: .framer-xvlyll-container
Fixed position at top
z-index: 2
Auto height
Transform: translate(-50%) for centering
C. Content Sections
Multiple content blocks with:

Class: .framer-19m958o
Max-width: 1400px
Padding: 100px 38px 150px
Background: white/dark theme
D. Project Grid
Class: .framer-jzb7pv
Flexbox column layout
Gap: 40px
Full width with min-width: 97%
Max-width: 1800px
E. Two-Column Layouts
Class: .framer-hm8gqj
Flexbox row
Gap: 20px
Equal width columns (flex: 1 0 0)
F. Sticky Sidebar
Class: .framer-1hr1h5k
Position: sticky
Top: 128px
Flex column layout
Gap: 20px
G. Footer Section
Multiple text blocks
Social links
Copyright information
Background separators
6. INTERACTIVE ELEMENTS
A. Modal/Overlay System
Backdrop: .framer-6cig6n / .framer-wpaoxa

Background: #000c (black with opacity)
Fixed position, full screen
z-index: 2
User-select: none
Modal Container: .framer-1o8xd6i

Position: fixed
Transform: translate(-50%, -50%)
Centered on screen
z-index: 2
B. Image Lightbox
Class: .framer-18kpa2q
Fixed positioning
Width: 502px, Height: 526px
Centered with transform
Close button (48x48px)
C. Cursor Effects
Custom cursor classes
.framer-cursor-none - hides cursor
.framer-pointer-events-none - disables pointer events
D. Hover States
Link hover effects with color transitions
Button hover states
Card hover animations
7. ANIMATIONS & EFFECTS
A. Will-Change Properties
will-change: var(--framer-will-change-effect-override, transform)
will-change: var(--framer-will-change-filter-override, filter)
B. Transitions
Link color transitions: transition: color .3s cubic-bezier(.44,0,.56,1)
Smooth transform animations
C. Scroll Effects
Sticky positioning for navigation
Parallax-like effects with fixed backgrounds
Opacity changes on scroll
D. Image Animations
Aspect ratio animations
Transform effects
Filter effects (blur, brightness)
8. IMAGES & MEDIA
Image Containers
Classes: .framer-1t5jq7e, .framer-1abrk1g, .framer-fpxryp
Aspect ratio: 0.750188
Responsive sizing
Overflow: visible
Background Images
Fixed background elements
Positioned absolutely
Z-index layering
Image URLs (from Framerusercontent.com)
Profile images
Project screenshots
Background graphics
Icons and logos
9. TEXT STYLING
Heading Styles
H1 (Coconat):
- Desktop: 80px, line-height: 1em
- Tablet: 64px, line-height: 1em
- Mobile: 40px, line-height: 1.2em
- Letter-spacing: -0.02em
H2 (Coconat):
- Mobile/Tablet: 32px, line-height: 1.2em
- Letter-spacing: -0.02em
H4 (Coconat):
- Desktop: 28px, line-height: 1.3em
- Mobile: 22px, line-height: 1.3em
H6 (Neue Montreal):
- 12px, uppercase
- Line-height: 1.4em
Body Text
Font: Neue Montreal Regular
Multiple sizes for different contexts
Link underlines with custom colors
Text Decoration
--text-decoration: var(--framer-text-decoration-style, solid)
                   var(--framer-text-decoration, none)
                   var(--framer-text-decoration-color, currentcolor)
                   var(--framer-text-decoration-thickness, auto)
10. SPECIAL FEATURES
A. Text Truncation
Safari 16 specific handling
Line clamping support
Ellipsis for overflow
B. Display P3 Color Support
Conditional color application
Fallback for browsers without P3 support
C. Aspect Ratio Polyfill
@supports not (aspect-ratio: 1) {
  /* Padding-bottom hack for aspect ratio */
}
D. Superellipse Corner Support
@supports (corner-shape: superellipse(2)) {
  :root {
    --one-if-corner-shape-supported: 1
  }
}
11. FRAMER-SPECIFIC CLASSES
Component Types
framer-lib-cursors-host
framer-lib-combinedCSSRules
PropertyOverrides
Multiple component identifiers (framer-S6BNt, framer-5Kxvw, etc.)
Container Classes
.framer-*-container pattern for component wrappers
Specific positioning and sizing
12. ACCESSIBILITY FEATURES
Font Smoothing
-webkit-font-smoothing: antialiased
-moz-osx-font-smoothing: grayscale
Semantic HTML
Proper heading hierarchy
Link text colors and decorations
Focus states (implied)
Screen Reader Support
Proper alt text structure
Semantic markup
13. PERFORMANCE OPTIMIZATIONS
Font Loading Strategy
Font-display: swap
Preconnect to Google Fonts
Unicode range splitting for smaller downloads
Image Optimization
Aspect ratio preservation
Lazy loading structure
WebP format support (implied from Framer)
CSS Optimization
Minified CSS
Combined rules
CSS custom properties for theming
14. THIRD-PARTY INTEGRATIONS
Framer
Built entirely in Framer
Generator: Framer 05a55d9
Published: Jan 19, 2026, 12:15 PM UTC
Google Fonts
Jersey 15 font family
Preconnect for performance
External Resources
framerusercontent.com for assets
framerstatic.com for static files
15. CONTENT ELEMENTS TO PRESERVE
Text Content
"Dousa Miao | UX Designer at Google"
"Product designer with 5 years of experience, based in London, UK"
"Currently with Google working on Android – the most used OS on the planet"
All project descriptions
All link texts
Footer information
Links & Navigation
Social media links
Project links
Navigation menu items
External resource links
16. TECHNICAL SPECIFICATIONS
Box Model
box-sizing: border-box
margin: 0
padding: 0
Flexbox Usage
Extensive use of flexbox for layouts
place-content for alignment
gap property for spacing
Z-Index Layers
z-index: 4 (top modal)
z-index: 3 (menu overlay)
z-index: 2 (navigation, modals)
z-index: 1 (content layers)
z-index: 0 (background)
z-index: -1 (decorative elements)
17. BROWSER COMPATIBILITY
Feature Detection
@supports queries for:
aspect-ratio
color(display-p3)
overflow: clip
background: -webkit-named-image
corner-shape: superellipse
contain-intrinsic-size
grid-template-rows: subgrid
Fallbacks
Overflow clip fallback to hidden
Aspect ratio padding hack
Color space fallbacks
18. ANIMATION CLASSES
Transform Effects
.framer-will-change-override: transform
Translate, scale, rotate animations
3D transforms for performance
Filter Effects
.framer-will-change-filter-override: filter
Blur effects
Brightness adjustments
19. FORM ELEMENTS (if any)
Input Styling
input, textarea, select, button {
  font-family: sans-serif;
  font-size: 12px;
}
20. SUMMARY OF RECREATABLE ELEMENTS
Must-Have Features:
✅ Responsive layout (3 breakpoints)
✅ Custom font loading (Coconat, Neue Montreal, Inter)
✅ Dark mode support
✅ Sticky navigation
✅ Modal/lightbox system
✅ Image galleries with aspect ratios
✅ Animated transitions
✅ Custom color scheme with CSS variables
✅ Text selection styling
✅ Flexbox-based grid system
✅ Fixed background elements
✅ Hover effects on links and buttons
✅ Smooth scrolling behavior
✅ Overlay/backdrop system
✅ Custom cursor effects
Content Preservation:
All text content (headings, paragraphs, links)
All images (need to extract URLs)
All layout structures
All spacing and padding values
All color values
All font sizes and weights