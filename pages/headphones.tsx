import { useRouter } from "next/router";
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

export default function Headphones() {
  const router = useRouter();

  return (
    <main>
      <header className="bg-black p-20">
        <h1 className="text-white uppercase text-center font-bold text-4xl">
          headphones
        </h1>
      </header>

      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-20 md:my-40">
        <div
          className={`flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between`}
        >
          <Image
            src={markII}
            alt="mark II headphones"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={markIITablet}
            alt="mark II headphones"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={markIIMobile}
            alt="mark II headphones"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <span className="opacity-50 text-sm uppercase text-colorOne tracking-widest">
                new product
              </span>
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                xx99 mark ii headphones
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() =>
                  router.push("/headphones/xx99-mark-ii-headphones")
                }
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
            src={markI}
            alt="mark I headphones"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={markITablet}
            alt="mark I headphones"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={markIMobile}
            alt="mark I headphones"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                xx99 mark i headphones
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() =>
                  router.push("/headphones/xx99-mark-i-headphones")
                }
              >
                See product
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-20 md:my-40">
        <div
          className={`flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between`}
        >
          <Image
            src={xx59}
            alt="xx59 headphones"
            width={300}
            className="hidden lg:block rounded-md"
          />
          <Image
            src={xx59Tablet}
            alt="xx59 headphones"
            className="hidden md:block lg:hidden rounded-md"
          />
          <Image
            src={xx59Mobile}
            alt="xx59 headphones"
            className="rounded-md md:hidden w-4/5"
          />
          <div>
            <div className="space-y-5 md:space-y-7 w-96 text-center lg:text-start">
              <h1 className="font-bold text-3xl md:text-5xl uppercase text-black">
                xx59 headphones
              </h1>
              <p className="text-xs md:text-sm text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/headphones/xx59-headphones")}
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
