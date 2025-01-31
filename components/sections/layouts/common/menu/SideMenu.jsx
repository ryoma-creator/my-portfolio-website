'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const MenuLink = ({ href, children, subtitle = '' }) => {
  return (
    <Link 
      href={href} 
      className="group relative inline-block py-2"
    >
      <div className="space-y-1">
        {subtitle && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {subtitle}
          </div>
        )}
        <span className="text-xl">{children}</span>
      </div>
      <motion.span 
        className="absolute bottom-0 left-0 h-0.5 bg-black dark:bg-white"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ 
          duration: 0.3, 
          ease: [0.645, 0.045, 0.355, 1.000]
        }}
      />
    </Link>
  )
}

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = {
    strengths: [
      {
        title: "Development",
        link: "/strengths/development",
      },
      {
        title: "Analytics",
        link: "/strengths/analytics",
      },
      {
        title: "Bilingual",
        link: "/strengths/bilingual",
      },
      {
        title: "Growth",
        link: "/strengths/growth",
      }
    ],
    features: [
      {
        title: "Portfolio Journey",
        subtitle: "1 YEAR OF DEDICATION",
        link: "/features/evolution",
      },
      {
        title: "Learning & Growth Journey",
        subtitle: "SELF-TAUGHT DEVELOPER 2024",
        link: "/features/learning-journey",
      }
    ]
  }

  return (
    <>
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 p-4 hover:opacity-70"
      >
        <div className="flex flex-col gap-1.5">
          <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
        </div>
        <span className="font-normal text-lg">Menu</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-black z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 hover:opacity-70"
                >
                  <span className="text-2xl">×</span>
                  <span className="text-lg">Close</span>
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-6 space-y-12">
                {/* Theme & Language Placeholders */}
                <div className="space-y-6 opacity-50">
                  <div className="text-lg">Theme & Language options coming soon</div>
                </div>

                {/* Strengths Navigation */}
                <div className="space-y-6">
                  {menuItems.strengths.map((item, index) => (
                    <div key={index}>
                      <MenuLink href={item.link}>
                        {item.title}
                      </MenuLink>
                    </div>
                  ))}
                </div>

                {/* Features Navigation */}
                <div className="space-y-6">
                  {menuItems.features.map((item, index) => (
                    <div key={index}>
                      <MenuLink 
                        href={item.link}
                        subtitle={item.subtitle}
                      >
                        {item.title}
                      </MenuLink>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}