import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionSubtitle = ({ 
  children, 
  align = 'center',
  fontSize = 'text-lg',
  textColor = 'text-text-secondary',
  animate = true,  // 追加
  animation = {
    variant: "fadeIn",
    duration: 0.8,
    delay: 0.2,
    stagger: 0.02
  }
}) => {
  // アニメーションなしバージョン
  if (!animate) {
    return (
      <div className={`text-${align}`}>
        <p className={`text-sm uppercase tracking-wider ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor}`}>
          {children}
        </p>
      </div>
    );
  }

  // アニメーション付きバージョン
  return (
    <div className={`text-${align}`}>
      <GsapAnimatedText 
        text={children}
        variant={animation.variant}
        duration={animation.duration}
        delay={animation.delay}
        stagger={animation.stagger}
        scrollTrigger={{
          once: true,
          start: "top 100%", // 画面の下から80%の位置でトリガー（より早くトリガーされる）
        }}
        className={`text-sm uppercase tracking-wider ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor}`}
      />
    </div>
  );
};