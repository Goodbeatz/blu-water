"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Our Source", href: "/source" },
  { name: "Quality", href: "/quality" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Trade", href: "/trade" },
  { name: "Investors", href: "/investors" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-widest text-primary uppercase">
            Blu
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/trade"
              className="ml-4 inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
            >
              Request Samples
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-muted hover:text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-text-muted hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/trade"
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-light rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Request Samples
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
