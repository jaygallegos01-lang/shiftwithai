"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Clock,
  TrendingUp,
  Users,
  BookOpen,
  Mail,
  Shield,
  ChevronDown,
  Bot,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#1E1E2E] bg-[#0A0A0F]/90 backdrop-blur-md">
        <span className="text-xl font-bold gradient-text">ShiftWithAI</span>
        <Link href="/subscribe" className="btn-primary text-sm py-3 px-6">
          Start for $75/mo →
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            <Zap size={14} />
            500+ small business owners already inside
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Your Competitors Are{" "}
            <span className="gradient-text">Using AI.</span>
            <br />
            Are You?
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Step-by-step AI courses built for small business owners — no tech background needed. Simple enough to follow like LEGO instructions. Results you'll see in week one.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/subscribe" className="btn-primary text-lg py-5 px-10 w-full sm:w-auto">
              Start Learning for $75/mo <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <p className="text-gray-500 text-sm">Cancel anytime. No contracts. No BS.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            {["Restaurants", "Contractors", "Real Estate", "Salons", "Retail", "Healthcare"].map((industry) => (
              <span key={industry} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-400" /> {industry}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <hr className="section-divider" />

      {/* SOCIAL PROOF BAR */}
      <section className="py-12 px-6 bg-[#0D0D1A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-6 font-medium">Trusted by small business owners across industries</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: "🍕", label: "Restaurants" },
              { icon: "🔨", label: "Contractors" },
              { icon: "🏠", label: "Real Estate" },
              { icon: "💇", label: "Salons" },
              { icon: "🛍️", label: "Retail" },
              { icon: "🏥", label: "Healthcare" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-gray-400 font-medium">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* PAIN SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              3 Reasons Your Competitors Are{" "}
              <span className="gradient-text">Pulling Ahead</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              While you're doing things the old way, the business down the street is saving 20 hours a week and responding to leads in seconds.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Clock className="text-red-400" size={32} />,
                title: "They're Saving 20+ Hours/Week",
                desc: "AI handles their scheduling, customer replies, invoicing, and social media — automatically. You're still doing all of it by hand.",
              },
              {
                icon: <MessageSquare className="text-yellow-400" size={32} />,
                title: "They Never Miss a Lead",
                desc: "Their AI responds to every inquiry in under 60 seconds, 24/7. You miss the lead because you were busy doing actual work.",
              },
              {
                icon: <TrendingUp className="text-blue-400" size={32} />,
                title: "They Look 10x More Professional",
                desc: "AI-generated content, automated follow-ups, polished proposals. Meanwhile, you're sending the same email you wrote in 2019.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 border border-[#1E1E2E] hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SOLUTION SECTION */}
      <section className="py-24 px-6 bg-[#0D0D1A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">What You Get Inside</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Win With AI</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              No jargon. No 4-hour lectures. Just short, actionable modules you can apply to your business today.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Bot size={28} className="text-blue-400" />,
                title: "AI Foundations for Business",
                lessons: "6 lessons",
                desc: "What AI actually is, what it can do for YOUR business, and how to start in under 1 hour.",
                badge: "Start Here",
              },
              {
                icon: <MessageSquare size={28} className="text-purple-400" />,
                title: "Never Miss a Lead Again",
                lessons: "5 lessons",
                desc: "Set up an AI that responds to every inquiry instantly — even at 2am on a Sunday.",
                badge: "Most Popular",
              },
              {
                icon: <BarChart3 size={28} className="text-green-400" />,
                title: "AI-Powered Marketing",
                lessons: "7 lessons",
                desc: "Generate a month of social media content in 20 minutes. Write ads that actually convert.",
              },
              {
                icon: <Clock size={28} className="text-yellow-400" />,
                title: "Automate the Busy Work",
                lessons: "5 lessons",
                desc: "Invoicing, scheduling, email follow-ups — automated. Get 15+ hours back every single week.",
              },
              {
                icon: <Users size={28} className="text-red-400" />,
                title: "AI Customer Service",
                lessons: "4 lessons",
                desc: "Build a chatbot that handles FAQs, complaints, and bookings without you touching a thing.",
              },
              {
                icon: <Mail size={28} className="text-blue-400" />,
                title: "Monthly AI Newsletter",
                lessons: "Every month",
                desc: "We track every new AI tool so you don't have to. Get the best ones delivered with instructions.",
                badge: "Included",
              },
            ].map((course, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-[#1E1E2E] hover:border-blue-500/30 transition-all duration-300 relative"
              >
                {course.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    {course.badge}
                  </span>
                )}
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                <p className="text-xs text-gray-500 mb-3 font-medium">{course.lessons}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* HOW IT WORKS */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              Up and Running in{" "}
              <span className="gradient-text">Under 10 Minutes</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Sign Up in 60 Seconds",
                desc: "Create your account, add your card, and you're in. No calls. No demos. No sales pressure.",
              },
              {
                step: "02",
                title: "Pick Your First Course",
                desc: "Browse by your industry or your biggest problem. Each module is under 15 minutes.",
              },
              {
                step: "03",
                title: "Apply It Today",
                desc: "Follow the LEGO-style instructions and implement the tool in your actual business. That's it.",
              },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="text-6xl font-black gradient-text opacity-40 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* PRICING */}
      <section className="py-24 px-6 bg-[#0D0D1A]">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              One Price.{" "}
              <span className="gradient-text">Everything Included.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg">
              Less than one lost customer per month. The ROI is a no-brainer.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card rounded-3xl p-10 border border-purple-500/30 glow-purple relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-6 py-2 rounded-full">
              MOST POPULAR
            </div>

            <div className="text-center mb-8">
              <div className="text-6xl font-black mb-2">
                $75<span className="text-2xl text-gray-400 font-normal">/mo</span>
              </div>
              <p className="text-gray-400">Billed monthly. Cancel anytime.</p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Access to ALL courses (30+ lessons)",
                "New courses added every month",
                "Monthly AI Tools Newsletter",
                "Step-by-step LEGO-style instructions",
                "Works for ANY small business type",
                "Cancel anytime, no questions asked",
                "24/7 access from any device",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/subscribe" className="btn-primary w-full block text-center text-lg py-5">
              Get Instant Access — $75/mo
            </Link>
            <p className="text-center text-gray-500 text-sm mt-4">🔒 Secure checkout powered by Stripe</p>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              Real Owners.{" "}
              <span className="gradient-text">Real Results.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                name: "Marcus T.",
                business: "Owner, T&T Contracting",
                avatar: "MT",
                stars: 5,
                text: "I was skeptical — I'm not a tech person at all. But the modules literally walk you through everything step by step. I set up an AI that follows up with leads automatically. Booked 3 extra jobs in the first month.",
              },
              {
                name: "Rosa M.",
                business: "Owner, Rosa's Kitchen",
                avatar: "RM",
                stars: 5,
                text: "My restaurant was struggling to keep up with online orders and reviews. ShiftWithAI showed me how to use AI to respond to Google reviews and handle reservations. Saved me 2 hours every single day.",
              },
              {
                name: "Tanya K.",
                business: "Owner, Luxe Salon & Spa",
                avatar: "TK",
                stars: 5,
                text: "I use AI now to create all my Instagram content for the month in one sitting. My following went from 800 to 3,200 in 90 days. The newsletter alone is worth the $75.",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-[#1E1E2E]">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0D0D1A]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
              Got <span className="gradient-text">Questions?</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need any tech experience?",
                a: "Zero. Our courses are designed for business owners, not engineers. If you can follow a recipe or assemble IKEA furniture, you can do this. Every step is shown visually.",
              },
              {
                q: "How much time does this take per week?",
                a: "Each lesson is under 15 minutes. Most members spend 1-2 hours in their first week and then just 30 minutes/week after that. The tools they set up work automatically — that's the whole point.",
              },
              {
                q: "What if it doesn't work for my type of business?",
                a: "We cover restaurants, contractors, salons, real estate, retail, healthcare, and more. If you serve customers, these tools work. Period. And if you disagree, cancel in 30 seconds — no hoops.",
              },
              {
                q: "Is there a contract or long-term commitment?",
                a: "No contracts. No annual lock-in. You pay $75/month and cancel anytime from your account with one click. We keep members because the value is obvious, not because we trap them.",
              },
              {
                q: "What makes this different from free YouTube videos?",
                a: "YouTube gives you random 45-minute videos with no structure. We give you a complete system, organized by business type and goal, updated monthly, with the actual tools you need to implement — not just watch.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl border border-[#1E1E2E] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[#1E1E2E] pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-6">
            The Shift Starts{" "}
            <span className="gradient-text">Today.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Every day you wait, your competitors get further ahead. For $75/month — less than you spend on business lunches — you can start winning with AI.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/subscribe" className="btn-primary text-xl py-6 px-14 inline-block">
              Start Learning for $75/mo <ArrowRight className="inline ml-2" size={22} />
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              <Shield size={14} className="inline mr-1" />
              Secure checkout • Cancel anytime • Instant access
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1E1E2E] py-10 px-6 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold gradient-text">ShiftWithAI</span>
          <p className="text-gray-600 text-sm">© 2025 ShiftWithAI. All rights reserved.</p>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link href="/privacy" className="hover:text-gray-400 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition">Terms</Link>
            <Link href="/subscribe" className="hover:text-gray-400 transition">Get Access</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
