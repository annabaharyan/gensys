import { Archivo, Raleway } from "next/font/google";
import { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Navbar from "@/src/components/Navbar";
import "../styles/globals.css";

export const archivo: NextFontWithVariable = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});
export const raleway: NextFontWithVariable = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GENSYS",
  description: "Outsourcing company for building apps ",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[1920px] mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
