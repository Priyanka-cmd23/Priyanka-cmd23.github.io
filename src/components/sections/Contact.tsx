import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { personalInfo } from "@/data"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { FadeInView } from "@/components/shared/FadeInView"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-surface-alt/50 dark:bg-surface-dark-alt/50 -z-10" />
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          subtitle="Have a question or want to collaborate?"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <FadeInView>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Let's talk</h3>
              <p className="text-text-secondary dark:text-text-dark-secondary">
                I'm always open to discussing new projects, creative ideas, or opportunities to contribute to the open source community.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                    <Mail size={18} className="text-primary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium hover:text-primary dark:hover:text-accent transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                    <Phone size={18} className="text-primary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60">Phone</p>
                    <span className="text-sm font-medium">{personalInfo.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                    <MapPin size={18} className="text-primary dark:text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary/60 dark:text-text-dark-secondary/60">Location</p>
                    <span className="text-sm font-medium">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
              <Input label="Name" id="name" placeholder="Your name" />
              <Input label="Email" id="email" type="email" placeholder="your@email.com" />
              <Textarea label="Message" id="message" placeholder="Tell me about your project..." rows={4} />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center"
                disabled={submitted}
              >
                {submitted ? (
                  "Message sent! 🎉"
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}
