import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Shield, FlaskConical, Cog, Globe2, GraduationCap, Heart, Users, Wrench, Briefcase, BookOpen, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships & CSR — MIC Kaduna" },
      { name: "description", content: "Collaborations with government, defense, research and educational institutions, plus MIC Kaduna's CSR initiatives." },
      { property: "og:title", content: "Partnerships & CSR — MIC Kaduna" },
      { property: "og:description", content: "Strategic collaborations and community impact in Nigeria's defense industrial ecosystem." },
    ],
  }),
  component: PartnershipsPage,
});

const PARTNERS = [
  { icon: Landmark, t: "Government Agencies", d: "Federal and state institutions advancing national security and industry." },
  { icon: Shield, t: "Defense Institutions", d: "Armed forces, paramilitary and strategic security organizations." },
  { icon: FlaskConical, t: "Research Organizations", d: "Innovation centres, think tanks and applied science laboratories." },
  { icon: Cog, t: "Engineering Companies", d: "OEMs, fabricators and integrators across critical industries." },
  { icon: Globe2, t: "International Technical Partners", d: "Cross-border collaborations for technology and capability transfer." },
  { icon: GraduationCap, t: "Educational Institutions", d: "Universities, polytechnics and vocational training providers." },
];

const CSR = [
  { icon: Users, t: "Youth Empowerment", d: "Programs that equip young Nigerians with industrial and defense skills." },
  { icon: BookOpen, t: "Technical Education Support", d: "Investment in STEM, engineering and vocational pathways." },
  { icon: Heart, t: "Community Development", d: "Initiatives improving livelihoods around our operating regions." },
  { icon: Briefcase, t: "Employment Opportunities", d: "Direct and indirect job creation for skilled and emerging talent." },
  { icon: Wrench, t: "Industrial Training Partnerships", d: "Apprenticeships and workshops with industry collaborators." },
];

function PartnershipsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-stencil text-xs text-brass">04 / Partnerships</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
            Building strength <span className="text-brass">through collaboration.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Military Industrial Complex Kaduna welcomes strategic collaboration with
            institutions across government, industry, research, education and the
            international defense community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="01" eyebrow="Collaboration" title="Who we work with" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="border border-border bg-surface p-8 transition hover:border-brass">
              <Icon className="h-8 w-8 text-brass" />
              <h3 className="mt-5 text-xl font-bold uppercase">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-border bg-surface">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader number="02" eyebrow="Corporate Social Responsibility" title="Contributing to national development" description="Beyond contracts, we invest in the people and communities that power Nigeria's industrial future." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CSR.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="border border-border bg-background p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-brass" />
                  <span className="text-stencil text-xs text-muted-foreground">CSR.{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 hazard-stripes h-full w-2 opacity-70" />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-20 md:flex-row md:items-center">
          <div>
            <div className="text-stencil text-xs text-brass">Become a partner</div>
            <h3 className="mt-3 max-w-2xl text-3xl font-bold uppercase md:text-4xl">
              Bring a project, capability or partnership opportunity to the table.
            </h3>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-3 bg-brass px-6 py-4 text-sm font-semibold uppercase tracking-widest text-brass-foreground">
            Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}