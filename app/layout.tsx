import Navbar from "@/components/Navbar";
import "../styles/globals.css";

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
      <body className="max-w-[1920px] 2xl:px-[120px] xl:px-16 mx-auto">
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
