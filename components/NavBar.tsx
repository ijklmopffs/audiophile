import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";
import hicon from "/public/images/shared/tablet/icon-hamburger.svg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === "/";

  const toggleState = () => {
    setNav((prevState) => !prevState);
  };

  return (
    <nav className={isActive ? "bg-black/90" : "bg-black"}>
      <div className="max-w-5xl m-auto p-4 flex items-center justify-between">
        <div className="flex items-center w-[22rem] md:w-auto justify-between md:justify-normal gap-4">
          <button className="lg:hidden" onClick={toggleState}>
            <Image src={hicon} alt="" />
          </button>

          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="nav"
              width={143}
              height={15}
            />
          </Link>
        </div>

        <div
          className={
            nav
              ? `gap-20 absolute flex flex-col md:flex-row lg:hidden top-16 left-16 md:left-10 z-10 bg-white shadow-2xl w-96 md:w-[90%] items-center justify-center p-10 md:p-20 transition-all ease-in-out duration-700`
              : `gap-20 absolute flex flex-col md:flex-row lg:hidden top-[-100%] left-16 md:left-10 z-10 bg-white shadow-2xl w-96 md:w-[90%] items-center justify-center p-10 md:p-20 transition-all ease-in-out duration-700`
          }
        >
          <ProductItem
            imageSrc={headphoneImg}
            title="Headphones"
            url={"/headphones"}
          />
          <ProductItem
            imageSrc={speakerImg}
            title="Speakers"
            url={"/speakers"}
          />
          <ProductItem
            imageSrc={earphonesImg}
            title="Earphones"
            url={"/earphones"}
          />
        </div>

        <div className="text-white space-x-4 font-bold text-xs hidden lg:block">
          <Link href="/" className="hover:text-colorOne">
            Home
          </Link>
          <Link href="/headphones" className="hover:text-colorOne">
            Headphones
          </Link>
          <Link href="/speakers" className="hover:text-colorOne">
            Speakers
          </Link>
          <Link href="/earphones" className="hover:text-colorOne">
            Earphones
          </Link>
        </div>

        <Link href="/cart">
          <Image
            src="/images/shared/desktop/icon-cart.svg"
            alt="cart"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </nav>
  );
}
