import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";

const googleSans = localFont({
  src: [
    {
      path: '../public/assets/fonts/GoogleSans-Regular_0.ttf',
      weight: '400'
    },
    {
      path: '../public/assets/fonts/GoogleSans-Bold-v1.27.ttf',
      weight: '700'
    }
  ],
  variable: '--font-google'
})

export const metadata: Metadata = {
  title: "GDG Cloud Kolkata Chapter Website",
  description: "Chapter Website of GDG Cloud Kolkata",
  icons: './favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSans.className}`}>
        <Navbar />
        <main className="flex flex-col items-start justify-start w-full mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
