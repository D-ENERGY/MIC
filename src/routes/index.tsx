import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Cog, FlaskConical, Factory, GraduationCap } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MIC Kaduna — Forging Nigeria's Defense Industrial Future" },
      { name: "description", content: "Military Industrial Complex Kaduna: indigenous defense manufacturing, engineering, R&D, and technical training serving national security." },
      { property: "og:title", content: "MIC Kaduna — Defense Industrial Manufacturing" },
      { property: "og:description", content: "A strategic defense manufacturing and industrial organization advancing Nigeria's self-reliance through engineering excellence." },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Shield, code: "A", title: "Defense Manufacturing", desc: "Military equipment, armored systems support, tactical gear, weapons components, ammunition support." },
  { icon: Cog, code: "B", title: "Engineering & Technical", desc: "Mechanical, electrical and electronic systems, fabrication, welding, maintenance and repairs." },
  { icon: FlaskConical, code: "C", title: "Research & Development", desc: "Defense technology innovation, prototyping, product testing, industrial automation." },
  { icon: Factory, code: "D", title: "Industrial Production", desc: "Metal fabrication, precision machining, industrial tools and customised engineering solutions." },
  { icon: GraduationCap, code: "E", title: "Training & Capacity", desc: "Technical skill acquisition, industrial safety, engineering workshops, military technical support." },
];

const MISSION = [
  "Provide high-quality defense and industrial solutions.",
  "Promote local content and indigenous technology development.",
  "Support national security through sustainable manufacturing.",
  "Develop skilled technical manpower for military and industry.",
  "Foster research, innovation and strategic partnerships.",
];

const VALUES = ["Integrity", "Professionalism", "Discipline", "Innovation", "Excellence", "Patriotism", "Accountability"];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial fabrication workshop with welding sparks" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 blueprint-grid opacity-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-36 md:pt-36">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3">
              <span className="text-stencil text-xs text-brass">00 / Kaduna · Nigeria</span>
              <span className="h-px w-16 bg-brass" />
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold uppercase leading-[0.92] tracking-tight md:text-7xl">
              Forging Nigeria's<br />
              <span className="text-brass">defense industrial</span> future.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The Military Industrial Complex, Kaduna is a strategic defense manufacturing
              and industrial institution committed to indigenous production, technological
              innovation, engineering excellence and technical manpower development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="group inline-flex items-center gap-3 bg-brass px-6 py-4 text-sm font-semibold uppercase tracking-widest text-brass-foreground">
                Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/partnerships" className="inline-flex items-center gap-3 border border-border bg-surface/60 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-foreground hover:border-brass">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hazard-stripes h-1.5 w-full opacity-70" />
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            ["05", "Service Pillars"],
            ["07", "Core Values"],
            ["100%", "Indigenous Focus"],
            ["1", "Mission · National Defense"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 py-10">
              <div className="font-display text-5xl font-bold text-brass">{n}</div>
              <div className="text-stencil mt-2 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="01" eyebrow="Mission" title="Engineered for self-reliance and national security" description="Five operating commitments shape every product, service and partnership we deliver." />
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {MISSION.map((m, i) => (
            <div key={i} className="bg-background p-8">
              <div className="text-stencil text-xs text-brass">M.{String(i + 1).padStart(2, "0")}</div>
              <p className="mt-4 text-base leading-relaxed">{m}</p>
            </div>
          ))}
          <div className="bg-surface p-8">
            <Link to="/about" className="text-stencil inline-flex items-center gap-2 text-xs text-brass hover:underline">
              Read full mission <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative border-y border-border bg-surface">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader number="02" eyebrow="Capabilities" title="Five pillars of industrial strength" description="From defense manufacturing to research and training — disciplined, integrated and indigenous." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, code, title, desc }) => (
              <Link
                key={code}
                to="/services"
                className="group relative border border-border bg-background p-8 transition-all hover:border-brass hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-surface text-brass">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-stencil text-xs text-muted-foreground">{code}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold uppercase">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="text-stencil mt-6 inline-flex items-center gap-2 text-xs text-brass opacity-0 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values marquee */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-stencil text-xs text-brass">03 / Core Values</div>
          <div className="mt-6 flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <span key={v} className="border border-border bg-surface px-5 py-3 font-display text-lg uppercase tracking-wide text-foreground">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}