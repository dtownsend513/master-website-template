"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full border px-5 py-4 transition-all duration-500 md:px-8 ${
            scrolled
              ? "border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl"
              : "border-white/5 bg-slate-950/70 backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xs font-black uppercase tracking-[0.25em] text-white transition hover:text-sky-300 sm:text-sm sm:tracking-[0.35em]"
          >
            Townsend & Townsend
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.25em] text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-full bg-sky-500 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white transition duration-300 hover:scale-105 hover:bg-sky-400 lg:inline-flex"
          >
            Start For $250
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.25em] text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-sky-500 px-6 py-4 text-center text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-sky-400"
              >
                Start For $250
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}