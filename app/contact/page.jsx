'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
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
      className=''
    >
      <div className='container'>
          {/* contact me */}
          <motion.div 
            initial={{ opacity: 0, y: '-100vh' }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 3, duration: 2, ease: 'easeIn'},
            }}
           className='order-0 hidden xl:block text-6xl font-bold text-center
           mb-12 capitalize w-full py-[40px]
          '>
            contact <span className='text-accent'>me</span>
          </motion.div>

        <div className='flex flex-col xl:flex-row gap-[30px] sm:mb-10'>
          {/* form */}
          <div className='xl:w-[54%] xl:h-[50%] order-2  xl:mb-0'>
            <motion.form 
            className='flex flex-col px-10 bg-[#27272c] bg-opacity-50 rounded-xl
            xl:h-[600px] justify-center py-[60px]'
            initial={{ opacity: 0 , y: '100vw'}}
            animate={{
              opacity: 1,
              y: 0, 
              transition: { delay: 2, duration: 2, ease: 'easeIn'},
            }}            
            >
              <div className='xl:flex-grow flex flex-col gap-10 '>
                {/* input */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                  <Input type='firstname' placeholder='Firstname' />
                  <Input type='lastname' placeholder='lastname' />
                  <Input type='email' placeholder='Email address' />
                  <Input type='phone' placeholder='Phone number' />                
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Reason for Contact' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Reason for Contact</SelectLabel> */}
                      <SelectItem value='job-opportunity'>Job Opportunity</SelectItem>
                      <SelectItem value='general-inquiry'>General Inquiry</SelectItem>
                      <SelectItem value='other'>Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea 
                  className='h-[200px]' 
                  placeholder='Type your message here.'
                />
              </div>
              {/* button */}
              <div className='grid place-items-center mt-[40px]'>
                <Button className='w-[400px]' size='md' variant='default'>
                  Send message
                </Button>
              </div>
            </motion.form>
          </div>
          {/* info */}
          <div className='flex-1 flex xl:justify-end order-1
           mb-8 xl:mb-0 px-10 h-[600px] sm:py-10'>
            
            <div className='flex flex-col gap-10'>

                <motion.h3 
                  className='text-4xl text-accent'
                  initial={{ opacity: 0, }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 3, ease: 'easeIn'},
                  }}
                >
                    Let's work together
                </motion.h3>
                <motion.p
                  className='text-base'
                  initial={{ opacity: 0, }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: 3, ease: 'easeIn'}, 
                  }}              
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad minima illo aperiam necessitatibus 
                  nam quia inventore 
                </motion.p>

              <motion.ul 
                className='flex flex-col gap-10'
                initial={{ opacity: 0, }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 2, ease: 'easeIn'}, 
                }}                   
              >
                {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='grid place-items-center h-[52px] w-[52px] xl:w-[72px] xl:h-[72px]
                        bg-[#27272c] text-accent rounded-[8px] 
                      '>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;