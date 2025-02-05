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
  animate = true,  
  
  // 全体のスタイル設定
  align = 'center',
  textColor,
  lineHeight = 'leading-tight',
  
  // テキストのスタイル設定
  fontSize,
  
  // 各要素のアニメーション設定
  subtitleAnimation = {
    variant: "fadeIn",
    duration: 0.4,  // 0.8から0.4に短縮
    delay: 0.1,     // 0.2から0.1に短縮
    stagger: 0.01   // 0.02から0.01に短縮
  },
  titleAnimation = {
    variant: "blurIn",
    duration: 0.5,  // 1から0.5に短縮
    delay: 0.15,    // 0.3から0.15に短縮
    stagger: 0.02   // 0.03から0.02に短縮
  },
  sentenceAnimation = {
    variant: "fadeIn",
    duration: 0.4,  // 0.8から0.4に短縮
    delay: 0.2,     // 0.4から0.2に短縮
    stagger: 0.01   // 0.02から0.01に短縮
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
      delay: 0.2,
      
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
          fontSize={fontSize}  // 同じfontSizeを使用
          animation={subtitleAnimation}
          animate={animate}  // 追加
        >
          {subtitle}
        </SectionSubtitle>
      )}

      {title && (
        <SectionTitle
          align={align}
          textColor={textColor}
          lineHeight={lineHeight}
          fontSize={fontSize}  // 同じfontSizeを使用
          animation={titleAnimation}
          animate={animate}  // 追加
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
          animate={animate}  // 追加
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