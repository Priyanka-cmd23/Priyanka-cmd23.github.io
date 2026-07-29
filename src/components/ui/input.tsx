import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Input({ className, label, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-secondary dark:text-text-dark-secondary">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-surface-alt dark:bg-surface-dark-alt",
          "border border-gray-200 dark:border-white/10",
          "text-text-primary dark:text-text-dark",
          "placeholder:text-text-secondary/50 dark:placeholder:text-text-dark-secondary/30",
          "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50",
          "transition-all duration-300",
          className
        )}
        {...props}
      />
    </div>
  )
}
