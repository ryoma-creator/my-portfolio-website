'use client'

import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

export default function ResultsSection() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-responsive-lg text-center font-light mb-16">実績</h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 p-8 rounded-lg mb-8">
              <h3 className="text-responsive-md mb-4">教育での成果</h3>
              <p className="text-white/60 mb-4">
                3ヶ月かかっていた新人教育を1ヶ月に短縮し、
                組織全体の生産性を向上させることに成功。
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg">
              <h3 className="text-responsive-md mb-4">UI/UX改善</h3>
              <p className="text-white/60 mb-4">
                データに基づく改善により、ユーザー満足度を向上。
              </p>
            </div>
          </motion.div>

          <SectionWrapper variant="gradient">
  <div className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-light mb-6">Let's Connect</h2>
        <p className="text-lg text-white/80">
          Looking forward to discussing how my analytical approach and cross-cultural experience can benefit your team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Technical Discussion Option */}
        <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all">
          <h3 className="text-2xl font-light mb-4">Technical Discussion</h3>
          <p className="text-white/60 mb-6">30 min engineering chat via Google Meet</p>
          <button className="px-6 py-3 bg-accent rounded-full text-sm hover:bg-accent/80 transition-colors">
            Schedule a Call
          </button>
        </div>

        {/* Direct Contact Option */}
        <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all">
          <h3 className="text-2xl font-light mb-4">Direct Message</h3>
          <p className="text-white/60 mb-6">Share your thoughts - Response within 24 hours</p>
          <button className="px-6 py-3 bg-accent rounded-full text-sm hover:bg-accent/80 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
</SectionWrapper>
        </div>
      </div>
    </div>
  );
}