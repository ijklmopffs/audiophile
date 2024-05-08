import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl m-auto p-4 flex items-center justify-between">
        <Image
          src="/images/shared/desktop/logo.svg"
          alt="nav"
          width={143}
          height={15}
        />

        <div className="text-white space-x-4 font-bold text-xs">
          <Link href="/">Home</Link>
          <Link href="/">Headphones</Link>
          <Link href="/">Speakers</Link>
          <Link href="/">Earphones</Link>
        </div>

        <Image
          src="/images/shared/desktop/icon-cart.svg"
          alt="cart"
          width={20}
          height={20}
        />
      </div>
    </nav>
  );
}
