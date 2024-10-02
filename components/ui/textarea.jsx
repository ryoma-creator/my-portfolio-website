import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `min-h-[80px] w-full px-4 py-5 rounded-[10px] bg-primary placeholder:text-white/60
         border border-white/10 text-base outline-none focus:border-accent focus:text-accent
        `
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
