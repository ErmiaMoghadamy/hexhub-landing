"use client";

import { PageLayout } from "../../components";
import { ABOUT } from "../../constants";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-20 sm:py-24 relative">
        {/* Crystal Shard Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Large crystal shard - top right */}
          <div
            className="absolute top-20 right-10 w-96 h-96 opacity-[0.12] blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.5) 0%, rgba(56, 189, 248, 0.4) 50%, transparent 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "rotate(15deg)",
            }}
          />
          {/* Medium crystal shard - left center */}
          <div
            className="absolute top-1/2 left-8 w-64 h-64 opacity-[0.1] blur-2xl -translate-y-1/2"
            style={{
              background:
                "linear-gradient(45deg, rgba(129, 140, 248, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 100%)",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              transform: "rotate(-25deg)",
            }}
          />
          {/* Small crystal shard - bottom left */}
          <div
            className="absolute bottom-32 left-16 w-48 h-48 opacity-[0.08] blur-xl"
            style={{
              background:
                "linear-gradient(225deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: "rotate(45deg)",
            }}
          />
          {/* Gradient glows */}
          <div className="absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl opacity-60" />
          <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-3xl opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Community Section */}
          <section className="mb-20 relative">
            <div className="text-center mb-12">
              <h1 
                className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(125 211 252), rgb(129 140 248), rgb(196 181 253))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {ABOUT.community.title}
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {ABOUT.community.description}
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden">
                {/* Gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Crystal shard overlay */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] blur-xl group-hover:opacity-[0.1] transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    transform: "rotate(45deg)",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {ABOUT.community.mission}
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {ABOUT.community.missionText}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {ABOUT.community.values.map((value, index) => {
                const gradients = [
                  "from-indigo-500/20 to-indigo-600/20",
                  "from-sky-500/20 to-sky-600/20",
                  "from-purple-500/20 to-purple-600/20",
                  "from-rose-500/20 to-rose-600/20",
                ];
                return (
                  <div
                    key={index}
                    className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden hover:scale-105 transform duration-300"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="mb-4">
                        <div
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center text-2xl"
                        >
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                        {value.title}
                      </h3>
                      <p className="text-slate-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Founder Section */}
          <section className="border-t border-white/5 pt-20 relative">
            {/* Additional crystal shards for founder section */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
              <div
                className="absolute top-0 right-1/4 w-48 h-48 opacity-[0.08] blur-xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                  transform: "rotate(-30deg)",
                }}
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                {/* Founder Image */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <img
                      src="https://media.licdn.com/dms/image/profile-photo/profile-photo/your-profile-photo-url"
                      alt={ABOUT.founder.name}
                      className="w-32 h-32 rounded-full object-cover ring-4 ring-indigo-500/30 shadow-xl"
                      onError={(e) => {
                        // Fallback to a placeholder if LinkedIn image fails
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face";
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" />
                  </div>
                </div>
                <h2 
                  className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, rgb(129 140 248), rgb(196 181 253), rgb(192 132 252))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {ABOUT.founder.name}
                </h2>
                <p className="text-xl text-indigo-400 font-semibold mb-4">
                  {ABOUT.founder.role}
                </p>
                <a
                  href="https://www.linkedin.com/in/ermia-moghadamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn Profile
                </a>
              </div>

              <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 lg:p-12 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Crystal shard decorations */}
                <div
                  className="absolute top-4 right-4 w-24 h-24 opacity-[0.06] blur-lg group-hover:opacity-[0.12] transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    transform: "rotate(25deg)",
                  }}
                />
                <div className="relative z-10">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                      {ABOUT.founder.bio}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {ABOUT.founder.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3 group/item">
                            <span className="text-indigo-400 mt-1 group-hover/item:scale-125 transition-transform">✓</span>
                            <span className="text-slate-300 group-hover/item:text-white transition-colors">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-white/5 pt-8 relative">
                      {/* Glow line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full" />
                        Vision
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed italic relative pl-4 border-l-2 border-indigo-500/30">
                        "{ABOUT.founder.vision}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

