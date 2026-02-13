import Head from "next/head";
import { CALENDLY_URL } from "@/lib/config";

export default function Security() {
  return (
    <>
      <Head>
        <title>Security | TrustLayer Technologies</title>
        <meta
          name="description"
          content="TrustLayer Technologies applies security-first engineering principles, encrypted data handling, and structured validation controls for enterprise system engagements."
        />
      </Head>

      {/* Header */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Security & Governance
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-4xl">
            Security-First Engineering for Critical Systems
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            TrustLayer Technologies operates with structured engineering
            discipline, applying secure processing methodologies and controlled
            data handling practices aligned with enterprise-grade system
            expectations.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Security Philosophy */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Engineering Philosophy
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            Security is not layered as an afterthought. System architecture,
            data validation pipelines, and deployment environments are designed
            with structured controls to minimize exposure and maintain
            operational integrity.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Data Handling */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Data Handling Principles
          </h2>

          <ul className="mt-8 space-y-5 text-gray-400 max-w-3xl">
            <li>
              • Encrypted transmission channels for all system interactions
            </li>
            <li>• Temporary processing pipelines with no permanent storage</li>
            <li>• Controlled access mechanisms and role-based restrictions</li>
            <li>
              • Structured logging for validation and operational transparency
            </li>
            <li>• Secure deletion of transient data post-processing</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Infrastructure Controls */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Infrastructure & Deployment Controls
          </h2>

          <ul className="mt-8 space-y-5 text-gray-400 max-w-3xl">
            <li>• Isolated cloud infrastructure environments</li>
            <li>• Secure containerized deployments (Docker)</li>
            <li>• Reverse proxy configuration & SSL enforcement</li>
            <li>• Controlled database access policies</li>
            <li>• Structured environment configuration management</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Engagement Governance */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Engagement Governance
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            TrustLayer engagements operate under structured consultation,
            controlled scope definitions, and optional Non-Disclosure Agreements
            (NDA) upon request prior to project initiation.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* CTA */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Handling Sensitive Operational Data?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Schedule a structured discussion to evaluate secure processing,
            validation controls, and infrastructure alignment for your
            initiative.
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
