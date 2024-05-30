import Image from "next/image";
import Link from "next/link";
import arrowRight from "/public/images/shared/desktop/icon-arrow-right.svg";

const ProductItem = ({
  imageSrc,
  title,
  url,
}: {
  imageSrc: any;
  title: string;
  url: string;
}) => {
  return (
    <div className="bg-colorThree uppercase w-60 md:w-60 lg:w-80 h-36 flex flex-col items-center rounded-md">
      <Image
        src={imageSrc}
        alt={`${title} indicator`}
        width={120}
        height={80}
        className="-mb-16 relative bottom-14"
      />
      <p className="font-bold text-lg text-black/70">{title}</p>
      <Link
        href={url}
        className="font-bold text-xs flex items-center gap-2 text-black/70"
      >
        shop
        <Image src={arrowRight} alt="direction" width={6} />
      </Link>
    </div>
  );
};

export default ProductItem;
