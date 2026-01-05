import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <>
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
    </>
  );
};