"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { SignupModal } from "./components/SignupModal";
import { Link } from "./components/ui";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="relative bg-slate-900 text-slate-100 antialiased overflow-hidden">
      {/* Base gradient background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, rgb(15 23 42), rgb(4 5 10), rgb(0 0 0))",
        }}
      />
      {/* Smooth decorative gradients */}
      <div
        className="absolute -left-32 -top-24 h-[520px] w-[520px] -z-10 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 100%)",
          transform: "rotate(45deg)",
        }}
      />
      <div
        className="absolute -right-32 -bottom-24 h-[420px] w-[420px] -z-10 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(244, 63, 94, 0.3) 0%, rgba(244, 63, 94, 0.1) 50%, transparent 100%)",
          transform: "rotate(12deg)",
        }}
      />
      {/* Overlay gradient for depth */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 50%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Global crystal shard effects - scattered throughout */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Large shard - middle right */}
        <div
          className="absolute top-1/3 right-16 w-72 h-72 opacity-[0.04] blur-3xl -translate-y-1/3"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(56, 189, 248, 0.2) 50%, transparent 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "translateY(-33%) rotate(20deg)",
          }}
        />

        {/* Medium shard - bottom left */}
        <div
          className="absolute bottom-32 left-20 w-64 h-64 opacity-[0.05] blur-2xl"
          style={{
            background:
              "linear-gradient(225deg, rgba(192, 132, 252, 0.3) 0%, rgba(244, 63, 94, 0.2) 50%, transparent 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transform: "rotate(-30deg)",
          }}
        />

        {/* Small shard - top center */}
        <div
          className="absolute top-40 left-1/2 w-48 h-48 opacity-[0.04] blur-xl -translate-x-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(129, 140, 248, 0.25) 0%, rgba(196, 181, 253, 0.15) 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "translateX(-50%) rotate(45deg)",
          }}
        />
      </div>

      <Navbar />
      <div className="pt-16">
        <Hero />

        <main>
          <Features />
          <section
            id="join"
            className="pt-20 sm:pt-24 pb-12 scroll-mt-20 relative"
            aria-labelledby="join-heading"
          >
            {/* Crystal shard effects for Join section */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
              {/* Large shard - top left */}
              <div
                className="absolute top-16 left-8 w-60 h-60 opacity-[0.07] blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  transform: "rotate(-20deg)",
                }}
              />

              {/* Medium shard - bottom right */}
              <div
                className="absolute bottom-16 right-12 w-52 h-52 opacity-[0.06] blur-xl"
                style={{
                  background:
                    "linear-gradient(225deg, rgba(192, 132, 252, 0.35) 0%, rgba(244, 63, 94, 0.25) 50%, transparent 100%)",
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  transform: "rotate(40deg)",
                }}
              />

              {/* Small shard - center right */}
              <div
                className="absolute top-1/2 right-1/4 w-40 h-40 opacity-[0.05] blur-lg -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(129, 140, 248, 0.3) 0%, rgba(196, 181, 253, 0.2) 50%, transparent 100%)",
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  transform: "translateY(-50%) rotate(-15deg)",
                }}
              />

              {/* Hexagonal fragment - bottom center */}
              <div
                className="absolute bottom-24 left-1/2 w-48 h-48 opacity-[0.05] blur-xl -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(56, 189, 248, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%)",
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  transform: "translateX(-50%) rotate(30deg)",
                }}
              />

              {/* Reflective streaks */}
              <div
                className="absolute top-1/4 left-1/3 w-px h-32 opacity-[0.03] blur-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(196, 181, 253, 0.4), transparent)",
                  transform: "rotate(-45deg)",
                }}
              />
              <div
                className="absolute bottom-1/3 right-1/3 w-px h-24 opacity-[0.03] blur-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, rgba(125, 211, 252, 0.35), transparent)",
                  transform: "rotate(30deg)",
                }}
              />
            </div>

            <div className="mx-auto max-w-6xl px-6">
              <div className="text-center mb-12">
                <h2
                  id="join-heading"
                  className="text-3xl sm:text-4xl font-bold text-white"
                >
                  Join HexHub
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                  Ready to master AI? Join our community of students and start
                  your journey with hands-on data science, ML engineering, and
                  AI projects.
                </p>
              </div>

              {/* CTA Section */}
              <div className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-md shadow-2xl shadow-indigo-900/20">
                {/* Soft organic glows */}
                <div className="pointer-events-none absolute -left-12 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-500/20 via-sky-400/15 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-gradient-to-br from-rose-500/15 via-purple-500/15 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />

                <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                  <div className="text-center lg:text-left space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                      Start Your Journey Today
                    </h3>
                    <p className="text-slate-300">
                      Join hundreds of students building AI solutions and
                      deploying ML models in a supportive community.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <Link
                        href="#"
                        variant="button"
                        onClick={() => setIsModalOpen(true)}
                        className="  px-8 py-3 text-base whitespace-nowrap transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 focus:scale-105 focus:shadow-lg focus:shadow-indigo-500/25 active:scale-95"
                        style={{
                          background:
                            "linear-gradient(to right, rgb(244, 63, 94), rgb(79 70 229))",
                        }}
                      >
                        Join Now - It&apos;s Free
                      </Link>
                      <Link
                        href="#"
                        className="text-base font-semibold text-slate-200 hover:text-white transition-all duration-300 ease-in-out flex items-center whitespace-nowrap hover:translate-x-1 focus:translate-x-1"
                      >
                        Learn More{" "}
                        <span aria-hidden="true" className="ml-1">
                          →
                        </span>
                      </Link>
                    </div>
                    <p className="text-xs text-slate-500">
                      No credit card required • Free forever • Join 100+ AI
                      students
                    </p>
                  </div>

                  <div className="relative flex flex-col gap-4 rounded-2xl bg-slate-800/40 p-5 ring-1 ring-white/5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Pick a track</p>
                        <p className="text-sm font-semibold text-white">
                          Data Science · ML Engineering · AI Applications
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-8 w-8 rounded-lg bg-sky-500/20 text-sky-200 flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">
                          Collaborate on projects
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Team up on ML models, data analysis, and AI apps
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-8 w-8 rounded-lg bg-purple-500/20 text-purple-200 flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">
                          Learn from experts
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Weekly sessions, model reviews, and AI insights
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
