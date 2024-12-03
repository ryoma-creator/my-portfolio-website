import { useEffect, useState } from 'react';

const FloatingScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  // スクロール位置に応じて矢印の表示/非表示を制御
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // スムーズスクロール関数
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToContent}
    >
      <div className="flex flex-col items-center animate-bounce">
        {/* 3つの矢印を重ねて表示 */}
        <svg 
          className="w-6 h-6 text-white mb-1" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <svg 
          className="w-6 h-6 text-white/80 mb-1 -mt-4" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
        <svg 
          className="w-6 h-6 text-white/60 -mt-4" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default FloatingScrollArrow;