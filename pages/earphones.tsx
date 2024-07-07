import Image from "next/image";
import { useRouter } from "next/router";
import ProductItem from "@/components/ProductItem";
import Button from "@/components/Button";
import yx1 from "/public/images/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "/public/images/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import yx1Mobile from "/public/images/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";

export default function Earphones() {
  const router = useRouter();
  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          earphones
        </h1>
      </header>

      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-20 md:my-40">
        <div
          className={`flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between`}
        >
          <Image
            src={yx1}
            alt="yx1 earphones"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={yx1Tablet}
            alt="yx1 earphones"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={yx1Mobile}
            alt="yx1 earphones"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <span className="opacity-50 text-sm uppercase text-colorOne tracking-widest">
                new product
              </span>
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                yx1 wireless earphones
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/earphones/yx1-wireless-earphones")}
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
          url={"/earphones"}
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
