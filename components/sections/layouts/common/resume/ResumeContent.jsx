'use client';

import React from 'react';
import { 
  FaEnvelope, 
  FaGlobe, 
  FaCode,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNode,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaComments,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';
import { 
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiPrisma,
  SiMysql,
  SiSupabase,
  SiVercel,
} from 'react-icons/si';

const ResumeContent = () => {
  return (
    <div id="resume-content" className="w-[210mm] h-[297mm] bg-white shadow-xl relative overflow-hidden flex flex-col" style={{ minHeight: '297mm', maxHeight: '297mm' }}>
      {/* Simple background */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-600 to-blue-800"></div>

      {/* Header Section - Full Width Edge-to-Edge */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 w-[210mm] py-6 px-10 relative z-20">
        <div className="flex items-start gap-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dptxzcxot/image/upload/v1740218108/PROFILE_PIC_ORIGINAL__pnllgi.png" 
              alt="Ryoma Taguchi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-1">Ryoma Taguchi</h1>
            <p className="text-xl text-white font-medium mb-3">Frontend Developer</p>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-white/90">
              <a href="mailto:ryoma.t.engineer@gmail.com" className="flex items-center gap-1 underline hover:text-white break-all">
                <FaEnvelope className="text-xs flex-shrink-0" />
                <span>ryoma.t.engineer@gmail.com</span>
              </a>
              <span>|</span>
              <a href="https://my-portfolio-website-lake.vercel.app" className="flex items-center gap-1 underline hover:text-white break-all">
                <FaGlobe className="text-xs flex-shrink-0" />
                <span>my-portfolio-website-lake.vercel.app</span>
              </a>
              <span>|</span>
              <a href="https://github.com/ryoma-creator" className="flex items-center gap-1 underline hover:text-white break-all">
                <FaGithub className="text-xs flex-shrink-0" />
                <span>github.com/ryoma-creator</span>
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/ryoma-taguchi-b32024283" className="flex items-center gap-1 underline hover:text-white break-all">
                <FaLinkedin className="text-xs flex-shrink-0" />
                <span>linkedin.com/in/ryoma-taguchi-b32024283</span>
              </a>
              <span>|</span>
              <span className="flex items-center gap-1">
                <FaGlobe className="text-xs flex-shrink-0" />
                <span>Japan / Philippines</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col py-4 px-10">
        
        {/* Top Spacer */}
        <div className="flex-1"></div>
        
        {/* Middle Spacer */}
        <div className="flex-1"></div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Left Column */}
          <div className="w-1/3 space-y-5">
            {/* Technical Skills */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">TECHNICAL SKILLS</h2>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-xs font-bold text-gray-800 mb-2">Frontend</div>
                  <div className="space-y-1">
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaReact className="text-blue-500 text-xs" />
                      <span>React</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiNextdotjs className="text-gray-700 text-xs" />
                      <span>Next.js (App Router)</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiTypescript className="text-blue-600 text-xs" />
                      <span>TypeScript</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiJavascript className="text-yellow-500 text-xs" />
                      <span>JavaScript</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaHtml5 className="text-orange-500 text-xs" />
                      <span>HTML5</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaCss3 className="text-blue-500 text-xs" />
                      <span>CSS3</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiTailwindcss className="text-cyan-500 text-xs" />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiFramer className="text-pink-500 text-xs" />
                      <span>Framer Motion</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaCode className="text-blue-600 text-xs" />
                      <span>Zod</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaCode className="text-gray-700 text-xs" />
                      <span>shadcn/ui</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="text-xs font-bold text-gray-800 mb-2">Backend / Data</div>
                  <div className="space-y-1">
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaNode className="text-green-600 text-xs" />
                      <span>Node.js (API Routes)</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaCode className="text-gray-600 text-xs" />
                      <span>REST API / CRUD</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiPrisma className="text-gray-800 text-xs" />
                      <span>Prisma ORM</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiMysql className="text-blue-600 text-xs" />
                      <span>MySQL</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiSupabase className="text-green-500 text-xs" />
                      <span>Supabase</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="text-xs font-bold text-gray-800 mb-2">Tools</div>
                  <div className="space-y-1">
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaGitAlt className="text-orange-600 text-xs" />
                      <span>Git</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaGithub className="text-gray-800 text-xs" />
                      <span>GitHub</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <SiVercel className="text-black text-xs" />
                      <span>Vercel</span>
                    </div>
                    <div className="bg-gray-50 px-2 py-1 rounded text-gray-700 flex items-center gap-2">
                      <FaDocker className="text-blue-500 text-xs" />
                      <span>Docker</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-4 pb-1 border-b-2 border-blue-600">STRENGTHS</h2>
              <div className="space-y-4 text-xs">
                <div>
                  <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaComments className="text-blue-600 text-xs" />
                    <span>Bilingual Communication</span>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-1.5">
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <span>Native Japanese / Business-level English</span>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <span>3,000+ online English conversations (30 min each)</span>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <span>2+ years cross-border business experience at Accenture</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaLightbulb className="text-yellow-500 text-xs" />
                    <span>Analytical Problem Solving</span>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-1.5">
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <span>Structure problems, articulate solutions, and implement systematically</span>
                    </div>
                    <div className="flex">
                      <span className="mr-2">•</span>
                      <span>Data-driven approach to process optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-2/3 space-y-4">
            {/* Summary */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">SUMMARY</h2>
              <p className="text-xs text-gray-700 leading-relaxed">
                Frontend-focused developer with 2+ years of intensive training in React/Next.js, with hands-on experience building end-to-end features from frontend to database. Experienced in bilingual communication and cross-cultural collaboration at Accenture Philippines. <span className="text-blue-600 font-medium">Passed all stages up to the final round for IBM Philippines' Application Developer (Bilingual Japanese) process.</span>
              </p>
            </div>

            {/* Key Achievement */}
            <div className="mb-4">
              <div className="bg-blue-50 border-l-4 border-blue-600 px-3 py-2 rounded">
                <p className="text-xs text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-800">Key Achievement: </span>
                  Successfully passed a 6-stage interview process at IBM Philippines (coding test, technical, English & Japanese, behavioral interviews) — Sep 2025
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">PROFESSIONAL EXPERIENCE</h2>
              
              {/* Frontend Developer */}
              <div className="mb-5 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">Frontend Development – 2 years</h3>
                    <p className="text-xs text-blue-600 mt-1">(Structured online curriculum with production-style projects)</p>
                  </div>
                  <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">Mar 2024<br />- Present</span>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1 mt-2 leading-relaxed">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Completed structured curricula from fundamentals to advanced React/Next.js</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Built production-ready web apps with fullstack CRUD features</span>
                  </div>
                </div>
              </div>

              {/* Accenture */}
              <div className="mb-5 pb-4 border-b border-gray-200">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">Cross-Border System Implementation Specialist (Bilingual Role)</h3>
                    <p className="text-xs text-blue-600 mt-1">Accenture Philippines</p>
                  </div>
                  <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">Feb 2022<br />- Mar 2024</span>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1 mt-2">
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Identified undocumented issues and enabled HR system migration from China to Philippines</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Created comprehensive documentation and training materials, reducing training time from 3 months to 1 month</span>
                  </div>
                  <div className="flex">
                    <span className="mr-2">•</span>
                    <span>Optimized international team workflow through data-driven task optimization</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-gray-800 mb-3 pb-1 border-b-2 border-blue-600">EDUCATION</h2>
              
              <div className="space-y-3">
                <div className="pb-3 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 normal-case">Bachelor of Laws</h3>
                      <p className="text-xs text-blue-600 mt-1">Meiji Gakuin University</p>
                    </div>
                    <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">2012<br />- 2018</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Legal Philosophy program. Data-driven analytical thinking and systematic problem-solving.</p>
                </div>
                
                <div className="pb-3 border-b border-gray-200">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 normal-case">Technical Foundation</h3>
                      <p className="text-xs text-blue-600 mt-1">Internet Academy, Private Technical Training</p>
                    </div>
                    <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">2019<br />- 2021</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Web design fundamentals, HTML/CSS, JavaScript, UI/UX Design</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-800 normal-case">International Experience</h3>
                      <p className="text-xs text-gray-600 mt-1">Denmark Study Abroad (International People's College) Philippines Intensive English (GITC)</p>
                    </div>
                    <span className="text-xs text-gray-600 ml-4 whitespace-nowrap">2017 – 2018</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Spacer */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default ResumeContent;