# Landing Page Template Customization Prompt

Use this prompt to easily customize the landing page template for your specific product or service. Simply replace the placeholder values with your actual product information.

## 🎯 Quick Customization Prompt

```
I need to customize this landing page template for my product/service. Here are my details:

**Product Information:**
- Product Name: [Your Product Name]
- Tagline: [Your Product Tagline/Slogan]
- Description: [Brief description of what your product does]
- Industry: [Your industry/sector - e.g., SaaS, E-commerce, Mobile App, Software]

**Contact Information:**
- Email: [your-email@domain.com]
- Phone: [+1 (555) 123-4567]
- Address: [Your business address]
- Website: [https://yourwebsite.com]

**Social Media (optional):**
- Facebook: [https://facebook.com/yourproduct]
- Twitter: [https://twitter.com/yourproduct]
- LinkedIn: [https://linkedin.com/company/yourproduct]
- Instagram: [https://instagram.com/yourproduct]

**Features (4-6 main features):**
1. [Feature 1 Name] - [Brief description]
2. [Feature 2 Name] - [Brief description]
3. [Feature 3 Name] - [Brief description]
4. [Feature 4 Name] - [Brief description]
5. [Feature 5 Name] - [Brief description] (optional)
6. [Feature 6 Name] - [Brief description] (optional)

**Benefits (3 main benefits):**
1. [Benefit 1] - [Description] - [Statistic]
2. [Benefit 2] - [Description] - [Statistic]
3. [Benefit 3] - [Description] - [Statistic]

**Pricing (3 packages):**
- Starter Package: $[price]/month - [What's included]
- Professional Package: $[price]/month - [What's included]
- Enterprise Package: $[price]/month - [What's included]

**Social Proof Stats:**
- [Number] Happy Customers
- [Percentage] Uptime
- [Number] Countries
- [Text] Support

**Google Reviews (optional):**
- Google Place ID: [Your Google Place ID]
- Google API Key: [Your Google API Key]

Please update the template with this information and ensure all content reflects my product.
```

## 📋 Detailed Customization Guide

### Step 1: Basic Product Information

**File to Update:** `src/config/landing.ts`

```typescript
export const landingInfo = {
  name: '[Your Product Name]',
  tagline: '[Your Product Tagline]',
  description: '[Your product description]',
  email: '[your-email@domain.com]',
  phone: '[+1 (555) 123-4567]',
  address: '[Your business address]',
  website: '[https://yourwebsite.com]',
  // ... rest of config
}
```

### Step 2: Features Customization

**File to Update:** `src/config/landing.ts` (features array)

```typescript
export const features = [
  {
    id: 1,
    title: '[Your Feature 1]',
    description: '[Feature 1 description]',
    icon: 'Zap', // Choose from: Zap, Shield, User, Headphones, etc.
    color: 'blue' // Choose from: blue, green, purple, orange
  },
  // ... add more features
]
```

### Step 3: Benefits Customization

**File to Update:** `src/config/landing.ts` (benefits array)

```typescript
export const benefits = [
  {
    id: 1,
    title: '[Your Benefit 1]',
    description: '[Benefit 1 description]',
    stat: '[Your Statistic]',
    icon: 'TrendingUp' // Choose from: TrendingUp, Clock, DollarSign, etc.
  },
  // ... add more benefits
]
```

### Step 4: Pricing Customization

**File to Update:** `src/config/landing.ts` (pricing array)

```typescript
export const pricing = [
  {
    id: 1,
    name: '[Package Name]',
    price: '$[price]',
    period: '/month', // or 'one-time'
    description: '[Package description]',
    features: [
      '[Feature 1]',
      '[Feature 2]',
      '[Feature 3]'
    ],
    popular: false, // Set to true for the most popular package
    cta: '[Call to Action Text]'
  },
  // ... add more packages
]
```

### Step 5: Social Proof

**File to Update:** `src/config/landing.ts` (socialProof object)

```typescript
export const socialProof = {
  stats: [
    { number: '[Number]+', label: '[Label]' },
    { number: '[Percentage]%', label: '[Label]' },
    { number: '[Number]+', label: '[Label]' },
    { number: '[Text]', label: '[Label]' }
  ],
  logos: [
    { name: '[Company Name]', logo: '/api/placeholder/120/40' },
    // ... add more company logos
  ]
}
```

