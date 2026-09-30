type Props = {
  eyebrow: string;
  title: string;
  description: string;
  tint?: "blue" | "green" | "red" | "yellow";
};

const tints = {
  blue: "bg-blue-50/40",
  green: "bg-emerald-50/40",
  red: "bg-rose-50/40",
  yellow: "bg-amber-50/40",
};

export default function PageHeader({ eyebrow, title, description, tint = "blue" }: Props) {
  return (
    <section className={`${tints[tint]} border-b border-slate-100`}>
      <div className="container-x py-16 sm:py-20">
        <span className="section-eyebrow">{eyebrow}</span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
      </div>
    </section>
  );
}
