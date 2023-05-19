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
    <>
      <nav
        className={`w-full flex  ${
          isOpen ? "justify-end" : "justify-between"
        } gap-7 py-2 px-5 xs:text-lg `}
      >
        <Link
          href="/"
          className={`${
            styles.logo
          } flex items-center justify-center gap-2 xs:text-lg xl:text-2xl ${
            isOpen ? "hidden" : ""
          }`}
        >
          <Image
            src="/assets/images/logomark.png"
            alt="gensys-logo"
            width={116}
            height={64}
          />
          <p className={`${archivo.variable} font-black`}>GENSYS</p>
        </Link>
        <div
          className={`${raleway.variable} flex items-center justify-between  gap-4 font-bold  relative `}
        >
          <ul
            className={`${raleway.variable} ${styles.ul} lg:flex items-center justify-center gap-12 text-center lg:text-sm xl:text-lg   hidden`}
          >
            <Link href="/portfolio">PORTFOLIO</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/our-story">OUR STORY</Link>
            <Link href="/career">CAREERS</Link>
            <Link href="/calculator">CALCULATOR</Link>
          </ul>
          <button className="bg-[#3F8CFF] font-bold py-3 px-5 xs:px-3 xs:mr-16 sm:mr-20 lg:mr-0 xs:text-sm  ">
            JUST IN TOUCH
          </button>
          <div
            className={`lg:hidden xs:w-9 sm:w-12 ${
              isOpen ? `${styles.menu} ${styles.open} ` : ` ${styles.menu}`
            } `}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <div></div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <ul
          className={`${raleway.variable} ${styles.ul} ${styles.ul_menu}  flex flex-col pl-10 pt-8 font-black relative`}
        >
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>
            PORTFOLIO
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            SERVICES
          </Link>
          <Link href="/our-story" onClick={() => setIsOpen(false)}>
            OUR STORY
          </Link>
          <Link href="/career" onClick={() => setIsOpen(false)}>
            CAREERS
          </Link>
          <Link href="/calculator" onClick={() => setIsOpen(false)}>
            CALCULATOR
          </Link>
          <Image
            src="/assets/images/menu.png"
            alt="menu"
            width={691}
            height={581}
            className="absolute right-0 bottom-0 w-auto h-auto"
          />
        </ul>
      )}
    </>
  );
}
