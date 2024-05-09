import Image from "next/image";
import Link from "next/link";
import arrowRight from "/public/images/shared/desktop/icon-arrow-right.svg";

const ProductItem = ({ imageSrc, title }: { imageSrc: any; title: string }) => {
  return (
    <div className="bg-colorThree uppercase w-80 md:w-60 lg:w-80 h-36 flex flex-col items-center rounded-md">
      <Image
        src={imageSrc}
        alt={`${title} indicator`}
        width={120}
        height={80}
        className="-mb-16 relative bottom-14"
      />
      <p className="font-bold text-lg">{title}</p>
      <Link
        href="/"
        passHref
        className="font-bold text-xs flex items-center gap-2"
      >
        shop
        <Image src={arrowRight} alt="direction" width={6} />
      </Link>
    </div>
  );
};

export default ProductItem;
