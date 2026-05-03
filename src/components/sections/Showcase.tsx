export function Showcase() {
  return (
    <section className="py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Showcase</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
          Real interface structure, rendered with restraint.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          Built purely with layout and layering, these UI mockups demonstrate the kind of interfaces Framm makes possible.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="panel rounded-[2rem] border border-slate-800/80 p-6">
          <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
            <span>Inspector</span>
            <span className="rounded-full border border-slate-700/70 px-3 py-1">Live</span>
          </div>
          <div className="space-y-4">
            <div className="h-3 w-28 rounded-full bg-slate-800" />
            <div className="rounded-[1.75rem] bg-slate-900/90 p-4">
              <div className="mb-3 h-3 w-24 rounded-full bg-slate-800" />
              <div className="grid gap-3">
                <div className="h-3 rounded-full bg-slate-800/80" />
                <div className="h-3 rounded-full bg-slate-800/80 w-5/6" />
                <div className="h-3 rounded-full bg-slate-800/80 w-2/3" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel rounded-[2rem] border border-slate-800/80 p-6">
          <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
            <span>Dashboard</span>
            <span className="rounded-full border border-slate-700/70 px-3 py-1">Stable</span>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">Latency</p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">1.9ms</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-4">
                <p className="text-sm text-slate-400">Draw calls</p>
                <p className="mt-3 text-2xl font-semibold text-slate-100">122</p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-4">
              <div className="mb-3 h-2 rounded-full bg-slate-800" />
              <div className="h-3 w-3/4 rounded-full bg-slate-700" />
            </div>
          </div>
        </div>
        <div className="panel rounded-[2rem] border border-slate-800/80 p-6">
          <div className="mb-5 flex items-center justify-between text-sm text-slate-400">
            <span>Control panel</span>
            <span className="rounded-full border border-slate-700/70 px-3 py-1">Preview</span>
          </div>
          <div className="space-y-4">
            <div className="grid gap-3">
              <div className="h-3 w-20 rounded-full bg-slate-800" />
              <div className="h-10 rounded-2xl bg-slate-900/90" />
              <div className="h-10 rounded-2xl bg-slate-900/90" />
            </div>
            <div className="rounded-[1.5rem] bg-slate-900/90 p-4">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                <span>Render queue</span>
              </div>
              <div className="mt-4 grid gap-3">
                <div className="h-3 rounded-full bg-slate-800" />
                <div className="h-3 rounded-full bg-slate-800/80 w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

