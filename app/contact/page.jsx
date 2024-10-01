'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

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

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className='py-6'
    >
      <div className='container'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>
                Let's work together
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima illo aperiam necessitatibus 
                nam quia inventore consectetur assumenda odit doloribus accusantium voluptate hic qui a, fugit quam 
                excepturi, cum molestias?
              </p>
              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='lastname' />
                <Input type='email' placeholder='Email address' />
                <Input type='phone' placeholder='Phone number' />                
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
              </Select>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0'>
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;