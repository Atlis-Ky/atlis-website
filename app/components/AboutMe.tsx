"use client";

const columns = [
  {
    title: "Producer & Artist",
    text: `Multi-Discipline producer of 10+ years, most notably on the "Atlis" project, which has amassed over 40 million streams through lofi and ambient releases. Practical skills in arrangement, writing and sound design. Additional understanding and experience producing and collaborating cross genre in Electronic Music, Rock, Metal, and Synthwave to name a few.`,
  },
  {
    title: "Front End Developer",
    text: `Highly motivated self-taught developer with a keen interest in building modern, responsive web apps, as well as a passion for problem solving and eye catching design. Experience building with React.js, Next.js, and TypeScript. Proficient in both CSS and Tailwind CSS, UI/UX design, Bootstrap 5, among other tools and technologies.`,
  },
  {
    title: "Audio Engineer",
    text: `Mixing and Mastering proficiency for self and others. Knowledgeable in studio hardware, software, acoustics, and digital audio workflows. Extremely knowledgable and familiar with Ableton Live suite, have spent almost half of my life learning the software, its stock plugins and functions, as well as a strong grasp of many third party plugin suites.`,
  },
];

const AboutMe = () => (
  <section
    id="about-me"
    className="relative w-full lg:h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans scroll-mt-16"
  >
    <div className="absolute inset-0 z-0">
      <img
        src="/IMG_8939.jpeg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-60" />
    </div>

    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 h-full">
      {columns.map((col, idx) => (
        <div
          key={col.title}
          className={`group lg:h-full bg-[#232323]/40 p-6 sm:p-10 lg:p-16 flex flex-col justify-start ${
            idx !== 0 ? "border-l-2 border-white" : ""
          }`}
        >
          <div className="grid grid-rows-[auto,1fr] items-start text-center h-full">
            <h2
              className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 text-white group-hover:text-pink-400 transition-colors duration-500 bg-clip-text tracking-widest uppercase drop-shadow-lg min-h-[60px] lg:min-h-[80px]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              {col.title}
            </h2>
            <p className="text-base sm:text-lg md:text-base lg:text-lg xl:text-xl font-semibold leading-relaxed text-white/90 max-w-lg mx-auto tracking-wide">
              {col.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutMe;
