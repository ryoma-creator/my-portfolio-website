import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionSubtitle = ({ 
  children, 
  align = 'center',  // デフォルトは中央揃え
  fontSize = 'text-lg',
  textColor = 'text-text-secondary',  // デフォルトの色
  animation = {  // デフォルト値を設定
    variant: "fadeIn",
    duration: 0.8,
    delay: 0.2,
    stagger: 0.02
  }
}) => {

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
          start: "top 80%"
        }}
        className={`text-sm uppercase tracking-wider ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor} `}
      />
    </div>
  );
};