## 🎨 Visual Customization

### Colors and Branding

**File to Update:** `src/index.css` or create custom CSS

```css
:root {
  --primary-50: #f0f9ff;
  --primary-600: #0284c7; /* Your primary brand color */
  --secondary-600: #7c3aed; /* Your secondary brand color */
  /* ... update other color variables */
}
```

### Logo Integration

**File to Update:** `src/config/landing.ts`

```typescript
export const landingInfo = {
  // ... other config
  logo: 'https://yourdomain.com/logo.png', // Add your logo URL
  // ... rest of config
}
```

## 📊 Google Reviews Setup

### Option 1: Quick Setup (Third-party Widget)

1. Sign up with [Elfsight](https://elfsight.com/google-reviews-widget/)
2. Connect your Google Business Profile
3. Get your widget ID
4. Update config:

```typescript
export const landingInfo = {
  // ... other config
  reviewWidget: {
    enabled: true,
    provider: 'elfsight',
    widgetId: 'your-widget-id-here',
    embedCode: '',
  }
}
```

### Option 2: Advanced Setup (Google Places API)

1. Get your Google Place ID from [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
3. Update config:

```typescript
export const landingInfo = {
  // ... other config
  googleReviews: {
    enabled: true,
    placeId: 'your-place-id',
    apiKey: 'your-api-key',
    maxReviews: 6,
    showRating: true,
    showReviewCount: true,
  }
}
```

## 🚀 Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Custom Domain

1. Add your custom domain in Netlify
2. Update DNS settings
3. Enable HTTPS

## 📱 Content Guidelines

### Writing Effective Content

**Headlines:**
- Keep under 60 characters
- Use action words
- Focus on benefits, not features

**Descriptions:**
- Use simple, clear language
- Focus on user benefits
- Include relevant keywords

**Call-to-Actions:**
- Use action-oriented language
- Create urgency when appropriate
- Make it clear what happens next

### SEO Optimization

**Meta Tags:**
- Update page titles and descriptions
- Include relevant keywords
- Keep descriptions under 160 characters

**Content Structure:**
- Use proper heading hierarchy (H1, H2, H3)
- Include relevant keywords naturally
- Add alt text to images

## 🔧 Technical Customization

### Adding New Sections

1. Create new section component in `src/components/sections/`
2. Import and use in `src/App.tsx`
3. Follow existing patterns for consistency

### Custom Components

1. Create component in `src/components/`
2. Import and use in sections
3. Follow existing patterns for consistency

### Styling

- Use Tailwind CSS classes
- Follow existing design patterns
- Maintain responsive design
- Test on mobile devices

## 📋 Pre-Launch Checklist

- [ ] All product information updated
- [ ] Contact information verified
- [ ] Features accurately described
- [ ] Benefits clearly stated with statistics
- [ ] Pricing packages configured
- [ ] Social proof stats updated
- [ ] Testimonials added (if available)
- [ ] Google Reviews integrated (if desired)
- [ ] Logo uploaded and displaying
- [ ] Social media links working
- [ ] Contact form tested
- [ ] Mobile responsiveness checked
- [ ] Page loading speed optimized
- [ ] SEO meta tags updated
- [ ] Analytics tracking added (if desired)

## 🆘 Common Issues & Solutions

**Images not loading:**
- Check image URLs are correct
- Ensure images are optimized for web
- Use proper file formats (JPG, PNG, WebP)

**Contact form not working:**
- Verify Netlify form integration
- Check form field names match
- Test form submission

**Google Reviews not showing:**
- Verify Place ID is correct
- Check API key permissions
- Ensure business has Google reviews

**Styling issues:**
- Check Tailwind CSS classes
- Verify responsive breakpoints
- Test on different devices

## 📞 Support

If you need help customizing the template:

1. Check this documentation first
2. Review the code comments
3. Test changes in development mode
4. Use browser developer tools for debugging

## 🎉 Success Tips

- Start with basic information first
- Test changes frequently
- Keep content concise and clear
- Focus on user experience
- Optimize for mobile devices
- Regular updates keep content fresh

---

**Ready to customize?** Use the quick customization prompt at the top of this document and replace the placeholder values with your actual product information!
