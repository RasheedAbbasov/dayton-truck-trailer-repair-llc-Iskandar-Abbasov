import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { googleBusinessUrl, phoneHref, phoneNumber, services, siteUrl } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = services.find((x) => x.slug === loaderData?.slug);
    if (!s) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const title = `${s.title} in Dayton, OH | Dayton Truck & Trailer Repair`;
    const url = `${siteUrl}/services/${s.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: s.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.intro,
            url,
            areaServed: { "@type": "City", name: "Dayton" },
            provider: { "@type": "AutoRepair", name: "Dayton Truck & Trailer Repair LLC", telephone: "+1-904-240-7895", url: siteUrl },
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero eyebrow="Not found" title="Service not found" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Link to="/services" className={buttonVariants()}>See all services</Link>
      </div>
    </main>
  );
}

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = services.find((s) => s.slug === slug)!;
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <main className="min-h-screen bg-background pb-20 lg:pb-0">
      <SiteHeader />
      <PageHero eyebrow="Dayton, Ohio" title={service.title}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-strong-foreground/75">{service.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={phoneHref} className={buttonVariants({ size: "lg", className: "h-14 px-7 text-base font-bold" })}>
            <Phone /> Call {phoneNumber}
          </a>
          <a href={googleBusinessUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "h-14 border-surface-strong-foreground/30 bg-transparent px-7 text-base font-bold text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-surface-strong-foreground" })}>
            Find us on Google <ArrowRight />
          </a>
        </div>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <Icon className="size-12 text-primary" strokeWidth={1.8} />
            <h2 className="mt-6 text-4xl font-extrabold uppercase leading-none sm:text-5xl">What's included</h2>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase text-primary hover:underline">
              <ArrowLeft className="size-4" /> All services
            </Link>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {service.points.map((p) => (
              <li key={p} className="flex items-center gap-4 py-5 text-lg font-semibold">
                <Check className="size-5 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-2xl font-extrabold uppercase">Other services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className={buttonVariants({ variant: "outline" })}>
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
