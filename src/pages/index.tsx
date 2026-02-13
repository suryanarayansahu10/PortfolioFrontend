import Head from "next/head";
import Link from "next/link";
import { CALENDLY_URL } from "@/lib/config";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrustLayer Technologies</title>
        <meta
          name="description"
          content="Enterprise-grade internal platforms, automation systems, and scalable MERN stack applications."
        />
      </Head>

      <section className="bg-[#0B1F3A] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white max-w-3xl">
            Engineering Trust Into Critical Systems
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            TrustLayer Technologies designs and builds enterprise-grade internal
            platforms, automation systems, and scalable MERN stack applications
            for organizations modernizing legacy infrastructure and high-volume
            operational workflows.
          </p>

          <div className="mt-8 flex items-center space-x-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
            >
              Schedule Consultation
            </a>

            <Link
              href="/services"
              className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-md transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#0F2748] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Section Header */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Core Engineering Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              We architect and deliver high-reliability systems designed for
              scale, precision, and operational control across critical business
              workflows.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {/* Capability 1 */}
            <div className="bg-[#0B1F3A] p-8 rounded-lg border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold text-white">
                Data Reconciliation & Migration Validation
              </h3>
              <p className="mt-4 text-gray-400">
                High-volume record comparison, structured difference reporting,
                and secure temporary processing for system transition projects
                and large-scale data migrations.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="bg-[#0B1F3A] p-8 rounded-lg border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold text-white">
                Internal Automation Systems
              </h3>
              <p className="mt-4 text-gray-400">
                Custom Python-based automation tools and internal workflow
                platforms engineered to eliminate manual dependencies and reduce
                operational risk.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="bg-[#0B1F3A] p-8 rounded-lg border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold text-white">
                Secure MERN Stack Platforms
              </h3>
              <p className="mt-4 text-gray-400">
                Scalable backend-driven applications, dashboards, and
                administrative systems built for performance, reliability, and
                long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Why TrustLayer
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Engineering-First Approach
              </h3>
              <p className="mt-4 text-gray-400">
                We approach every engagement from a systems engineering
                perspective — focusing on reliability, scalability, and
                operational integrity rather than surface-level implementation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Financial-Grade Discipline
              </h3>
              <p className="mt-4 text-gray-400">
                Our methodologies are shaped by high-volume operational
                environments, ensuring structured validation, auditability, and
                precision in critical workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Automation-Centric Thinking
              </h3>
              <p className="mt-4 text-gray-400">
                We design systems that eliminate manual dependencies and reduce
                long-term operational risk through intelligent automation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Long-Term Maintainability
              </h3>
              <p className="mt-4 text-gray-400">
                Every platform is built with structured architecture and
                documentation, ensuring clarity, extensibility, and future
                scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Security & Data Handling Commitment
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            TrustLayer platforms are designed with security-first architecture
            principles. We prioritize encrypted processing, temporary data
            handling, and structured audit trails to ensure confidentiality and
            operational transparency.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Encrypted Transmission
              </h3>
              <p className="mt-3 text-gray-400">
                Secure data transfer protocols to protect sensitive information
                in transit.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Zero Permanent Data Retention
              </h3>
              <p className="mt-3 text-gray-400">
                Temporary processing pipelines ensure no long-term storage of
                confidential operational data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Structured Audit Visibility
              </h3>
              <p className="mt-3 text-gray-400">
                Transparent activity tracking and validation reporting for
                controlled system transitions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Proven Impact
          </h2>

          <div className="mt-12 bg-[#0B1F3A] p-10 rounded-lg border border-white/10">
            <h3 className="text-xl font-semibold text-white">
              High-Volume Data Migration Validation
            </h3>

            <p className="mt-4 text-gray-400">
              Reduced reconciliation effort from multiple operational days to
              under 10 minutes by engineering a structured high-volume
              comparison engine capable of processing over one million records
              with precision validation reporting.
            </p>

            <div className="mt-6 text-sm text-gray-500">
              Technologies: Python, Data Processing Engine, Structured Reporting
              Interface
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Engagement Model
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white">
                1. Consultation & System Assessment
              </h3>
              <p className="mt-4 text-gray-400">
                Structured discussion to understand operational complexity, data
                volume, and architectural constraints.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                2. Architecture & Implementation
              </h3>
              <p className="mt-4 text-gray-400">
                Secure system design, controlled deployment, and engineered
                implementation aligned with long-term maintainability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                3. Validation & Delivery
              </h3>
              <p className="mt-4 text-gray-400">
                Structured reporting, validation checks, and documented delivery
                ensuring operational confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Modernizing Critical Systems?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Let’s discuss your migration, automation, or platform engineering
            initiative. Structured consultation. Clear execution.
          </p>

          <div className="mt-10">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md transition"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
