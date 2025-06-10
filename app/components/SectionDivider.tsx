"use client";

const SectionDivider = ({ title }: { title: string }) => (
  <section className="w-full h-26 flex items-center justify-center bg-[#1a1a1a]">
    <h2
      className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 tracking-widest uppercase text-center drop-shadow-lg"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      {title}
    </h2>
  </section>
);

export default SectionDivider;