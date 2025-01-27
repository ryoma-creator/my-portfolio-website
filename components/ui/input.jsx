import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        `flex h-[48px] rounded-[8px] border border-gray-200 
         font-light bg-gray-50 px-4 py-5 text-base text-gray-900
         placeholder:text-gray-500
         focus:border-[#EF96C5] focus:ring-[#EF96C5] outline-none
         transition-colors duration-200
         `,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }