// 1. components/LottieIcon/Award.jsx
'use client'
import React from 'react';
import Lottie from 'lottie-react';

const Award = () => {
  return (
    <Lottie 
      animationData={require('/public/lottie/award.json')}
      loop={false}
      className="w-24 h-24" // サイズは必要に応じて調整してください
    />
  );
};

export default Award;