import { Metadata } from "next";
import { Archivo } from "next/font/google";

import Navbar from "@/src/components/Navbar";
import "../styles/globals.css";

const archivo = Archivo({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-archivo",
});
export const metadata: Metadata = {
  title: "Gensys",
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
