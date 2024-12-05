"use client";

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 z-50 w-full lg:top-6">
      <div className="container mx-auto max-w-[1672px] px-6 md:px-9">
        <div className="relative flex h-16 items-center justify-between rounded-lg border border-transparent bg-background px-2 py-1.5 transition-all duration-300 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:rounded-2xl lg:py-2 lg:pr-2">
          <a className="flex items-center gap-1" href="/">
            <span className="text-lg font-bold">ANDREW RAMIREZ</span>
          </a>
          <ul className="hidden lg:flex gap-6 font-mono font-semibold uppercase text-foreground">
            <li><a href="#" className="hover:text-brand-foreground">Work Experience</a></li>
            <li><a href="#" className="hover:text-brand-foreground">Games</a></li>
            <li><a href="#" className="hover:text-brand-foreground">Resume</a></li>
          </ul>
          <div className="hidden lg:flex gap-2">
            <button className="px-4 py-2 bg-black text-white rounded-lg">Sign In</button>
            <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg">Contact Me</button>
          </div>
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col items-center gap-4 mt-4">
              <li><a href="#">Work Experience</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Resume</a></li>
              <li><button className="px-4 py-2 bg-black text-white rounded-lg">Contact Me</button></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}