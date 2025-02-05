import GsapAnimatedText from "@/components/scroll/GsapAnimatedText";

export const SectionSentence = ({ 
    children, 
    align = 'center', 
    textColor = 'text-text-tertiary',
    fontSize = 'text-md',
    animate = true,  // 追加
    animation = {
        variant: "fadeIn",
        duration: 0.8,
        delay: 0.2,
        stagger: 0.02
    }
}) => {
    // animateがfalseの場合、アニメーションなしで通常のテキストを表示
    if (!animate) {
        return (
            <div className="mb-1">
                <p className={`block ${fontSize} ${textColor} ${align === 'left' ? 'text-left' : 'text-center'} [line-height:1.15] whitespace-pre-wrap`}>
                    {children}
                </p>
            </div>
        );
    }

    // 通常のアニメーション付きバージョン
    return (
        <div className="mb-1">
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
                className={`block ${fontSize} ${textColor} ${align === 'left' ? 'text-left' : 'text-center'} [line-height:1.15] whitespace-pre-wrap`}
            />
        </div>
    );
};