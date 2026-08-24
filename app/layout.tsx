import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chatbot/Chatbot";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalit Dignity & Justice Center (DDJC)",
  description: "Access to Justice • Equality • Human Rights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", geist.variable)} data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Chatbot />
        </AppProvider>
      </body>
    </html>
  );
}