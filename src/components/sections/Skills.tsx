import { motion } from "framer-motion"
import { skills } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

const iconMap: Record<string, string> = {
  SiCplusplus: "🔷",
  SiPython: "🐍",
  SiJava: "☕",
  SiHtml5: "🌐",
  SiCss3: "🎨",
  SiJavascript: "⚡",
  SiGit: "🔀",
  SiGithub: "🐙",
  SiVisualstudiocode: "💻",
  SiCanva: "🖌️",
  SiFigma: "🎯",
  SiAdobe: "🎬",
}

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 bg-surface-alt/50 dark:bg-surface-dark-alt/50 -z-10" />
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="My Toolkit"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-12">
          {[
            { key: "Programming Languages", items: skills.programming },
            { key: "Tools & Platforms", items: skills.tools },
          ].map((group) => (
            <FadeInView key={group.key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary/60 dark:text-text-dark-secondary/60 mb-5">
                {group.key}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-xl p-4 text-center group cursor-default"
                  >
                    <span className="text-2xl block mb-2">
                      {iconMap[skill.icon] || "⚡"}
                    </span>
                    <span className="text-xs font-medium text-text-secondary dark:text-text-dark-secondary group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </FadeInView>
          ))}

          <FadeInView>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary/60 dark:text-text-dark-secondary/60 mb-5">
              Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.concepts.map((concept) => (
                <motion.span
                  key={concept}
                  whileHover={{ scale: 1.05 }}
                  className="chip"
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
