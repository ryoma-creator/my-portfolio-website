import { SectionSubtitle } from './SectionSubtitle';
import { SectionTitle } from './SectionTitle';
import { SectionSentence } from './SectionSentence';
import { SectionButton } from './SectionButton';

export const SectionGroup = ({ 
  // 基本コンテンツ
  subtitle,
  title,
  sentence,
  children,
  
  // 全体のスタイル設定
  align = 'center',
  textColor,
  lineHeight = 'leading-tight',
  
  // テキストのスタイル設定
  fontSize,
  
  // 各要素のアニメーション設定
  subtitleAnimation = {
    variant: "fadeIn",
    duration: 0.8,
    delay: 0.2,
    stagger: 0.02
  },
  titleAnimation = {
    variant: "blurIn",
    duration: 1,
    delay: 0.3,
    stagger: 0.03
  },
  sentenceAnimation = {
    variant: "fadeIn",
    duration: 0.8,
    delay: 0.4,
    stagger: 0.02
  },

  // ボタン設定（オプショナル）
  button = {
    text: '',           // ボタンのテキスト
    href: '',           // リンク先（オプショナル）
    onClick: null,      // クリックハンドラ（オプショナル）
    icon: null,         // アイコン（オプショナル）
    variant: 'default', // ボタンのスタイル
    size: 'default',    // ボタンのサイズ
    align: null,        // ボタンの位置揃え
    animation: {        // アニメーション設定
      variant: "scaleUp",
      duration: 0.5,
      delay: 0.2
    }
  }
}) => {
  return (
    <div className={`flex flex-col gap-8 ${align === 'left' ? 'items-start' : 'items-center'}`}>
      {subtitle && (
        <SectionSubtitle 
          align={align}
          textColor={textColor}
          lineHeight={lineHeight}
          animation={subtitleAnimation}
        >
          {subtitle}
        </SectionSubtitle>
      )}

      {title && (
        <SectionTitle
          align={align}
          textColor={textColor}
          lineHeight={lineHeight}
          animation={titleAnimation}
        >
          {title}
        </SectionTitle>
      )}

      {sentence && (
        <SectionSentence
          align={align}
          textColor={textColor}
          fontSize={fontSize}
          lineHeight={lineHeight}
          animation={sentenceAnimation}
        >
          {sentence}
        </SectionSentence>
      )}

      {button.text && (
        <SectionButton
          href={button.href}
          onClick={button.onClick}
          icon={button.icon}
          align={button.align || align}
          variant={button.variant}
          size={button.size}
          animation={button.animation}
        >
          {button.text}
        </SectionButton>
      )}

      {children}
    </div>
  );
};