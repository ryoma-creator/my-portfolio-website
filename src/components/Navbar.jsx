import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
// import Logo from '../assets/logo1.png'

const socialLinks = [
  { name: 'Linkedin', icon: FaLinkedin, color: 'bg-blue-600', url: '/' },
  { name: 'Github', icon: FaGithub, color: 'bg-[#333333]', url: '/' },
  { name: 'Email', icon: HiOutlineMail, color: 'bg-[#6fc2b0]', url: '/' },
  { name: 'Resume', icon: BsFillPersonLinesFill, color: 'bg-[#565f69]', url: '/' },
];

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300'>
        <div className='w-12 text-5xl font-signature'>
            <h1>RT<span className='text-green'>.</span></h1>
            {/* <img src={Logo} alt="Logo Image" style={{width: '50px'}}/> */}
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>About</li>
          <li>SKills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>SKills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>        

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              {socialLinks.map(({ name, icon: Icon, color, url })=>(
                  <li key={name} className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${color}`}>
                  <a className='flex justify-between items-center w-full text-gray-300'
                  href={url}>
                    {name} <Icon size={30}/>
                  </a>
                </li>
              ))}

            </ul>
        </div>
      </div>


  );
};

export default Navbar;