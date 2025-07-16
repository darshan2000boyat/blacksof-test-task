# Blacksof Test Task - Next 15/Typescript Project

This project is a modern web application built with [Next.js](https://nextjs.org), bootstrapped using [`create-next-app`]. It leverages best practices for performance, accessibility, and maintainability.

---

## Table of Contents

- [Project Setup Instructions](#project-setup-instructions)
- [Component Architecture Overview](#component-architecture-overview)
- [Responsive Design Strategy](#responsive-design-strategy)
- [Performance Optimization Techniques](#performance-optimization-techniques)
- [Accessibility Considerations](#accessibility-considerations)
- [Third-Party Libraries](#third-party-libraries)
- [Assumptions & Decisions](#assumptions--decisions)
- [Challenges & Solutions](#challenges--solutions)
- [Upcoming Features & Improvements](#upcoming-features--improvements)
- [Additional Remarks](#additional-remarks)

---

## Project Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/darshan2000boyat/blacksof-test-task.git
   cd blacksof-test-task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

5. **Start editing:**
   Modify `app/page.tsx` or other files in the `app/` directory. The page auto-updates as you edit.

---

## Component Architecture Overview

- **App Directory Structure:**  
  Uses Next.js [App Router](https://nextjs.org/docs/app) for file-based routing and layout composition.
- **Component Organization:**  
  - `app/`: Contains route segments and pages.
  - `components/`: Reusable UI components (e.g., footer, catalogue).
  - `styles/`: Global, modular CSS files and TypeScript.
- **State Management:**  
  - Utilizes React's built-in state for local.
- **Font Management:**  
  - Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimized font loading (e.g. Manrope).

---

## Responsive Design Strategy

- **Mobile-First Approach:**  
  All layouts and components are designed to be fully responsive, starting from mobile breakpoints.
- **CSS Techniques:**  
  - Utilizes CSS Flexbox and Grid for layout.
  - Media queries for adaptive breakpoints.
  - Relative units (`rem`, `%`) for scalable sizing.
- **Testing:**  
  - Manual and automated checks on various device sizes.

---

## Performance Optimization Techniques

- **Image Optimization:**  
  Uses Next.js `<Image />` component for automatic image resizing and lazy loading.
- **Code Splitting:**  
  Leverages Next.js dynamic imports and route-based code splitting.
- **Font Optimization:**  
  Loads only required font subsets and weights.
- **Static Generation & SSR:**  
  Uses static site generation (SSG) and server-side rendering (SSR) where appropriate.
- **Third-Party Libraries:**  
  Only essential libraries are included to minimize bundle size.

---

## Accessibility Considerations

- **Semantic HTML:**  
  Uses proper HTML5 elements for structure and meaning.
- **Keyboard Navigation:**  
  All interactive elements are accessible via keyboard.
- **ARIA Attributes:**  
  Adds ARIA roles and labels where necessary.
- **Color Contrast:**  
  Ensures sufficient contrast for text and UI elements.
- **Screen Reader Support:**  
  Components are tested for screen reader compatibility.

---

## Third-Party Libraries

- **Next.js:** Core framework for SSR, routing, and optimizations.
- **Framer Motion:** For declarative animations and transitions.
- **@headlessui/react:** Accessible UI primitives (e.g., modals, disclosures).
- **next/font:** For optimized font loading.
- *(Add any other libraries used in your implementation)*

---

## Assumptions & Decisions

- **Modern Browsers:**  
  The app targets evergreen browsers with ES6+ support.
- **Minimal Global State:**  
  Chose React Context over heavier state management solutions.
- **Component Reusability:**  
  Components are designed to be reusable and composable.
- **Deployment:**  
  Primary deployment target is [Vercel](https://vercel.com).

---

## Challenges & Solutions

- **Challenge:** Ensuring consistent styling across browsers.  
  **Solution:** Used CSS resets and tested on multiple browsers.

- **Challenge:** Balancing performance with rich animations.  
  **Solution:** Leveraged Framer Motion's lazy loading and only animated visible elements.

- **Challenge:** Accessibility for custom components.  
  **Solution:** Used Headless UI and manual ARIA checks.

- **Challenge:** Implementation of smooth scroll behaviour for catalogue components as its been a while using framer motion.  
  **Solution:** At a point decided to use GSAP but despite changing current implementaton have a look on framer motion's documentation for properties.


---

---

## Additional Remarks

- Deployed version https://blacksof-test-task.vercel.app

## Author

**Darshan Boyat**  
📧 [darshboyat@gmail.com](mailto:darshboyat@gmail.com)  
📱 +91 9691174714  
[LinkedIn](https://www.linkedin.com/in/darshan-boyat-72b2601a9/)
