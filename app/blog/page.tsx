"use client";

import { useState } from "react";
import { PageLayout } from "../../components";
import { BLOG } from "../../constants";
import type { Post, NewsItem, Event } from "../../types";

// Mock data - in a real app, this would come from an API
const mockPosts: Post[] = [
  {
    id: "1",
    title: "Building Your First Neural Network",
    author: "Alice Johnson",
    date: "2024-01-15",
    excerpt: "Learn how to build and train your first neural network from scratch using Python and TensorFlow.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Data Visualization Best Practices",
    author: "Bob Smith",
    date: "2024-01-10",
    excerpt: "Discover the art of creating compelling data visualizations that tell a story.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Deploying ML Models to Production",
    author: "Carol Davis",
    date: "2024-01-05",
    excerpt: "A comprehensive guide to deploying machine learning models in production environments.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
];

const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "HexHub Reaches 50+ Active Members",
    date: "2024-01-20",
    excerpt: "Our community continues to grow with passionate learners joining every week.",
    source: "HexHub Blog",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "New AI Workshop Series Announced",
    date: "2024-01-18",
    excerpt: "Join us for an exciting new workshop series covering advanced AI topics.",
    source: "Community Updates",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Partnership with Tech Industry Leaders",
    date: "2024-01-12",
    excerpt: "We're excited to announce new partnerships that will bring more opportunities to our members.",
    source: "HexHub News",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
];

const mockEvents: Event[] = [
  {
    id: "1",
    title: "AI Workshop Series",
    date: "2024-02-15",
    time: "18:00",
    location: "Online",
    description: "Join us for an interactive workshop on building your first ML model.",
  },
  {
    id: "2",
    title: "Community Meetup",
    date: "2024-02-22",
    time: "19:00",
    location: "Virtual",
    description: "Monthly community meetup to discuss projects and share knowledge.",
  },
  {
    id: "3",
    title: "Hackathon: AI Solutions",
    date: "2024-03-01",
    time: "10:00",
    location: "Online",
    description: "48-hour hackathon focused on building innovative AI solutions.",
  },
];

