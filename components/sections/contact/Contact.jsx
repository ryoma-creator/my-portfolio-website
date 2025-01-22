'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail } from 'lucide-react';
import { ContactModal } from './ContactModal';
import ContactForm from './ContactForm';

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light mb-6 text-white">
            Join Our Community
          </h2>
          <p className="text-xl md:text-2xl text-white/60">
            Exclusive events, special offers and much more before anyone else
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Technical Discussion Option */}
          <a
            href="https://calendly.com/ryoma-t-engineer/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-105"
          >
            <Card className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all h-full border-0">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-6 text-white/80" />
                <h3 className="text-2xl font-light mb-4">Schedule a Call</h3>
                <p className="text-white/60 mb-4">30 min engineering discussion</p>
                <p className="text-sm text-white/40">
                  Quick discussion via Google Meet
                  <br />
                  Remote-friendly worldwide
                </p>
              </CardContent>
            </Card>
          </a>

          {/* Email Option */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="transform transition-all duration-300 hover:scale-105"
          >
            <Card className="bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all h-full border-0">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-6 text-white/80" />
                <h3 className="text-2xl font-light mb-4">Send a Message</h3>
                <p className="text-white/60 mb-4">Start the conversation</p>
                <p className="text-sm text-white/40">
                  Share your thoughts
                  <br />
                  Response within 24 hours
                </p>
              </CardContent>
            </Card>
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </ContactModal>
    </section>
  );
}