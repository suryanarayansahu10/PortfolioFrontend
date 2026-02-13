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

    const response = await fetch(FORMSPREE_ENDPOINT!, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
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
        <title>Contact | TrustLayer Technologies</title>
        <meta
          name="description"
          content="Contact TrustLayer Technologies for Enterprise-grade internal platforms, automation systems, and scalable MERN stack applications."
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
              Engage With TrustLayer
            </h1>
            <p className="mt-6 text-gray-400 text-lg">
              Whether you are planning a system migration, automation
              initiative, or platform modernization effort, we welcome
              structured discussions aligned with long-term engineering
              objectives.
            </p>
          </div>

          {/* Consultation CTA */}
          <div className="mt-12 bg-[#132B4F] p-8 rounded-lg border border-white/10">
            <h2 className="text-xl font-semibold text-white">
              Schedule a Structured Consultation
            </h2>
            <p className="mt-4 text-gray-400">
              Book a 30-minute strategic discussion to evaluate system
              complexity, operational risks, and potential automation pathways.
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

          {/* Divider */}
          <div className="border-t border-white/10 mt-20"></div>

          {/* Inquiry Form */}
          <div className="mt-20 max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">
              Project Inquiry
            </h2>
            <p className="mt-4 text-gray-400">
              For detailed engagement discussions, provide a brief overview of
              your initiative.
            </p>

            {/* <form
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="mt-10 space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New TrustLayer Inquiry"
              />
              <input type="hidden" name="_next" value="/thank-you" />
              <div>
                <label className="block text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full bg-[#132B4F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
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
                  className="mt-2 w-full bg-[#132B4F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400">
                  Organization
                </label>
                <input
                  type="text"
                  name="company"
                  className="mt-2 w-full bg-[#132B4F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400">
                  Project Overview
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-[#132B4F] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
              >
                Submit Inquiry
              </button>
            </form> */}
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <input
                type="hidden"
                name="_subject"
                value="New TrustLayer Inquiry"
              />

              <div>
                <label className="block text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white"
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
                  className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400">
                  Project Overview
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-[#1A355F] border border-white/10 rounded-md px-4 py-3 text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md transition"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
