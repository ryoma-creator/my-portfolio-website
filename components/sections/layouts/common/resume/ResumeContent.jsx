'use client';

import React from 'react';
import { 
  FaEnvelope, 
  FaGlobe, 
  FaCode,
  FaLinkedin,
  FaGithub,
  FaCrown,
  FaStar,
} from 'react-icons/fa';

const ResumeContent = () => {
  return (
    <div id="resume-content" className="w-[210mm] h-[297mm] bg-white shadow-xl relative overflow-hidden flex flex-col">
      {/* Simple background */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col py-6 px-10">
        
        {/* Top Spacer - 上のスペース */}
        <div className="flex-1"></div>
        
        {/* Header Section - ヘッダー */}
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-6 ml-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-200">
              <img 
                src="https://res.cloudinary.com/dptxzcxot/image/upload/v1740218108/PROFILE_PIC_ORIGINAL__pnllgi.png" 
                alt="Ryoma Taguchi"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-1">Ryoma Taguchi</h1>
              <p className="text-xl text-blue-600 font-medium">Frontend Developer</p>
            </div>
          </div>
        </div>
        
        {/* Middle Spacer - 中間のスペース */}
        <div className="flex-1"></div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* 既存のコンテンツ */}
          {/* 既存のコンテンツ */}
          {/* Left Column */}
          <div className="w-1/3 space-y-5">
            {/* Contact */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">CONTACT</h2>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <FaCode className="text-blue-600 flex-shrink-0" />
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 text-[10px] leading-tight break-all">my-portfolio-website-lake.vercel.app</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600 flex-shrink-0" />
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 break-all">ryoma.t.engineer@gmail.com</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-blue-600 flex-shrink-0" />
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600">Japan & Philippines</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaGithub className="text-blue-600 flex-shrink-0" />
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600">ryoma-creator</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-blue-600 flex-shrink-0" />
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600">Ryoma Taguchi</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">TECHNICAL SKILLS</h2>
              <div className="space-y-1 text-xs">
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">React / Next.js</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">JavaScript / HTML / CSS</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">TypeScript (Learning)</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Tailwind CSS</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">API Integration</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Git / GitHub</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">AI-Enhanced Development</div>
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">PROFESSIONAL SKILLS</h2>
              <div className="space-y-1 text-xs">
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Analytical Problem-Solving</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Cross-Cultural Concept Translation</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Cross-Cultural Bridge Building</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Local Adaptation & Resilience</div>
                <div className="bg-gray-50 px-2 py-1 rounded text-gray-700">Training Acceleration</div>
              </div>
            </div>

            {/* Portfolio */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">PORTFOLIO (URLs)</h2>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-medium text-gray-700 mb-1">E-commerce Platform</div>
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 text-[10px] leading-tight break-all">ecommerce-p66q.vercel.app</div>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-1">Weather Dashboard</div>
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 text-[10px] leading-tight break-all">weather-app-eight-amber-29.vercel.app</div>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-1">Task Manager</div>
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 text-[10px] leading-tight break-all">todo-app-kappa-ochre.vercel.app</div>
                </div>
                <div>
                  <div className="font-medium text-gray-700 mb-1">Portfolio Site</div>
                  <div className="bg-gray-50 px-2 py-1 rounded text-gray-600 text-[10px] leading-tight break-all">my-portfolio-website-lake.vercel.app</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">LANGUAGES</h2>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Japanese</span>
                  <div className="flex items-center gap-1">
                    <FaCrown className="text-yellow-500" />
                    <span className="text-gray-600">Native</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      <FaStar className="text-blue-500 text-xs" />
                      <FaStar className="text-blue-500 text-xs" />
                      <FaStar className="text-blue-500 text-xs" />
                    </div>
                    <span className="text-gray-600">Business</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-2/3 space-y-4">
            {/* About Me */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">ABOUT ME</h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Frontend Developer with specialized legal philosophy background from Japan's premier program. 
                Expert in articulating complex concepts across cultures, bridging Japanese and international teams through precise communication and cultural interpretation. 
                Proven track record in Philippines system implementations at Accenture.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">EXPERIENCE</h2>
              
              {/* Frontend Developer */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-semibold text-gray-800">Frontend Developer</h3>
                  <span className="text-xs text-gray-600">Feb 2024 - Present</span>
                </div>
                <p className="text-xs text-blue-600 mb-2">Self-Directed | 2,000+ hours intensive development</p>
                
                <div className="mb-2">
                  <p className="text-xs font-medium text-gray-700 mb-1">Learning Progression:</p>
                  <p className="text-xs text-gray-600">Systematic progression from web fundamentals through advanced React development, incorporating modern tools and AI-enhanced workflows for efficient development practices.</p>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Built production-ready React/Next.js applications (see Portfolio section)</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Implemented Cloudinary optimization, Framer Motion animations</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Systematic progression from vanilla JavaScript to advanced React patterns</span>
                  </div>
                </div>
              </div>

              {/* Accenture */}
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-semibold text-gray-800">Cross-Border System Implementation Specialist</h3>
                  <span className="text-xs text-gray-600">Feb 2022 - Feb 2024</span>
                </div>
                <p className="text-xs text-blue-600 mb-2">Accenture Philippines</p>
                
                <div className="mb-2">
                  <p className="text-xs font-medium text-gray-700 mb-1">Project Scope:</p>
                  <p className="text-xs text-gray-600">Led implementation of multiple business systems including financial and HR processes, transferring operations from Japan/China to Philippines. Specialized in breaking down complex technical concepts and cultural nuances, enabling seamless knowledge transfer between Japanese and Filipino teams through precise articulation and interpretation.</p>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Reduced training time from 3 months to 1 month through systematic approach</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Successfully facilitated business system implementations from Japan/China to Philippines operations</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Served as bilingual bridge resolving technical and cultural challenges</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Created comprehensive documentation and training materials for ongoing operations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">EDUCATION</h2>
              
              <div className="space-y-3">
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-semibold text-gray-800">Bachelor of Laws</h3>
                    <span className="text-xs text-gray-600">2012 - 2018</span>
                  </div>
                  <div className="block">
                    <p className="text-xs text-blue-600">Meiji Gakuin University</p>
                  </div>
                  <div className="block">
                    <p className="text-xs text-gray-500 mb-2">(Transfer from Musashi Institute of Technology 2008-2012)</p>
                  </div>
                  <p className="text-xs text-gray-600">Specialized in Legal Philosophy program (premier level). Intensive training in logical reasoning, systematic analysis, and critical argumentation through extensive essay writing and debate practice.</p>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-semibold text-gray-800">Technical Foundation</h3>
                    <span className="text-xs text-gray-600">2019 - 2021</span>
                  </div>
                  <p className="text-xs text-blue-600 mb-2">Internet Academy, Public Vocational Training</p>
                  <p className="text-xs text-gray-600">Web design fundamentals, HTML/CSS, UI/UX Design, Adobe Photoshop/Illustrator, Java/Python programming</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-semibold text-gray-800">International Experience</h3>
                    <span className="text-xs text-gray-600">2017 - 2018</span>
                  </div>
                  <p className="text-xs text-blue-600 mb-2">Denmark Study Abroad, Philippines Intensive English</p>
                  <p className="text-xs text-gray-600">Cross-cultural collaboration, 3000+ online English conversation sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacer - 下のスペース */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default ResumeContent;