"use client";

interface AlbumsEPsProps {
  title: string;
  description: string;
  backgroundImage: string; 
  spotifyEmbedUrl: string; 
}

const AlbumsEPs = ({
  title,
  description,
  backgroundImage,
  spotifyEmbedUrl,
}: AlbumsEPsProps) => (
  <section
    className="relative w-full h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans overflow-hidden flex items-center justify-center"
    style={{ scrollMarginTop: "64px" }}
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-10" />
    </div>
    {/* Foreground content */}
    <div className="relative z-10 w-full max-w-3xl mx-auto p-8 bg-[#232323]/30 rounded-xl flex flex-col items-center">
      <h2
        className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 tracking-widest uppercase text-center drop-shadow-lg"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        {title}
      </h2>
      <p className="text-xl font-semibold leading-relaxed text-white/90 max-w-2xl tracking-wide mb-8 text-center">
        {description}
      </p>
      <iframe
        src={spotifyEmbedUrl}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg border-none shadow-lg"
      ></iframe>
    </div>
  </section>
);

export default AlbumsEPs;