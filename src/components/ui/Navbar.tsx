import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-100">
          Framm
        </Link>
        <nav className="flex items-center gap-8 text-sm text-slate-400">
          <Link href="/docs" className="transition hover:text-slate-100">
            Docs
          </Link>
          <Link href="/examples" className="transition hover:text-slate-100">
            Examples
          </Link>
          <a href="https://github.com/" className="transition hover:text-slate-100">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
