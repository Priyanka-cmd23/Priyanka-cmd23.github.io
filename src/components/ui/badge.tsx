import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        variant === "default" &&
          "bg-primary/10 text-primary dark:bg-primary/15 dark:text-accent",
        variant === "outline" &&
          "border border-primary/20 text-primary dark:border-primary/20 dark:text-accent",
        className
      )}
    >
      {children}
    </span>
  )
}
