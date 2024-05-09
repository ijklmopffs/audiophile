import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const isActive = router.pathname === "/";

  return (
    <nav className={isActive ? "bg-black/90" : "bg-black"}>
      <div className="max-w-5xl m-auto p-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/shared/desktop/logo.svg"
            alt="nav"
            width={143}
            height={15}
          />
        </Link>

        <div className="text-white space-x-4 font-bold text-xs">
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/earphones">Earphones</Link>
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
