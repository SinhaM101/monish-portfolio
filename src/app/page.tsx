import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Photography } from "@/components/sections/Photography";
import { Toolkit } from "@/components/sections/Toolkit";
import { Coursework } from "@/components/sections/Coursework";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Toolkit />
      <Coursework />
      <Photography />
      <Contact />
    </>
  );
}
