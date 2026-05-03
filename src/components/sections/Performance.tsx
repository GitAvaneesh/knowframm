export function Performance() {
  const metrics = [
    { label: 'Render latency', value: '1.9ms', widthClass: 'w-[92%]' },
    { label: 'Frame stability', value: '99.8%', widthClass: 'w-[98%]' },
    { label: 'Runtime footprint', value: '4.1MB', widthClass: 'w-[68%]' },
  ];

  return (
    <section className="py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Performance</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
          Efficient behavior without compromise.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          Framm is built to keep resource usage low while maintaining smooth rendering across complex interfaces.
        </p>
      </div>
      <div className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="panel rounded-[1.75rem] border border-slate-800/80 p-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{metric.label}</span>
              <span className="font-semibold text-slate-100">{metric.value}</span>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900">
              <div className={`h-full rounded-full bg-slate-400/80 ${metric.widthClass}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
