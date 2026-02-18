import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] border-t border-white/10 text-gray-400 flex-wrap">
      <div className="max-w-6xl mx-auto pt-5 px-6 py-2">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wide">
              NexChunk
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Engineering enterprise-grade internal platforms, automation
              systems, and scalable web applications for organizations
              modernizing legacy infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Capabilities
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Data Reconciliation & Migration</li>
              <li>Internal Automation Systems</li>
              <li>Scalable Web Applications</li>
              <li>Enterprise Workflow Engineering</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@nexchunk.com?subject=Consultation Inquiry - NexChunk"
                  className="hover:text-white underline underline-offset-4 transition"
                >
                  contact@nexchunk.com
                </a>
              </li>
              <li>Consultation: By Appointment</li>
              <li>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-5 pt-4 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} NexChunk. All rights reserved.
          <span className="mx-2">|</span>
          Independent engineering consultancy. All engagements subject to NDA
          upon request.
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
