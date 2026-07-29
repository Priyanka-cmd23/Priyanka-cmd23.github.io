import { personalInfo } from "@/data"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-text-secondary/60 dark:text-text-dark-secondary/40">
            Designed with precision
          </p>
        </div>
      </div>
    </footer>
  )
}
