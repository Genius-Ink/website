import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "GeniusRails - Instant Global Transfers. Built for Africa.",
  description:
    "Modern money rails for people and businesses. Send money across borders instantly with lower fees than banks.",
  keywords:
    "cross-border payments, money transfer, Africa, stablecoins, remittance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
