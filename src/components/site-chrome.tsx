import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Menu, Phone, Truck, X } from "lucide-react";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { googleBusinessUrl, phoneHref, phoneNumber } from "@/lib/site";

export function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Dayton Truck and Trailer Repair home">
      <span className="grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground">
        <Truck className="size-6" strokeWidth={2.5} />
      </span>
      <span className="min-w-0 font-display text-xl font-extrabold uppercase leading-none text-surface-strong-foreground sm:text-2xl">
        Dayton <span className="text-accent">Truck & Trailer</span>
        <span className="mt-0.5 block text-[0.64rem] font-semibold leading-none text-surface-strong-foreground/65">
          Repair LLC
        </span>
      </span>
    </Link>
  );
}

const navClass = "text-sm font-semibold text-surface-strong-foreground/75 transition-colors hover:text-accent";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-surface-strong-foreground/15 bg-surface-strong/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link to="/services" className={navClass} activeProps={{ className: "text-accent" }}>Services</Link>
          <Link to="/" hash="why-us" className={navClass}>Why us</Link>
          <Link to="/" hash="contact" className={navClass}>Contact</Link>
          <a href={phoneHref} className="flex items-center gap-2 text-sm font-bold text-surface-strong-foreground transition-colors hover:text-accent">
            <Phone className="size-4 text-accent" /> {phoneNumber}
          </a>
          <a className={buttonVariants({ size: "lg" })} href={googleBusinessUrl} target="_blank" rel="noreferrer">
            Find us on Google <ArrowRight />
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-accent md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="border-t border-surface-strong-foreground/15 bg-surface-strong px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <Link to="/services" onClick={close} className="font-semibold text-surface-strong-foreground">Services</Link>
            <Link to="/" hash="why-us" onClick={close} className="font-semibold text-surface-strong-foreground">Why us</Link>
            <Link to="/" hash="contact" onClick={close} className="font-semibold text-surface-strong-foreground">Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="bg-surface-strong py-10 text-surface-strong-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div><Brand /><p className="mt-5 max-w-md text-sm leading-relaxed text-surface-strong-foreground/55">Truck and trailer repair serving Dayton, Ohio and the surrounding area.</p></div>
          <div className="text-sm text-surface-strong-foreground/50 sm:text-right">
            <a href={phoneHref} className="inline-flex items-center gap-2 text-lg font-extrabold text-surface-strong-foreground transition-colors hover:text-accent sm:justify-end">
              <Phone className="size-4 text-accent" /> {phoneNumber}
            </a>
            <p className="mt-3">
              <a href={googleBusinessUrl} target="_blank" rel="noreferrer" className="font-semibold underline decoration-surface-strong-foreground/30 underline-offset-4 transition-colors hover:text-accent">
                Dayton Truck &amp; Trailer Repair LLC on Google
              </a>
            </p>
            <p className="mt-3">Dayton, Ohio</p>
            <p className="mt-1">© {new Date().getFullYear()} Dayton Truck & Trailer Repair LLC</p>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-surface-strong-foreground/20 bg-surface-strong/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <a href={phoneHref} className={buttonVariants({ className: "h-12 flex-1 text-sm font-bold" })}>
          <Phone /> Call now
        </a>
        <a href={googleBusinessUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "h-12 flex-1 border-surface-strong-foreground/30 bg-transparent text-sm font-bold text-surface-strong-foreground hover:bg-surface-strong-foreground/10 hover:text-surface-strong-foreground" })}>
          <MapPin /> Google profile
        </a>
      </div>
    </>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="bg-surface-strong pb-16 pt-36 text-surface-strong-foreground sm:pb-20 sm:pt-44">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-extrabold uppercase text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-extrabold uppercase leading-[0.92] sm:text-7xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
