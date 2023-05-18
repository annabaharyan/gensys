import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/../public/assets/images/home1.png"
        alt="gensys"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </>
  );
}
