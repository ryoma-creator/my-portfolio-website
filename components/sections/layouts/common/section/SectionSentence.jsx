import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionSentence = ({ 
    children, 
    align = 'center', 
    textColor = 'text-text-tertiary',
    fontSize = 'text-md',  
    animation = {  // デフォルト値を設定
        variant: "fadeIn",
        duration: 0.8,
        delay: 0.2,
        stagger: 0.02
      }

  }) => {
    return (
        <div className="mb-1"> {/* 外側にコンテナを追加 */}
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
          className={`block ${fontSize} ${textColor} ${align === 'left' ? 'text-left' : 'text-center'} [line-height:1.15] whitespace-pre-wrap`}
        />
      </div>
    );
  };