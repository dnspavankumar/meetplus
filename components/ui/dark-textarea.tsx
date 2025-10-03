import * as React from "react"
import { cn } from "@/lib/utils"

export interface DarkTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const DarkTextarea = React.forwardRef<HTMLTextAreaElement, DarkTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-xl px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          color: 'white',
          borderRadius: '0.75rem',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 0 0 2px rgba(239, 68, 68, 0.5)';
          e.target.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = 'none';
          e.target.style.borderColor = 'rgba(239, 68, 68, 0.2)';
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
DarkTextarea.displayName = "DarkTextarea"

export { DarkTextarea }
