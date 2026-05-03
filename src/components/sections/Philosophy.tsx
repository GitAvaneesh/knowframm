export function Philosophy() {
  const pillars = [
    {
      title: 'Clarity first',
      description: 'Precise APIs and predictable layout rules make architecture easier to maintain.',
    },
    {
      title: 'Performance always',
      description: 'Native rendering paths and restrained effects preserve frame rate and responsiveness.',
    },
    {
      title: 'Engineered for growth',
      description: 'A system designed for tools, dashboards, and production-grade workflows.',
    },
  ];

  return (
    <section className="py-20">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Philosophy</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Simple foundations for powerful interfaces.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Framm approaches UI like an engineering system: minimal noise, controlled behavior, and surface area that supports real applications.
          </p>
          <div className="mt-10 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-6">
                <h3 className="text-lg font-semibold text-slate-100">{pillar.title}</h3>
                <p className="mt-2 text-slate-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative rounded-[2rem] border border-slate-800/80 p-8">
          <div className="absolute left-8 top-6 h-[calc(100%-3rem)] w-px bg-slate-700/70" />
          <div className="space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-slate-400" />
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Intent-driven layout</p>
                <p className="mt-2">Break UI into composable, reusable structures that remain predictable.</p>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-slate-400" />
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Explicit rendering</p>
                <p className="mt-2">Control when and how content updates with minimal side effects.</p>
              </div>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-slate-400" />
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Tools-ready</p>
                <p className="mt-2">Build complex editing and visualization apps without compromising structure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
