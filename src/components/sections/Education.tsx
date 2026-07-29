import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

export function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <SectionHeading label="Education" title="Academic Background" />

        <FadeInView>
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} className="text-primary dark:text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
            <p className="text-primary dark:text-accent font-medium mb-1">
              {education.field}
            </p>
            <p className="text-text-secondary dark:text-text-dark-secondary mb-2">
              {education.institution}
            </p>
            <span className="chip">{education.status}</span>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
}
