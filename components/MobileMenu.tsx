import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { PageInfo } from "./Navbar";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  pages: PageInfo[];
};

export default function MobileMenu({ setIsOpen, pages }: Props) {
  return (
    <ul
      className={`${styles.ul} ${styles.ul_menu} font-raleway bg-white flex flex-col pl-10 pt-8 font-black relative`}
    >
      {pages.map((page) => (
        <Link
          href={`${page.pagePath}`}
          key={page.pageId}
          onClick={() => setIsOpen(false)}
        >
          {page.pageName}
        </Link>
      ))}
      <Image
        src="/assets/images/menu.png"
        alt="menu"
        width={691}
        height={581}
        className="absolute right-0 bottom-0 w-auto h-auto"
      />
    </ul>
  );
}
