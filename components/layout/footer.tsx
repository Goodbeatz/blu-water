import Link from "next/link";

const footerLinks = {
  Products: [
    { name: "Glass Collection", href: "/products#glass" },
    { name: "PET Collection", href: "/products#pet" },
    { name: "Mineral Profile", href: "/products#mineral-profile" },
  ],
  Company: [
    { name: "Our Source", href: "/source" },
    { name: "Quality & Testing", href: "/quality" },
    { name: "Sustainability", href: "/sustainability" },
  ],
  Business: [
    { name: "Trade Accounts", href: "/trade" },
    { name: "Request Samples", href: "/trade#samples" },
    { name: "For Investors", href: "/investors" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-accent mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-semibold tracking-widest uppercase">
            Blu
          </div>
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Blu Premium Artesian Water. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
