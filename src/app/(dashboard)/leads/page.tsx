import type { Metadata } from "next";

export const metadata: Metadata = { title: "Leads" };

export default function LeadsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Leads</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Add Lead
        </button>
      </div>
      {/* LeadsTable, LeadsFilter components will go here */}
    </div>
  );
}
