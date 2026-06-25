import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
        Sign in to your account
      </h2>
      {/* LoginForm component will go here */}
      <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-6">
        Don&apos;t have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline font-medium">
          Sign up
        </a>
      </p>
    </div>
  );
}
