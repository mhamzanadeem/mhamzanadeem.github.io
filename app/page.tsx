import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Proficiency } from "@/components/Proficiency";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <Proficiency />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
