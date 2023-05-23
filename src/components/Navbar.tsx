"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu: () => void = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu: () => void = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav
        className={`2xl:px-[120px] xl:px-16 w-full  top:0 flex  ${
          isOpen ? "justify-end" : "justify-between"
        } gap-7 py-2 px-0 xs:text-lg  relative`}
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
            src="/assets/images/navbar/logomark.svg"
            alt="gensys-logo"
            width={116}
            height={64}
          />
          <p className={`font-archivo font-black`}>GENSYS</p>
        </Link>
        <div
          className={`font-raleway flex items-center justify-between  gap-4 font-bold `}
        >
          <div className="w-64 flex items-center gap-x-10">
            <button className="bg-blue font-bold   w-[167px] py-3 px-5 xs:px-3 xs:text-sm font-raleway hover:bg-activeBlue  hover:text-white ">
              JUST IN TOUCH
            </button>
            <div
              className={`w-12 ${
                isOpen ? `${styles.open} ${styles.menu}` : `${styles.menu}`
              } `}
              onClick={toggleMenu}
            >
              <div></div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </>
  );
}
