import Certificates from "../components/Certificates";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Proficiencies from "../components/Proficiencies";
import Projects from "../components/Projects";
import Work from "../components/work";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <main className="bg-black max-w-5xl mx-auto">
      <Navbar />
      <Hero />
      <Proficiencies />
      <Work />
      <Education />
      <Projects />
      <Certificates />
      <Contacts />
    </main>
  );
}
