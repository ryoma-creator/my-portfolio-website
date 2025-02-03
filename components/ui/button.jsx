import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

// 複数のcssを、cva関数で一括で管理。
// 共通する部分とそうでない個別部分(variant)で分ける。
// cva()関数の第一引数には、共通のcssを記載(position等)
// 基本、関数へ引数を渡し、選択したいものを選ぶ。

// tailwind.config → neumorphism shadow-neumorphism-hover
const buttonVariants = cva(

  `inline-flex items-center justify-center whitespace-nowrap rounded-full
  text-base font-semibold ring-offset-white transition-colors
  shadow-neumorphism hover:shadow-neumorphism-hover [word-spacing:-0.15em]
  `,
  {
    variants: {
      //variantの部分が個別のbuttonの名称となる。
      // もし引数で選択しない場合は、自動でdefaultが選択される。 
      variant: {
        default: 'bg-accent text-primary hover:bg-accent-hover',
        primary: 'bg-primary text-white',
        // 改行するので``を使用
        outline: `border border-accent bg-transparent text-accent hover:bg-accent
                  hover:text-primary`
      },
      size: {
        default: 'h-[44px] px-6',
        md:  'h-[48px] px-6',
        lg:  'h-[56px] px-8 text-sm uppercase tracking-[2px]',
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
