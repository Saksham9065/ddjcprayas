import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} bg-slate-900 text-slate-200 antialiased`}>
        <AppProvider>
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatWidget />
        </AppProvider>
      </body>
    </html>
  );
}