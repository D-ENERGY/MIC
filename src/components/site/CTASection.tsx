import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute right-0 top-0 hazard-stripes h-full w-2 opacity-70" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
        <div>
          <div className="text-stencil text-xs text-brass">Engage / Collaborate</div>
          <h3 className="mt-3 max-w-2xl text-3xl font-bold uppercase leading-tight md:text-4xl">
            Build with the institution forging Nigeria's defense industrial base.
          </h3>
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 bg-brass px-6 py-4 text-sm font-semibold uppercase tracking-widest text-brass-foreground"
        >
          Initiate Contact
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}