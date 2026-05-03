interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return (
    <button className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700" {...props}>
      {label}
    </button>
  );
}
