import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackgroundDecorations } from './BackgroundDecorations';
import { UpcomingEvents } from './UpcomingEvents';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative bg-slate-900 text-slate-100 antialiased overflow-hidden">
      <BackgroundDecorations />

      <Navbar />
      <UpcomingEvents />
      <div className="pt-24">
        {children}
      </div>

      <Footer />
    </div>
  );
};