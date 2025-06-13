"use client";

// some cool css trick to get the marble effect at different Y positions for each instance, tried a math randomiser but causes rendering issues client side with mismatch etc. setting seeds seems to be good enough
const SectionDivider = ({
  title,
  ySeed = 50, // Default to 50 incase no seed set
}: {
  title: string;
  ySeed?: number;
}) => {
  const objectPositionY = `${ySeed}%`;

  return (
    <section
      className="group w-full h-26 flex items-center justify-center bg-[#1a1a1a] relative overflow-hidden"
      style={{ backgroundColor: "transparent" }}
    >
      <img
        src="/blackmarble.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: `50% ${objectPositionY}` }}
        draggable={false}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-40 z-10" />
      <h2
        className="relative z-10 text-3xl md:text-5xl font-extrabold text-white group-hover:text-blue-300 transition-colors duration-500 tracking-widest uppercase text-center drop-shadow-lg"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        {title}
      </h2>
    </section>
  );
};

export default SectionDivider;
