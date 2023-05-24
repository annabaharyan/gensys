import Link from "next/link";
import Image from "next/image";
import pages from "@/src/assets/config/pages.json";
import styles from "@/styles/navbar.module.css";

type Props = {
  closeMenu: () => void;
};

export default function MobileMenu({ closeMenu }: Props) {
  return (
    <ul
      className={`${styles.ul_menu} max-w-[948px] w-full font-raleway bg-white flex flex-col gap-y-10 pl-10 pt-8 font-black absolute  top-24 right-0 z-10 text-2xl`}
    >
      {pages.map((page) => (
        <Link
          href={`${page.pagePath}`}
          key={page.pageId}
          onClick={closeMenu}
          className="hover:text-activeBlue duration-500"
        >
          {page.pageName}
        </Link>
      ))}
      <Image
        src="/assets/images/menu/toggle-menu.svg"
        alt="menu"
        width={691}
        height={581}
        className="absolute right-0 bottom-0 w-auto h-auto"
      />
    </ul>
  );
}
