export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/95 py-10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Framm. Engineered for modern developers.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-500">
          <a href="/docs" className="transition hover:text-slate-200">Docs</a>
          <a href="/examples" className="transition hover:text-slate-200">Examples</a>
          <a href="https://github.com/" className="transition hover:text-slate-200">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
