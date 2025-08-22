# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Architecture Overview

### Technology Stack
- **Next.js 14** with App Router architecture
- **TypeScript** for type safety (strict mode enabled)
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for animations
- **React Hook Form + Zod** for form validation
- **Radix UI** and custom UI components in `src/components/ui/`
- **Chart.js** for ROI calculator visualizations
- **Three.js** (@react-three/fiber) for 3D components

### Project Structure

The application follows Next.js 14 App Router conventions:

- **`src/app/`**: Next.js app router pages and API routes
  - API endpoints: `/api/contact`, `/api/calculate-roi`, `/api/track`
  - Pages: Main landing page (`page.tsx`), Thank you page (`merci/page.tsx`)
  
- **`src/components/`**: Organized component architecture
  - `sections/`: Main page sections (Hero, Pricing, Process, etc.)
  - `shared/`: Reusable components (ContactForm, ROICalculator, etc.)
  - `ui/`: Atomic UI components with custom designs
  - `magicui/`: Special animated components (arc-timeline, shine-border)
  - `blocks/`: Composite components like pricing-card
  - `layout/`: Layout components (Header)

- **`src/lib/`**: Utilities and configuration
  - `utils.ts`: Contains `cn()` utility for className merging
  - `analytics.ts`: Analytics tracking configuration
  - `constants.ts`: Application constants

### Key Architecture Patterns

1. **Component Composition**: The main page (`app/page.tsx`) composes section components in a specific order for optimal conversion flow.

2. **Path Aliasing**: Uses `@/*` alias for `./src/*` imports throughout the codebase.

3. **Form Handling**: Forms use React Hook Form with Zod schemas for validation, particularly in ContactForm and ROICalculator components.

4. **Analytics Integration**: Google Analytics and Facebook Pixel are integrated at the layout level with tracking events throughout the application.

5. **Styling System**: 
   - Uses Tailwind CSS with custom configuration
   - Multiple font families: Inter, Plus Jakarta Sans, and Sora
   - CSS variables for font families defined in layout
   - Design tokens for colors (Primary: #1E40AF, Secondary: #F97316, Accent: #059669)

6. **Image Optimization**: Configured for next/image with support for external domains (Unsplash) and modern formats (AVIF, WebP).

### API Architecture

All API routes follow Next.js 14 Route Handlers pattern:
- Located in `src/app/api/[endpoint]/route.ts`
- Handle POST requests for forms and calculations
- Include server-side validation and Slack webhook integration for notifications

### Performance Considerations

- Standalone output mode for optimized production builds
- CSS optimization enabled in experimental features
- Font display swap for better performance
- Lazy loading implemented for sections
- Target Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100

### Local Context

This is a high-conversion landing page for Runcall, a telephone closing service in La Réunion (French territory). The application includes:
- French language content throughout
- Local time zone considerations (UTC+4)
- Cultural adaptations for the Réunion market
- Pricing in euros
- Local phone number formatting