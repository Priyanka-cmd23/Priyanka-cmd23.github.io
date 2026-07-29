import { motion } from "framer-motion"
import { Github, Star, GitFork, Database } from "lucide-react"
import { personalInfo } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

const githubStats = [
  { icon: Database, label: "Repos", value: "5+" },
  { icon: Star, label: "Stars", value: "1" },
  { icon: GitFork, label: "Contributions", value: "Getting Started" },
]

export function GitHubSection() {
  return (
    <section id="github" className="relative">
      <div className="absolute inset-0 bg-surface-alt/50 dark:bg-surface-dark-alt/50 -z-10" />
      <div className="section-container">
        <SectionHeading
          label="GitHub"
          title="Open Source Journey"
          subtitle="Building in public, one commit at a time"
        />

        <FadeInView>
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Github size={28} className="text-primary dark:text-accent" />
              <div>
                <h3 className="font-semibold">{personalInfo.github.replace("https://github.com/", "@")}</h3>
                <p className="text-xs text-text-secondary dark:text-text-dark-secondary">
                  Public Profile
                </p>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto btn-outline text-xs px-4 py-2"
              >
                View Profile
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {githubStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon size={20} className="mx-auto mb-2 text-primary/60 dark:text-accent/60" />
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs text-text-secondary dark:text-text-dark-secondary">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden bg-surface-alt dark:bg-surface-dark-alt">
              <img
                src={`https://ghchart.rshah.org/6366f1/${personalInfo.github.replace("https://github.com/", "")}`}
                alt="GitHub contribution chart"
                className="w-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-4">
                Actively building and contributing to open source projects.
              </p>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <Github size={16} />
                Explore My Repos
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
