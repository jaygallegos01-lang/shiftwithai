"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, CheckCircle, Lock, Play, Mail, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "AI Foundations for Business",
    lessons: 6,
    progress: 3,
    unlocked: true,
    badge: "Start Here",
    desc: "What AI actually is and how to start in under 1 hour.",
  },
  {
    id: 2,
    title: "Never Miss a Lead Again",
    lessons: 5,
    progress: 0,
    unlocked: true,
    badge: "Most Popular",
    desc: "Set up AI that responds to every lead instantly, 24/7.",
  },
  {
    id: 3,
    title: "AI-Powered Marketing",
    lessons: 7,
    progress: 0,
    unlocked: true,
    desc: "Generate a month of content in 20 minutes.",
  },
  {
    id: 4,
    title: "Automate the Busy Work",
    lessons: 5,
    progress: 0,
    unlocked: false,
    desc: "Coming next month — invoicing, scheduling, and follow-ups automated.",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#1E1E2E] bg-[#0A0A0F]">
        <Link href="/" className="text-xl font-bold gradient-text">ShiftWithAI</Link>
        <span className="text-gray-400 text-sm">My Dashboard</span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-black mb-2">Welcome back. 👋</h1>
          <p className="text-gray-400 text-lg">Pick up where you left off or start something new.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Lessons Completed", value: "3" },
            { label: "Hours Saved/Week", value: "~4h" },
            { label: "Courses Unlocked", value: "3" },
            { label: "Subscription", value: "Active ✓" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5 border border-[#1E1E2E] text-center"
            >
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Courses */}
        <h2 className="text-2xl font-bold mb-6">Your Courses</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border transition-all duration-300 ${
                course.unlocked
                  ? "border-[#1E1E2E] hover:border-blue-500/30 cursor-pointer"
                  : "border-[#1E1E2E] opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {course.unlocked ? (
                    <BookOpen size={20} className="text-blue-400" />
                  ) : (
                    <Lock size={20} className="text-gray-600" />
                  )}
                  <h3 className="font-bold">{course.title}</h3>
                </div>
                {course.badge && (
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {course.badge}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-4">{course.desc}</p>

              {course.unlocked && (
                <>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{course.progress}/{course.lessons} lessons</span>
                    <span>{Math.round((course.progress / course.lessons) * 100)}% complete</span>
                  </div>
                  <div className="w-full h-2 bg-[#1E1E2E] rounded-full mb-4">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${(course.progress / course.lessons) * 100}%` }}
                    />
                  </div>
                  <button className="flex items-center gap-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition">
                    <Play size={14} />
                    {course.progress > 0 ? "Continue" : "Start Course"}
                  </button>
                </>
              )}

              {!course.unlocked && (
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Lock size={14} />
                  Coming next month
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-8 border border-purple-500/20 flex flex-col md:flex-row items-center gap-6"
        >
          <Mail size={40} className="text-purple-400 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Monthly AI Newsletter</h3>
            <p className="text-gray-400 text-sm">Your next edition drops April 1st. We found 5 new AI tools that are perfect for small business owners this month.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition whitespace-nowrap">
            View Past Issues <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
