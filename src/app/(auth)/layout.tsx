export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            LeadPilot AI
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            AI-powered lead generation
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
