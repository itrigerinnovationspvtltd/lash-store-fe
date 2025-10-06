# Luxe Lash Studio - Premium Eyelash Landing Page

A beautiful, modern single-page website for an eyelash extension studio built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern & Responsive Design**: Beautiful UI that works perfectly on all devices
- **Apple-Style Smooth Scrolling**: Section-by-section scroll animations like Apple.com
- **Interactive Google Maps**: Embedded map with custom styling and fallback
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Components**: 
  - Animated hero section with gradient backgrounds
  - Auto-rotating testimonial carousel
  - Smooth scroll navigation with progress bar
  - Hover effects and transitions
  - Scroll-snap sections for perfect alignment
- **Clean & Minimal Content**: Optimized for mobile and desktop viewing
- **Optimized Performance**: Built with Vite for lightning-fast development and builds
- **No Backend Required**: Pure frontend application ready to deploy

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Google Maps API (optional):
   - Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
   - Enable Maps JavaScript API and Places API
   - Copy `env.example` to `.env` and add your API key
   - If no API key is provided, a fallback location card will be shown

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### UI Improvements Over Original

1. **Enhanced Visual Hierarchy**: Better use of typography, spacing, and color gradients
2. **Modern Animations**: Smooth entrance animations, hover effects, and transitions
3. **Better UX**: 
   - Sticky navigation that changes on scroll
   - Smooth scroll to sections
   - Mobile-responsive menu
   - Interactive call-to-action buttons
4. **Professional Color Scheme**: Pink/primary gradient theme with gold accents
5. **Engaging Testimonials**: Auto-rotating carousel with manual controls
6. **Service Cards**: Beautiful hover effects with gradient borders
7. **Visual Feedback**: Scale and shadow transitions on interactive elements

## 🔧 Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Production-ready animation library
- **Google Maps API**: Interactive map integration
- **Lucide React**: Beautiful hand-crafted icons

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with key value propositions
2. **Special Offer**: Highlighted pricing and limited-time offer
3. **Reviews**: Client testimonials with rotating carousel
4. **Services**: Four main service types with detailed features
5. **Lash Lift**: Additional service showcase
6. **Location & Hours**: Contact information and business hours
7. **Footer**: Social links and additional navigation

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },  // Main brand color
      gold: { ... },     // Accent color
    }
  }
}
```

### Content

Update the content in each component file in `src/components/`:
- `Hero.jsx` - Main headline and tagline
- `SpecialOffer.jsx` - Pricing and offers
- `Reviews.jsx` - Customer testimonials
- `Services.jsx` - Service descriptions
- `Location.jsx` - Contact information

## 📄 License

This project is created for demonstration purposes.

## 🙏 Acknowledgments

Inspired by the original Deka Lash website with enhanced UI/UX improvements.

