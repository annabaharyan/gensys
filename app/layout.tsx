import { Metadata } from "next";
import { Archivo, Raleway } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import "../styles/globals.css";

/*eslint-disable*/
const archivo = Archivo({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-archivo",
}); 
const raleway = Raleway({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-raleway",
}); 
/*eslint-enable*/
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
      <body className="max-w-[1920px] mx-auto ">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
