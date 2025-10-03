import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md !border-red-500/20 !bg-black/40 !backdrop-blur-sm !text-white px-3 py-2 text-sm ring-offset-transparent !placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:!ring-red-500/50 focus-visible:!ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
