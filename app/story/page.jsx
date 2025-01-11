'use client'

import SectionWrapper from '@/components/sections/common/SectionWrapper';
import SectionHeader from '@/components/sections/common/SectionHeader';

export default function Page() {
  return (
    <main>
      <SectionWrapper variant="gradient" className="py-24">
        <SectionHeader 
          backgroundText="TITLE"
          topText="Page"
          bottomText="Title"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-responsive-lg mb-8">Content</h1>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
