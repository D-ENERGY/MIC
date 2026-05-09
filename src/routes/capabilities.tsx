import { createFileRoute } from "@tanstack/react-router";
import { Target, Award, Users, Lightbulb, Building2, Wrench, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — MIC Kaduna" },
      { name: "description", content: "Strategic objectives, advantages and quality commitments of MIC Kaduna's defense and industrial operations." },
      { property: "og:title", content: "Capabilities — MIC Kaduna" },
      { property: "og:description", content: "Experienced personnel, modern facilities and quality-driven defense industrial production." },
    ],
  }),
  component: CapabilitiesPage,
});

const OBJECTIVES = [
  { icon: Target, t: "Defense Production Capacity", d: "Enhance Nigeria's defense production capacity at scale." },
  { icon: ShieldCheck, t: "Reduce Foreign Dependence", d: "Reduce dependence on foreign military equipment." },
  { icon: Building2, t: "Industrial Growth", d: "Promote industrial growth and broader economic development." },
  { icon: Lightbulb, t: "Technology Transfer", d: "Encourage technological transfer and continuous innovation." },
  { icon: Users, t: "Employment & Empowerment", d: "Support employment generation and youth empowerment." },
  { icon: Wrench, t: "Sustainable Engineering", d: "Sustain engineering services that strengthen national security." },
];

const ADVANTAGES = [
  "Experienced technical personnel",
  "Modern industrial facilities",
  "Commitment to quality assurance",
  "Strong operational discipline",
  "Research-driven manufacturing approach",
  "Capacity for large-scale industrial production",
];

function CapabilitiesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-stencil text-xs text-brass">03 / Capabilities</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
            Built on discipline. <span className="text-brass">Delivered with precision.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Our objectives, strategic advantages and quality commitments define how we
            execute every contract — from prototype to large-scale industrial run.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="01" eyebrow="Objectives" title="What we are working to achieve" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OBJECTIVES.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="border border-border bg-surface p-8 transition hover:border-brass">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center bg-background text-brass">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-stencil text-xs text-muted-foreground">OBJ.{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold uppercase">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="relative border-y border-border bg-surface">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader number="02" eyebrow="Strategic Advantages" title="Why partners choose MIC" description="Six advantages that compound across every project we deliver." />
          <ul className="space-y-px bg-border">
            {ADVANTAGES.map((a, i) => (
              <li key={a} className="flex items-center gap-6 bg-background p-6">
                <span className="font-display text-3xl font-bold text-brass">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quality */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="03" eyebrow="Commitment to Quality" title="Reliability is the standard, not the goal" />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="md:col-span-3 border border-border bg-surface p-10">
            <Award className="h-10 w-10 text-brass" />
            <p className="mt-6 text-xl leading-relaxed">
              Military Industrial Complex Kaduna maintains strict quality control standards
              to ensure <strong className="text-foreground">reliability, durability, precision</strong> and
              operational effectiveness across all products and services.
            </p>
          </div>
          <div className="grid gap-6">
            {["Reliability", "Durability", "Precision", "Effectiveness"].map((q) => (
              <div key={q} className="border border-border bg-background p-4 text-center">
                <div className="text-stencil text-xs text-brass">QC</div>
                <div className="mt-1 font-display text-lg font-bold uppercase">{q}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}