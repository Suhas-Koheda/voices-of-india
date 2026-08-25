import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Voices of India — Explore India's Languages Through Sound",
    template: "%s | Voices of India",
  },
  description:
    "Explore India's regional languages, expressions, voices, and folk traditions through an interactive map.",
  openGraph: {
    title: "Voices of India",
    description:
      "Discover how people speak, sing, and express themselves across India's regions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-stone-800 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
