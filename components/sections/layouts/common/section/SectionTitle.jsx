import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionTitle = ({ 
  children, 
  align = 'center',
  fontSize = 'text-4lg',
  textColor = 'text-text-primary',
  animation = {  // デフォルト値を設定
    variant: "fadeIn",
    duration: 0.8,
    delay: 0.2,
    stagger: 0.02
  }
}) => {
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
          start: "top 80%"
        }}
        className={`text-3xl md:text-4xl font-light  ${fontSize} ${align === 'left' ? 'text-left' : 'text-center'} ${textColor}`}
      />
    </h2>
  );
};