"use client";

import Link from "next/link";
import { useState } from "react";

const sections = [
  { href: "#intro", label: "Intro" },
  { href: "#about-me", label: "About Me" },
  { href: "#discography", label: "Discography" },
  { href: "#find-me", label: "Find Me" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 pl-0 pr-2 md:pr-8">
        <a
          className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-widest uppercase ml-1 md:ml-2 whitespace-nowrap"
          href="#"
        >
          A t l i s
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {sections.map((section, idx) => (
            <div key={section.href} className="flex items-center">
              <Link
                href={section.href}
                className={`py-1 mx-1 border-b-2 border-transparent hover:border-pink-400 hover:text-pink-400 transition-all duration-200 uppercase
                  ${idx === sections.length - 1 ? "px-8 pr-2" : "px-8"}`}
                style={{ textUnderlinePosition: "under" }}
              >
                {section.label}
              </Link>
              {/* Vertical divider, css trick */}
              {idx < sections.length - 1 && (
                <span className="h-6 border-l border-white mx-2 opacity-40"></span>
              )}
            </div>
          ))}
        </div>
        {/* Mobile dropwdown */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Down Icon, cool css trick to make responsive icon :) */}
          <svg
            className={`w-7 h-7 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="white"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2 font-medium border-t border-white/20">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block py-3 border-b border-white/10 hover:text-pink-400 hover:border-pink-400 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
