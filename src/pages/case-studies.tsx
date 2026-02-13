import { CALENDLY_URL } from "@/lib/config";
import Head from "next/head";

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies | TrustLayer Technologies</title>
        <meta
          name="description"
          content="Delivered platforms including NGO systems, financial MLM applications, and real-time educational platforms built using scalable MERN architecture."
        />
      </Head>

      {/* Header */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Delivered Platforms
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight max-w-4xl">
            Full-Stack Platforms Engineered for Scale & Reliability
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl">
            Selected engagements demonstrating structured architecture, secure
            deployment, and scalable MERN-based platform engineering.
          </p>
        </div>
      </section>

      <div className="border-t border-white/10"></div>
      {/* Case Study 1 */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          {/* Left Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              High-Volume Data Migration Validation
            </h2>
            <p className="mt-4 text-gray-400">
              Industry: Financial Systems Environment
            </p>
          </div>

          {/* Problem / Solution / Impact */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold">Problem</h3>
              <p className="mt-3 text-gray-400">
                Manual reconciliation processes required multiple operational
                days to compare legacy and in-house system data sets exceeding
                one million records.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Solution</h3>
              <p className="mt-3 text-gray-400">
                Engineered a structured data comparison engine using optimized
                processing pipelines capable of automated difference
                classification and structured reporting.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Impact</h3>
              <p className="mt-3 text-gray-400">
                Reduced validation time from multiple operational days to under
                10 minutes while increasing reporting accuracy and audit
                clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Case Study 2 */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          {/* Left Summary */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Internal Automation Platform Development
            </h2>
            <p className="mt-4 text-gray-400">
              Industry: Operational Workflow Modernization
            </p>
          </div>

          {/* Problem / Solution / Impact */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold">Problem</h3>
              <p className="mt-3 text-gray-400">
                Manual validation workflows created operational bottlenecks and
                increased error exposure during system transitions.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Solution</h3>
              <p className="mt-3 text-gray-400">
                Designed and deployed a secure internal automation platform with
                structured processing logic, controlled user access, and report
                generation interfaces.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Impact</h3>
              <p className="mt-3 text-gray-400">
                Improved operational efficiency, reduced manual dependency, and
                provided structured audit visibility for migration cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Case Study */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              NGO Platform with Payment Integration
            </h2>
            <p className="mt-4 text-gray-400">
              Stack: React, Node.js, MongoDB, AWS Deployment
            </p>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold">Challenge</h3>
              <p className="mt-3 text-gray-400">
                Develop a secure, scalable donation-enabled platform for an NGO
                requiring payment gateway integration and structured backend
                management.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Engineering Approach</h3>
              <p className="mt-3 text-gray-400">
                Designed a MERN-based architecture with secure payment gateway
                integration, role-based admin access, and AWS deployment using
                containerized environments.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Outcome</h3>
              <p className="mt-3 text-gray-400">
                Delivered a production-ready platform enabling digital
                donations, structured campaign management, and scalable backend
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* MLM Case Study */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Financial MLM Platform
            </h2>
            <p className="mt-4 text-gray-400">
              Stack: React, Node.js (Microservices), MongoDB, AWS
            </p>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold">Challenge</h3>
              <p className="mt-3 text-gray-400">
                Build a scalable multi-level financial platform requiring
                structured hierarchy logic, transaction tracking, and backend
                performance reliability.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Engineering Approach</h3>
              <p className="mt-3 text-gray-400">
                Implemented a microservices-based architecture with structured
                commission logic, API-based processing, and secure
                role-controlled administrative dashboards.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Outcome</h3>
              <p className="mt-3 text-gray-400">
                Delivered a scalable system capable of managing hierarchical
                financial structures with performance stability and operational
                transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* Education Platform */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Educational Q&A Platform
            </h2>
            <p className="mt-4 text-gray-400">
              Stack: MERN + WebSocket Integration
            </p>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-white font-semibold">Challenge</h3>
              <p className="mt-3 text-gray-400">
                Develop a real-time interactive knowledge-sharing platform
                supporting dynamic content updates and scalable user
                interaction.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Engineering Approach</h3>
              <p className="mt-3 text-gray-400">
                Designed a MERN-based system with WebSocket-powered instant
                notifications, structured backend APIs, and secure deployment
                architecture.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold">Outcome</h3>
              <p className="mt-3 text-gray-400">
                Delivered a responsive and scalable learning platform capable of
                supporting real-time engagement workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10"></div>

      {/* CTA */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold text-white tracking-tight">
            Planning a Platform Initiative?
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Let’s evaluate your architectural requirements and define a
            structured engineering roadmap aligned with scalability and
            security.
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
