import Image from "next/image";
import { useRouter } from "next/router";
import Button from "@/components/Button";
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

export default function Speakers() {
  const router = useRouter();

  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          speakers
        </h1>
      </header>

      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-20 md:my-40">
        <div
          className={`flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between`}
        >
          <Image
            src={zx9}
            alt="zx9 speakers"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={zx9Tablet}
            alt="zx9 speakers"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={zx9Mobile}
            alt="zx9 speakers"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <span className="opacity-50 text-sm uppercase text-colorOne tracking-widest">
                new product
              </span>
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                zx9 speaker
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/speakers/zx9-speaker")}
              >
                See product
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-20 md:my-40">
        <div
          className={`flex flex-col lg:flex-row-reverse gap-5 lg:gap-0 items-center justify-between`}
        >
          <Image
            src={zx7}
            alt="zx7 speakers"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={zx7Tablet}
            alt="zx7 speakers"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={zx7Mobile}
            alt="zx7 speakers"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                zx7 speaker
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/speakers/zx7-speaker")}
              >
                See product
              </Button>
            </div>
          </div>
        </div>
      </section>

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
          url={"earphones"}
        />
      </section>

      <section
        className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row 
      justify-between items-center my-20"
      >
        <div className="w-96 space-y-5 text-center lg:text-start">
          <h2 className="uppercase font-bold text-3xl md:text-4xl text-black">
            Bringing you the <span className="text-colorOne">best</span> audio
            gear
          </h2>
          <p className="font-medium text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
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
          className="rounded-md block md:hidden w-4/5"
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
