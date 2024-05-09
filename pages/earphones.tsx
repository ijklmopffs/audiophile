import Image from "next/image";
import ProductSection from "@/components/ProductSection";
import ProductItem from "@/components/ProductItem";
import yx1 from "/public/images/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "/public/images/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1Mobile from "/public/images/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";

export default function earphones() {
  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          earphones
        </h1>
      </header>

      <ProductSection
        imageSrc={yx1}
        imageSrcMobile={yx1Mobile}
        imageSrcTablet={yx1Tablet}
        displayStyle="lg:flex-row"
        product="new product"
        alt="yx1 earphones"
        title="yx1 wireless earphones"
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />

      <section
        className="my-40 max-w-5xl mx-auto flex flex-col md:flex-row gap-20 
      md:gap-10 lg:gap-0 items-center justify-between md:justify-center lg:justify-between"
      >
        <ProductItem
          imageSrc={headphoneImg}
          title="Headphones"
          url={"/headphones"}
        />
        <ProductItem imageSrc={speakerImg} title="Speakers" url={"/speakers"} />
        <ProductItem
          imageSrc={earphonesImg}
          title="Earphones"
          url={"/earphones"}
        />
      </section>

      <section
        className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row 
      justify-between items-center my-20"
      >
        <div className="w-96 space-y-5 text-center lg:text-start">
          <h2 className="uppercase font-bold text-4xl">
            Bringing you the <span className="text-colorOne">best</span> audio
            gear
          </h2>
          <p className="font-medium text-sm opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <Image
          src={bestGear}
          alt="showcasing best gear"
          width={350}
          className="hidden lg:block rounded-md"
        />
        <Image
          src={bestGearMobile}
          alt="showcasing best gear"
          className="rounded-md block md:hidden"
        />
        <Image
          src={bestGearTablet}
          alt="showcasing best gear"
          className="rounded-md hidden md:block lg:hidden"
        />
      </section>
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metadata: {
        title: "Audiophile | Earphones",
      },
    },
  };
}
