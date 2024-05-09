import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import hicon from "/public/images/shared/tablet/icon-hamburger.svg";

export default function NavBar() {
  const router = useRouter();
  const isActive = router.pathname === "/";

  return (
    <nav className={isActive ? "bg-black/90" : "bg-black"}>
      <div className="max-w-5xl m-auto p-4 flex items-center justify-between">
        <div className="flex items-center justify-between md:justify-normal gap-4">
          <Link href="/" className="lg:hidden">
            <Image src={hicon} alt="" />
          </Link>

          <Link href="/">
            <Image
              src="/images/shared/desktop/logo.svg"
              alt="nav"
              width={143}
              height={15}
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
