import type { Metadata } from "next";

export const metadata: Metadata = { title: "Create Account" };

export default function RegisterPage() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
        Create your account
      </h2>
      {/* RegisterForm component will go here */}
      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline font-medium">
          Sign in
        </a>
      </p>
    </div>
  );
}
