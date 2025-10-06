export const landingInfo = {
  name: 'Your Product',
  tagline: 'Transform Your Business Today',
  description: 'The ultimate solution to streamline your workflow and boost productivity. Join thousands of satisfied customers.',
  logo: null, // Add your logo URL here
  email: 'hello@yourproduct.com',
  phone: '+1 (555) 123-4567',
  address: '123 Product Street, Innovation City, IC 12345',
  website: 'https://yourproduct.com',
  socialMedia: {
    facebook: 'https://facebook.com/yourproduct',
    twitter: 'https://twitter.com/yourproduct',
    linkedin: 'https://linkedin.com/company/yourproduct',
    instagram: 'https://instagram.com/yourproduct',
  },
  // Google Reviews Integration
  googleReviews: {
    enabled: false, // Set to true to enable Google Reviews
    placeId: '', // Your Google Place ID (get from: https://developers.google.com/maps/documentation/places/web-service/place-id)
    apiKey: '', // Your Google Places API key
    maxReviews: 6, // Maximum number of reviews to display
    showRating: true, // Show overall rating
    showReviewCount: true, // Show total review count
  },
  // Third-party widget options
  reviewWidget: {
    enabled: false, // Set to true to use third-party widget
    provider: 'elfsight', // Options: 'elfsight', 'embedsocial', 'shapo'
    widgetId: '', // Your widget ID from the provider
    embedCode: '', // Direct embed code if using custom solution
  }
}

export const features = [
  {
    id: 1,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure.',
    icon: 'Zap',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee.',
    icon: 'Shield',
    color: 'green'
  },
  {
    id: 3,
    title: 'Easy to Use',
    description: 'Intuitive interface designed for users of all skill levels.',
    icon: 'User',
    color: 'purple'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round-the-clock customer support from our expert team.',
    icon: 'Headphones',
    color: 'orange'
  }
]

export const benefits = [
  {
    id: 1,
    title: 'Increase Productivity',
    description: 'Boost your team\'s productivity by up to 300% with our streamlined workflow.',
    stat: '300%',
    icon: 'TrendingUp'
  },
  {
    id: 2,
    title: 'Save Time',
    description: 'Automate repetitive tasks and save hours every day.',
    stat: '10+ hrs',
    icon: 'Clock'
  },
  {
    id: 3,
    title: 'Reduce Costs',
    description: 'Cut operational costs by up to 50% with our efficient solution.',
    stat: '50%',
    icon: 'DollarSign'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    content: 'This product has completely transformed how we operate. The results speak for themselves.',
    rating: 5,
    avatar: null
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'Best investment we\'ve made. The ROI was immediate and continues to grow.',
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Operations Director, GrowthCo',
    content: 'Outstanding product with exceptional support. Highly recommend to any business.',
    rating: 5,
    avatar: null
  }
]

export const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 users',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Mobile app access'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    id: 2,
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 users',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$199',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'White-label options',
      'Dedicated account manager'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
]

export const socialProof = {
  stats: [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ],
  logos: [
    { name: 'Company 1', logo: '/api/placeholder/120/40' },
    { name: 'Company 2', logo: '/api/placeholder/120/40' },
    { name: 'Company 3', logo: '/api/placeholder/120/40' },
    { name: 'Company 4', logo: '/api/placeholder/120/40' },
    { name: 'Company 5', logo: '/api/placeholder/120/40' },
  ]
}

// Skills for landing page (from portfolio.ts)
export const skills = [
  {
    id: 1,
    name: 'Productivity',
    level: 95,
    category: 'Performance',
    icon: 'Zap'
  },
  {
    id: 2,
    name: 'Security',
    level: 90,
    category: 'Reliability',
    icon: 'Shield'
  },
  {
    id: 3,
    name: 'User Experience',
    level: 88,
    category: 'Design',
    icon: 'User'
  },
  {
    id: 4,
    name: 'Support',
    level: 92,
    category: 'Service',
    icon: 'Headphones'
  },
  {
    id: 5,
    name: 'Integration',
    level: 85,
    category: 'Technology',
    icon: 'Link'
  },
  {
    id: 6,
    name: 'Analytics',
    level: 80,
    category: 'Insights',
    icon: 'BarChart'
  }
]

// Projects for landing page (from portfolio.ts)
export const projects = [
  {
    id: 1,
    title: 'Enterprise Dashboard',
    description: 'Comprehensive analytics dashboard for enterprise clients',
    image: '/api/placeholder/600/400',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourproduct/project1',
    featured: true
  },
  {
    id: 2,
    title: 'Mobile App',
    description: 'Cross-platform mobile application with real-time sync',
    image: '/api/placeholder/600/400',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourproduct/project2',
    featured: true
  },
  {
    id: 3,
    title: 'API Integration',
    description: 'Seamless third-party API integration solution',
    image: '/api/placeholder/600/400',
    category: 'Backend Development',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourproduct/project3',
    featured: false
  },
  {
    id: 4,
    title: 'Cloud Migration',
    description: 'Complete cloud infrastructure migration project',
    image: '/api/placeholder/600/400',
    category: 'DevOps',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourproduct/project4',
    featured: false
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Advanced data analytics and reporting system',
    image: '/api/placeholder/600/400',
    category: 'Data Science',
    technologies: ['Python', 'Pandas', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourproduct/project5',
    featured: false
  },
  {
    id: 6,
    title: 'Security Audit',
    description: 'Comprehensive security audit and implementation',
    image: '/api/placeholder/600/400',
    category: 'Security',
    technologies: ['OWASP', 'Penetration Testing', 'SSL/TLS'],
    liveUrl: 'https://example.com',
    githubUrl: null,
    featured: false
  }
]

// About content for landing page (from portfolio.ts)
export const aboutContent = {
  title: 'About Our Product',
  subtitle: 'Innovation Meets Excellence',
  description: 'We\'re a team of passionate developers and designers creating products that make a difference. Our mission is to simplify complex workflows and boost productivity for businesses worldwide.',
  stats: [
    { label: 'Users Served', value: '10,000+' },
    { label: 'Uptime', value: '99.9%' },
    { label: 'Countries', value: '50+' },
    { label: 'Support', value: '24/7' }
  ],
  features: [
    'User-centered design approach',
    'Modern development practices',
    'Cross-platform compatibility',
    'Strong security measures',
    'Attention to performance',
    'Continuous improvement mindset'
  ]
}
