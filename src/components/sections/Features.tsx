export function Features() {
  const features = [
    {
      title: 'High Performance Rendering',
      description: 'Native drawing and optimized batching for smooth UI even in demanding applications.',
    },
    {
      title: 'Flexible Layout System',
      description: 'Compose complex interfaces with precision controls and predictable sizing rules.',
    },
    {
      title: 'Developer-Friendly API',
      description: 'A clear C++ surface designed for readability, maintainability, and fast iteration.',
    },
    {
      title: 'Minimal Runtime',
      description: 'A compact core with low memory use and explicit rendering behavior.',
    },
  ];

  return (
    <section className="py-20">
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Core strengths</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
          Built for teams who need clarity, control, and speed.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-400">
          Framm is engineered to keep UI behavior explicit and performance predictable across native platforms.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature.title} className="panel rounded-[1.75rem] border border-slate-800/80 p-6 transition hover:-translate-y-0.5 hover:border-slate-700/90 hover:shadow-soft">
            <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
