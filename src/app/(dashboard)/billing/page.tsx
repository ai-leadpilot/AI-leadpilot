import Link from "next/link";
import { CreditCard, Zap, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Billing" };

export default function BillingPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Billing</h1>

      {/* Current plan */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Current plan</p>
              <p className="font-semibold text-slate-900 dark:text-white">Free</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Upgrade plan
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          You are on the Free plan. Upgrade to unlock unlimited leads, AI auto-apply, and more.
        </p>
      </div>

      {/* AI Credits */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
            <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">AI Credits</p>
            <p className="font-semibold text-slate-900 dark:text-white">0 / 0 credits used</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
          AI credits are used for auto-apply, lead scoring, and outreach generation.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          View plans &amp; credits
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Invoices placeholder */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
        <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Invoices</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">No invoices yet. They will appear here after your first payment.</p>
      </div>
    </div>
  );
}
