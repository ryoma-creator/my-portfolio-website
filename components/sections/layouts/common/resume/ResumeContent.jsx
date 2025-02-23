'use client';

import React from 'react';
import { 
  FaEnvelope, 
  FaGlobe, 
  FaCode,
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
  FaCrown,
  FaStar,
  FaCheckCircle,
  FaGlobeAsia,
} from 'react-icons/fa';

const ResumeContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="w-[210mm] h-[297mm] bg-white shadow-xl relative overflow-hidden">
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
            bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue
            blur-3xl transform rotate-12 animate-gradient-xy opacity-10" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
            bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
            blur-3xl transform -rotate-12 animate-gradient-xy opacity-10" />
        </div>

        {/* Vertical accent line */}
        <div className="absolute top-0 left-4 w-6 h-full
          bg-gradient-to-b from-brand-blue via-brand-pink to-brand-blue opacity-20" />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header Section (reduced height) */}
          <div className="h-[65mm] flex items-center">
            {/* Profile Image and Name */}
            <div className="pl-16 flex items-center gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden
                border-[6px] border-white shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dptxzcxot/image/upload/v1740218108/PROFILE_PIC_ORIGINAL__pnllgi.png" 
                  alt="Ryoma Taguchi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-6xl font-bold text-text-primary">
                  Ryoma Taguchi
                </h1>
                <p className="text-xl text-text-secondary mt-1">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-1 px-16 pb-12">
            {/* Left Column */}
            <div className="w-[38%] pr-8 space-y-8">
              {/* Contact Info */}
              <div>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-2">  
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">ryoma.t.engineer@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLaptopCode className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">Available for Remote Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGlobe className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">Based in Japan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCode className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">Portfolio: my-portfolio-website-lake.vercel.app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaGithub className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">GitHub: ryoma-creator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLinkedin className="text-brand-pink text-sm" />
                    <span className="text-xs text-text-secondary">LinkedIn: Ryoma Taguchi</span>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Technical Skills
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-1">
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    React / Next.js
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    HTML / CSS / JavaScript
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Tailwind CSS
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    UI/UX Design
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Basic Express / SQL / API Integration
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Git / GitHub
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    TypeScript (Learning)
                  </div>
                </div>
              </div>

              {/* Professional Skills */}
              <div>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Professional Skills
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-1">
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Analytical Problem Solving
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Cross-cultural Communication
                  </div>
                  <div className="text-xs text-text-secondary bg-gray-50 px-3 py-1.5 rounded-md">
                    Continuous Learning Mindset
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Languages
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text-secondary">Japanese</span>
                    <div className="flex items-center gap-1">
                      <FaCrown className="text-yellow-400 text-sm" />
                      <span className="text-xs text-text-secondary">Native</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-text-secondary">English</span>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        <FaStar className="text-xs" style={{color: "#65D5FF"}} />
                        <FaStar className="text-xs" style={{color: "#65D5FF"}} />
                        <FaStar className="text-xs" style={{color: "#65D5FF"}} />
                      </div>
                      <span className="text-xs text-text-secondary">Business</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 pl-8 space-y-8">
              {/* About Me - Shortened */}
              <section>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  About Me
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <p className="mt-4 text-xs text-text-secondary leading-relaxed">
                  Frontend Developer with analytical background from law studies. Passionate about creating intuitive web experiences
                  with modern technologies. Proven track record in cross-cultural team leadership and problem-solving at a multinational corporation.
                </p>
              </section>

              {/* Experience - Prioritized Content */}
              <section>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Experience
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-6">
                  {/* Developer Role */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-1">Frontend & Full-Stack Developer</p>
                    <p className="text-xs text-text-tertiary">Self-taught | Feb 2024 - Present</p>
                    <ul className="mt-2 space-y-1">
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Built 5+ web applications with modern React/Next.js stack</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Created reusable component architecture, significantly reducing development time</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Reduced image and video asset sizes by 80%, improving performance</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Implemented backend functionality with API endpoints for form handling</span>
                      </li>
                    </ul>
                  </div>

                  {/* Accenture Role */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-1">Global Business Implementation Specialist</p>
                    <p className="text-xs text-text-tertiary">Accenture | Feb 2022 - Feb 2024</p>
                    <ul className="mt-2 space-y-1">
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Led cross-cultural teams in system implementation projects</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Bridged communication gaps between global teams</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Reduced training period through systematic approach</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Optimized workflows resulting in increased project efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education - Streamlined */}
              <section>
                <h2 className="text-lg font-semibold text-text-primary relative">
                  Education
                  <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-pink" />
                </h2>
                <div className="mt-4 space-y-5">
                  {/* University */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-1">Bachelor of Laws</p>
                    <p className="text-xs text-text-tertiary">Meiji Gakuin University | 2012 - 2018</p>
                    <ul className="mt-2 space-y-1">
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Specialized in Legal Philosophy under top Japanese professors, developing strong analytical thinking</span>
                      </li>
                      <li className="pl-4 relative">
                        <span className="absolute left-0 text-brand-pink/80"><FaCheckCircle className="text-xs" /></span>
                        <span className="text-xs text-text-secondary">Applied critical legal analysis to complex problems</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Global Studies - Condensed */}
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-1">Global Studies</p>
                    <p className="text-xs text-text-tertiary">Various Institutions | 2017 - Present</p>
                    <div className="flex flex-wrap mt-2 gap-2">
                      <div className="text-xs text-text-secondary bg-gray-50 px-2 py-1 rounded-full flex items-center">
                        <span style={{color: "#65D5FF"}} className="mr-1"><FaGlobeAsia className="text-xs" /></span>
                        <span>Study Abroad: Denmark IPC (2017)</span>
                      </div>
                      <div className="text-xs text-text-secondary bg-gray-50 px-2 py-1 rounded-full flex items-center">
                        <span style={{color: "#65D5FF"}} className="mr-1"><FaGlobeAsia className="text-xs" /></span>
                        <span>Cross-cultural Program: Philippines GITC (2018)</span>
                      </div>
                      <div className="text-xs text-text-secondary bg-gray-50 px-2 py-1 rounded-full flex items-center">
                        <span style={{color: "#65D5FF"}} className="mr-1"><FaGlobeAsia className="text-xs" /></span>
                        <span>Extensive Language Practice (3000+ sessions, 2012-Present)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeContent;