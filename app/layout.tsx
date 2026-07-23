import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const siteUrl = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", siteUrl).toString();

  return {
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
}

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
