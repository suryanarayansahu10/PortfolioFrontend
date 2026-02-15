export default function PrivacyPolicy() {
  return (
    <main className="bg-[#0E2240] text-gray-300 min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>

        <p>Effective Date: {new Date().getFullYear()}</p>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">1. Introduction</h2>
          <p>
            NexChunk (“we”, “our”, or “us”) respects your privacy and is
            committed to protecting any information you provide while using our
            website and services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            2. Information We Collect
          </h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and contact information submitted via forms</li>
            <li>Email address and business details</li>
            <li>Technical information such as browser type and IP address</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            3. How We Use Information
          </h2>
          <p>Information collected is used solely for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to inquiries</li>
            <li>Providing consulting and engineering services</li>
            <li>Improving website performance and user experience</li>
          </ul>
          <p>We do not sell, rent, or trade personal data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational safeguards to
            protect data from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">
            5. Third-Party Services
          </h2>
          <p>
            Our website may use third-party services such as hosting providers
            and email form processors. These providers process data solely for
            operational purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">6. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for
            business or legal purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">7. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            data by contacting us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl text-white font-medium">8. Contact</h2>
          <p>For any privacy-related inquiries, please contact:</p>
          <p className="text-white">contact@nexchunk.com</p>
        </section>

        <p className="text-sm text-gray-500">
          This Privacy Policy may be updated periodically.
        </p>
      </div>
    </main>
  );
}
