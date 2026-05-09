type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ number, eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-stencil text-xs text-brass">{number}</span>
        <span className="h-px w-10 bg-brass" />
        <span className="text-stencil text-xs text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}