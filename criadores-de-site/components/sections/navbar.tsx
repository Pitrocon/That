"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { NAV_LINKS, SITE_BRAND } from "@/data/site-content";
import { PillButton } from "@/components/ui/pill-button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#vitrine"
          className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold tracking-tight text-titanium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-surface-contrast">
            <Sparkles className="h-3.5 w-3.5 text-titanium" aria-hidden="true" />
          </span>
          <span>{SITE_BRAND.name}</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-titanium-muted transition-colors hover:text-titanium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PillButton href="#orcamento" variant="primary" size="sm" className="hidden sm:inline-flex">
            Solicitar site
          </PillButton>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-surface-elevated text-titanium md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apple-link"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Navegação móvel"
          className="border-t border-white/10 bg-surface px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium text-titanium-muted hover:bg-white/[0.06] hover:text-titanium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
