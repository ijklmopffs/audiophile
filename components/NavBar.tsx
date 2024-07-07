import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";
import hicon from "/public/images/shared/tablet/icon-hamburger.svg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import Cart from "./Cart";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const router = useRouter();
  const isActive = router.pathname === "/";

  const toggleState = () => {
    setNav((prevState) => !prevState);
  };

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  const closeNav = () => setNav(false);

  return (
    <nav className={isActive ? "bg-black/90" : "bg-black"}>
      <div className="max-w-5xl m-auto p-4 flex items-center justify-between relative">
        <div className="flex items-center w-[71%] md:w-auto justify-between md:justify-normal gap-4">
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
              ? `gap-20 absolute flex flex-col md:flex-row lg:hidden top-16 left-1/2 transform -translate-x-1/2 md:left-10 z-10 bg-white shadow-2xl w-80 md:w-[90%] items-center justify-center p-10 md:p-20 transition-all ease-in-out duration-700`
              : `gap-20 absolute flex flex-col md:flex-row lg:hidden top-[-1200%] left-1/2 transform -translate-x-1/2 md:left-10 z-10 bg-white shadow-2xl w-80 md:w-[90%] items-center justify-center p-10 md:p-20 transition-all ease-in-out duration-700`
          }
        >
          <Link
            href="/headphones"
            onClick={closeNav}
            className="hover:text-colorOne"
          >
            <ProductItem
              imageSrc={headphoneImg}
              title="Headphones"
              url="/headphones"
            />
          </Link>
          <Link
            href="/speakers"
            onClick={closeNav}
            className="hover:text-colorOne"
          >
            <ProductItem
              imageSrc={speakerImg}
              title="Speakers"
              url="/speakers"
            />
          </Link>
          <Link
            href="/earphones"
            onClick={closeNav}
            className="hover:text-colorOne"
          >
            <ProductItem
              imageSrc={earphonesImg}
              title="Earphones"
              url="/earphones"
            />
          </Link>
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

        <button onClick={toggleCart}>
          <Image
            src="/images/shared/desktop/icon-cart.svg"
            alt="cart"
            width={20}
            height={20}
          />
          {showCart && (
            <Cart
              positionClass={`top-24 right-4 md:right-4 lg:right-[30rem]`}
            />
          )}
        </button>
      </div>
    </nav>
  );
}
