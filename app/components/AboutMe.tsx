"use client";

const columns = [
  {
    title: "Producer & Artist",
    text: 'Multi-Discipline producer of 10+ years, most notably on the "Atlis" project, which has amassed over 40 million streams through lofi and ambient releases. Practical skills in arrangement, writing and sound design. Additional understanding and experience producing and collaborating cross genre in Electronic music, Rock & Metal, and Synthwave to name a few.',
  },
  {
    title: "Front End Developer",
    text: "Highly motivated self-taught developer with a keen interest in building modern, responsive web apps, and a passion for problem solving & eye catching design. Experience building with React.js, Next.js, and TypeScript. Proficient in both CSS and Tailwind CSS, UI/UX design, Bootstrap 5, among other tools and technologies.",
  },
  {
    title: "Audio Engineer",
    text: "Mixing & Mastering proficiency for self and others. Knowledgeable in studio hardware, software, acoustics, and digital audio workflows. Extremely knowledgable and familiar with Ableton Live suite, have spent almost half of my life learning the software, its stock plugins and functions, as well as a strong grasp of many third party plugin suites.",
  },
];

const AboutMe = () => (
  <section
    id="about-me"
    className="relative w-full h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans overflow-hidden scroll-mt-[64px]"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/IMG_8939.jpeg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-60" />
    </div>
    {/* Foreground content */}
    <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3">
      {columns.map((col, idx) => (
        <div
          key={col.title}
          className={`group h-full bg-[#232323]/40 p-16 ${
            idx !== 0 ? "border-l-2 border-white" : ""
          }`}
        >
          <div className="h-full grid grid-rows-[auto,1fr] items-start text-center">
            <h2
              className="text-5xl font-extrabold mb-8 text-white group-hover:text-pink-400 transition-colors duration-00 bg-clip-text tracking-widest uppercase drop-shadow-lg min-h-[80px]"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              {col.title}
            </h2>
            <p className="text-xl font-semibold leading-relaxed text-white/90 max-w-lg mx-auto tracking-wide">
              {col.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutMe;
