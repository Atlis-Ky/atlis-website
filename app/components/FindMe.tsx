"use client";

const FindMe = () => (
  <section
    className="relative w-full lg:h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans scroll-mt-16"
    id="find-me"
  >
    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 lg:h-[calc(100vh-64px)]">
      {/* Left image column */}
      <div className="lg:h-full bg-[#232323]/40 p-0 flex items-center justify-center overflow-hidden">
        <img
          src="/kodii.jpg"
          alt="Find Me"
          className="w-full h-full object-cover object-[50%_80%] scale-[1] max-h-full max-w-full"
          draggable={false}
        />
      </div>

      {/* Right content columns */}
      <div className="relative col-span-2 lg:h-full flex">
        {/* Background image and overlay */}
        <img
          src="/IMG_8908.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          draggable={false}
        />
        <div className="absolute inset-0 bg-[#232323] opacity-70 z-0" />

        {/* Content grid */}
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2">
          {/* Web Development column */}
          <div className="flex flex-col items-center justify-start w-full lg:h-full p-4 sm:p-6 lg:p-16 border-l-2 border-white group">
            <h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white group-hover:text-pink-400 transition-colors duration-500 tracking-widest uppercase text-center drop-shadow-lg break-words"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Web Development
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-white/80 mb-4 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-lg">
              I'm actively seeking out opportunities in front-end web
              development right now! If you're looking to expand / take on some
              new hires, please reach out. I'll stick my LinkedIn and Github
              below if you want some extra info regarding my work experience /
              technologies I'm familiar with.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xs items-center mt-auto mb-5">
              <a
                href="https://www.linkedin.com/in/kyle-smith-2905282b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full max-w-[240px]"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/Atlis-Ky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full max-w-[240px]"
              >
                <img
                  src="/github.svg"
                  alt="GitHub"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          {/* Production & Audio column */}
          <div className="flex flex-col items-center justify-start w-full lg:h-full p-4 sm:p-6 lg:p-16 border-l-2 border-white group">
            <h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white group-hover:text-pink-400 transition-colors duration-500 tracking-widest uppercase text-center drop-shadow-lg break-words"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Production & Audio
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl text-white/80 mb-4 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-lg">
              Or maybe you're just interested in keeping up with the music side
              of what I do? That's cool too! you can find me on pretty much any
              streaming service, I'll link the main ones below, thanks for
              listening :D
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs mt-auto mb-5">
              <a
                href="https://open.spotify.com/artist/0rPg5GzRyLsiWkNcRSEXUU?si=p5BSx62HTymzcvXvMPb5OQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full"
              >
                <img
                  src="/spotify.png"
                  alt="Spotify"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  Spotify
                </span>
              </a>
              <a
                href="https://music.apple.com/us/artist/atlis/1468014326"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full"
              >
                <img
                  src="/apple.png"
                  alt="Apple Music"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  Apple Music
                </span>
              </a>
              <a
                href="https://tidal.com/browse/artist/6419596"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full"
              >
                <img
                  src="/tidal.png"
                  alt="Tidal"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  Tidal
                </span>
              </a>
              <a
                href="https://www.instagram.com/atlisbeets/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-center bg-[#232323]/70 rounded-xl px-6 sm:px-8 py-3 hover:opacity-80 transition w-full"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-2 filter invert brightness-200 aspect-square object-contain bg-transparent"
                />
                <span className="text-base sm:text-xl font-semibold text-white">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FindMe;
