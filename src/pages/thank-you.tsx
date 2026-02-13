export default function ThankYou() {
  return (
    <section className="bg-[#142C52] text-gray-200 h-80 flex-wrap flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold text-white">Thank You</h1>

        <p className="mt-6 text-gray-300">
          Your inquiry has been received. We will review your submission and
          respond within 1–2 business days.
        </p>

        <div className="mt-10">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </section>
  );
}
