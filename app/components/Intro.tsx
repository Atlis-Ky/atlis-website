"use client";

const Intro = () => (
  <section
    className="relative w-full md:h-screen pt-[64px] bg-[#1a1a1a] font-sans overflow-hidden scroll-mt-16"
    id="intro"
  >
    <div className="absolute inset-0 z-0">
      <img
        src="/IMG_8940.jpeg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-60" />
    </div>

    <div className="relative z-10 w-full md:h-full grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 md:h-full bg-[#232323]/40 p-4 sm:p-6 md:p-12 flex flex-col justify-start pt-6 md:pt-10">
        <p className="text-base sm:text-lg md:text-xl text-center font-semibold leading-relaxed text-white/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto tracking-wide">
          {`Hey! I’m Kyle, I'm a Front End Developer, with a background as a music industry professional. I've got a pretty broad set of job experiences and skills (as you may have read if you came here from my CV) but lately I've been putting almost all of my time into learning as much as I can about web development, specifically the Front End. I've always had an eye for design, so being able to channel that into a practical and seemingly endless learning journey has been pretty cool! Feel free to reach out If you think I'd be a good fit on your development team! I'll be using most of this webpage as a portfolio for my music industry work just to demonstrate some practical use of modern programming tools and languages, but feel free to have a look at any of those projects too if you feel like it. See below for CV :D`}
        </p>
        <a
          href="https://standardresume.co/r/deuFz-PeFdit0VJZ3rQ1Q"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 sm:mt-8 w-full sm:w-[80%] md:w-[70%] mx-auto rounded-xl py-2 sm:py-3 text-base sm:text-lg font-bold text-center transition duration-500
            bg-pink-400 hover:bg-pink-500 text-white shadow-lg tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          VIEW CV/RESUME
        </a>
      </div>

      <div className="md:col-span-1 h-full sm:h-[28rem] md:h-auto relative overflow-hidden">
        <img
          src="/atlis2.jpeg"
          alt="Atlis"
          className="w-full h-full object-cover scale-100 sm:scale-110 md:scale-150 -translate-y-2 sm:-translate-y-6 md:-translate-y-20 transition-transform duration-500"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
      </div>
    </div>
    <div className="w-full bg-[#232323] bg-opacity-90 py-2 sm:py-3 px-2 sm:px-4 flex flex-nowrap justify-center items-center gap-1 sm:gap-2 md:gap-4 border-t border-white/20 absolute left-0 bottom-0 z-10 divide-x divide-white/30 overflow-x-auto">
      {[
        "React.js",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Bootstrap5",
        "Vitest",
        "CSS + Tailwind",
        "API",
        "AI Tools",
        "Git + Github",
      ].map((skill) => (
        <span
          key={skill}
          className="text-xs sm:text-sm md:text-base text-white/80 tracking-widest font-semibold uppercase px-1 sm:px-2 md:px-3 whitespace-nowrap text-center first:pl-0 last:pr-0 hover:text-blue-300 transition-colors duration-500"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Intro;
