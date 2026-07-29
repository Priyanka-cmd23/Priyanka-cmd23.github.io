import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/data"
import { MagneticButton } from "@/components/shared/MagneticButton"

const words = ["Software Engineer", "AI Enthusiast", "Designer", "Problem Solver"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 dark:bg-accent/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="section-container w-full pt-20">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label"
          >
            Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mt-2 mb-4"
          >
            Radhika{" "}
            <span className="text-primary">Saxena</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 text-xl sm:text-2xl text-text-secondary dark:text-text-dark-secondary mb-6"
          >
            <span>I'm a</span>
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-primary font-semibold"
            >
              {words[wordIndex]}
            </motion.span>
            <span className="w-[3px] h-8 bg-primary animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-text-secondary dark:text-text-dark-secondary max-w-xl mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton as="a" href="#" className="btn-primary">
              <Download size={16} />
              Download Resume
            </MagneticButton>
            <MagneticButton as="a" href={personalInfo.github} className="btn-outline">
              <Github size={16} />
              GitHub
            </MagneticButton>
            <MagneticButton as="a" href={personalInfo.linkedin} className="btn-outline">
              <Linkedin size={16} />
              LinkedIn
            </MagneticButton>
            <MagneticButton as="a" href={`mailto:${personalInfo.email}`} className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary/40 dark:text-text-dark-secondary/40 hover:text-primary dark:hover:text-accent transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
