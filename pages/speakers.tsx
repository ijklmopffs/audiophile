import Image from "next/image";
import Link from "next/link";
import ProductSection from "@/components/ProductSection";
import ProductItem from "@/components/ProductItem";
import zx9 from "/public/images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9Tablet from "/public/images/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9Mobile from "/public/images/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx7 from "/public/images/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7Tablet from "/public/images/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7Mobile from "/public/images/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";

export default function speakers() {
  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          speakers
        </h1>
      </header>
      <ProductSection
        imageSrc={zx9}
        imageSrcMobile={zx9Mobile}
        imageSrcTablet={zx9Tablet}
        displayStyle="lg:flex-row"
        product="new product"
        alt="zx9 speakers"
        title="zx9 speaker"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
      />

      <ProductSection
        imageSrc={zx7}
        imageSrcMobile={zx7Mobile}
        imageSrcTablet={zx7Tablet}
        displayStyle="lg:flex-row-reverse"
        product=""
        alt="zx7 speakers"
        title="zx7 speaker"
        description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
      />

      <section
        className="my-40 max-w-5xl mx-auto flex flex-col md:flex-row gap-20 
      md:gap-10 lg:gap-0 items-center justify-between md:justify-center lg:justify-between"
      >
        <ProductItem imageSrc={headphoneImg} title="Headphones" />
        <ProductItem imageSrc={speakerImg} title="Speakers" />
        <ProductItem imageSrc={earphonesImg} title="Earphones" />
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
        title: "Audiophile | Speakers",
        // description: "A jolly good fellow",
        // openGraph: {
        //   image: "https://example.com.image.jpg",
        //   url: "https:/example.com",
        // },
      },
    },
  };
}
