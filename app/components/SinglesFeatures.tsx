"use client";

interface SinglesFeaturesProps {
  title: string;
  spotifyEmbedUrl: string;
  backgroundImage: string;
  className?: string;
}

const SinglesFeatures = ({
  title,
  spotifyEmbedUrl,
  backgroundImage,
  className = "",
}: SinglesFeaturesProps) => (
  <section
    className={`relative w-full flex items-center justify-center ${className}`}
    style={{ scrollMarginTop: "64px" }}
  >
    <div className="absolute inset-0 w-full h-full z-0">
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-[#1a1a1a] opacity-20 pointer-events-none" />
    </div>

    <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between bg-[#232323]/40 px-8 py-12 md:px-16 md:py-20 shadow-lg">
      <h3
        className="text-2xl md:text-4xl font-bold text-white uppercase mb-4 md:mb-0 md:mr-8 text-center md:text-left"
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        {title}
      </h3>
      <iframe
        src={spotifyEmbedUrl}
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="border-none shadow-md md:w-[400px] md:max-w-[400px]"
      ></iframe>
    </div>

    {/* query that only does fixed height on md and up, solves opacity overlay error */}
    <style jsx>{`
      @media (min-width: 768px) {
        section {
          height: calc((100vh - 64px) / 3) !important;
        }
      }
    `}</style>
  </section>
);

export default SinglesFeatures;
