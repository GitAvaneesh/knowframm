import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),_transparent_55%)]" />
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Native C++ UI engine</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            A modern C++ UI engine built for performance.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Framm delivers native interface rendering with minimal runtime overhead, a composable layout system, and a developer-first API for production tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-slate-100/10 px-6 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 transition hover:bg-slate-100/15"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              View on GitHub
            </a>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Low overhead</p>
              <p className="mt-2 text-slate-500">Designed for sustained native performance.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Composed layouts</p>
              <p className="mt-2 text-slate-500">Flexible UI structure with precise control.</p>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Developer-first</p>
              <p className="mt-2 text-slate-500">API clarity built for engineers.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="panel relative overflow-hidden rounded-[2rem] border border-slate-800/80 p-6 soft-shadow">
            <div className="mb-6 flex items-center justify-between rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 text-sm text-slate-400">
              <span className="font-medium text-slate-200">Editor • Frame</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-400">Stable</span>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-sm text-slate-300">
                  <div className="mb-4 h-2.5 w-24 rounded-full bg-slate-800" />
                  <div className="space-y-3">
                    <div className="h-12 rounded-2xl bg-slate-900/90" />
                    <div className="h-12 rounded-2xl bg-slate-900/90" />
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-sm text-slate-300">
                  <div className="mb-4 h-2.5 w-20 rounded-full bg-slate-800" />
                  <div className="grid gap-3">
                    <div className="h-10 rounded-2xl bg-slate-900/90" />
                    <div className="h-10 rounded-2xl bg-slate-900/90" />
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 text-sm text-slate-300">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Layout</span>
                </div>
                <div className="grid gap-3">
                  <div className="h-10 rounded-2xl bg-slate-900/90" />
                  <div className="h-10 rounded-2xl bg-slate-900/90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
