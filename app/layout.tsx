import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import MacOSMenuBar from "@/components/macos-menu-bar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "le minh - boutique it consultancy",
  description:
    "le minh is a registered IT service firm based in Ho Chi Minh City, providing high-end technical solutions for global clients.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LE MINH",
  description:
    "Boutique IT consultancy specializing in software architecture, API integration, and cloud infrastructure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "129/5A Hoang Van Thu, Phuong Phu Nhuan",
    addressLocality: "Ho Chi Minh City",
    addressCountry: "VN",
  },
  email: "leminh5@gmail.com",
  telephone: "+84 786 599 687",
  url: "https://ooohminh.github.io/le-minh/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="ayu-dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <MacOSMenuBar />
          <main className="pt-12 md:pt-16 pb-10">
            <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}