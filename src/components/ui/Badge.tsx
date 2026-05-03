export function Badge({ text }: { text: string }) {
  return <span className="rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white">{text}</span>;
}
