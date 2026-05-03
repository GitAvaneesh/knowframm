export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-slate-200 bg-white/5 p-6 shadow-xl">{children}</div>;
}
