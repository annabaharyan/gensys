"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import styles from "@/styles/navbar.module.css";

export type PageInfo = {
  pageId: number;
  pagePath: string;
  pageName: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pages: PageInfo[] = [
    { pageId: 1, pagePath: "/portfolio", pageName: "PORTFOLIO" },
    { pageId: 2, pagePath: "/services", pageName: "SERVICES" },
    { pageId: 3, pagePath: "/our-story", pageName: "OUR STORY" },
    { pageId: 4, pagePath: "/career", pageName: "CAREERS" },
    { pageId: 5, pagePath: "/calculator", pageName: "CALCULATOR" },
  ];

  return (
    <>
      <nav
        className={`2xl:px-[120px] xl:px-16 w-full  top:0 flex  ${
          isOpen ? "justify-end" : "justify-between"
        } gap-7 py-2 px-0 xs:text-lg `}
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
          <p className={`font-archivo font-black`}>GENSYS</p>
        </Link>
        <div
          className={`font-raleway flex items-center justify-between  gap-4 font-bold  relative `}
        >
          <ul
            className={`font-raleway ${styles.ul} lg:flex items-center justify-center gap-12 md:gap-x-4 text-center lg:text-sm xl:text-lg   hidden`}
          >
            {pages.map((page) => (
              <Link href={`${page.pagePath}`} key={page.pageId}>
                {page.pageName}
              </Link>
            ))}
          </ul>
          <button className="bg-blue font-bold  xs:w-28 sm:w-[167px] py-3 px-5 xs:px-3 xs:mr-16 sm:mr-20 lg:mr-0 xs:text-sm font-raleway hover:bg-activeBlue  hover:text-white ">
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
      {isOpen && <MobileMenu setIsOpen={setIsOpen} pages={pages} />}
    </>
  );
}
