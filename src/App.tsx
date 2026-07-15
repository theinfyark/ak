import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { OpenSource } from '@/components/sections/OpenSource';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Placeholders } from '@/components/sections/Placeholders';
import { useTheme } from '@/hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <LoadingScreen />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-[#042f2e]"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Certifications />
        <Contact />
        <Placeholders />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
