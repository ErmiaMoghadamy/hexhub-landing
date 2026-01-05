import { Link } from "./ui";
import { BRAND } from "../constants";
import { HexagonalGearIcon } from "./icons";

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Crystal shard effects - subtle background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Large crystal shard - top right */}
        <div
          className="absolute top-20 right-10 w-64 h-64 opacity-[0.08] blur-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(15deg)",
          }}
        />

        {/* Medium crystal shard - left center */}
        <div
          className="absolute top-1/2 left-8 w-48 h-48 opacity-[0.06] blur-xl -translate-y-1/2"
          style={{
            background:
              "linear-gradient(45deg, rgba(129, 140, 248, 0.3) 0%, rgba(196, 181, 253, 0.2) 50%, transparent 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transform: "rotate(-25deg)",
          }}
        />

        {/* Small crystal shard - bottom left */}
        <div
          className="absolute bottom-32 left-16 w-32 h-32 opacity-[0.05] blur-lg"
          style={{
            background:
              "linear-gradient(225deg, rgba(192, 132, 252, 0.3) 0%, rgba(244, 63, 94, 0.2) 50%, transparent 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Hexagonal crystal fragment - top left */}
        <div
          className="absolute top-40 left-20 w-40 h-40 opacity-[0.07] blur-xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.15) 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(-10deg)",
          }}
        />

        {/* Reflective light streaks */}
        <div
          className="absolute top-1/3 right-1/4 w-px h-32 opacity-[0.04] blur-sm"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(125, 211, 252, 0.5), transparent)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-px h-24 opacity-[0.03] blur-sm"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(196, 181, 253, 0.4), transparent)",
            transform: "rotate(-30deg)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              {/* Hexagonal Gear Icon */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <HexagonalGearIcon className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 text-indigo-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-sky-500/20 blur-xl"></div>
                  </div>
                </div>
              </div>

              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(125 211 252), rgb(129 140 248), rgb(196 181 253), rgb(192 132 252))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {BRAND.name}
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-8 text-slate-200 font-medium">
                A community of students mastering Data Science, Machine
                Learning, and AI Engineering
              </p>

              <p className="mt-4 text-base sm:text-lg leading-7 text-slate-400">
                We bridge the gap between academic theory and real-world AI
                applications. Join us to build cutting-edge ML models,
                collaborate on data-driven projects, and grow alongside a
                community of passionate AI enthusiasts.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-center gap-4">
                <Link
                  href="#join"
                  variant="button"
                  className="px-8 py-3 text-base whitespace-nowrap cursor-pointer"
                >
                  Join Our Community
                </Link>
                <Link
                  href="#about"
                  className="text-base font-semibold leading-6 flex items-center whitespace-nowrap"
                >
                  Discover More{" "}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* Right side - Stats & Visual */}
            <div className="flex flex-col gap-8">
              {/* Key highlights */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-4 sm:p-5 rounded-xl bg-slate-800/50 ring-1 ring-white/5">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400">
                    50+
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-slate-400">
                    Active Learners
                  </div>
                </div>
                <div className="text-center p-4 sm:p-5 rounded-xl bg-slate-800/50 ring-1 ring-white/5">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-400">
                    10+
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-slate-400">
                    Projects
                  </div>
                </div>
                <div className="text-center p-4 sm:p-5 rounded-xl bg-slate-800/50 ring-1 ring-white/5">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400">
                    24/7
                  </div>
                  <div className="mt-2 text-xs sm:text-sm text-slate-400">
                    Learning
                  </div>
                </div>
              </div>

              {/* Visual element */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-purple-500/10 ring-1 ring-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HexagonalGearIcon className="h-32 w-32 sm:h-40 sm:w-40 text-indigo-400/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - natural transition */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.2) 40%, rgba(15, 23, 42, 0.6) 70%, rgb(15, 23, 42) 100%)",
        }}
      />

      {/* Decorative gradient element - contained within hero */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden"
        aria-hidden="true"
        style={{
          height: "60%",
        }}
      >
        <div
          className="absolute left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-15 blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgb(67 56 202) 0%, rgb(192 38 211) 50%, rgb(56 189 248) 100%)",
            clipPath:
              "polygon(74% 44%, 100% 78%, 89% 100%, 26% 100%, 0 62%, 24% 29%)",
            bottom: "-10%",
          }}
        />
      </div>
    </header>
  );
}
