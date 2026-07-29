import { motion } from "framer-motion"
import { Verified } from "lucide-react"
import { certifications } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"

export function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <SectionHeading label="Certifications" title="Credentials" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <FadeInView key={cert.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Verified size={22} className="text-primary dark:text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-text-secondary dark:text-text-dark-secondary mb-1">
                  {cert.issuer}
                </p>
                <span className="chip text-[10px]">{cert.date}</span>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
