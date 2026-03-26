"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-white">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#1E1E2E]">
        <Link href="/" className="text-xl font-bold gradient-text">ShiftWithAI</Link>
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm">
          <ArrowLeft size={16} /> Back
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: April 1, 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using ShiftWithAI ("Service," "we," "us," or "our") at shiftwithai.co, or by purchasing a subscription, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms") in their entirety. If you do not agree to these Terms, do not access or use the Service.</p>
            <p className="mt-3">These Terms constitute a legally binding agreement between you and ShiftWithAI. Your continued use of the Service following any modifications to these Terms constitutes acceptance of those changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>ShiftWithAI provides a subscription-based digital education platform offering online courses, instructional materials, newsletters, and related content focused on artificial intelligence tools for small business owners. All content is delivered digitally via our website and associated platforms.</p>
            <p className="mt-3">We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without notice or liability to you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Subscription and Billing</h2>
            <p>Access to ShiftWithAI requires a paid monthly subscription at the rate of <strong className="text-white">$75.00 USD per month</strong>, billed on a recurring basis ("Subscription Fee"). By subscribing, you authorize ShiftWithAI to charge your designated payment method on a monthly basis until your subscription is cancelled.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Subscription fees are charged at the beginning of each billing cycle.</li>
              <li>You are responsible for all charges associated with your account, including applicable taxes.</li>
              <li>Failure to maintain a valid payment method may result in immediate suspension or termination of access.</li>
              <li>Prices are subject to change with 30 days' notice. Continued use after a price change constitutes acceptance of the new price.</li>
            </ul>
          </section>

          <section className="border border-red-500/30 rounded-2xl p-6 bg-red-500/5">
            <h2 className="text-2xl font-bold text-white mb-4">4. Cancellation Policy</h2>
            <p className="text-white font-semibold mb-3">PLEASE READ THIS SECTION CAREFULLY BEFORE PURCHASING.</p>
            <p>You may cancel your subscription at any time through your account settings or by contacting us at shiftwithai2026@gmail.com. Upon cancellation, your access to the Service will continue until the end of your current billing period, after which it will terminate.</p>

            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/40 rounded-xl">
              <p className="font-bold text-white text-lg mb-2">72-Hour Cancellation Window</p>
              <p>If you wish to cancel your subscription and request a review of your account, you must do so within <strong className="text-white">seventy-two (72) hours</strong> of your initial subscription purchase date and time. Cancellation requests submitted after this 72-hour window will not be eligible for any account credit, adjustment, or consideration of any kind.</p>
            </div>
          </section>

          <section className="border border-red-500/30 rounded-2xl p-6 bg-red-500/5">
            <h2 className="text-2xl font-bold text-white mb-4">5. No Refund Policy</h2>
            <p className="text-white font-semibold mb-3">ALL SALES ARE FINAL. NO REFUNDS WILL BE ISSUED UNDER ANY CIRCUMSTANCES.</p>
            <p>ShiftWithAI operates a strict <strong className="text-white">NO REFUND</strong> policy. By completing your purchase, you expressly acknowledge and agree to the following:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong className="text-white">No refunds</strong> will be issued for any subscription fees paid, whether for the current billing period or any prior billing period.</li>
              <li><strong className="text-white">No partial refunds</strong> will be issued for unused portions of a subscription period.</li>
              <li><strong className="text-white">No refunds</strong> will be issued due to dissatisfaction with content, results, or any other reason.</li>
              <li><strong className="text-white">No refunds</strong> will be issued if you fail to use the Service during your subscription period.</li>
              <li><strong className="text-white">No refunds</strong> will be issued for charges that result from failure to cancel prior to a renewal date.</li>
              <li><strong className="text-white">No refunds</strong> will be issued in the event of account termination due to violation of these Terms.</li>
            </ul>
            <p className="mt-4">You acknowledge that ShiftWithAI provides digital content that is immediately accessible upon purchase, and that this no-refund policy is a material condition of the agreement between you and ShiftWithAI. By purchasing a subscription, you waive any right to claim a refund.</p>
            <p className="mt-3">If you initiate a chargeback or payment dispute with your bank or card issuer, ShiftWithAI reserves the right to immediately terminate your account, permanently ban you from the Service, and pursue all available legal remedies to recover the disputed amount plus any associated fees and costs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Digital Content and Intellectual Property</h2>
            <p>All content provided through the Service, including but not limited to courses, videos, written materials, newsletters, templates, prompts, graphics, and any other materials ("Content"), is the exclusive intellectual property of ShiftWithAI and is protected by applicable copyright, trademark, and intellectual property laws.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Content solely for your own personal, non-commercial purposes.</li>
              <li>You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works from, or otherwise exploit any Content without our express written permission.</li>
              <li>You may not share your account credentials or allow any third party to access the Service using your account.</li>
              <li>Unauthorized use or distribution of Content may result in immediate account termination and legal action.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="uppercase font-semibold text-white mb-3">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
            <p>ShiftWithAI expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including but not limited to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Any warranty that the Service will meet your specific requirements or expectations.</li>
              <li>Any warranty of merchantability, fitness for a particular purpose, or non-infringement.</li>
              <li>Any warranty that the Service will be uninterrupted, error-free, or secure.</li>
              <li>Any warranty regarding the accuracy, reliability, completeness, or timeliness of any Content.</li>
            </ul>
            <p className="mt-4 font-semibold text-white">No Earnings Guarantee:</p>
            <p className="mt-2">ShiftWithAI makes no representations or guarantees of any specific results, income, or business outcomes from using the Service or applying any Content. Any income figures, success stories, or results mentioned are examples only and are not guarantees of what you will achieve. Individual results will vary based on numerous factors including but not limited to your effort, experience, market conditions, and business type. You assume full responsibility for your own results.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="uppercase font-semibold text-white mb-3">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
            <p>ShiftWithAI, its owners, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages, including but not limited to loss of profits, revenue, data, business opportunities, or goodwill, arising out of or in connection with:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Your use of or inability to use the Service.</li>
              <li>Any content obtained through the Service.</li>
              <li>Unauthorized access to or alteration of your data.</li>
              <li>Any business decisions made based on Content provided through the Service.</li>
            </ul>
            <p className="mt-4">In no event shall ShiftWithAI's total cumulative liability to you exceed the amount you paid to ShiftWithAI in the twelve (12) months immediately preceding the event giving rise to the claim. This limitation applies regardless of the theory of liability (contract, tort, negligence, strict liability, or otherwise) and even if ShiftWithAI has been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless ShiftWithAI and its owners, officers, employees, agents, and partners from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or related to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you submit through the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Share, resell, or distribute any Content obtained through the Service.</li>
              <li>Share your account access with any other person.</li>
              <li>Use the Service for any unlawful purpose.</li>
              <li>Attempt to gain unauthorized access to any part of the Service.</li>
              <li>Engage in any conduct that disrupts or interferes with the Service.</li>
              <li>Misrepresent your identity or affiliation with any person or entity.</li>
            </ul>
            <p className="mt-3">Violation of any prohibited conduct may result in immediate account termination without refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Arizona, United States, without regard to its conflict of law provisions.</p>
            <p className="mt-3">Any dispute arising out of or relating to these Terms or the Service shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in Maricopa County, Arizona, under the rules of the American Arbitration Association. You waive any right to a jury trial or to participate in a class action lawsuit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and ShiftWithAI with respect to the Service and supersede all prior agreements, representations, and understandings. If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact</h2>
            <p>For questions about these Terms, cancellations, or account matters, contact us at:</p>
            <p className="mt-2"><strong className="text-white">Email:</strong> shiftwithai2026@gmail.com</p>
            <p className="mt-1"><strong className="text-white">Website:</strong> shiftwithai.co</p>
          </section>

          <div className="border border-[#1E1E2E] rounded-2xl p-6 mt-8 bg-[#0D0D1A]">
            <p className="text-sm text-gray-400"><strong className="text-white">BY PURCHASING A SUBSCRIPTION TO SHIFTWITHAI, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE, INCLUDING THE NO REFUND POLICY AND 72-HOUR CANCELLATION WINDOW. IF YOU DO NOT AGREE, DO NOT PURCHASE A SUBSCRIPTION.</strong></p>
          </div>

        </div>
      </div>

      <footer className="border-t border-[#1E1E2E] py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold gradient-text">ShiftWithAI</span>
          <div className="flex gap-6 text-gray-600 text-sm">
            <Link href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</Link>
            <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
