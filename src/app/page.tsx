import Link from "next/link";
import { Zap, Users, BarChart3, Megaphone } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold">LeadPilot AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/pricing" className="text-sm text-slate-300 hover:text-white transition-colors">
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

      <section className="text-center px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Generate leads with{" "}
          <span className="text-blue-400">AI-powered</span> precision
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          LeadPilot AI helps you find, qualify, and engage your ideal customers
          with intelligent automation and personalised outreach at scale.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
          >
            Start free trial
          </Link>
          <Link
            href="/login"
            className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
          >
            Sign in
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6 pb-24">
        {[
          { icon: Users, title: "Smart Lead Scoring", desc: "AI ranks your leads by conversion likelihood so you focus on what matters." },
          { icon: Megaphone, title: "Automated Outreach", desc: "Personalised email sequences crafted by AI and sent at the perfect time." },
          { icon: BarChart3, title: "Deep Analytics", desc: "Track every touchpoint with real-time dashboards and actionable insights." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <Icon className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
