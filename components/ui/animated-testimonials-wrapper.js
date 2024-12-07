import dynamic from 'next/dynamic'

export const AnimatedTestimonials = dynamic(
  () => import('./animated-testimonials').then(mod => mod.AnimatedTestimonialsBase),
  { ssr: false }
)

