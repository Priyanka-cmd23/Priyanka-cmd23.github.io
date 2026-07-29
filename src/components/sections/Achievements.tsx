import { motion } from "framer-motion"
import { Award, Trophy, Brain, Target } from "lucide-react"
import { achievements } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

const icons = [Trophy, Brain, Target, Award]

export function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="absolute inset-0 bg-surface-alt/50 dark:bg-surface-dark-alt/50 -z-10" />
      <div className="section-container">
        <SectionHeading label="Achievements" title="Milestones" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {achievements.map((achievement, i) => {
            const Icon = icons[i % icons.length]
            return (
              <FadeInView key={achievement} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-xl p-6 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-primary dark:text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold">{achievement}</h3>
                </motion.div>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
