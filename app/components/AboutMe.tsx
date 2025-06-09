"use client";

const AboutMe = () => (
  <section
    className="relative w-full h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans overflow-hidden"
    id="about-me"
  >
    <div className="absolute inset-0 z-0">
      <img
        src="/IMG_8940.jpeg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-60" />
    </div>

    <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2 h-full bg-[#232323]/40 p-12 flex flex-col justify-center">
        <h2
          className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 tracking-widest uppercase drop-shadow-lg"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          About Me
        </h2>
        <p className="text-xl font-semibold leading-relaxed text-white/90 max-w-2xl tracking-wide">
          Hey! I’m Kyle, as you probably figured out by the section above I'm a
          Front End Developer, with a background as a music industry
          proffesional. I've got a pretty broad set of job experiences and
          skills (again as you may have read if you came here from my CV), but
          lately I've been putting almost all of my time into learning as much
          as I can about web development, specifically the Front End. I've
          always had an eye for design, so being able to channel that into a
          practical and seemingly endless learning journey has been pretty cool!
          Feel free to reach out If you think I'd be a good fit on your
          development team! I'll be using most of this webpage as a portfolio
          for me music industry work just to demonstrate some practical use of
          modern programming tools and languages, but feels free to have a look
          at any of those projects too if you feel like it :D
        </p>
      </div>

      <div className="md:col-span-1 h-[300px] md:h-auto relative overflow-hidden">
        <img
          src="/atlis2.jpeg"
          alt="Atlis"
          className="w-full h-full object-cover scale-150 -translate-y-20 transition-transform duration-500"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
      </div>
    </div>
  </section>
);

export default AboutMe;
