import Image from "next/image";
import Button from "@/components/Button";
import ProductItem from "@/components/ProductItem";
import markII from "/public/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import markIITablet from "/public/images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import markIIMobile from "/public/images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import markI from "/public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import markITablet from "/public/images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import markIMobile from "/public/images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx59 from "/public/images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59Tablet from "/public/images/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Mobile from "/public/images/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";
import ProductSection from "@/components/ProductSection";

export default function headphones() {
  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          headphones
        </h1>
      </header>

      <ProductSection
        imageSrc={markII}
        imageSrcMobile={markIIMobile}
        imageSrcTablet={markIITablet}
        displayStyle="lg:flex-row"
        product="new product"
        alt="mark II headphones"
        title="xx99 mark ii headphones"
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      />

      <ProductSection
        imageSrc={markI}
        imageSrcMobile={markIMobile}
        imageSrcTablet={markITablet}
        displayStyle="lg:flex-row-reverse"
        product=""
        alt="mark I headphones"
        title="xx99 mark i headphones"
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles mixing engineers, and music aficionados alike in studios and on the go."
      />

      <ProductSection
        imageSrc={xx59}
        imageSrcMobile={xx59Mobile}
        imageSrcTablet={xx59Tablet}
        displayStyle="lg:flex-row"
        product=""
        alt="xx59 headphones"
        title="xx59 headphones"
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
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
        title: "Audiophile | Headphones",
        // description: "A jolly good fellow",
        // openGraph: {
        //   image: "https://example.com.image.jpg",
        //   url: "https:/example.com",
        // },
      },
    },
  };
}
