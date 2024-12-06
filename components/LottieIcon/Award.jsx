'use client'
import React from 'react';
import Lottie from 'lottie-react';
import awardAnimation from '/public/lottie/award.json';  // 直接import

const Award = () => {
  return (
    <Lottie 
      animationData={awardAnimation}  // requireを使用しない
      loop={false}
      className="w-24 h-24"
    />
  );
};

export default Award;