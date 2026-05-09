import { createFileRoute } from "@tanstack/react-router";
import { Shield, Cog, FlaskConical, Factory, GraduationCap, Check } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MIC Kaduna" },
      { name: "description", content: "Defense manufacturing, engineering, R&D, industrial production and technical training services from MIC Kaduna." },
      { property: "og:title", content: "Services — MIC Kaduna" },
      { property: "og:description", content: "Five integrated service pillars supporting Nigeria's defense and industrial capability." },
    ],
  }),
  component: ServicesPage,
});

const PILLARS = [
  {
    code: "A",
    icon: Shield,
    title: "Defense Manufacturing",
    desc: "Indigenous production of mission-critical defense hardware and consumables.",
    items: [
      "Military equipment production",
      "Armored systems support",
      "Tactical gear and accessories",
      "Weapons component fabrication",
      "Ammunition support systems",
    ],
  },
  {
    code: "B",
    icon: Cog,
    title: "Engineering & Technical Services",
    desc: "Multi-disciplinary engineering for defense and industrial clients.",
    items: [
      "Mechanical engineering",
      "Electrical and electronic systems",
      "Industrial machine fabrication",
      "Welding and metal works",
      "Equipment maintenance and repairs",
    ],
  },
  {
    code: "C",
    icon: FlaskConical,
    title: "Research & Development",
    desc: "Innovation, prototyping and validation of defense and industrial technology.",
    items: [
      "Defense technology innovation",
      "Prototype development",
      "Product testing and evaluation",
      "Industrial automation solutions",
    ],
  },
  {
    code: "D",
    icon: Factory,
    title: "Industrial Production",
    desc: "High-precision metalwork and customised industrial outputs at scale.",
    items: [
      "Metal fabrication",
      "Precision machining",
      "Industrial tools and components",
      "Customized engineering solutions",
    ],
  },
  {
    code: "E",
    icon: GraduationCap,
    title: "Training & Capacity Development",
    desc: "Building Nigeria's next generation of military and industrial technicians.",
    items: [
      "Technical skill acquisition",
      "Industrial safety training",
      "Engineering workshops",
      "Military technical support training",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-stencil text-xs text-brass">02 / Services</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
            Five pillars. <span className="text-brass">One mission.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Integrated capabilities across manufacturing, engineering, research, production
            and training — engineered to deliver reliability, durability, precision and
            operational effectiveness.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="space-y-px bg-border">
          {PILLARS.map(({ code, icon: Icon, title, desc, items }, idx) => (
            <div key={code} className="grid gap-10 bg-background p-10 md:grid-cols-[280px_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-stencil text-xs text-brass">PILLAR {code}</span>
                  <span className="h-px w-10 bg-brass" />
                </div>
                <div className="mt-6 flex h-16 w-16 items-center justify-center border border-border bg-surface text-brass">
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-3xl font-bold uppercase leading-tight">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
              <ul className="grid gap-3 self-center sm:grid-cols-2">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3 border border-border bg-surface/60 p-4">
                    <Check className="mt-0.5 h-5 w-5 flex-none text-brass" />
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <CTASection />
    </>
  );
}