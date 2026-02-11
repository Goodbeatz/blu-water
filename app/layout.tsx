import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blu — Premium Alkaline Artesian Water from Costa Rica",
    template: "%s | Blu Water",
  },
  description:
    "Naturally alkaline artesian spring water from the Costa Rican rainforest. Bottled at origin. Trusted by luxury hospitality worldwide.",
  openGraph: {
    title: "Blu — Premium Alkaline Artesian Water",
    description:
      "Artesian spring water from the Costa Rican rainforest. Naturally alkaline. Bottled at origin.",
    type: "website",
    locale: "en_US",
    siteName: "Blu Water",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
