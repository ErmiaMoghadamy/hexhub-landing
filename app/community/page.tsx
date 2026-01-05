"use client";

import { useState } from "react";
import { PageLayout } from "../../components";

interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
}

const mockPosts: CommunityPost[] = [
  {
    id: "1",
    author: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    time: "2 hours ago",
    content: "Just finished building my first neural network! The journey from theory to implementation was incredible. Thanks to the HexHub community for all the support! 🚀",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: "2",
    author: "Bob Smith",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    time: "5 hours ago",
    content: "Sharing some amazing data visualization techniques I learned in our latest workshop. The power of storytelling through data is truly remarkable!",
    likes: 18,
    comments: 5,
    shares: 2,
  },
  {
    id: "3",
    author: "Carol Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    time: "1 day ago",
    content: "Our ML model just went into production! The deployment process was smooth thanks to the DevOps team. Excited to see it in action! 💪",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    likes: 42,
    comments: 12,
    shares: 7,
  },
  {
    id: "4",
    author: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    time: "2 days ago",
    content: "Looking for collaborators on a new AI project! We're building a recommendation system using collaborative filtering. Anyone interested?",
    likes: 15,
    comments: 9,
    shares: 1,
  },
];

export default function CommunityPage() {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <PageLayout>
      <div className="py-20 sm:py-24 relative">
        {/* Crystal Shard Background Effects */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
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
          <div
            className="absolute bottom-32 left-16 w-64 h-64 opacity-[0.1] blur-2xl"
            style={{
              background:
                "linear-gradient(45deg, rgba(192, 132, 252, 0.4) 0%, rgba(244, 63, 94, 0.3) 50%, transparent 100%)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              transform: "rotate(45deg)",
            }}
          />
          <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl opacity-50" />
          <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to right, rgb(125 211 252), rgb(129 140 248), rgb(196 181 253), rgb(192 132 252))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Community Feed
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Connect, share, and learn with fellow AI enthusiasts. Join the conversation!
            </p>
          </div>

          {/* Create Post Section */}
          <div className="mb-8 relative bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 ring-1 ring-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                +
              </div>
              <textarea
              rows={1}
                placeholder="Share your thoughts, projects, or questions..."
                className="flex-1 px-4 py-3 bg-slate-700/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border border-white/5 hover:border-white/10"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200">
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <article
                key={post.id}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-white/5 hover:ring-white/10 transition-all group"
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/20"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{post.author}</h3>
                      <p className="text-sm text-slate-400">{post.time}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-slate-300 mb-4 leading-relaxed">{post.content}</p>

                  {/* Image */}
                  {post.image && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        likedPosts.has(post.id)
                          ? "text-red-400 bg-red-500/10"
                          : "text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                      }`}
                    >
                      <svg className="w-5 h-5" fill={likedPosts.has(post.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm font-medium">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-sm font-medium">{post.shares}</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

