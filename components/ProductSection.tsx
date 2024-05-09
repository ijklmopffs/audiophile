import React from "react";
import Image from "next/image";
import Button from "./Button"; // Assuming you have a Button component defined

interface ProductSectionProps {
  imageSrc: any;
  imageSrcMobile: any;
  imageSrcTablet: any;
  product: string;
  displayStyle: string;
  alt: string;
  title: string;
  description: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  imageSrc,
  imageSrcMobile,
  imageSrcTablet,
  product,
  displayStyle,
  alt,
  title,
  description,
}) => {
  return (
    <section className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto my-20 md:my-40">
      <div
        className={`flex flex-col ${displayStyle} gap-5 lg:gap-0 items-center justify-between`}
      >
        <Image
          src={imageSrc}
          alt={alt}
          width={300}
          className="hidden lg:block rounded-md"
        />
        <Image
          src={imageSrcTablet}
          alt={alt}
          className="hidden md:block lg:hidden rounded-md"
        />
        <Image
          src={imageSrcMobile}
          alt={alt}
          className="rounded-md md:hidden w-4/5"
        />
        <div>
          <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
            <span className="opacity-50 text-sm uppercase text-colorOne tracking-widest">
              {product}
            </span>
            <h1 className="font-bold text-5xl uppercase">{title}</h1>
            <p className="opacity-50 text-sm">{description}</p>
            <Button
              bgColor="bg-colorOne"
              textColor="text-white"
              line=""
              lineWidth=""
              width=""
            >
              See product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
