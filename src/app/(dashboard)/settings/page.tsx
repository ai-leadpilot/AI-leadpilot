import type { Metadata } from "next";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Settings</h1>
      {/* ProfileSettings, OrganizationSettings, IntegrationSettings will go here */}
    </div>
  );
}
