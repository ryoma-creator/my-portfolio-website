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
      <div className="xl-scale-90  flex flex-col xl:flex-row 
        items-center justify-center overflow-y-auto gap-8">
        {/* 右カラム：フォーム */}
        <div className="w-full order-2 xl:order-2 xl:w-[54%]">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Input 
                type="text"
                name="firstname"
                placeholder="First Name *" 
                value={forxlata.firstname}
                onChange={handleChange}
                required
                className="bg-white/50 border-gray-200 focus:border-brand-pink"
              />
              <Input 
                type="text"
                name="lastname"
                placeholder="Last Name *"
                value={forxlata.lastname}
                onChange={handleChange}
                required
                className="bg-white/50 border-gray-200 focus:border-brand-pink"
              />
              <Input 
                type="email"
                name="email"
                placeholder="Email Address *"
                value={forxlata.email}
                onChange={handleChange}
                required
                className="bg-white/50 border-gray-200 focus:border-brand-pink"
              />
              <Input 
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={forxlata.phone}
                onChange={handleChange}
                className="bg-white/50 border-gray-200 focus:border-brand-pink"
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
              value={forxlata.message}
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
         {/* 連絡先情報: デフォルトで非表示、xl以上で表示 */}
        <div className="hidden xl:block order-1 xl:order-1 w-[46%] mb-6 xl:mb-0">
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
    </>
  );
}