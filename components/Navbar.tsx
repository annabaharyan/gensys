"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Archivo } from "next/font/google";
import { Raleway } from "next/font/google";
import styles from "@/styles/navbar.module.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={` w-full flex justify-between py-2 `}>
      <Link
        href="/"
        className={`${styles.logo} flex items-center justify-center gap-2`}
      >
        <Image
          src="/assets/images/logomark.png"
          alt="gensys-logo"
          width={116}
          height={64}
        />
        <p className={`${archivo.variable}`}>GENSYS</p>
      </Link>
      <div
        className={`${raleway.variable} flex items-center justify-between font-bold  relative`}
      >
        <ul
          className={`${raleway.variable} ${styles.ul} xl:flex items-center justify-center sm:mx-10   hidden`}
        >
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/our-story">OUR STORY</Link>
          <Link href="/career">CAREERS</Link>
          <Link href="/calculator">CALCULATOR</Link>
        </ul>
        <button className="bg-[#3F8CFF] font-bold py-3 px-6 sm:mr-28 xl:mr-0">
          JUST IN TOUCH
        </button>
        <div
          className={`xl:hidden ${
            isOpen ? `${styles.menu} ${styles.open} ` : ` ${styles.menu}`
          } `}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <div></div>
        </div>
      </div>
      
    </nav>
  );
}
