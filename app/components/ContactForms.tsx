"use client";

const ContactForms = () => (
  <section
    className="relative w-full lg:h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans scroll-mt-16"
    id="contact"
  >
    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 lg:h-[calc(100vh-64px)]">
      {/* Left & Center: Forms (col-span-2) */}
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
          {/* Web Development Queries column */}
          <div className="flex flex-col items-center justify-start w-full lg:h-full p-4 sm:p-6 lg:p-16 group">
            <h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white group-hover:text-pink-400 transition-colors duration-500 tracking-widest uppercase text-center drop-shadow-lg break-words"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Web Development Queries
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg text-white/80 mb-4 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-lg">
              If you've got any questions, or have any opportunities
              available for front end development roles, you can reach me using
              the form below, I'll be sure to get back to you ASAP.
            </p>
            <form
              className="flex flex-col gap-4 w-full max-w-xs mt-auto mb-5"
              action="mailto:kylesmith97@outlook.com"
              method="POST"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 rounded transition uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Send
              </button>
            </form>
          </div>

          {/* Production Queries column */}
          <div className="flex flex-col items-center justify-start w-full lg:h-full p-4 sm:p-6 lg:p-16 border-l-2 border-white group">
            <h2
              className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white group-hover:text-pink-400 transition-colors duration-500 tracking-widest uppercase text-center drop-shadow-lg break-words"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Production Queries
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg text-white/80 mb-4 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-lg">
              If you want to reach out for info/queries/opportunities on the
              production side of things, use this form to reach me on my Atlis
              email.
            </p>
            <form
              className="flex flex-col gap-4 w-full max-w-xs mt-auto mb-5"
              action="mailto:atlisbeets@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="px-4 py-2 rounded bg-[#232323] text-white"
                rows={4}
                required
              />
              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded transition uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  letterSpacing: "0.1em",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right image column */}
      <div className="lg:h-full bg-[#232323]/40 p-0 flex items-center justify-center overflow-hidden border-l-2 border-white">
        <img
          src="/atlis4.jpg"
          alt="Contact Right"
          className="w-full h-full object-cover object-bottom scale-120"
          draggable={false}
        />
      </div>
    </div>
  </section>
);

export default ContactForms;
