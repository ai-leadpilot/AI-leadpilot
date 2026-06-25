import type { Metadata } from "next";

export const metadata: Metadata = { title: "Forgot Password" };

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
        Reset your password
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
        Enter your email and we&apos;ll send you a reset link.
      </p>
      {/* ForgotPasswordForm component will go here */}
      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
        <a href="/login" className="text-blue-600 hover:underline font-medium">
          Back to sign in
        </a>
      </p>
    </div>
  );
}
