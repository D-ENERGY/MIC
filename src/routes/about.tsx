import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MIC Kaduna" },
      { name: "description", content: "Vision, mission and core values of the Military Industrial Complex (MIC), Kaduna — Nigeria's strategic defense manufacturing institution." },
      { property: "og:title", content: "About MIC Kaduna" },
      { property: "og:description", content: "Strategic defense manufacturing institution committed to innovation, self-reliance and indigenous technological advancement." },
    ],
  }),
  component: AboutPage,
});

const MISSION = [
  "Provide high-quality defense and industrial solutions.",
  "Promote local content and indigenous technology development.",
  "Support national security through sustainable manufacturing and engineering services.",
  "Develop skilled technical manpower for military and industrial applications.",
  "Foster research, innovation and strategic partnerships.",
];

const VALUES = ["Integrity", "Professionalism", "Discipline", "Innovation", "Excellence", "Patriotism", "Accountability"];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-stencil text-xs text-brass">01 / About</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
            A strategic institution for Nigeria's <span className="text-brass">defense industrial base.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Military Industrial Complex is a strategic defense manufacturing and industrial
            organization located in Kaduna. The organization is committed to strengthening
            national defense capabilities through local production, technological innovation,
            engineering excellence and industrial development.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            The Military Industrial Complex serves as a key institution in advancing
            indigenous military hardware production, maintenance services, research,
            logistics support and technical manpower development in Nigeria.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[280px_1fr]">
          <div>
            <div className="text-stencil text-xs text-brass">02 / Vision</div>
            <h2 className="mt-3 text-3xl font-bold uppercase">Our Vision</h2>
          </div>
          <div className="relative border-l-4 border-brass pl-8">
            <Quote className="absolute -left-3 -top-3 h-6 w-6 text-brass" />
            <p className="font-display text-3xl leading-tight md:text-4xl">
              To become a world-class defense and industrial manufacturing institution
              driven by innovation, self-reliance and technological advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="03" eyebrow="Mission" title="Our operating mandate" />
        <ol className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {MISSION.map((m, i) => (
            <li key={i} className="flex gap-6 bg-background p-8">
              <div className="text-stencil text-2xl font-bold text-brass">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-base leading-relaxed">{m}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className="relative border-y border-border bg-surface">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <SectionHeader number="04" eyebrow="Core Values" title="The principles that govern us" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v} className="border border-border bg-background p-6">
                <div className="text-stencil text-xs text-brass">V.{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-display text-2xl font-bold uppercase">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader number="05" eyebrow="Conclusion" title="A continuing commitment" />
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-muted-foreground">
          The Military Industrial Complex Kaduna remains committed to advancing Nigeria's
          industrial and defense capabilities through innovation, professionalism and
          indigenous technological development. The organization continues to play a
          significant role in national security, industrial growth and sustainable
          technological advancement.
        </p>
      </section>

      <CTASection />
    </>
  );
}