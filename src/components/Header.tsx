import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0E2240] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-white tracking-wide"
          >
            NexChunk
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/case-studies" className="hover:text-white transition">
              Case Studies
            </Link>
            <Link href="/security" className="hover:text-white transition">
              Security
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition"
            >
              Schedule Consultation
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-white relative w-6 h-6 z-50"
            onClick={() => setIsOpen(true)}
          >
            <span className="absolute h-0.5 w-6 bg-white top-1" />
            <span className="absolute h-0.5 w-6 bg-white top-3" />
            <span className="absolute h-0.5 w-6 bg-white top-5" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#132B4F] shadow-2xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6 text-gray-300">
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/case-studies" onClick={() => setIsOpen(false)}>
            Case Studies
          </Link>
          <Link href="/security" onClick={() => setIsOpen(false)}>
            Security
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-md text-center mt-4 transition"
          >
            Schedule Consultation
          </a>
        </nav>
      </div>
    </>
  );
}
