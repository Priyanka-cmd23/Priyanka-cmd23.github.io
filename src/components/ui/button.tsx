import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const btnBase = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer"

const sizeClasses = {
  sm: "px-4 py-2 text-xs rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
}

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]",
  outline:
    "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 dark:border-primary/20 dark:text-accent dark:hover:bg-primary/10",
  ghost:
    "text-text-secondary hover:text-primary hover:bg-primary/5 dark:text-text-dark-secondary dark:hover:text-accent dark:hover:bg-primary/5",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(btnBase, sizeClasses[size], variantClasses[variant], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
