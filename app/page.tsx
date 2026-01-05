"use client";

import { useState } from "react";
import {
  Hero,
  Features,
  SignupModal,
  JoinSection,
  PageLayout
} from "../components";
import { Link } from "../components/ui";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <PageLayout>
      <Hero />

      <main>
        <Features />
        <JoinSection onOpenModal={() => setIsModalOpen(true)} />
        
        {/* Contributors CTA Section */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative px-8 py-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Meet the Minds Behind HexHub
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Discover the talented contributors who make our community thrive. 
                  From developers to designers, meet the people shaping the future of AI learning.
                </p>
                <Link
                  href="/contributors"
                  variant="button"
                  className="px-8 py-3 text-base transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Meet Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageLayout>
  );
}
