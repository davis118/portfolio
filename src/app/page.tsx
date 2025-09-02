import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <CallToAction />
      <Footer />
    </main>
  );
}
