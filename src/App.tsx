import { useTheme } from "@/hooks/useTheme"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { BackToTop } from "@/components/shared/BackToTop"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Education } from "@/components/sections/Education"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Achievements } from "@/components/sections/Achievements"
import { Certifications } from "@/components/sections/Certifications"
import { GitHubSection } from "@/components/sections/GitHubSection"
import { TechStack } from "@/components/sections/TechStack"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-surface dark:bg-surface-dark text-text-primary dark:text-text-dark transition-colors duration-300">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <GitHubSection />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
