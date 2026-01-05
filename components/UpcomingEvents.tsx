"use client";

import { useState, useEffect } from 'react';
import { UPCOMING_EVENTS } from '../constants';

const getDaysUntil = (date: string): number => {
  const today = new Date();
  const eventDate = new Date(date);
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const formatTime = (time: string): string => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

export function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const events = UPCOMING_EVENTS.events;
  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];
  const daysUntil = getDaysUntil(currentEvent.date);
  const isUpcoming = daysUntil >= 0;
  const isSoon = isUpcoming && daysUntil <= 7;

  useEffect(() => {
    if (isHovered || events.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, events.length]);

  return (
    <div className="fixed top-[73px] left-0 right-0 z-40 border-b border-white/5 bg-slate-900/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="relative py-1.5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a
            href={`/blog?event=${currentEvent.id}`}
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="flex-shrink-0 w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wide">
              {UPCOMING_EVENTS.title}
            </span>

            <span className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors truncate">
              {currentEvent.title}
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              {formatDate(currentEvent.date)}
            </span>

            <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-slate-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatTime(currentEvent.time)}
            </span>

            {isUpcoming && (
              <span className="ml-auto px-1.5 py-0.5 text-[10px] bg-indigo-500/20 text-indigo-300 rounded font-medium">
                {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil}d`}
              </span>
            )}

            {isSoon && (
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
            )}

            <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {events.length > 1 && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentIndex(index);
                  }}
                  className={`h-1 rounded-full transition-all ${
                    index === currentIndex ? 'w-4 bg-indigo-500' : 'w-1 bg-slate-600'
                  }`}
                  aria-label={`Event ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

