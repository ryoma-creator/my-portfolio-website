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
        className="fixed bottom-8 right-8 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
          p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <FaEnvelope className="w-6 h-6 text-white" />
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
        <DialogContent className="w-[95%] max-w-[1200px] h-[90vh] flex flex-col bg-white px-[4%]">
            {/* カスタム閉じるボタンを追加 */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-[9999] w-10 h-10 
                      flex items-center justify-center group
                      transition-all duration-300"
            >
              {/* グラデーションの背景 - ホバー時のみ表示 */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
                animate-gradient-x opacity-0 group-hover:opacity-100 
                group-hover:scale-110 rounded-full
                transition-all duration-300" 
              />
              
              {/* Xアイコン */}
              <X className="w-6 h-6 text-gray-400 group-hover:text-white 
                relative z-10 transition-colors duration-300
                group-hover:scale-110" 
              />
            </button>


    {/* 上部スペース */}
    <div className="h-[5%]" />

          <DialogTitle className="text-6xl font-bold text-center text-text-primary">
            Get in Touch
          </DialogTitle>

          {/* 全体を中央揃えにしていく */}
          <div className="flex-1 flex items-center justify-center overflow-y-auto gap-16 px-2">
            {/* 右カラム：フォーム */}
            <div className="order-2 xl:order-2 xl:w-[54%]">
              {/* <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your project or collaboration opportunities.
              </p> */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="text"
                    name="firstname"
                    placeholder="First Name *" 
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-gray-200 focus:border-brand-pink"
                  />
                  <Input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name *"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-gray-200 focus:border-brand-pink"
                  />
                  <Input 
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-gray-200 focus:border-brand-pink"
                  />
                  <Input 
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/50 border-gray-200 focus:border-brand-pink"
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
                  <SelectTrigger className="bg-white/50 border-gray-200 focus:border-brand-pink">
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
                  className="h-[200px] bg-white/50 border-gray-200 focus:border-brand-pink"
                />

                <Button 
                  type="submit"
                  className="relative w-full group overflow-hidden rounded-full"
                  disabled={isSubmitting}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
                    animate-gradient-x transition-opacity duration-300
                    ${isSubmitting ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  <div className={`absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-blue to-brand-pink 
                    animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${isSubmitting ? 'opacity-100' : ''}`} />
                  <span className={`relative font-medium
                    ${isSubmitting ? 'text-white' : 'text-text-primary group-hover:text-white'}`}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </form>
            </div>

            {/* 連絡先情報（左側） */}
            <div className="order-1 xl:order-1 w-[46%] ">
              {/* <h3 className="text-xl font-bold mb-4">Get in Touch</h3> */}
              {/* <p className="text-2xl font-light text-gray-800 mb-12 leading-relaxed">
                  Ready to bring your<br />vision to life
              </p> */}
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-pink 
                      rounded-lg flex items-center justify-center">
                      <div className="text-2xl text-white">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary">{item.title}</h4>
                      <p className="text-text-secondary">{item.description}</p>
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