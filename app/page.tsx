import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import Discography from "./components/Discography";
import FindMe from "./components/FindMe";
import Intro from "./components/Intro";
import SectionDivider from "./components/SectionDivider";
// import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider title="About Me" ySeed={70} />
      <AboutMe />
      <Discography />
      <SectionDivider title="Where To Find Me" ySeed={70} />
      <FindMe />
      <SectionDivider title="Contact" ySeed={10} />
      <ContactSection />
    
    </main>
  );
}
