import dynamic from 'next/dynamic'

export const AnimatedTestimonials = dynamic(
  () => import('./animated-testimonials').then(mod => mod.AnimatedTestimonialsBase),
  { ssr: false }
)




// When you use dynamic with ssr: false, you're telling Next.js:
// "Hey, don't try to load this component on the server - wait until we're in the browser!"

// Concrete examples
// Server: Like a kitchen preparing food before the restaurant opens
// Can't interact with customers yet (no browser features)

// Browser: Like the dining room where customers are
// Can interact with everything (mouse clicks, screen size, etc.)

// Dynamic Import: Like a waiter who brings food from kitchen to customers
// Bridges the gap between preparation and interaction