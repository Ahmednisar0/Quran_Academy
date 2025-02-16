import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NetworkStatus from "./components/NetworkStatus";
import Loader from "./components/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QURAN ACADEMY",
  description: "Quran Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader/>
        {/* Network Status Checker */}
        <NetworkStatus />

       
          <div className="max-w-[1440px] mx-auto bg-pink-100 font-mono text-black">
            <Navbar />
            {children}
            <Footer />
          </div>
        
        
      </body>
    </html>
  );
}