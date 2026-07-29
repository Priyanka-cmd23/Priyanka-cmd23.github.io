import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

interface ThemeToggleProps {
  theme: "light" | "dark"
  toggle: () => void
}

export function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="relative p-2 rounded-xl bg-surface-alt dark:bg-surface-dark-alt border border-gray-200 dark:border-white/10 cursor-pointer"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {theme === "dark" ? <Moon size={18} className="text-accent" /> : <Sun size={18} className="text-primary" />}
      </motion.div>
    </button>
  )
}
