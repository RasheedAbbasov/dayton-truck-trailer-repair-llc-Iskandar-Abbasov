import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { services, siteUrl } from "@/lib/site";

const title = "Truck & Trailer Repair Services in Dayton, OH | Dayton Truck & Trailer Repair";
const description =
  "Tire changes, brakes & suspension, engine bay, coolant & radiator, computer diagnostics, and welding for trucks and trailers in Dayton, Ohio.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/services` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pb-20 lg:pb-0">
      <SiteHeader />
      <PageHero eyebrow="Our services" title={<>What we <span className="text-accent">work on.</span></>}>
        <p className="mt-6 max-w-2xl text-lg text-surface-strong-foreground/70">
          Truck and trailer repair in Dayton, Ohio. Pick a service to learn more.
        </p>
      </PageHero>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative bg-background p-8 transition-colors hover:bg-muted/50"
              >
                <span className="absolute right-6 top-6 font-display text-4xl font-extrabold text-muted">{String(i + 1).padStart(2, "0")}</span>
                <Icon className="size-9 text-primary" strokeWidth={1.8} />
                <h2 className="mt-8 text-2xl font-bold uppercase">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div></div>
      </section>
      <SiteFooter />
    </main>
  );
}
