import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"
import { experience } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <SectionHeading label="Experience" title="Where I've Contributed" />

        <FadeInView>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center shrink-0">
                <Briefcase size={24} className="text-primary dark:text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{experience.role}</h3>
                <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                  Student Placement Cell
                </p>
              </div>
            </div>
            <ul className="space-y-2">
              {experience.responsibilities.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm text-text-secondary dark:text-text-dark-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
}
