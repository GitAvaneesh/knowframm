export function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-8 md:grid-cols-2">{children}</div>;
}
