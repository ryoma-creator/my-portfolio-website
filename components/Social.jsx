import Link from 'next/link';

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/ryoma-creator?tab=repositories'},
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/ryoma-taguchi-b32024283/?trk=opento_sprofile_pfeditor'},
    { icon: <FaYoutube />, path: ''},
    { icon: <FaTwitter />, path: ''},
    { icon: <FaEnvelope />, path: 'mailto:barcelona.fc.111326@example.com' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index)=>{
            return (
                <Link 
                    key={index} 
                    href={social.path} 
                    className={iconStyles}
                    target={social.path ? "_blank" : undefined} 
                    rel={social.path ? "noopener noreferrer" : undefined}                    
                >
                    {social.icon}
                </Link>
            );
        })}

    </div>
  );
};

export default Social;