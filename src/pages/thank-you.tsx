import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Inquiry Received | NexChunk</title>
        <meta
          name="description"
          content="Your inquiry has been successfully received by NexChunk. Our team will respond shortly."
        />
      </Head>

      <section className="py-10 bg-linear-to-br from-[#0E2240] via-[#142C52] to-[#1E3A8A] text-gray-200 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full p-10 text-center shadow-2xl">
          {/* Confirmation Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
            <span className="text-green-400 text-3xl">✓</span>
          </div>

          <h1 className="text-4xl font-semibold text-white tracking-tight">
            Inquiry Successfully Submitted
          </h1>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Thank you for reaching out to{" "}
            <span className="text-white font-medium">NexChunk</span>. Your
            message has been logged in our system and assigned for review.
          </p>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
            Our engineering team will evaluate your request and respond within
            <span className="text-white font-medium"> 24 business hours</span>.
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
            >
              Return to Homepage
            </Link>

            <Link
              href="/services"
              className="border border-white/20 hover:border-white text-gray-200 px-6 py-3 rounded-md transition"
            >
              Explore Services
            </Link>
          </div>

          {/* Footer Note */}
          <p className="mt-8 text-xs text-gray-400">
            If your matter is urgent, you may reply directly to the confirmation
            email.
          </p>
        </div>
      </section>
    </>
  );
}
