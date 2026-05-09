import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MIC Kaduna" },
      { name: "description", content: "Get in touch with Military Industrial Complex Kaduna for partnerships, contracts and inquiries." },
      { property: "og:title", content: "Contact — MIC Kaduna" },
      { property: "og:description", content: "Reach the MIC Kaduna team for defense manufacturing, engineering and partnership inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Message received. Our team will respond shortly.");
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <>
      <Toaster />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="text-stencil text-xs text-brass">05 / Contact</div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.95] md:text-6xl">
            Initiate <span className="text-brass">contact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            For partnerships, contracts, technical inquiries or general information,
            reach the Military Industrial Complex Kaduna team using the details below.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-px bg-border">
          {[
            { icon: MapPin, label: "Address", v: "Kaduna State, Nigeria" },
            { icon: Mail, label: "Email", v: "info@mic-kaduna.ng", href: "mailto:info@mic-kaduna.ng" },
            { icon: Phone, label: "Phone", v: "+234 XXX XXX XXXX", href: "tel:+234" },
            { icon: Globe, label: "Website", v: "www.mic-kaduna.ng" },
          ].map(({ icon: Icon, label, v, href }) => (
            <div key={label} className="flex items-center gap-6 bg-surface p-8">
              <div className="flex h-12 w-12 flex-none items-center justify-center border border-border bg-background text-brass">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-stencil text-xs text-brass">{label}</div>
                {href ? (
                  <a href={href} className="mt-1 block font-display text-xl font-semibold hover:text-brass">{v}</a>
                ) : (
                  <div className="mt-1 font-display text-xl font-semibold">{v}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="border border-border bg-surface p-8 md:p-10">
          <div className="text-stencil text-xs text-brass">Secure inquiry form</div>
          <h2 className="mt-3 text-3xl font-bold uppercase">Send a message</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Organization" name="org" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div className="mt-5">
            <Field label="Subject" name="subject" required />
          </div>
          <div className="mt-5">
            <label className="text-stencil text-xs text-muted-foreground">Message *</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full border border-border bg-background p-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className="mt-8 inline-flex items-center gap-3 bg-brass px-6 py-4 text-sm font-semibold uppercase tracking-widest text-brass-foreground disabled:opacity-60"
          >
            {sent ? "Transmitted" : "Transmit Message"} <Send className="h-4 w-4" />
          </button>
        </form>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-stencil text-xs text-brass">Operating Region</div>
          <div className="mt-4 flex aspect-[3/1] w-full items-center justify-center border border-border bg-background blueprint-grid">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-brass" />
              <div className="mt-3 font-display text-2xl font-bold uppercase">Kaduna State · Nigeria</div>
              <div className="text-stencil mt-1 text-xs text-muted-foreground">10.5222° N, 7.4383° E</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-stencil text-xs text-muted-foreground">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-background p-3 text-sm focus:border-brass focus:outline-none"
      />
    </div>
  );
}