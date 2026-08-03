import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Pizza Sixteen | Hot, Fresh & Cheesy Pizza",
  description: "Order freshly baked pizza from Pizza Sixteen. Explore signature pizzas, exciting offers and fast delivery.",
  keywords: ["Pizza Sixteen","Pizza delivery Dubai","Fresh pizza","Pizza restaurant","Order pizza online"],
  openGraph: { title: "Pizza Sixteen | Hot, Fresh & Cheesy Pizza", description: "Big flavour. Fast delivery. Good times.", type: "website" },
  twitter: { card: "summary_large_image", title: "Pizza Sixteen", description: "Hot, fresh and seriously cheesy." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@type":"Restaurant", name:"Pizza Sixteen", image:"/images/pizza-box.png", servesCuisine:"Pizza", address:{"@type":"PostalAddress",addressLocality:"Dubai",addressCountry:"AE"}, openingHours:"Su-Sa 11:00-01:00", telephone:"+971-XX-XXX-XXXX", priceRange:"AED 36-49" };
  return <html lang="en"><body className={`${anton.variable} ${manrope.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>{children}</body></html>;
}
