import type { Metadata } from "next";
import { Geist, Geist_Mono, Monda, Anta } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
});

const anta = Anta({
  variable: "--font-anta",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "RahaMo. - Trader Crypto with Fun",
  description: "U want like Timothy Ronald?",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/assets/ico.ico",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anta.variable} ${monda.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
