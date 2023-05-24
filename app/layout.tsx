import { Archivo, Raleway } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import "../styles/globals.css";

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
      <body className="max-w-[1920px] mx-auto">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
