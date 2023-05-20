import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import Hero from "@/components/Hero";
import { Archivo, Raleway } from "next/font/google";
import Services from "@/components/Services";

export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});
export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "GENSYS",
  description: "Outsourcing company for building apps ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[1920px]  mx-auto">
        <Navbar />
        <Hero />
        <Services />
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main> */}
      </body>
    </html>
  );
}
