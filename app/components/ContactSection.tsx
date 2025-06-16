// DLD CODE FOR CONTACT SECTION WITH FORMATTING ERRORS, TEMPORARILY KEEPING IN PLACE TO CONFIRM REPLACEMENT WORKS ON DEPLOYMENT


// "use client";

// const ContactSection = () => (
//   <section
//     className="relative w-full h-[calc(100vh-64px)] bg-[#1a1a1a] font-sans scroll-mt-16"
//     id="contact"
//   >
//     <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3">
//       <div className="absolute inset-0 z-0 flex">
//         <img
//           src="/IMG_8922.jpg"
//           alt="Contact Background"
//           className="w-full h-full object-cover object-bottom"
//           style={{ objectPosition: "center 80%" }}
//           draggable={false}
//         />
//         <div className="absolute left-0 top-0 bottom-0 right-1/3 bg-[#232323] opacity-70 z-10 pointer-events-none" />
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-start w-full h-full p-8 md:p-16 border-r-2 border-white group">
//         <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-500 text-center uppercase tracking-widest">
//           Web Development Queries
//         </h3>
//          <p className="text-lg flex flex-col text-center">If you've got any questions, or have any opportunities available for front end development roles, you can reach me using the form below, I'll be sure to get back to you ASAP.</p>
//         <form
//           className="flex flex-col gap-4 w-full max-w-xs mt-auto mb-5"
//           action="mailto:kylesmith97@outlook.com"
//           method="POST"
//           encType="text/plain"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             rows={4}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 rounded transition uppercase tracking-widest"
//             style={{
//               fontFamily: "var(--font-geist-sans), sans-serif",
//               letterSpacing: "0.1em",
//             }}
//           >
//             Send
//           </button>
//         </form>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-start w-full h-full p-8 md:p-16 border-r-2 border-white group">
//         <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-500 text-center uppercase tracking-widest">
//           Production Queries
//         </h3>
//         <p className="text-lg flex flex-col text-center">If you want to reach out for info/quieries/opportunities on the production side of things, use this form to reach me on my Atlis email.</p>
//         <form
//           className="flex flex-col gap-4 w-full max-w-xs mt-auto mb-5"
//           action="mailto:atlisbeets@gmail.com"
//           method="POST"
//           encType="text/plain"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             className="px-4 py-2 rounded bg-[#232323] text-white"
//             rows={4}
//             required
//           />
//           <button
//             type="submit"
//             className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded transition uppercase tracking-widest"
//             style={{
//               fontFamily: "var(--font-geist-sans), sans-serif",
//               letterSpacing: "0.1em",
//             }}
//           >
//             Send
//           </button>
//         </form>
//       </div>

//       <div className="relative z-10 h-full w-full flex items-center justify-center overflow-hidden">
//         <img
//           src="/atlis4.jpg"
//           alt="Contact Right"
//           className="w-full h-full object-cover object-bottom scale-120"
//           draggable={false}
//         />
//       </div>
//     </div>
//   </section>
// );

// export default ContactSection;
