import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <TechStack />
      <Contact />
    </>
  );
}
