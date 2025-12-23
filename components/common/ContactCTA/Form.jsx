// ContactForm.jsx
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast, Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

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

export default function ContactForm() {
  // 状態管理
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forxlata, setForxlata] = useState({
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
    setForxlata(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // フォーム送信の処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    if (!forxlata.firstname || !forxlata.email || !forxlata.message) {
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
        body: JSON.stringify(forxlata)
      });

      const data = await response.json();

      if (response.ok) {
        setShowConfetti(true);
        toast.success('Message sent successfully! 🎉', {
          duration: 5000,
          icon: '🎊'
        });

        // フォームをリセット
        setForxlata({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          reason: '',
          message: ''
        });

        // 成功アニメーションを表示
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
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
      {/* 全体を中央揃えにしていく */}
      <div className="flex flex-col xl:flex-row 
        items-center justify-center overflow-y-auto gap-4 sm:gap-6 md:gap-8 w-full">
        {/* 右カラム：フォーム */}
        <div className="w-full order-2 xl:order-2 xl:w-[50%] max-w-full">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full">
              <Input 
                type="text"
                name="firstname"
                placeholder="First Name *" 
                value={forxlata.firstname}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                style={{ maxWidth: '100%' }}
              />
              <Input 
                type="text"
                name="lastname"
                placeholder="Last Name *"
                value={forxlata.lastname}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                style={{ maxWidth: '100%' }}
              />
              <Input 
                type="email"
                name="email"
                placeholder="Email Address *"
                value={forxlata.email}
                onChange={handleChange}
                required
                className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                style={{ maxWidth: '100%' }}
              />
              <Input 
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={forxlata.phone}
                onChange={handleChange}
                className="w-full bg-white/50 border-gray-200 focus:border-brand-pink"
                style={{ maxWidth: '100%' }}
              />
            </div>

            <Select 
              onValueChange={(value) => {
                setForxlata(prev => ({
                  ...prev,
                  reason: value
                }))
              }}
              value={forxlata.reason}
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
              value={forxlata.message}
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
         {/* 連絡先情報: デフォルトで非表示、xl以上で表示 */}
        <div className="hidden xl:block order-1 xl:order-1 w-[45%] mb-6 xl:mb-0 max-w-full">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start sm:items-center gap-3 sm:gap-4 w-full">
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
    </>
  );
}