import { CALENDLY_URL } from "@/lib/config";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About | NexChunk</title>
        <meta
          name="description"
          content="NexChunk is an engineering-led consultancy focused on automation systems, reconciliation platforms, and scalable software architecture."
        />
      </Head>

      {/* Hero Split Layout */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-400">
              About NexChunk
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Built on Engineering Discipline.
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              NexChunk was founded to deliver structured, security-conscious,
              and automation-first engineering solutions for organizations
              transitioning away from legacy and manual systems.
            </p>
          </div>

          <div className="bg-[#132B4F] p-10 rounded-lg border border-white/10">
            <p className="text-gray-300 leading-relaxed">
              Critical systems require clarity. Automation requires discipline.
              Scalable platforms require architectural foresight.
            </p>
            <p className="mt-6 text-gray-400">
              NexChunk exists to engineer that clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Background - 2 Column Story */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Engineering Background
            </h2>

            <p className="mt-6 text-gray-400">
              The foundation of NexChunk is built on hands-on exposure to
              high-volume operational systems, financial validation workflows,
              and enterprise-grade automation engineering.
            </p>

            <p className="mt-6 text-gray-400">
              Experience spans data validation environments, structured
              reconciliation systems, internal automation tooling, and secure
              cloud deployment architectures.
            </p>
          </div>

          <div>
            <p className="text-gray-400 leading-relaxed">
              Beyond consulting, NexChunk integrates full-stack engineering
              capability across React, Node.js, Python, and cloud-native
              infrastructure — ensuring both architectural strategy and
              implementation discipline remain aligned.
            </p>

            <p className="mt-6 text-gray-400">
              The focus is not rapid expansion — but controlled, technically
              sound, and scalable system delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles - Card Grid */}
      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold text-white tracking-tight text-center">
            Core Engineering Principles
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <div className="bg-[#132B4F] p-8 rounded-lg border border-white/10">
              <h3 className="text-white font-semibold">Architecture First</h3>
              <p className="mt-4 text-gray-400">
                System design precedes implementation to ensure structural
                clarity and scalability.
              </p>
            </div>

            <div className="bg-[#132B4F] p-8 rounded-lg border border-white/10">
              <h3 className="text-white font-semibold">
                Automation Over Manual Dependency
              </h3>
              <p className="mt-4 text-gray-400">
                Reduce operational risk through engineered automation and
                validation frameworks.
              </p>
            </div>

            <div className="bg-[#132B4F] p-8 rounded-lg border border-white/10">
              <h3 className="text-white font-semibold">Security by Design</h3>
              <p className="mt-4 text-gray-400">
                Confidentiality, controlled access, and disciplined processing
                pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision - Large Statement */}
      <section className="bg-[#132B4F] text-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            A Focused Engineering Firm for Modern Infrastructure Challenges
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed">
            NexChunk is structured for disciplined growth, delivering
            high-reliability automation platforms, reconciliation systems, and
            secure internal software solutions for global clients.
          </p>

          <div className="mt-12">
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
