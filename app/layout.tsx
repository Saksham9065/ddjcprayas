import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import RootContent from "./root-content";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalit Dignity & Justice Center (DDJC)",
  description: "Access to Justice • Equality • Human Rights",
  icons: {
    icon: "/favicon.png",
    apple: "/images/logo/ddjc-logo-circular.png",
  },
  other: {
    "google-site-verification": "4UQRuy0aah5ICJjG4PJI0QejanHdkD8id7259CJQ3p8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", geist.variable)} data-scroll-behavior="smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8XWSTRJJC5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8XWSTRJJC5');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <AppProvider>
          <RootContent>{children}</RootContent>
        </AppProvider>
      </body>
    </html>
  );
}