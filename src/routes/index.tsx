import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Clock3, MapPin, Phone, Wrench, Zap } from "lucide-react";

import heroImage from "@/assets/dayton-truck-repair-hero.jpg";
import { buttonVariants } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { googleBusinessUrl, phoneHref, phoneNumber, services, siteUrl as baseUrl } from "@/lib/site";

const siteUrl = `${baseUrl}/`;

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

function Index() {
  return (
    <main id="top" className="min-h-screen bg-background pb-20 lg:pb-0">
      <SiteHeader />

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
              <a className={buttonVariants({ size: "lg", className: "h-14 px-7 text-base font-bold" })} href={phoneHref}>
                <Phone /> Call {phoneNumber}
              </a>
              <a className={buttonVariants({ variant: "outline", size: "lg", className: "h-14 border-surface-strong-foreground/30 bg-surface-strong/40 px-7 text-base font-bold text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-surface-strong-foreground" })} href={googleBusinessUrl} target="_blank" rel="noreferrer">
                View Google Business Profile <ArrowRight />
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
          <div className="mt-14 grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="group relative bg-background px-6 py-9 transition-colors hover:bg-muted/50">
                  <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-muted/80">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="size-9 text-primary transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.8} />
                  <h3 className="mt-8 text-2xl font-bold uppercase">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">Learn more <ArrowRight className="size-4" /></span>
                </Link>
              );
            })}
          </div>
          <Link to="/services" className={buttonVariants({ size: "lg", className: "mt-10 h-12 px-6 font-bold" })}>View all services <ArrowRight /></Link>
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
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase text-accent-foreground/65">Need truck or trailer repair?</p>
            <h2 className="mt-2 text-5xl font-extrabold uppercase leading-none text-accent-foreground sm:text-6xl">Let’s get you moving.</h2>
            <a
              href={phoneHref}
              className="mt-7 inline-flex items-center gap-3 text-3xl font-extrabold uppercase text-accent-foreground underline decoration-2 underline-offset-8 transition-opacity hover:opacity-80 sm:text-4xl"
            >
              <Phone className="size-7" /> {phoneNumber}
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
            <a className={buttonVariants({ size: "lg", className: "h-14 bg-surface-strong px-7 text-base font-bold text-surface-strong-foreground hover:bg-surface-strong/90" })} href={phoneHref}>
              <Phone /> Call now
            </a>
            <a className={buttonVariants({ variant: "outline", size: "lg", className: "h-14 border-accent-foreground/30 bg-transparent px-7 text-base font-bold text-accent-foreground hover:bg-accent-foreground/10" })} href={googleBusinessUrl} target="_blank" rel="noreferrer">
              Contact us on Google <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}