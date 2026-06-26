import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Create Account — LeadPilot AI" };

export default function RegisterPage() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
        Create your account
      </h2>
      <RegisterForm />
    </div>
  );
}
