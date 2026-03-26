# ShiftWithAI

**$75/month AI education subscription for small business owners.**

Built with Next.js 14, Tailwind CSS, Framer Motion, and Stripe.

---

## 🚀 Quick Start (Local)

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` and add your Stripe keys (see below).

### 3. Run locally
```bash
npm run dev
```
Open http://localhost:3000

---

## 💳 Stripe Setup (5 minutes)

1. Go to https://dashboard.stripe.com
2. Sign up or log in
3. Go to **Developers → API Keys**
4. Copy your **Publishable key** and **Secret key**
5. Paste them into `.env.local`

Use **test keys** (`sk_test_...`) while building. Switch to **live keys** when you're ready to accept real payments.

**Test card numbers:**
- Success: `4242 4242 4242 4242`
- Any future expiry, any CVC

---

## 🌐 Deploy to Vercel (Free)

1. Push this project to GitHub:
```bash
git add .
git commit -m "Initial build"
git push
```

2. Go to https://vercel.com → **New Project** → Import your repo

3. Add environment variables in Vercel dashboard:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` = `https://shiftwithai.co`

4. Click **Deploy** — it's live in ~2 minutes

5. In Namecheap, point your domain DNS to Vercel:
   - Add a CNAME record: `www` → `cname.vercel-dns.com`
   - Add an A record: `@` → `76.76.21.21`

---

## 📁 Project Structure

```
shiftwithai/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── subscribe/page.tsx    # Checkout page
│   ├── dashboard/page.tsx    # Member dashboard
│   ├── api/
│   │   └── create-checkout-session/route.ts  # Stripe API
│   ├── layout.tsx
│   └── globals.css
├── .env.example
└── README.md
```

---

## 💰 Revenue Math

- 10 subscribers = $750/mo
- 50 subscribers = $3,750/mo
- 200 subscribers = $15,000/mo
- 1,400 subscribers = $105,000/mo ← $100k/yr goal

**Running costs:** ~$0/mo on Vercel free tier + domain ($10/yr) + Stripe 2.9% per transaction

---

## 🔧 Next Steps After Launch

1. Add email capture with Brevo (free up to 300 emails/day)
2. Set up Stripe webhook to auto-grant dashboard access after payment
3. Record actual course videos and embed with YouTube unlisted or Loom
4. Add a blog for SEO (target "AI tools for [industry]" keywords)
5. Set up social media auto-posting pipeline
