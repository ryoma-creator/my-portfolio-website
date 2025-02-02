'use client'

import { SectionContainer, SectionGroup } from '../section';
import Link from 'next/link';

const Concept = () => {
  return (
    <SectionContainer>
      <SectionGroup 
        subtitle="RYOMA TAGUCHI"
        title="Creating Digital Solutions Since 2024"
      >
        <div className="flex justify-center">
          <Link 
            href="/concept"
            className="inline-flex items-center justify-center px-8 py-3 border border-text-primary rounded-full
             hover:bg-text-primary hover:text-white transition-colors duration-300"
          >
            My Story
          </Link>
        </div>
      </SectionGroup>
    </SectionContainer>
  );
};

export default Concept;