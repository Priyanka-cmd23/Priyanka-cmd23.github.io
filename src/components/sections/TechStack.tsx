import { motion } from "framer-motion"
import { techStack } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

const techIcons: Record<string, string> = {
  "C++": "🔷",
  Python: "🐍",
  Java: "☕",
  Git: "🔀",
  GitHub: "🐙",
  React: "⚛️",
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  Tailwind: "🌊",
  Figma: "🎯",
  Canva: "🖌️",
}

export function TechStack() {
  return (
    <section id="techstack" className="relative">
      <div className="section-container">
        <SectionHeading label="Tech Stack" title="Technologies I Use" />

        <FadeInView>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass-card rounded-xl px-5 py-3 flex items-center gap-2 cursor-default"
              >
                <span className="text-lg">{techIcons[tech] || "⚡"}</span>
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
