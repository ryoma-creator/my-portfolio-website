'use client'

import { useState } from 'react';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail } from 'lucide-react';

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <GsapAnimatedText 
            text="Let's Innovate"
            variant="perspectiveTilt"
            duration={1.5}
            scrollTrigger={true}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          />
          <GsapAnimatedText 
            text="Choose your preferred way to connect"
            variant="blurIn"
            duration={1.5}
            delay={0.3}
            scrollTrigger={true}
            className="text-xl md:text-2xl text-white/80"
          />
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Technical Discussion Option */}
          <a
            href="https://calendly.com/ryoma-t-engineer/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`block transition-all duration-300 ${
              hoveredCard === 'meeting' 
                ? 'transform scale-105' 
                : ''
            }`}
            onMouseEnter={() => setHoveredCard('meeting')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm hover:bg-accent/90 transition-all h-full">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-6 text-accent" />
                <h3 className="text-2xl font-bold mb-4">Technical Discussion</h3>
                <p className="text-gray-300 mb-4">30 min engineering chat</p>
                <p className="text-sm text-gray-400">
                  Quick discussion via Google Meet
                  <br />
                  No installation needed
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Email Option */}
          <a
            href="mailto:ryoma.t.engineer@gmail.com"
            className={`block transition-all duration-300 ${
              hoveredCard === 'email' 
                ? 'transform scale-105' 
                : ''
            }`}
            onMouseEnter={() => setHoveredCard('email')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card className="bg-gray-800/50 backdrop-blur-sm hover:bg-accent/90 transition-all h-full">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-6 text-accent" />
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <p className="text-gray-300 mb-4">Direct email contact</p>
                <p className="text-sm text-gray-400">
                  Share your thoughts
                  <br />
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-white/80 max-w-2xl mx-auto">
            Looking forward to discussing how my technical expertise can help drive your team's innovation.
          </p>
        </div>
      </div>
    </section>
  );
}