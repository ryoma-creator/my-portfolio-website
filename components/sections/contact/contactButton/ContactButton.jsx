'use client'

import { useState, useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast, Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+63) 0935 981 8031',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ryoma.t.engineer@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Tokyo, Japan (UTC+9)',
  }
];

export default function ContactButton({ className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!formData.firstname || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setShowConfetti(true);
        toast.success('Message sent successfully! 🎉', {
          duration: 5000,
          icon: '🎊'
        });

        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          reason: '',
          message: ''
        });

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTimeout(() => {
          setShowConfetti(false);
          setIsModalOpen(false);
        }, 1500);
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error details:', error);
      toast.error('An error occurred: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF] 
          p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${className}`}
      >
        <FaEnvelope className="w-6 h-6 text-white" />
      </button>

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-[9999]"
          onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          <div 
            className="relative w-[95%] max-w-[1200px] h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center
                       bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
                bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF]  
                blur-3xl transform rotate-12 animate-gradient-xy opacity-20" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
                bg-gradient-to-r from-teal-400/40 via-blue-400/40 to-indigo-400/40 
                blur-3xl transform -rotate-12 animate-gradient-xy opacity-20" />
            </div>

            <div className="h-full overflow-y-auto">
              <div className="flex flex-col px-8 pt-4 pb-8">
                {showConfetti && <Confetti />}
                <Toaster position="top-center" />

                <h2 className="text-4xl font-bold text-center mb-12">
                  Contact <span className="text-accent">Me</span>
                </h2>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                  <div className="order-2 xl:order-1">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input 
                          type="text"
                          name="firstname"
                          placeholder="First Name *" 
                          value={formData.firstname}
                          onChange={handleChange}
                          required
                          className="bg-white/50 border-gray-200 focus:border-[#EF96C5]"
                        />
                        <Input 
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          value={formData.lastname}
                          onChange={handleChange}
                          className="bg-white/50 border-gray-200 focus:border-[#EF96C5]"
                        />
                        <Input 
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-white/50 border-gray-200 focus:border-[#EF96C5]"
                        />
                        <Input 
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white/50 border-gray-200 focus:border-[#EF96C5]"
                        />
                      </div>

                      <Select 
                        onValueChange={(value) => {
                          setFormData(prev => ({
                            ...prev,
                            reason: value
                          }))
                        }}
                        value={formData.reason}
                      >
                        <SelectTrigger className="bg-white/50 border-gray-200 focus:border-[#EF96C5]">
                          <SelectValue placeholder="Reason for Contact" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                            <SelectItem value="project-inquiry">Project Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message *"
                        required
                        className="h-[200px] bg-white/50 border-gray-200 focus:border-[#EF96C5]"
                      />

                      <Button 
                        type="submit"
                        className="relative w-full group overflow-hidden rounded-full"
                        disabled={isSubmitting}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF] 
                          animate-gradient-x transition-opacity duration-300
                          ${isSubmitting ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <div className={`absolute inset-0 bg-gradient-to-r from-[#EF96C5] via-[#CCF8FF] to-[#EF96C5] 
                          animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          ${isSubmitting ? 'opacity-100' : ''}`} />
                        <span className={`relative font-medium
                          ${isSubmitting ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                      </Button>
                    </form>
                  </div>

                  <div className="order-1 xl:order-2">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                        <p className="text-gray-600">
                          I'm always interested in new projects and collaborations.
                          Choose your preferred way to connect with me.
                        </p>
                      </div>

                      <div className="space-y-6">
                        {info.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#CCF8FF] to-[#EF96C5] 
                              rounded-lg flex items-center justify-center">
                              <div className="text-2xl text-white">{item.icon}</div>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{item.title}</h4>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }

        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </>
  );
}