'use client'

import React from 'react';

export default function SectionWrapper({ 
  children, 
  variant = "gradient", 
  className = "" 
}) {
  // バリアントごとのスタイル設定
  const variants = {
    gradient: `relative overflow-hidden bg-white text-gray-900`, 
    dark: `relative overflow-hidden bg-gray-900 text-white`,
    light: `relative overflow-hidden bg-white text-gray-900`,
    accent: `relative overflow-hidden bg-gray-900 text-white`
  };

  // アクセントカラーの設定（背景に応じて変更）
  const accentColors = {
    gradient: 'bg-blue-500 hover:bg-blue-600 text-white',
    dark: 'bg-pink-500 hover:bg-pink-600 text-white',
    light: 'bg-blue-500 hover:bg-blue-600 text-white',
    accent: 'bg-pink-500 hover:bg-pink-600 text-white'
  };

  const gradients = {
    gradient: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
          bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF]  
          blur-3xl transform rotate-12 animate-gradient-xy opacity-20" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
          bg-gradient-to-r from-[#EF96C5] via-[#CCF8FF] to-[#EF96C5]  
          blur-3xl transform -rotate-12 animate-gradient-xy opacity-20" />
      </div>
    ),
    gradient2: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
          bg-gradient-to-r from-[#CCF8FF] via-[#EF96C5] to-[#CCF8FF]  
          blur-3xl transform rotate-12 animate-gradient-xy opacity-20" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full 
          bg-gradient-to-r from-[#EF96C5] via-[#CCF8FF] to-[#EF96C5]  
          blur-3xl transform -rotate-12 animate-gradient-xy opacity-20" />
      </div>
    ),
    dark: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full 
          bg-gradient-to-r from-[#CCF8FF]/10 via-[#EF96C5]/10 to-[#CCF8FF]/10  
          blur-3xl transform rotate-12 animate-gradient-xy" />
      </div>
    ),
    light: null,
    accent: (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 
          bg-gradient-to-r from-[#CCF8FF]/5 via-[#EF96C5]/5 to-[#CCF8FF]/5 
          animate-gradient-x" />
      </div>
    )
  };

  // ContextProviderを作成して子コンポーネントにvariantを渡す
  return (
    <SectionContext.Provider value={{ variant, accentColors }}>
      <section className={`${variants[variant]} ${className}`}>
        {gradients[variant]}
        <div className="relative z-10">
          {children}
        </div>
      </section>
    </SectionContext.Provider>
  );
}

// Contextの作成
const SectionContext = React.createContext({
  variant: 'gradient',
  accentColors: {}
});

// カスタムフックの作成
export function useSectionContext() {
  return React.useContext(SectionContext);
}

// 使用例のボタンコンポーネント
export function AccentButton({ children, className = "" }) {
  const { variant, accentColors } = useSectionContext();
  
  return (
    <button className={`px-4 py-2 rounded-md ${accentColors[variant]} ${className}`}>
      {children}
    </button>
  );
}