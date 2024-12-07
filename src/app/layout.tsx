import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tecorbitron",
  description: "Tecorbitron provides cutting-edge software solutions, technology consulting, and innovative tech services to boost business efficiency. Discover our comprehensive services in software development, cloud solutions, and IT consulting.",
  keywords: "software solutions, technology consulting, IT services, cloud solutions, software development, tech innovations, TE-CORBITRON",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
