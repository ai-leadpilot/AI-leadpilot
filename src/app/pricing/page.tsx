import Link from "next/link";
import { Check, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pricing — LeadPilot AI" };

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with AI-powered lead generation at no cost.",
    features: [
      "50 leads per month",
      "1 active campaign",
      "Basic AI scoring",
      "Email support",
      "1 user seat",
    ],
    cta: "Get started free",
    href: "/register",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    description: "Perfect for freelancers and small teams ready to scale.",
    features: [
      "500 leads per month",
      "5 active campaigns",
      "Advanced AI scoring",
      "Automated outreach sequences",
      "Priority email support",
      "3 user seats",
      "500 AI credits/month",
    ],
    cta: "Start free trial",
    href: "/register?plan=starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "per month",
    description: "For growing teams that need powerful automation at scale.",
    features: [
      "Unlimited leads",
      "Unlimited campaigns",
      "AI auto-apply to job leads",
      "Custom outreach templates",
      "Analytics dashboard",
      "Slack & CRM integrations",
      "10 user seats",
      "2,000 AI credits/month",
      "Priority chat support",
    ],
    cta: "Start free trial",
    href: "/register?plan=pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organisations with complex needs.",
    features: [
      "Everything in Pro",
      "Unlimited user seats",
      "Dedicated account manager",
      "Custom AI model fine-tuning",
      "SSO & advanced security",
      "SLA guarantee",
      "Custom integrations",
      "Unlimited AI credits",
    ],
    cta: "Contact sales",
    href: "mailto:sales@leadpilot.ai",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold">LeadPilot AI</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="text-sm text-blue-400 font-medium">
            Pricing
          </Link>
          <Link href="/login" className="text-sm text-slate-300 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="text-center px-6 py-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Simple, transparent <span className="text-blue-400">pricing</span>
        </h1>
        <p className="text-xl text-slate-300">
          Start free. Scale as you grow. No hidden fees.
        </p>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-2xl p-6 border ${
              plan.highlighted
                ? "bg-blue-600 border-blue-400 shadow-2xl shadow-blue-500/30 scale-105"
                : "bg-white/5 border-white/10"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most popular
              </span>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm mb-1 ${plan.highlighted ? "text-blue-100" : "text-slate-400"}`}>
                    /{plan.period}
                  </span>
                )}
              </div>
              <p className={`text-sm ${plan.highlighted ? "text-blue-100" : "text-slate-400"}`}>
                {plan.description}
              </p>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-blue-200" : "text-blue-400"}`} />
                  <span className={plan.highlighted ? "text-blue-50" : "text-slate-300"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                plan.highlighted
                  ? "bg-white text-blue-600 hover:bg-blue-50"
                  : "bg-blue-600 hover:bg-blue-500 text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </section>

      {/* FAQ teaser */}
      <section className="text-center px-6 pb-24 text-slate-400 text-sm">
        Questions? <a href="mailto:support@leadpilot.ai" className="text-blue-400 hover:underline">Contact us</a> — we&apos;re happy to help.
      </section>
    </main>
  );
}
