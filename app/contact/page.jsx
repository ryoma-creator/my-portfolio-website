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

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+63) 0935 981 8031',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'barcelona.fc.111326@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Tokyo Sumidaku Ishihara 1 - 39 - 11',
  },
];

const Contact = () => {
  return (
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
          <form className='flex flex-col px-10 bg-[#27272c] bg-opacity-50 rounded-xl
            xl:h-[600px] justify-center py-[60px]'>
            <div className='xl:flex-grow flex flex-col gap-10 '>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />                
              </div>
              <Select>
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
  );
};

export default Contact;