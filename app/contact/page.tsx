"use client";

import { useState } from "react";
import { PageLayout } from "../../components";
import { CONTACT } from "../../constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <div className="py-20 sm:py-24 relative">
        {/* Crystal Shard Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Large crystal shard - top left */}
          <div
            className="absolute top-20 left-10 w-80 h-80 opacity-[0.12] blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.5) 0%, rgba(56, 189, 248, 0.4) 50%, transparent 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "rotate(-15deg)",
            }}
          />
          {/* Medium crystal shard - right center */}
          <div
            className="absolute top-1/2 right-8 w-64 h-64 opacity-[0.1] blur-2xl -translate-y-1/2"
            style={{
              background:
                "linear-gradient(45deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              transform: "rotate(25deg)",
            }}
          />
          {/* Small crystal shard - bottom right */}
          <div
            className="absolute bottom-32 right-16 w-48 h-48 opacity-[0.08] blur-xl"
            style={{
              background:
                "linear-gradient(225deg, rgba(129, 140, 248, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 100%)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: "rotate(-45deg)",
            }}
          />
          {/* Gradient glows */}
          <div className="absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl opacity-50" />
          <div className="absolute -right-32 bottom-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 
              className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, rgb(125 211 252), rgb(129 140 248), rgb(196 181 253), rgb(192 132 252))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {CONTACT.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {CONTACT.description}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden">
              {/* Gradient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Crystal shard decoration */}
              <div
                className="absolute top-0 right-0 w-40 h-40 opacity-[0.05] blur-xl group-hover:opacity-[0.1] transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  transform: "rotate(45deg)",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      {CONTACT.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all border border-white/5 hover:border-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      {CONTACT.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all border border-white/5 hover:border-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      {CONTACT.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all border border-white/5 hover:border-white/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      {CONTACT.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-slate-700 transition-all resize-none border border-white/5 hover:border-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transform"
                  >
                    {status === "sending" ? CONTACT.form.sending : CONTACT.form.submit}
                  </button>

                  {status === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <p className="text-green-400 text-sm text-center">
                        {CONTACT.form.success}
                      </p>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm text-center">
                        {CONTACT.form.error}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden">
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Crystal decoration */}
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 opacity-[0.05] blur-lg group-hover:opacity-[0.1] transition-opacity"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(129, 140, 248, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 100%)",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    transform: "rotate(-25deg)",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full" />
                    Get in touch
                  </h2>
                  <div className="space-y-4">
                    <div className="group/item">
                      <h3 className="text-sm font-semibold text-slate-400 mb-2">Email</h3>
                      <a
                        href={`mailto:${CONTACT.info.email}`}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group-hover/item:translate-x-1 transform duration-200"
                      >
                        {CONTACT.info.email}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                    <div className="group/item">
                      <h3 className="text-sm font-semibold text-slate-400 mb-2">GitHub</h3>
                      <a
                        href={CONTACT.info.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group-hover/item:translate-x-1 transform duration-200"
                      >
                        {CONTACT.info.github}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                    <div className="group/item">
                      <h3 className="text-sm font-semibold text-slate-400 mb-2">LinkedIn</h3>
                      <a
                        href={CONTACT.info.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group-hover/item:translate-x-1 transform duration-200"
                      >
                        {CONTACT.info.linkedin}
                        <span className="opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden">
                {/* Animated glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                {/* Crystal shard */}
                <div
                  className="absolute top-4 right-4 w-24 h-24 opacity-[0.08] blur-lg group-hover:opacity-[0.15] transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    transform: "rotate(30deg)",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">Join our community</h3>
                  <p className="text-slate-300 mb-6">
                    Connect with fellow students, share your projects, and grow together in the world of AI and ML.
                  </p>
                  <a
                    href="/contributors"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transform"
                  >
                    Meet the Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

