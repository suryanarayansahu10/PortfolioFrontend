export default function TermsConditions() {
  return (
    <main className="bg-[#0E2240] text-gray-300 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold text-white">
          Terms & Conditions
        </h1>

        <p>Effective Date: {new Date().getFullYear()}</p>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website or engaging NexChunk for services, you
            agree to be bound by these Terms & Conditions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">2. Services</h2>
          <p>
            NexChunk provides software engineering, automation, internal systems
            development, and consulting services. Scope of work is defined in
            individual agreements or statements of work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            3. Intellectual Property
          </h2>
          <p>
            Unless otherwise agreed in writing, intellectual property rights in
            deliverables are governed by signed service agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">4. Confidentiality</h2>
          <p>
            NexChunk respects client confidentiality. Specific confidentiality
            obligations are governed by separate Non-Disclosure Agreements where
            applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            5. Limitation of Liability
          </h2>
          <p>
            NexChunk shall not be liable for indirect, incidental, or
            consequential damages arising from use of the website or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">6. Governing Law</h2>
          <p>
            These Terms shall be governed by applicable laws of India, unless
            otherwise agreed in writing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            7. Contact Information
          </h2>
          <p className="text-white">contact@nexchunk.com</p>
        </section>

        <p className="text-sm text-gray-500">
          NexChunk reserves the right to update these terms at any time.
        </p>
      </div>
    </main>
  );
}
