# Customization Guide

## 🎨 Quick Customization

### 1. Change Brand Name & Colors

**File: `src/components/Navbar.jsx` and `src/components/Footer.jsx`**

Replace "Luxe Lash Studio" with your client's business name:

```jsx
// Current
<span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
  Luxe Lash Studio
</span>

// Change to
<span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
  Your Client's Name
</span>
```

### 2. Update Color Scheme

**File: `tailwind.config.js`**

```js
colors: {
  primary: {
    // Change these hex values to match your client's brand
    50: '#fdf2f8',   // Lightest
    500: '#ec4899',  // Main brand color
    600: '#db2777',  // Darker shade
    700: '#be185d',  // Darkest
  },
}
```

Popular color schemes:
- **Purple Luxury**: `#9333ea` (primary-500)
- **Teal Modern**: `#14b8a6` (primary-500)
- **Royal Blue**: `#3b82f6` (primary-500)
- **Rose Gold**: `#e11d48` (primary-500)

### 3. Update Contact Information

**File: `src/components/Location.jsx`**

```jsx
// Update address
<p className="text-gray-600">Your Client's Name</p>
<p className="text-gray-600">Street Address</p>
<p className="text-gray-600">City, State ZIP</p>

// Update phone number (appears in multiple files)
// Search and replace: (336) 422-0626 with new number
// tel:+13364220626 with new tel: link
```

**Files to update phone number:**
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/SpecialOffer.jsx`
- `src/components/Location.jsx`

### 4. Change Business Hours

**File: `src/components/Location.jsx`**

```jsx
const hours = [
  { day: 'Monday', time: 'Closed' },  // Update times here
  { day: 'Tuesday', time: '09:00 AM - 5:00 PM' },
  // ... etc
]
```

### 5. Update Pricing

**File: `src/components/SpecialOffer.jsx`**

```jsx
<div className="text-gray-500 text-lg line-through">Regular $170</div>
<div className="text-5xl md:text-6xl font-bold text-primary-600">$89.99</div>
```

### 6. Customize Reviews

**File: `src/components/Reviews.jsx`**

```jsx
const reviews = [
  {
    name: 'Client Name',
    date: 'Date',
    rating: 5,
    text: 'Review text here...',
    platform: 'Google' // or 'Facebook', 'Yelp', etc.
  },
  // Add more reviews
]
```

### 7. Update Service Descriptions

**File: `src/components/Services.jsx`**

```jsx
const services = [
  {
    icon: Zap,
    title: 'Service Name',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2', ...],
    gradient: 'from-blue-500 to-cyan-500'
  },
  // Update or add more services
]
```

### 8. Modify Hero Section

**File: `src/components/Hero.jsx`**

```jsx
// Main headline
<h1>
  Wake Up{' '}
  <span className="bg-gradient-to-r from-primary-600 to-primary-400">
    Makeup-Free  {/* Change this */}
  </span>
  <br />
  And Confident  {/* Change this */}
</h1>

// Subtitle
<p>
  Your custom subtitle here...
</p>
```

### 9. Add Logo Image

**Option 1: Replace text logo with image**

In `src/components/Navbar.jsx`:

```jsx
// Replace text logo with:
<img 
  src="/logo.png" 
  alt="Business Name" 
  className="h-12 w-auto"
/>
```

Then add your logo image to `/public/logo.png`

### 10. Update Page Title & Favicon

**File: `index.html`**

```html
<title>Your Business Name - Eyelash Extensions</title>

<!-- Add favicon -->
<link rel="icon" type="image/png" href="/favicon.png" />
```

Add favicon image to `/public/favicon.png`

## 🖼️ Adding Images

### Hero Background Image

In `src/components/Hero.jsx`, add background image:

```jsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: 'url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Service Images

In `src/components/Services.jsx`, replace icon with image:

```jsx
// Instead of icon
<div className="w-full h-48 rounded-xl overflow-hidden mb-4">
  <img 
    src="/service-image.jpg" 
    alt="Service Name"
    className="w-full h-full object-cover"
  />
</div>
```

## 🎬 Animation Customization

### Adjust Animation Speed

In any component using `motion.div`:

```jsx
<motion.div
  transition={{ duration: 0.8 }}  // Change duration (in seconds)
>
```

### Disable Animations

Set `animate` to same values as `initial`:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}  // Change to 0 to disable
>
```

## 📱 Social Media Links

**File: `src/components/Footer.jsx`**

```jsx
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
  // Update URLs
]
```

## 🔧 Advanced Customization

### Add Google Analytics

In `index.html`, before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Facebook Pixel

In `index.html`, before `</head>`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Integrate Booking System

Replace phone number CTAs with booking widget:

```jsx
<button
  onClick={() => {
    // Open booking modal or redirect to booking page
    window.open('https://yourbookingurl.com', '_blank')
  }}
  className="btn-primary"
>
  Book Online
</button>
```

## 📦 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Done! Your site is live

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Traditional Hosting

1. Build: `npm run build`
2. Upload `dist` folder contents to your web host
3. Ensure server serves `index.html` for all routes

## 🎯 Quick Tips

1. **Test on Mobile**: Always test changes on mobile devices
2. **Optimize Images**: Use WebP format and compress images
3. **Update Regularly**: Keep dependencies updated with `npm update`
4. **Backup**: Keep a backup of original files before major changes
5. **Performance**: Run `npm run build` and check bundle size

## 📞 Support

For questions about customization, refer to:
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

