import React from 'react';
import { CONTRIBUTORS } from '../constants';

interface Contributor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
}

const contributors: Contributor[] = [
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "Passionate about AI and machine learning. Leads the development of HexHub's core features.",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alicejohnson"
  },
  {
    name: "Bob Smith",
    role: "ML Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Specializes in deep learning and computer vision. Contributes to ML model implementations.",
    github: "https://github.com/bobsmith",
    linkedin: "https://linkedin.com/in/bobsmith"
  },
  {
    name: "Carol Davis",
    role: "Data Scientist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Expert in data analysis and visualization. Helps students understand complex datasets.",
    github: "https://github.com/caroldavis",
    linkedin: "https://linkedin.com/in/caroldavis"
  },
  {
    name: "David Wilson",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Creates intuitive and beautiful interfaces. Ensures HexHub is accessible to all users.",
    github: "https://github.com/davidwilson",
    linkedin: "https://linkedin.com/in/davidwilson"
  },
  {
    name: "Eva Martinez",
    role: "Community Manager",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    bio: "Builds and nurtures our learning community. Organizes events and mentorship programs.",
    github: "https://github.com/evamartinez",
    linkedin: "https://linkedin.com/in/evamartinez"
  },
  {
    name: "Frank Thompson",
    role: "DevOps Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    bio: "Ensures our infrastructure is reliable and scalable. Automates deployment processes.",
    github: "https://github.com/frankthompson",
    linkedin: "https://linkedin.com/in/frankthompson"
  }
];

const ContributorCard: React.FC<{ contributor: Contributor }> = ({ contributor }) => {
  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group overflow-hidden hover:scale-105 transform">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Crystal shard decoration */}
      <div
        className="absolute top-0 right-0 w-32 h-32 opacity-[0.05] blur-lg group-hover:opacity-[0.12] transition-opacity"
        style={{
          background:
            "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          transform: "rotate(45deg)",
        }}
      />
      <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        <div className="relative">
          <img
            src={contributor.avatar}
            alt={contributor.name}
            className="w-24 h-24 rounded-full object-cover ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all"
          />
          {/* Glow effect on avatar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
            {contributor.name}
          </h3>
          <p className="text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors">{contributor.role}</p>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">{contributor.bio}</p>
        <div className="flex space-x-4">
          {contributor.github && (
            <a
              href={contributor.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-200 hover:scale-125 transform"
              aria-label={`${contributor.name}'s GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
          {contributor.linkedin && (
            <a
              href={contributor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-all duration-200 hover:scale-125 transform"
              aria-label={`${contributor.name}'s LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Contributors: React.FC = () => {
  return (
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
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl opacity-50" />
        <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, rgb(125 211 252), rgb(129 140 248), rgb(196 181 253), rgb(192 132 252))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {CONTRIBUTORS.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {CONTRIBUTORS.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contributors.map((contributor, index) => (
            <ContributorCard key={index} contributor={contributor} />
          ))}
        </div>

        <div className="text-center mt-16 relative">
          <div className="relative inline-block">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50" />
            <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/5">
              <p className="text-slate-300 mb-6 text-lg">
                {CONTRIBUTORS.cta}
              </p>
              <a
                href={CONTRIBUTORS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transform"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {CONTRIBUTORS.ctaButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};