import type { Metadata } from "next";
import { Sora, Mulish } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Tours & Travels | Customized Tour Packages India",
  description:
    "Global Tours & Travels offers fully customized tour packages for families, friends, and solo travelers. Explore Goa, Manali, Kerala, Rajasthan, Dubai & more. Founded by Nisarg Patel & Aryan Patel.",
  keywords: [
    "tour packages India", "family tour packages", "Goa tour", "Manali trip",
    "Kerala backwaters tour", "Dubai tour package", "customized travel",
    "Global Tours Travels Ahmedabad",
  ],
  openGraph: {
    title: "Global Tours & Travels | Your Journey, Your Way",
    description: "Customized tour packages crafted around you — for families, friends, and solo wanderers.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1B3A6B",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${mulish.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
