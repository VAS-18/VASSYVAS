import type { Metadata } from "next";
import { Doto } from "next/font/google";
import "./globals.css";
import SideNav from "@/components/SideNav";
import Footer from "@/components/Footer";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Port",
  description: "Hope Comes Alive on Friday Nights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doto.variable} antialiased min-h-screen flex flex-col relative`}>
        <div className="gradient-blur fixed inset-0"></div>
        <div className="fixed left-0 top-0 h-screen group -translate-x-16 hover:translate-x-0 transition-all duration-300">
          <SideNav />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
