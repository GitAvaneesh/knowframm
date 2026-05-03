import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 text-center shadow-soft">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Ready to ship</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Bring your C++ UI tools to production.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Start using Framm to craft responsive, native-grade interfaces with the precision your team expects.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-full bg-slate-100/10 px-6 py-3 text-sm font-semibold text-slate-100 ring-1 ring-slate-700 transition hover:bg-slate-100/15"
            >
              View Docs
            </Link>
            <a
              href="https://github.com/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
