"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MobileMenuComponent } from "@/src/components";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const toggleMenu: () => void = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu: () => void = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`2xl:px-[120px] xl:px-16 max-w-[1920px] w-full top:0 xs:px-8 ${
          isOpen || scrollTop > 0
            ? "bg-white sticky top-0 z-20"
            : "bg-transparent relative"
        } flex  ${
          isOpen ? "justify-end" : "justify-between"
        } gap-7 py-2 xs:text-lg z-10`}
      >
        <Link
          href="/"
          className={`${styles.logo} flex items-center gap-2 ${
            isOpen ? "hidden" : ""
          }`}
        >
          <div className="xs:h-8 md:h-16 xs:w-14 md:w-28 relative">
            <Image
              src="/assets/images/navbar/logomark.svg"
              alt="gensys-logo"
              fill
              className="object-cover"
            />
          </div>
          <p className={`font-archivo font-black xs:text-2xl md:text-4xl`}>
            GENSYS
          </p>
        </Link>
        <div
          className={`font-raleway flex items-center justify-between  gap-4 font-bold `}
        >
          <div className="md:w-64 flex items-center gap-x-10  xs:justify-end">
            <button className="xs:hidden md:block bg-blue font-bold w-[167px] py-3 px-5 xs:px-3 xs:text-sm font-raleway hover:bg-activeBlue  hover:text-white ">
              JUST IN TOUCH
            </button>
            <div
              className={`xs:w-10 md:w-12 cursor-pointer ${
                isOpen ? `${styles.open} ${styles.menu}` : `${styles.menu}`
              } `}
              onClick={toggleMenu}
            >
              <div></div>
            </div>
          </div>
        </div>
        {isOpen && <MobileMenuComponent closeMenu={closeMenu} />}
      </nav>
    </>
  );
}
