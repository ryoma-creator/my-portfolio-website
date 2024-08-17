import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Home from './Home'
// import Logo from '../assets/logo1.png'

const socialLinks = [
  { name: 'Linkedin', icon: FaLinkedin, color: 'bg-blue-600', url: '/' },
  { name: 'Github', icon: FaGithub, color: 'bg-[#333333]', url: '/' },
  { name: 'Email', icon: HiOutlineMail, color: 'bg-[#6fc2b0]', url: '/' },
  { name: 'Resume', icon: BsFillPersonLinesFill, color: 'bg-[#565f69]', url: '/' },
];

  const links = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Work', to: 'work' },
    { name: 'Contact', to: 'contact' }
  ];


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [navActive, setActive] = useState('Home')
    const handleNavActive = (name) => setActive(name)
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-black'> 
        <div className='w-12 text-5xl font-signature'>
            <h1>RT<span className='text-green'>.</span></h1>
            {/* <img src={Logo} alt="Logo Image" style={{width: '50px'}}/> */}
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
          {links.map((link) => (
            <li key={link.to}>
              <Link
                className = {`hover:border-b-2 border-green hover:text-green duration-100
                           ${navActive === link.name ? 'border-b-2 border-green text-green' : ''}`}
                onClick={() => handleNavActive(link.name)}
                to={link.to}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        {links.map((link) => (
            <li 
                className='py-6 text-4xl'
                key={link.to}>
              <Link
                onClick={handleClick}
                to={link.to}
                smooth={true}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
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