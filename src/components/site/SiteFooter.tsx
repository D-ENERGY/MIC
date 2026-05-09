import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="hazard-stripes h-1.5 w-full opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-brass text-brass-foreground">
              <Shield className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display text-xl font-bold tracking-wider">Military Industrial Complex</div>
              <div className="text-stencil text-[10px] text-muted-foreground">Kaduna · Nigeria</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            A strategic defense manufacturing and industrial organization advancing
            indigenous military hardware production, engineering excellence and
            technical manpower development.
          </p>
        </div>

        <div>
          <div className="text-stencil text-xs text-brass">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/capabilities", "Capabilities"],
              ["/partnerships", "Partnerships"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-stencil text-xs text-brass">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brass" /> Kaduna State, Nigeria</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brass" /> info@mic-kaduna.ng</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brass" /> +234 XXX XXX XXXX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Military Industrial Complex (MIC), Kaduna. All rights reserved.</div>
          <div className="text-stencil">Integrity · Discipline · Excellence</div>
        </div>
      </div>
    </footer>
  );
}