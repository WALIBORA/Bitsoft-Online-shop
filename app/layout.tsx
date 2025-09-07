import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "@/components/banner";
import Selection from "@/components/selection";
import Container from "@/components/container";
import Items from "@/components/items";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s Bitsoft Online Store",
    default: "Bitsoft Online Store",
  },
  description: "we make sure you get the best products at the best prices",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased p-16`}>
        <Header/>
        <Navbar/>
        <Banner/>
        <Selection/>
        <Items/>
        {children} <Footer/>
      </body>
    </html>
  );
}