type TabType = "posts" | "news" | "events";

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState<TabType>("posts");

  return (
    <PageLayout>
      <div className="py-20 sm:py-24 relative">
        {/* Crystal Shard Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* Large crystal shard - top center */}
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 opacity-[0.12] blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.5) 0%, rgba(56, 189, 248, 0.4) 50%, transparent 100%)",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              transform: "rotate(15deg)",
            }}
          />
          {/* Medium crystal shard - left */}
          <div
            className="absolute top-1/3 left-8 w-64 h-64 opacity-[0.1] blur-2xl"
            style={{
              background:
                "linear-gradient(45deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              transform: "rotate(-25deg)",
            }}
          />
          {/* Medium crystal shard - right */}
          <div
            className="absolute bottom-1/3 right-8 w-64 h-64 opacity-[0.1] blur-2xl"
            style={{
              background:
                "linear-gradient(225deg, rgba(129, 140, 248, 0.4) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 100%)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: "rotate(45deg)",
            }}
          />
          {/* Gradient glows */}
          <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-indigo-500/15 blur-3xl opacity-40" />
          <div className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-500/15 blur-3xl opacity-40" />
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
              {BLOG.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {BLOG.description}
            </p>
          </div>

          {/* Modern Tabs - Reddit/LinkedIn Style */}
          <div className="mb-12">
            <div className="relative max-w-5xl mx-auto">
              {/* Desktop Tab Container */}
              <div className="hidden md:block relative bg-slate-800/30 backdrop-blur-md rounded-2xl p-2 ring-1 ring-white/5 shadow-xl overflow-hidden">
                {/* Animated background gradient for active tab */}
                <div 
                  className="absolute top-2 bottom-2 rounded-xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 transition-all duration-300 ease-out"
                  style={{
                    width: 'calc(33.333% - 0.5rem)',
                    left: activeTab === 'posts' ? '0.25rem' : activeTab === 'news' ? 'calc(33.333% + 0.25rem)' : 'calc(66.666% + 0.25rem)',
                  }}
                />
                
                {/* Tab Buttons */}
                <div className="relative flex gap-2">
                  {(["posts", "news", "events"] as TabType[]).map((tab) => {
                    const counts = {
                      posts: mockPosts.length,
                      news: mockNews.length,
                      events: mockEvents.length,
                    };
                    
                    const icons = {
                      posts: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      ),
                      news: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      ),
                      events: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ),
                    };
                    
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative group ${
                          activeTab === tab
                            ? "text-white"
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {/* Icon */}
                        <span className={`transition-transform duration-300 ${activeTab === tab ? 'scale-110' : 'group-hover:scale-110'}`}>
                          {icons[tab]}
                        </span>
                        
                        {/* Label */}
                        <span>{BLOG.tabs[tab]}</span>
                        
                        {/* Count Badge */}
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                          activeTab === tab
                            ? "bg-white/20 text-white"
                            : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-300"
                        }`}>
                          {counts[tab]}
                        </span>
                        
                        {/* Active Indicator Line */}
                        {activeTab === tab && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Horizontal Scrollable Tabs - Reddit Style */}
              <div className="md:hidden">
                <div className="relative">
                  {/* Scrollable container */}
                  <div className="overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6">
                    <div className="flex gap-3 min-w-max">
                      {(["posts", "news", "events"] as TabType[]).map((tab) => {
                        const counts = {
                          posts: mockPosts.length,
                          news: mockNews.length,
                          events: mockEvents.length,
                        };
                        
                        const icons = {
                          posts: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          ),
                          news: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          ),
                          events: (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          ),
                        };
                        
                        return (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap relative group ${
                              activeTab === tab
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-200 ring-1 ring-white/5"
                            }`}
                          >
                            {/* Icon */}
                            <span className={`transition-transform duration-300 ${activeTab === tab ? 'scale-110' : 'group-hover:scale-110'}`}>
                              {icons[tab]}
                            </span>
                            
                            {/* Label */}
                            <span>{BLOG.tabs[tab]}</span>
                            
                            {/* Count Badge */}
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                              activeTab === tab
                                ? "bg-white/20 text-white"
                                : "bg-slate-700/50 text-slate-400"
                            }`}>
                              {counts[tab]}
                            </span>
                            
                            {/* Active Indicator Dot */}
                            {activeTab === tab && (
                              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Gradient fade edges for mobile */}
                  <div className="absolute left-0 top-0 bottom-2 w-8 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
                </div>
              </div>
              
              {/* Active Tab Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-500">
                  {activeTab === 'posts' && (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      {mockPosts.length} {mockPosts.length === 1 ? 'post' : 'posts'} available
                    </span>
                  )}
                  {activeTab === 'news' && (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      {mockNews.length} {mockNews.length === 1 ? 'news item' : 'news items'} available
                    </span>
                  )}
                  {activeTab === 'events' && (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                      {mockEvents.length} {mockEvents.length === 1 ? 'event' : 'events'} available
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto">
            {/* Posts Tab */}
            {activeTab === "posts" && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mockPosts.map((post, index) => {
                  const gradients = [
                    "from-indigo-500/20 to-indigo-600/20",
                    "from-sky-500/20 to-sky-600/20",
                    "from-purple-500/20 to-purple-600/20",
                  ];
                  return (
                    <article
                      key={post.id}
                      className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/5 hover:ring-white/10 transition-all group hover:scale-105 transform duration-300"
                    >
                      {/* Image */}
                      {post.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        </div>
                      )}
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      {/* Crystal shard decoration */}
                      <div
                        className="absolute top-0 right-0 w-24 h-24 opacity-[0.05] blur-lg group-hover:opacity-[0.1] transition-opacity"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                          transform: "rotate(45deg)",
                        }}
                      />
                      <div className="relative z-10 p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-4">
                          By {post.author} • {new Date(post.date).toLocaleDateString()}
                        </p>
                        <p className="text-slate-300">{post.excerpt}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* News Tab */}
            {activeTab === "news" && (
              <div className="space-y-6">
                {mockNews.map((news, index) => {
                  const gradientClasses = [
                    "from-indigo-500/20 to-transparent",
                    "from-sky-500/20 to-transparent",
                    "from-purple-500/20 to-transparent",
                  ];
                  const borderClasses = [
                    "from-indigo-400 to-indigo-600",
                    "from-sky-400 to-sky-600",
                    "from-purple-400 to-purple-600",
                  ];
                  return (
                    <article
                      key={news.id}
                      className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/5 hover:ring-white/10 transition-all group hover:scale-[1.02] transform duration-300"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        {news.image && (
                          <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <img
                              src={news.image}
                              alt={news.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="flex-1 relative">
                          {/* Gradient border effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses[index]} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                          {/* Left border accent */}
                          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${borderClasses[index]} opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl`} />
                          <div className="relative z-10 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                                {news.title}
                              </h3>
                              <span className="text-xs text-slate-400 whitespace-nowrap ml-4">
                                {new Date(news.date).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-sm text-indigo-400 mb-3 font-semibold">{news.source}</p>
                            <p className="text-slate-300">{news.excerpt}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === "events" && (
              <div className="grid gap-6 md:grid-cols-2">
                {mockEvents.map((event, index) => {
                  const gradients = [
                    "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
                    "from-sky-500/20 via-indigo-500/20 to-purple-500/20",
                    "from-purple-500/20 via-pink-500/20 to-rose-500/20",
                  ];
                  return (
                    <article
                      key={event.id}
                      className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/5 hover:ring-white/10 transition-all group overflow-hidden hover:scale-105 transform duration-300"
                    >
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      {/* Crystal decoration */}
                      <div
                        className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.05] blur-lg group-hover:opacity-[0.12] transition-opacity"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(99, 102, 241, 0.4) 0%, rgba(56, 189, 248, 0.3) 50%, transparent 100%)",
                          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          transform: "rotate(-30deg)",
                        }}
                      />
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                            {event.title}
                          </h3>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-indigo-400">
                              {new Date(event.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                            <p className="text-xs text-slate-400">{event.time}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          {event.location}
                        </p>
                        <p className="text-slate-300">{event.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

