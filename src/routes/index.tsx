import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CircleGauge,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/dayton-truck-repair-hero.jpg";
import { Button, buttonVariants } from "@/components/ui/button";

const siteUrl = "https://daytontruckrepairs.com/";
const googleBusinessUrl = "https://maps.app.goo.gl/p344iVU7Mk7Krrtx7";
const phoneNumber = "(904) 240-7895";
const phoneHref = "tel:+19042407895";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Truck & Trailer Repair in Dayton, OH | Dayton Truck & Trailer Repair" },
      {
        name: "description",
        content:
          "Dependable truck and trailer repair in Dayton, Ohio. Dayton Truck & Trailer Repair LLC helps commercial drivers and fleets get back on the road.",
      },
      {
        property: "og:title",
        content: "Dayton Truck & Trailer Repair LLC | Dayton, Ohio",
      },
      {
        property: "og:description",
        content:
          "Local truck and trailer repair for commercial drivers and fleets in the Dayton area.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Dayton Truck & Trailer Repair LLC | Dayton, Ohio",
      },
      {
        name: "twitter:description",
        content: "Dependable commercial truck and trailer repair in Dayton, Ohio.",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Dayton Truck & Trailer Repair LLC",
          url: siteUrl,
          telephone: "+1-904-240-7895",
          sameAs: [googleBusinessUrl],
          hasMap: googleBusinessUrl,
          description:
            "Truck and trailer repair serving commercial drivers and fleets in Dayton, Ohio.",
          areaServed: {
            "@type": "City",
            name: "Dayton",
            containedInPlace: { "@type": "State", name: "Ohio" },
          },
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Truck Repair" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trailer Repair" } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Truck,
    number: "01",
    title: "Truck Repair",
    copy: "Practical repair support for commercial trucks, focused on getting your equipment road-ready.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Trailer Repair",
    copy: "Dependable service for trailers and the working systems that keep your load moving safely.",
  },
  {
    icon: CircleGauge,
    number: "03",
    title: "Issue Diagnosis",
    copy: "Clear troubleshooting to identify the problem and help you plan the right next step.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Fleet Support",
    copy: "Responsive repair help for local operators and businesses managing commercial equipment.",
  },
];

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Dayton Truck and Trailer Repair home">
      <span className="grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground">
        <Truck className="size-6" strokeWidth={2.5} />
      </span>
      <span className="min-w-0 font-display text-xl font-extrabold uppercase leading-none text-surface-strong-foreground sm:text-2xl">
        Dayton <span className="text-accent">Truck & Trailer</span>
        <span className="mt-0.5 block text-[0.64rem] font-semibold leading-none text-surface-strong-foreground/65">
          Repair LLC
        </span>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen bg-background">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-surface-strong-foreground/15 bg-surface-strong/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <a href="#services" className="text-sm font-semibold text-surface-strong-foreground/75 transition-colors hover:text-accent">Services</a>
            <a href="#why-us" className="text-sm font-semibold text-surface-strong-foreground/75 transition-colors hover:text-accent">Why us</a>
            <a href="#contact" className="text-sm font-semibold text-surface-strong-foreground/75 transition-colors hover:text-accent">Contact</a>
            <a
              href={phoneHref}
              className="flex items-center gap-2 text-sm font-bold text-surface-strong-foreground transition-colors hover:text-accent"
            >
              <Phone className="size-4 text-accent" /> {phoneNumber}
            </a>
            <a
              className={buttonVariants({ size: "lg" })}
              href={googleBusinessUrl}
              target="_blank"
              rel="noreferrer"
            >
              Find us on Google <ArrowRight />
            </a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-accent md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-surface-strong-foreground/15 bg-surface-strong px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)} className="font-semibold text-surface-strong-foreground">Services</a>
              <a href="#why-us" onClick={() => setMenuOpen(false)} className="font-semibold text-surface-strong-foreground">Why us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="font-semibold text-surface-strong-foreground">Contact</a>
            </div>
          </nav>
        )}
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-20">
        <img
          src={heroImage}
          alt="Heavy-duty semi truck being serviced in a professional repair bay"
          className="absolute inset-0 size-full object-cover object-[68%_center]"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-surface-strong/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--surface-strong)_0%,color-mix(in_oklch,var(--surface-strong)_92%,transparent)_35%,color-mix(in_oklch,var(--surface-strong)_25%,transparent)_72%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 border-l-4 border-accent bg-surface-strong/70 px-4 py-2 text-sm font-bold uppercase text-surface-strong-foreground backdrop-blur-sm">
              <MapPin className="size-4 text-accent" /> Dayton, Ohio
            </div>
            <h1 className="max-w-3xl text-6xl font-extrabold uppercase leading-[0.87] text-surface-strong-foreground sm:text-7xl lg:text-8xl">
              Built to keep <span className="text-accent">you moving.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-surface-strong-foreground/80 sm:text-xl">
              Dependable truck and trailer repair for the people who keep Dayton working.
              Straight answers. Solid work. Less downtime.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className={buttonVariants({ size: "lg", className: "h-14 px-7 text-base font-bold" })} href={googleBusinessUrl} target="_blank" rel="noreferrer">
                View Google Business Profile <ArrowRight />
              </a>
              <a className={buttonVariants({ variant: "outline", size: "lg", className: "h-14 border-surface-strong-foreground/30 bg-surface-strong/40 px-7 text-base font-bold text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-surface-strong-foreground" })} href="#services">
                Explore services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[40%] border-l-4 border-primary bg-background px-8 py-5 lg:block">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3"><Clock3 className="size-5 text-primary" /><span className="text-sm font-bold">Responsive local service</span></div>
            <div className="flex items-center gap-3"><BadgeCheck className="size-5 text-primary" /><span className="text-sm font-bold">Commercial equipment focus</span></div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase text-primary">What we work on</p>
              <h2 className="mt-3 text-5xl font-extrabold uppercase leading-[0.95] text-foreground sm:text-6xl">Your rig.<br />Our priority.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From a truck that is not running right to a trailer that needs attention,
              Dayton Truck & Trailer Repair LLC is ready to hear what is happening and help you move forward.
            </p>
          </div>
          <div className="mt-14 grid border-y border-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group relative border-b border-border px-6 py-9 last:border-b-0 md:border-r md:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0">
                  <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-muted/80">{service.number}</span>
                  <Icon className="size-9 text-primary transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.8} />
                  <h3 className="mt-8 text-2xl font-bold uppercase">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-surface-strong py-20 text-surface-strong-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase text-accent">Local repair support</p>
            <h2 className="mt-3 max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Downtime costs.<br /><span className="text-accent">We understand.</span></h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-surface-strong-foreground/70">
              Commercial vehicles have work to do. Our approach starts with listening,
              understanding the issue, and helping you find the most practical path back to the road.
            </p>
          </div>
          <div className="divide-y divide-surface-strong-foreground/15 border-y border-surface-strong-foreground/15">
            {[
              [Zap, "Focused response", "Clear next steps without unnecessary runaround."],
              [Wrench, "Working-equipment mindset", "Service shaped around the needs of commercial operators."],
              [MapPin, "Dayton-based", "Local help for truck and trailer owners in the Dayton area."],
            ].map(([Icon, title, copy]) => {
              const ItemIcon = Icon as typeof Zap;
              return (
                <div key={String(title)} className="flex gap-5 py-6">
                  <ItemIcon className="mt-1 size-6 shrink-0 text-accent" />
                  <div><h3 className="text-xl font-bold uppercase">{String(title)}</h3><p className="mt-1 text-surface-strong-foreground/60">{String(copy)}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b-8 border-primary bg-accent py-18 sm:py-22">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase text-accent-foreground/65">Need truck or trailer repair?</p>
            <h2 className="mt-2 text-5xl font-extrabold uppercase leading-none text-accent-foreground sm:text-6xl">Let’s get you moving.</h2>
          </div>
          <a className={buttonVariants({ size: "lg", className: "h-14 bg-surface-strong px-7 text-base font-bold text-surface-strong-foreground hover:bg-surface-strong/90" })} href={googleBusinessUrl} target="_blank" rel="noreferrer">
            Contact us on Google <ArrowRight />
          </a>
        </div>
      </section>

      <footer className="bg-surface-strong py-10 text-surface-strong-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div><Brand /><p className="mt-5 max-w-md text-sm leading-relaxed text-surface-strong-foreground/55">Truck and trailer repair serving Dayton, Ohio and the surrounding area.</p></div>
          <div className="text-sm text-surface-strong-foreground/50 sm:text-right">
            <p>Dayton, Ohio</p>
            <p className="mt-1">© {new Date().getFullYear()} Dayton Truck & Trailer Repair LLC</p>
          </div>
        </div>
      </footer>
    </main>
  );
}