import { FEATURES, FEATURES_SECTION } from "../constants";

export function Features() {
  return (
    <section
      id="about"
      className="py-16 scroll-mt-20 relative"
      aria-labelledby="features-heading"
    >
      {/* Shading + crystal shard effects (scaled-down version of hero) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Soft vignette to add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/10 to-slate-900/60" />
        {/* Radial shades (smaller, more visible) */}
        <div className="absolute -left-10 top-6 h-56 w-56 bg-sky-400/12 blur-2xl" />
        <div className="absolute right-[-30px] bottom-[-20px] h-64 w-64 bg-purple-400/12 blur-2xl" />

        {/* Large shard - top right */}
        <div
          className="absolute top-8 right-14 w-48 h-48 opacity-[0.08] blur-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.25) 50%, transparent 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(25deg)",
          }}
        />

        {/* Medium shard - bottom left */}
        <div
          className="absolute bottom-16 left-10 w-40 h-40 opacity-[0.07] blur-lg"
          style={{
            background:
              "linear-gradient(45deg, rgba(192, 132, 252, 0.3) 0%, rgba(244, 63, 94, 0.2) 50%, transparent 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transform: "rotate(-35deg)",
          }}
        />

        {/* Small shard - center */}
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 opacity-[0.08] blur-md -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(129, 140, 248, 0.25) 0%, rgba(196, 181, 253, 0.15) 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "translate(-50%, -50%) rotate(60deg)",
          }}
        />

        {/* Tiny shards for texture */}
        <div
          className="absolute top-1/3 left-1/4 w-16 h-16 opacity-[0.1] blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(125, 211, 252, 0.35), transparent)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(-15deg)",
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 opacity-[0.08] blur-sm"
          style={{
            background:
              "linear-gradient(225deg, rgba(196, 181, 253, 0.35), transparent)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            transform: "rotate(25deg)",
          }}
        />

        {/* Reflective streak */}
        <div
          className="absolute top-1/3 right-1/4 w-px h-28 opacity-[0.03] blur-sm"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(125, 211, 252, 0.4), transparent)",
            transform: "rotate(60deg)",
          }}
        />

        {/* Additional crystal shards around the section */}
        {/* Top left corner shard */}
        <div
          className="absolute top-0 left-0 w-36 h-36 opacity-[0.09] blur-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(-15deg)",
          }}
        />

        {/* Top right corner shard */}
        <div
          className="absolute top-0 right-0 w-44 h-44 opacity-[0.08] blur-xl"
          style={{
            background:
              "linear-gradient(225deg, rgba(192, 132, 252, 0.35) 0%, rgba(244, 63, 94, 0.25) 50%, transparent 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transform: "rotate(20deg)",
          }}
        />

        {/* Bottom left corner shard */}
        <div
          className="absolute bottom-0 left-0 w-40 h-40 opacity-[0.07] blur-lg"
          style={{
            background:
              "linear-gradient(45deg, rgba(129, 140, 248, 0.3) 0%, rgba(196, 181, 253, 0.2) 50%, transparent 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(45deg)",
          }}
        />

        {/* Bottom right corner shard */}
        <div
          className="absolute bottom-0 right-0 w-38 h-38 opacity-[0.08] blur-lg"
          style={{
            background:
              "linear-gradient(315deg, rgba(56, 189, 248, 0.35) 0%, rgba(99, 102, 241, 0.25) 100%)",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            transform: "rotate(-30deg)",
          }}
        />

        {/* Left side center shard */}
        <div
          className="absolute top-1/2 left-4 w-32 h-32 opacity-[0.06] blur-md -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(125, 211, 252, 0.3) 0%, rgba(129, 140, 248, 0.2) 100%)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "translateY(-50%) rotate(-20deg)",
          }}
        />

        {/* Right side center shard */}
        <div
          className="absolute top-1/2 right-4 w-36 h-36 opacity-[0.07] blur-lg -translate-y-1/2"
          style={{
            background:
              "linear-gradient(270deg, rgba(196, 181, 253, 0.3) 0%, rgba(244, 63, 94, 0.2) 100%)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            transform: "translateY(-50%) rotate(25deg)",
          }}
        />

        {/* Additional small decorative shards */}
        <div
          className="absolute top-1/4 left-1/3 w-24 h-24 opacity-[0.06] blur-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(99, 102, 241, 0.3), transparent)",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(10deg)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-28 h-28 opacity-[0.07] blur-sm"
          style={{
            background:
              "linear-gradient(225deg, rgba(192, 132, 252, 0.3), transparent)",
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
            transform: "rotate(-15deg)",
          }}
        />

        {/* More reflective light streaks */}
        <div
          className="absolute top-1/4 left-1/2 w-px h-24 opacity-[0.04] blur-sm -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(196, 181, 253, 0.4), transparent)",
            transform: "translateX(-50%) rotate(45deg)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-px h-20 opacity-[0.03] blur-sm -translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(125, 211, 252, 0.35), transparent)",
            transform: "translateX(-50%) rotate(-30deg)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-semibold text-white"
          >
            {FEATURES_SECTION.title}
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            {FEATURES_SECTION.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="rounded-2xl bg-slate-800/50 p-6 ring-1 ring-white/6 transition-all hover:ring-white/10"
              >
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br ${feature.gradient}`}
                >
                  <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
