import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, GetApp } from "@/components";

export const metadata: Metadata = {
  title: "Hotels.ng",
  description: "A clone of the official page using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <GetApp />
        <Footer />
      </body>
    </html>
  );
}
