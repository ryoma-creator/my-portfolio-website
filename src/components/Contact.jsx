import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='common-screen-size h-full p-4 mt-10'>
        <div className='common-layout'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='common-border-b responsive-title-size text-gray-300'>
                    Contact
                </p>
                <p className='py-8'>
                    Submit the form below or shoot me an email - ryoma111326@gmail.com
                </p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='common-button-layout my-8 px-4 py-3 mx-auto'>Let's Collaborate!</button>
        </form>
        </div>
    </div>
  )
}

export default Contact;