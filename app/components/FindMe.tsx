"use client";

const FindMe = () => (
  <section
    className="relative w-full h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans overflow-hidden"
    id="find-me"
  >
    <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3">
      {/* Left: Image */}
      <div className="h-full bg-[#232323]/40 p-0 flex items-center justify-center overflow-hidden">
        <img
          src="/basel7.jpg"
          alt="Find Me"
          className="w-full h-full object-cover object-[50%_80%] scale-[1.1] max-h-full max-w-full"
          draggable={false}
        />
      </div>
      {/* Middle + Right: Shared background image */}
      <div className="relative col-span-2 h-full flex">
        {/* Shared background image for both columns */}
        <img
          src="/IMG_8908.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#232323] opacity-70 z-0" />
        {/* Foreground: two columns */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2">
          {/* Middle: Web Development */}
          <div className="flex flex-col items-center justify-start w-full h-full p-8 md:p-16 border-l-2 border-white">
            <h2
              className="text-5xl font-extrabold mb-4 text-white tracking-widest uppercase drop-shadow-lg text-center"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Web Development
            </h2>
            <p className="text-lg text-white/80 mb-8 text-center max-w-xs">
             I'm actively seeking out opportunities in front-end web development right now! If you're looking to expand / take on some new hires, please reach out. I'll stick my LinkedIn and Github below if you want some extra info regarding my work experience / technologies I'm familiar with.
            </p>
            <div className="flex flex-row gap-6 mt-4">
              {/* LinkedIn and GitHub icons/links here */}
            </div>
          </div>
          {/* Right: Production */}
          <div className="flex flex-col items-center justify-start w-full h-full p-8 md:p-16 border-l-2 border-white">
            <h2
              className="text-5xl font-extrabold mb-4 text-white tracking-widest uppercase drop-shadow-lg text-center"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Production & Audio
            </h2>
            <p className="text-lg text-white/80 mb-8 text-center max-w-xs">
              Or maybe you're just interested in keeping up with the music side of what I do? That's cool too! you can find me on pretty much any streaming service, I'll link the main ones below, thanks for listening :D
            </p>
            <div className="flex flex-row gap-6 mt-4">
              {/* Spotify, Apple Music, Tidal, Instagram icons/links here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FindMe;
