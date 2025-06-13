const Footer = () => (
  <footer className="w-full bg-black text-white border-t border-white/10 py-6 px-2 md:px-8 text-[11px] md:text-xs font-light">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="text-left w-full md:w-auto">
        Made by Kyle Smith in Next.js, with TypeScript &amp; Tailwind CSS.
      </div>
      <div className="text-right w-full md:w-auto">
        All Photographs taken/owned by Kyle Smith. Illustrations made for Atlis
        project &amp; collaborators for release purposes.
      </div>
    </div>
  </footer>
);

export default Footer;
