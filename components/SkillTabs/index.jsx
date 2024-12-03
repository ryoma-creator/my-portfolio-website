'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from '@/components/ui/tabs';
import { PinContainer } from '@/components/ui/3d-pin';
import { skillsData } from './skillsData';

const BackgroundGradientCard = ({ children, onHover, skillColor = "#00ccb1", backgroundImage, isHovered }) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

  return (
    <div 
      className="relative p-[4px] group rounded-xl w-[240px] h-[180px]"
      onMouseEnter={() => onHover({ color: skillColor, background: backgroundImage })}
      onMouseLeave={() => onHover(null)}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className={cn(
          "absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          `bg-[radial-gradient(circle_farthest-side_at_0_100%,${skillColor},transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent)]`
        )}
      />
      <div 
        className={cn(
          "relative rounded-lg p-4 w-full h-full transition-all duration-500 overflow-hidden",
          isHovered ? "bg-black/40 backdrop-blur-sm" : "bg-black/80"
        )}
      >
        {/* カード背景画像 */}
        {isHovered && backgroundImage && (
          <div 
            className="absolute inset-0 transition-opacity duration-500 opacity-50"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        {/* コンテンツオーバーレイ */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState(skillsData.tabs[0].id);
  const [activeStyle, setActiveStyle] = useState(null);

  const handleHover = (style) => {
    setActiveStyle(style);
  };

  return (
    <>
      {/* グローバル背景 */}
      <AnimatePresence>
        {activeStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${activeStyle.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -2
            }}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col gap-6">
          <div className="text-center xl:text-left">
            <h3 className="text-4xl font-bold mb-4">
              {skillsData.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-12">
              {skillsData.description}
            </p>
          </div>

          <Tabs
            defaultValue={skillsData.tabs[0].id}
            onValueChange={setActiveTab}
            className="relative"
          >
            <div className="">
              <TabsList className="h-14 w-full max-w-2xl mx-auto p-1 bg-accent/40 backdrop-blur-md rounded-full">
                {skillsData.tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className={cn(
                      "h-12 flex-1 flex items-center justify-center gap-2",
                      "data-[state=active]:bg-white/10 rounded-full",
                      "transition-all duration-300",
                      "text-sm sm:text-base font-medium"
                    )}
                  >
                    <span className="text-xl">{tab.icon}</span>
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillsData.tabs.map((tab) => (
              <TabsContent 
                key={tab.id} 
                value={tab.id}
                className="relative mt-0 outline-none p-0"
              >
                {/* TabsContent背景 */}
                <AnimatePresence>
                  {activeStyle && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      style={{
                        backgroundImage: `url(${activeStyle.background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* オーバーレイグラデーション */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: `radial-gradient(circle at center, ${activeStyle.color}40 0%, transparent 100%)`,
                          mixBlendMode: 'overlay'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* コンテンツグリッド */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center relative z-10 p-4">
                  {tab.skills.map((skill, index) => (
                    <div key={index} className="w-[240px] h-[280px]">
                      <PinContainer title={skill.name} href="#">
                        <BackgroundGradientCard
                          skillColor={skill.color}
                          backgroundImage={skill.background}
                          onHover={handleHover}
                          isHovered={activeStyle?.color === skill.color}
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center gap-4 group">
                            <div className="text-4xl group-hover:scale-110 transition-all duration-300">
                              {skill.icon}
                            </div>
                            <div className="text-center w-full">
                              <p className="text-base font-medium text-white/90 truncate">
                                {skill.name}
                              </p>
                              {skill.level && (
                                <p className="text-sm text-white/60 mt-1 truncate">
                                  {skill.level}
                                </p>
                              )}
                            </div>
                          </div>
                        </BackgroundGradientCard>
                      </PinContainer>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default SkillTabs;