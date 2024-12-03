import React from 'react'

const Contact = () => {
  return (
    <div className='contact common-screen-size pt-[80px]'>
        <div className='common-layout'>
        <form 
            method='POST' 
            action="https://getform.io/f/bqonyyxb" 
            className='flex flex-col max-w-[600px] w-full'
        >
            <div className='pb-4'>
                <p className='common-border-b responsive-title-size text-gray-300'>
                    Contact
                </p>
                <p className='py-4'>
                    Submit the form below or shoot me an email - ryoma111326@gmail.com
                </p>
            </div>
            <input className='text-black p-2' type="text" placeholder='Name' name='name' />
            <input className='text-black my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='text-black p-2' name="message" id="" rows="6" placeholder='Message'></textarea>
            <button className='common-button-layout my-8 px-4 py-3 mx-auto'>Let's Collaborate!</button>
        </form>
        </div>
    </div>
  )
}

export default Contact;