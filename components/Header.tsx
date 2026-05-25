"use client";

import { useState } from "react";
import { Button } from "./Button";
import { Plus, Menu, X } from "lucide-react";
import { AuthMobileButton } from "./AuthMobileButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white text-black px-6 py-3 mx-auto w-full border-b border-neutral-100 relative">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">

        {/* Logo */}
        <span className=" text-lg tracking-tight">learners<span className="font-bold">Log</span></span>

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          <button
            className="group flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700
                       text-white text-sm font-bold px-4 py-3 rounded-2xl
                       shadow-sm shadow-emerald-600/10 transition-all
                       active:scale-95 cursor-pointer"
          >
            <Plus size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:rotate-90" />
            Log Session
          </button>

          {/* Desktop: Login & Sign Up visible inline */}
          <div className="hidden md:flex flex-row gap-2 border-l border-neutral-200 pl-2">
            <button
              className="text-sm font-medium text-neutral-600 hover:text-black
                       px-3 py-2 rounded-xl transition-colors cursor-pointer"
            >
              Log in
            </button>
            <Button href="/">Sign up</Button>
          </div>

          {/* Mobile: Hamburger toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100
                       transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X size={20} strokeWidth={2} />
              : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>

      </nav>

      {/* Mobile dropdown — always in DOM, animated via max-height + opacity */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-white border-b border-neutral-100
                    shadow-lg z-50 overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 border-b-0 shadow-none"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          <AuthMobileButton>Log in</AuthMobileButton>
          <AuthMobileButton>Sign up</AuthMobileButton>
        </div>
      </div>
    </header>
  );
}
