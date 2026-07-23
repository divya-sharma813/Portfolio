import type { Metadata } from "next";
import { Cormorant_Garamond, Prata, Public_Sans } from "next/font/google";
import "./globals.css";
import ProjectPageTransition from "./ProjectPageTransition";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteUrl = new URL(configuredSiteUrl.endsWith("/") ? configuredSiteUrl : `${configuredSiteUrl}/`);
const socialImage = new URL("og.png", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Divya Sharma — Product Designer",
  description:
    "Portfolio of Divya Sharma, a product designer creating thoughtful digital products across e-commerce, gaming and AI.",
  openGraph: {
    title: "Divya Sharma — Product Designer",
    description:
      "Thoughtful digital products across e-commerce, gaming and AI.",
    type: "website",
    images: [{ url: socialImage, width: 1732, height: 908 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divya Sharma — Product Designer",
    description:
      "Thoughtful digital products across e-commerce, gaming and AI.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${cormorant.variable} ${prata.variable}`}>
        <ProjectPageTransition>{children}</ProjectPageTransition>
      </body>
    </html>
  );
}
