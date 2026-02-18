import Head from "next/head";
import { CALENDLY_URL, FORMSPREE_ENDPOINT } from "@/lib/config";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Contact | NexChunk</title>
        <meta
          name="description"
          content="Contact NexChunk for Enterprise-grade internal platforms, automation systems, and scalable MERN stack applications."
        />
      </Head>

      <section className="bg-[#0E2240] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-400">
              Consultation
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-white tracking-tight">
              Engage With NexChunk
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
              Whether you are planning a system migration, automation
              initiative, or platform modernization effort, we welcome
              structured discussions aligned with long-term engineering
              objectives.
            </p>
          </div>

          {/* Consultation CTA */}

          {/* Divider */}
          <div className="border-t border-white/10 mt-10"></div>

          {/* Split Contact Section */}
          <div className="mt-10 grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side Content */}
            <div className="flex flex-col">
              <div className="bg-[#132B4F] p-8 rounded-lg border border-white/10">
                <h2 className="text-xl font-semibold text-white">
                  Schedule a Structured Consultation
                </h2>
                <p className="mt-4 text-gray-400">
                  Book a 30-minute strategic discussion to evaluate system
                  complexity, operational risks, and potential automation
                  pathways.
                </p>

                <div className="mt-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-white">
                  Project Inquiry
                </h2>
                <p className="mt-6 text-gray-400 leading-relaxed">
                  For structured engagement discussions, provide a brief
                  overview of your initiative. We typically respond within 24
                  business hours.
                </p>

                <div className="mt-10 space-y-6 text-gray-400">
                  <div>
                    <p className="text-white font-medium">What We Engage In</p>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li>• Data validation & migration assurance</li>
                      <li>• Internal automation systems</li>
                      <li>• Admin dashboards & workflow platforms</li>
                      <li>• Scalable MERN stack applications</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-white font-medium">Engagement Model</p>
                    <p className="mt-2 text-sm">
                      Fixed-scope delivery or milestone-based consulting aligned
                      with enterprise engineering standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="bg-[#132B4F] p-8 rounded-lg border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="hidden"
                  name="_subject"
                  value="New NexChunk Inquiry"
                />

                <div>
                  <label className="block text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 / +1 / +44"
                    className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400">
                    Project Overview
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                {/* Button aligned right */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 cursor-pointer hover:bg-blue-500 text-white px-8 py-3 rounded-md transition disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
