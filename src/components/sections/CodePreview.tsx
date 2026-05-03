export function CodePreview() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-6 shadow-soft">
      <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
        <span className="font-medium">Example</span>
      </div>
      <pre className="overflow-x-auto text-sm leading-6 text-slate-200">
        <code className="block min-w-[24rem] space-y-2">
          <div><span className="text-slate-500">#include </span><span className="text-slate-300">&lt;framm/core.h&gt;</span></div>
          <div><span className="text-slate-300">using namespace</span> <span className="text-slate-200">framm</span>;</div>
          <div className="mt-3"><span className="text-cyan-300">int</span> <span className="text-slate-100">main</span>() {'{'}</div>
          <div className="pl-6"><span className="text-slate-300">auto</span> <span className="text-slate-100">app</span> = <span className="text-slate-200">Application::Create</span>(<span className="text-amber-200">"Studio"</span>);</div>
          <div className="pl-6"><span className="text-slate-300">auto</span> <span className="text-slate-100">window</span> = <span className="text-slate-200">app.CreateWindow</span>({'{'} <span className="text-amber-200">"Framm"</span>, 1280, 780 {'}'});</div>
          <div className="pl-6">window->Layout(</div>
          <div className="pl-10"><span className="text-slate-200">Column()</span></div>
          <div className="pl-14"><span className="text-slate-200">.Spacing(16)</span></div>
          <div className="pl-14"><span className="text-slate-200">.Add(Text(</span><span className="text-amber-200">"Dashboard"</span><span className="text-slate-200">))</span></div>
          <div className="pl-14"><span className="text-slate-200">.Add(Row()</span></div>
          <div className="pl-18"><span className="text-slate-200">.Add(Button(</span><span className="text-amber-200">"Build"</span><span className="text-slate-200">))</span></div>
          <div className="pl-18"><span className="text-slate-200">.Add(Button(</span><span className="text-amber-200">"Inspect"</span><span className="text-slate-200">))</span></div>
          <div className="pl-14">);</div>
          <div className="pl-6"><span className="text-slate-200">return</span> app.Run();</div>
          <div>{'}'}</div>
        </code>
      </pre>
    </section>
  );
}
