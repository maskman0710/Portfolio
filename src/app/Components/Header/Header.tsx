
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-amber-300 bg-[#eeeade] shadow-md">
      <div className="flex h-16 items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo / Name */}
        <Link
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold text-green-950"
        >
          Rishi Goyal<span className="text-green-700">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-800 transition hover:text-green-800"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-green-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-800 md:inline-flex"
        >
          Let&apos;s Connect ↗
        </a>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-green-950 transition hover:bg-green-950/10 md:hidden"
        >
          {menuOpen ? (
            
            /* Close icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-amber-300 bg-[#eeeade] px-5 pb-5 pt-3 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-800 transition hover:bg-green-950/10 hover:text-green-900"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-green-950 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-green-800"
            >
              Let&apos;s Connect ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}