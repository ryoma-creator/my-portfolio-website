// Create new file: components/ui/3d-components-wrapper.jsx
import dynamic from 'next/dynamic'

export const DynamicPin = dynamic(
  () => import('./3d-pin').then(mod => mod.PinContainer),
  { ssr: false }
)

export const DynamicCard = dynamic(
  () => import('./3d-card').then(mod => mod.CardContainer),
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