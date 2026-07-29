import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { projects } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-surface-alt/50 dark:bg-surface-dark-alt/50 -z-10" />
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          subtitle="A selection of my work across development, design, and more"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeInView key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 dark:from-primary/20 dark:via-accent/10 dark:to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    {project.title === "AI GitHub Terminal" && "💻"}
                    {project.title === "Student Portfolio Website" && "🖥️"}
                    {project.title === "Java Mini Projects Collection" && "☕"}
                    {project.title === "C++ DSA Practice Repository" && "📚"}
                    {project.title === "Graphic Design Portfolio" && "🎨"}
                    {project.title === "Video Editing Showcase" && "🎬"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface dark:from-surface-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost p-2 rounded-lg bg-white/80 dark:bg-black/30 backdrop-blur">
                          <Github size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-ghost p-2 rounded-lg bg-white/80 dark:bg-black/30 backdrop-blur">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {project.futureFeatures && (
                    <div className="border-t border-gray-200 dark:border-white/5 pt-3 mt-auto">
                      <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="flex items-center gap-1 text-xs text-text-secondary/60 dark:text-text-dark-secondary/60 hover:text-primary dark:hover:text-accent transition-colors"
                      >
                        {expanded === i ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {expanded === i ? "Less" : "More"} features
                      </button>
                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-2 space-y-1">
                              {project.futureFeatures.map((f) => (
                                <li key={f} className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60 flex items-center gap-2">
                                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
