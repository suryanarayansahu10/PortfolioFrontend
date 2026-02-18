import Head from "next/head";
import { CALENDLY_URL } from "@/lib/config";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | NexChunk</title>
        <meta
          name="description"
          content="Enterprise-grade data reconciliation, internal automation systems, and scalable web application engineering."
        />
      </Head>

      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Page Header */}
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Engineering Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-4xl">
            Structured Engineering Solutions for Critical Business Systems
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            NexChunk delivers enterprise-grade internal platforms, automation
            systems, and scalable application architectures designed for
            organizations modernizing legacy operations and high-volume
            workflows.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Service 1 */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Data Reconciliation & Migration Validation
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            Engineered validation systems for high-volume data comparison,
            structured difference reporting, and controlled system transition
            initiatives.
          </p>

          <ul className="mt-8 space-y-4 text-gray-400 max-w-3xl">
            <li>• Million-record comparison engines</li>
            <li>• Structured difference classification & reporting</li>
            <li>• Temporary secure data processing pipelines</li>
            <li>• Migration validation & legacy system verification</li>
            <li>• Operational reconciliation tooling</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Service 2 */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Internal Automation Systems
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            Custom automation solutions engineered to eliminate manual
            operational bottlenecks and reduce long-term risk exposure.
          </p>

          <ul className="mt-8 space-y-4 text-gray-400 max-w-3xl">
            <li>• Python-based executable automation tools (.exe / .pyc)</li>
            <li>• Workflow automation platforms</li>
            <li>• Data validation & reporting systems</li>
            <li>• Regression & operational validation frameworks</li>
            <li>• Custom internal dashboards</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Service 3 */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Scalable Web Applications
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            Backend-driven, secure web applications designed for scale,
            maintainability, and long-term architectural clarity.
          </p>

          <ul className="mt-8 space-y-4 text-gray-400 max-w-3xl">
            <li>• Admin panels & operational dashboards</li>
            <li>• Real-time systems (WebSocket integration)</li>
            <li>• API-driven architectures</li>
            <li>• Secure authentication & role-based access</li>
            <li>• AWS/GCP deployment & infrastructure setup</li>
          </ul>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Technical Stack */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Technology Stack
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl">
            We leverage modern, production-grade technologies aligned with
            long-term system stability and scalability.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold">Frontend</h3>
              <p className="mt-3">React, Next.js, Tailwind CSS</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Backend</h3>
              <p className="mt-3">Node.js, Express, FastAPI, Python</p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Infrastructure</h3>
              <p className="mt-3">AWS EC2, Docker, Nginx, MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* CTA */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Evaluating a System Modernization Initiative?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Schedule a structured consultation to assess operational complexity,
            automation feasibility, and architectural direction.
          </p>

          <div className="mt-5">
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
