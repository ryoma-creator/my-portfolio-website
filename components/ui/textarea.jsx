import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `min-h-[80px] w-full px-4 py-5 rounded-[8px] bg-text-primary text-white placeholder:text-text-muted
         border border-white/10 text-base outline-none
         focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20
         transition-colors duration-300
         disabled:cursor-not-allowed disabled:opacity-50
        `
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }