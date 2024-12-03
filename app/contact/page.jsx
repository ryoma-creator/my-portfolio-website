'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

import { useState } from 'react';


// contact effect / server
import { toast, Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';


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
    title: 'Address',
    description: 'Tokyo Sumidaku Ishihara 1 - 39 - 11',
  },
];

const Contact = () => {

    // showConfettiのstate追加　送付時の演習用
    const [showConfetti, setShowConfetti] = useState(false);

// Contact componentの中で、form関連の状態を追加
// 全てのデータはformDataの中で管理される
  const [formData, setFormData] = useState({
    firstname: '',　// Input から
    lastname: '',
    email: '',
    phone: '',
    reason: '',　 // Select から
    message: ''　 // Textarea から
  });
// handleChangeは「どの項目」と「どんな値」かを
// name属性を使って判断している
// name属性は「データの項目名」を表す

  // eについて
  // eは全体のイベントオブジェクト
// e = {
//   target: {
//     name: "firstname",   // Input要素のname属性
//     value: "ryoma"       // 実際に入力された値
//   }
// }　⇧ eには複数のデータが渡されていることがわかる。他にも大量にある。typeかclassname、idもそう。

    // 入力変更を処理する関数
    // . ユーザーが"firstname"に"John"と入力すると...
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      // 🔻は上記を短く書いたもの
      // const { name, value } = e.target;
      // e.target = { name: "firstname", value: "John" }

      setFormData(prev => ({
        ...prev,// 既存のデータを展開
        [name]: value// 新しい値で更新
      }));
    };
      // フォーム送信を処理する関数
      // asyncが必要なケース：
      // 1. awaitを使う場合
      // 2. サーバーとの通信がある場合
      // 3. Promise（非同期処理）を扱う場合
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.firstname || !formData.email) {
          toast.error('Please fill in all required fields');
            return;
        }
        
        try {
          console.log('Sending data:', formData);
            
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            const result = await response.json();
            console.log('サーバーからの応答:', result);
    
            if (response.ok) {
              setShowConfetti(true);
              toast.success('Message sent successfully! 🎉', {
                  duration: 5000,
                  icon: '🎊'
              });

              // 紙吹雷を5秒後に消す
              setTimeout(() => setShowConfetti(false), 5000);


                // フォームをリセット
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    reason: '',
                    message: ''
                });
            } else {
              toast.error('Failed to send: ' + (result.error || 'Unknown error'));
            }
        } catch (error) {
          console.error('Error:', error);
          toast.error('An error occurred while sending your message');
        }
    };

      // 例えると...
// try {
  // チャレンジする処理
  // （失敗するかもしれない）
// } catch (error) {
  // 失敗した時の対応
// }

// 実生活の例：
// try = レストランで注文を試みる
// catch = 売り切れだった時の代替案を考える

  return (
    <>
    {showConfetti && <Confetti />}
    <Toaster position="top-center" />

    <GsapAnimatedElement
      variant="fadeIn"
      duration={0.4}
      delay={0}
      className='container flex flex-col'
    >
      <GsapAnimatedElement
        variant="slideIn"
        duration={2}
        delay={0}
        className='order-last xl:order-first text-6xl font-bold text-center
          mb-12 capitalize w-full py-[40px]'
      >
        contact <span className='text-accent'>me</span>
      </GsapAnimatedElement>

      <div className='flex flex-col xl:flex-row gap-[30px] sm:mb-10'>
        <GsapAnimatedElement
          variant="slideIn"
          duration={2}
          delay={2}
          className='xl:w-[54%] xl:h-[50%] order-2 xl:mb-0'
        >
          <form 
            onSubmit={handleSubmit}
            className='flex flex-col px-10 bg-[#27272c] bg-opacity-50 rounded-xl
            xl:h-[600px] justify-center py-[60px]'
          >
            <div className='xl:flex-grow flex flex-col gap-10 '>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />                 */}
              <Input 
                type='text'           // 'firstname'ではなく'text'が正しい
                name='firstname'      // フォームデータの管理に使用
                placeholder='Firstname' 
                value={formData.firstname}  // 状態との紐付け
                onChange={handleChange}     // 変更検知用
              />

              <Input 
                type='text'
                name='lastname'
                placeholder='Lastname'
                value={formData.lastname}
                onChange={handleChange}
              />

              <Input 
                type='email'              // emailはそのまま
                name='email'
                placeholder='Email address'
                value={formData.email}
                onChange={handleChange}
              />

              <Input 
                type='tel'               // 'phone'ではなく'tel'が正しい
                name='phone'
                placeholder='Phone number'
                value={formData.phone}
                onChange={handleChange}
              />
              </div>
              <Select onValueChange={(value) => {
                setFormData(prev => ({
                  ...prev,
                  reason: value
                }))
              }}>
                <SelectTrigger>
                  <SelectValue placeholder='Reason for Contact' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='job-opportunity'>Job Opportunity</SelectItem>
                    <SelectItem value='general-inquiry'>General Inquiry</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                name="message"          // これを追加
                value={formData.message}  // これを追加
                onChange={handleChange}   // これを追加
                className='h-[200px]' 
                placeholder='Type your message here.'
              />
            </div>
            <GsapAnimatedElement
              variant="scaleUp"
              duration={0.5}
              delay={0}
              className='grid place-items-center mt-[40px]'
            >
              <Button className='w-[400px]' size='md' variant='default'>
                Send message
              </Button>
            </GsapAnimatedElement>
          </form>
        </GsapAnimatedElement>

        <div className='flex-1 flex xl:justify-end order-1
          mb-8 xl:mb-0 px-10 h-[600px] sm:py-10'>
          <div className='flex flex-col gap-10'>
            <GsapAnimatedElement 
              variant="perspectiveTilt" 
              duration={1.5} 
              delay={0}
              className="text-4xl text-accent"
            >
              Let's work together
            </GsapAnimatedElement>

            <GsapAnimatedElement 
              variant="perspectiveTilt" 
              duration={1.5} 
              delay={0}
              className="text-base"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima illo aperiam necessitatibus 
              nam quia inventore
            </GsapAnimatedElement>

            {info.map((item, index) => (
              <GsapAnimatedElement 
                key={index}
                variant="blurIn" 
                duration={1}
                delay={index * 0.2 + 1.5}
              >
                <li className='flex items-center gap-6'>
                  <div className='grid place-items-center h-[52px] w-[52px] xl:w-[72px] xl:h-[72px]
                    bg-[#27272c] text-accent rounded-[8px]'
                  >
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              </GsapAnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </GsapAnimatedElement>
    </>
  );
};

export default Contact;