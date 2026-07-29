import { motion } from "framer-motion"
import { Code2, Palette, Sparkles } from "lucide-react"
import { aboutText } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

const focuses = [
  { icon: Code2, label: "C++ & Python" },
  { icon: Sparkles, label: "Data Structures & AI" },
  { icon: Palette, label: "Web Development" },
]

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionHeading label="About" title="Who I Am" subtitle="My journey in tech and creativity" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeInView>
            <div className="space-y-4 text-text-secondary dark:text-text-dark-secondary leading-relaxed">
              <p>{aboutText}</p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="grid gap-4">
              {focuses.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary dark:text-accent" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
