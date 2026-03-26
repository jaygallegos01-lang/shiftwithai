"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Shield, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function SubscribePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-checkout-session", { method: "POST" });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
        <ArrowLeft size={16} /> Back
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black gradient-text">ShiftWithAI</Link>
          <h1 className="text-3xl font-black mt-4 mb-2">Get Instant Access</h1>
          <p className="text-gray-400">Join 500+ small business owners using AI to grow.</p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-purple-500/30">
          <div className="text-center mb-6">
            <div className="text-5xl font-black mb-1">$75<span className="text-xl text-gray-400 font-normal">/mo</span></div>
            <p className="text-gray-500 text-sm">Cancel anytime. No contracts.</p>
          </div>

          <ul className="space-y-3 mb-8">
            {[
              "Instant access to all 30+ lessons",
              "New courses every month",
              "Monthly AI tools newsletter",
              "Step-by-step LEGO-style guides",
              "Cancel anytime in one click",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {error && (
            <p className="text-red-400 text-sm text-center mb-4">{error}</p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="btn-primary w-full text-lg py-5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Redirecting to Checkout..." : "Start My Subscription →"}
          </button>

          <p className="text-center text-gray-600 text-xs mt-4 flex items-center justify-center gap-1">
            <Shield size={12} /> Secured by Stripe. We never store your card.
          </p>
          <p className="text-center text-gray-600 text-xs mt-3 leading-relaxed">
            By subscribing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-gray-400 transition">Terms of Service</a>
            , including our no-refund policy and 72-hour cancellation window.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
