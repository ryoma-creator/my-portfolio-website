'use client'

import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast, Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';
import { X } from 'lucide-react';

// 連絡先情報の定義
const contactInfo = [
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

export default function Contact() {
  // 状態管理
  const [open, setOpen] = useState(false);
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

  // フォーム入力の処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // フォーム送信の処理
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

        // フォームをリセット
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          reason: '',
          message: ''
        });

        // 成功アニメーションを表示して閉じる
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTimeout(() => {
          setShowConfetti(false);
          setOpen(false);
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
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
          p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 min-w-[44px] min-h-[44px]"
      >
        <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <Dialog open={open} onOpenChange={(newState) => {
  // 閉じる操作が意図的なものかを確認
  if (!newState) {  // モーダルを閉じようとしている場合
    // 例：フォームに入力があれば確認を表示
    if (formData.firstname || formData.email || formData.message) {
      if (window.confirm('Are you sure you want to close? Your input will be lost.')) {
        setOpen(false);
      }
    } else {
      setOpen(false);
    }
  } else {
    setOpen(true);
  }
}}>
        <DialogContent className="!w-[95vw] sm:!w-[90vw] !max-w-[min(90vw,1200px)] !h-[90vh] !max-h-[800px] flex flex-col bg-white overflow-hidden" style={{ 
          overflowX: 'hidden',
          padding: 'clamp(0.75rem, 2vw, 1.5rem)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 'min(90vw, 1200px)',
          width: '95vw',
          height: '90vh',
          maxHeight: '800px'
        }}>
            {/* カスタム閉じるボタンを追加 */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[9999] w-10 h-10 
                      flex items-center justify-center group
                      transition-all duration-300 min-w-[44px] min-h-[44px]
                      hover:bg-gray-100 rounded-full"
            >
              {/* Xアイコン */}
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 
                relative z-10 transition-colors duration-300" 
              />
            </button>

          <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-text-primary mb-4 sm:mb-6 px-2" style={{ 
            wordBreak: 'keep-all',
            overflowWrap: 'break-word'
          }}>
            Get in Touch
          </DialogTitle>

          {/* 全体を中央揃えにしていく */}
          <div className="flex-1 flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center overflow-y-auto gap-4 sm:gap-6 md:gap-8 lg:gap-12" style={{ 
            paddingInline: 'clamp(0.5rem, 2vw, 1rem)'
          }}>
            {/* 右カラム：フォーム */}
            <div className="order-2 xl:order-2 w-full xl:w-[50%] max-w-full">
              {/* <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your project or collaboration opportunities.
              </p> */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6 w-full" style={{ maxWidth: '100%' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
                  <Input 
                    type="text"
                    name="firstname"
                    placeholder="First Name *" 
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                    style={{ maxWidth: '100%' }}
                  />
                  <Input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name *"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                    style={{ maxWidth: '100%' }}
                  />
                  <Input 
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                    style={{ maxWidth: '100%' }}
                  />
                  <Input 
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                    style={{ maxWidth: '100%' }}
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
                  <SelectTrigger className="w-full bg-white/50 border-gray-200 focus:border-brand-pink" style={{ maxWidth: '100%' }}>
                    <SelectValue placeholder="Reason for Contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                      <SelectItem value="project-inquiry">Project Inquiry</SelectItem>
                      <SelectItem value="collaboration">Video Call</SelectItem>
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
                  className="w-full bg-white/50 border-gray-200 focus:border-brand-pink resize-none"
                  style={{ 
                    maxWidth: '100%',
                    height: 'clamp(120px, 20vh, 200px)',
                    minHeight: '120px'
                  }}
                />

                <Button 
                  type="submit"
                  className="relative w-full group overflow-hidden rounded-full min-h-[44px] bg-white/50 border border-gray-200 hover:border-transparent shadow-none hover:shadow-lg transition-all duration-300"
                  disabled={isSubmitting}
                  style={{ maxWidth: '100%' }}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
                    animate-gradient-x transition-opacity duration-300
                    ${isSubmitting ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  <span className={`relative z-10 font-medium
                    ${isSubmitting ? 'text-white' : 'text-text-primary group-hover:text-white transition-colors duration-300'}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </form>
            </div>

            {/* 連絡先情報（左側） */}
            <div className="order-1 xl:order-1 w-full xl:w-[45%] max-w-full">
              {/* <h3 className="text-xl font-bold mb-4">Get in Touch</h3> */}
              {/* <p className="text-2xl font-light text-gray-800 mb-12 leading-relaxed">
                  Ready to bring your<br />vision to life
              </p> */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 w-full" style={{ 
                    wordBreak: 'keep-all',
                    overflowWrap: 'break-word'
                  }}>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-brand-blue to-brand-pink 
                      rounded-lg flex items-center justify-center min-w-[40px] min-h-[40px]">
                      <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base md:text-lg font-medium text-text-primary mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm md:text-base text-text-secondary break-words">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {showConfetti && <Confetti />}
          <Toaster position="top-center" />

    {/* 下部スペース */}
    <div className="h-[2%]" />

        </DialogContent>
      </Dialog>
    </>
  );
}