import AboutMe from "./components/AboutMe";
import Discography from "./components/Discography";
import Intro from "./components/Intro";
// import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <Discography />
    </main>
  );
}
