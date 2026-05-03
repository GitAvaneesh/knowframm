export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <div className="motion-safe:animate-fadeIn">{children}</div>;
}
