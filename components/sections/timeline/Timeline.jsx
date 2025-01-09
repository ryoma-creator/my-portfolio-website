'use client';

import Carousel from '@/components/features/achievements/carousel/Carousel';
import { achievements } from '@/components/features/achievements/data/achievements';

export default function Timeline() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16">Timeline</h2>
        <Carousel achievements={achievements} />
      </div>
    </section>
  );
}