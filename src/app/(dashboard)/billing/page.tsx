import type { Metadata } from "next";

export const metadata: Metadata = { title: "Billing" };

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Billing</h1>
      {/* PlanCard, CreditBalance, InvoiceList components will go here */}
    </div>
  );
}
