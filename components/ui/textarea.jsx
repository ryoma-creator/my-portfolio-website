import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        `min-h-[80px] w-full px-4 py-5 rounded-[8px] bg-primary placeholder:text-white/60
         border border-white/10 text-base outline-none 
       
         focus-visible:outline-none focus-visible:ring-1 
        focus-visible:ring-accent focus-visible:ring-offset-0
        disabled:cursor-not-allowed disabled:opacity-50
        `
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
