"use client";

import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
// import ContactSection from "./components/ContactSection";
import Discography from "./components/Discography";
import FindMe from "./components/FindMe";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import SectionDivider from "./components/SectionDivider";
import ContactForms from "./components/ContactForms";

export default function Home() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Intro />
      <SectionDivider title="About Me" ySeed={70} />
      <AboutMe />
      <SectionDivider title="Albums & EP's" ySeed={20} />
      <Discography />
      <SectionDivider title="Where To Find Me" ySeed={70} />
      <FindMe />
      <SectionDivider title="Contact" ySeed={10} />
      <ContactForms />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
