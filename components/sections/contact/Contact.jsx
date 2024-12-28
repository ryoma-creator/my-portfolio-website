// components/sections/contact/Contact.jsx
'use client'

import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <GsapAnimatedText 
            text="Let's Work Together"
            variant="perspectiveTilt"
            duration={1.5}
            scrollTrigger={true}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          />
          <GsapAnimatedText 
            text="Ready to bring value to your global team"
            variant="blurIn"
            duration={1.5}
            delay={0.3}
            scrollTrigger={true}
            className="text-xl md:text-2xl text-white/80"
          />
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
            <CardContent className="p-6 text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href="mailto:your.email@example.com"
                className="text-accent hover:underline"
              >
                your.email@example.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
            <CardContent className="p-6 text-center">
              <Linkedin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View Profile
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all">
            <CardContent className="p-6 text-center">
              <Github className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View Projects
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Looking forward to discussing how I can contribute to your team's success through technical expertise and cultural understanding.
          </p>
          <button className="px-8 py-3 bg-accent text-gray-900 rounded-full font-bold hover:bg-accent/90 transition-colors">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}