"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#1E1E2E]">
        <Link href="/" className="text-xl font-bold gradient-text">ShiftWithAI</Link>
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: April 1, 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>ShiftWithAI collects the following information when you use our Service:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong className="text-white">Account information:</strong> Name, email address, and password when you create an account.</li>
              <li><strong className="text-white">Payment information:</strong> Billing details processed securely through Stripe. We do not store your full card number.</li>
              <li><strong className="text-white">Usage data:</strong> Pages visited, courses accessed, and time spent on the platform.</li>
              <li><strong className="text-white">Communications:</strong> Any messages you send to us via email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>To provide and maintain the Service.</li>
              <li>To process payments and manage your subscription.</li>
              <li>To send you the monthly AI tools newsletter you subscribed to.</li>
              <li>To send important account and service notifications.</li>
              <li>To improve and develop the Service.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services</h2>
            <p>We use the following third-party services to operate our business:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong className="text-white">Stripe:</strong> Payment processing. Subject to Stripe's Privacy Policy.</li>
              <li><strong className="text-white">Vercel:</strong> Website hosting.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data by contacting us at shiftwithai2026@gmail.com. Account deletion will result in immediate termination of your subscription with no refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
            <p>For privacy-related questions: <strong className="text-white">shiftwithai2026@gmail.com</strong></p>
          </section>

        </div>
      </div>
    </main>
  );
}
