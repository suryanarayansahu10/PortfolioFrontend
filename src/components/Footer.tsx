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
              <li>
                <div className="flex items-center justify-items-start gap-4 mt-4">
                  Follow us on
                  <a
                    href="https://www.linkedin.com/company/nexchunk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452H16.89V14.89c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.659H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.269 2.372 4.269 5.455v6.288zM5.337 7.433a2.003 2.003 0 1 1 0-4.006 2.003 2.003 0 0 1 0 4.006zM6.9 20.452H3.773V9H6.9v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .775 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>
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
