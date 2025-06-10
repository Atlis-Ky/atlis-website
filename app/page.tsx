import AboutMe from "./components/AboutMe";
import Discography from "./components/Discography";
import FindMe from "./components/FindMe";
import Intro from "./components/Intro";
import SectionDivider from "./components/SectionDivider";
// import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <Discography />
      <SectionDivider title="Where To Find Me" ySeed={70} />
      <FindMe />
    </main>
  );
}
