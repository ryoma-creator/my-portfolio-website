// SectionButton.jsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GsapAnimatedElement from '@/components/scroll/GsapAnimatedElement';

export const SectionButton = ({ 
  children,
  href,
  onClick,
  icon,
  align = 'center',
  variant = 'outline',  // shadcn/uiのデフォルトバリアントを使用
  size = 'default',     // shadcn/uiのデフォルトサイズを使用
  animation = {
    variant: "scaleUp",
    duration: 0.5,
    delay: 0.2
  }
}) => {
  // 位置揃えのみカスタム定義
  const alignmentClasses = {
    'left': 'justify-start',
    'center': 'justify-center',
    'right': 'justify-end'
  };

  // gradientオーバーレイを持つButtonコンポーネント
  const ButtonContent = () => (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className="relative group overflow-hidden"  // 基本的なスタイルのみ追加
    >
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
        animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* ボタンコンテンツ */}
      <span className="relative text-text-primary group-hover:text-white flex items-center gap-2 leading-tight [&>span]:tracking-tightest [&>span]:word-spacing-[-0.15em]">
        {children}
        {icon && <span className="text-xl">{icon}</span>}
      </span>
    </Button>
  );

  return (
    <div className={`flex ${alignmentClasses[align]}`}>
      <GsapAnimatedElement {...animation}>
        {href ? (
          <Link href={href}>
            <ButtonContent />
          </Link>
        ) : (
          <ButtonContent />
        )}
      </GsapAnimatedElement>
    </div>
  );
};