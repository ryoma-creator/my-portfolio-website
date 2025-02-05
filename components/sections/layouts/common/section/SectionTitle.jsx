import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionTitle = ({ 
  children, 
  align = 'center',
  fontSize = 'text-4lg',
  textColor = 'text-text-primary',
  animate = true,  // アニメーション制御用のプロパティを追加
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
      <h2 className={`text-${align}`}>
        <span className={`text-3xl md:text-4xl font-light ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor}`}>
          {children}
        </span>
      </h2>
    );
  }

  // アニメーション付きバージョン
  return (
    <h2 className={`text-${align}`}>
      <GsapAnimatedText 
        text={children}
        variant={animation.variant}
        duration={animation.duration}
        delay={animation.delay}
        stagger={animation.stagger}
        scrollTrigger={{
          once: true,
          start: "top 95%", // 画面の下から80%の位置でトリガー（より早くトリガーされる）
        }}
        className={`text-3xl md:text-4xl font-light ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor}`}
      />
    </h2>
  );
};