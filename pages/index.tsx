import Link from "next/link";
import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import Button from "@/components/Button";
import heroImg from "/public/images/home/desktop/image-hero.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import big9Speaker from "/public/images/home/desktop/image-speaker-zx9.png";
import big7Speaker from "/public/images/home/desktop/image-speaker-zx7.jpg";
import earphones from "/public/images/home/desktop/image-earphones-yx1.jpg";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";

export default function Home() {
  return (
    <main>
      <header className="bg-black/90">
        <section className="max-w-5xl mx-auto">
          <div className="bg-colorFour/30 w-full h-[.5px]" />

          <div className="mt-10 flex items-center">
            <div className="text-white space-y-7 w-96">
              <span className="opacity-50 text-sm uppercase">new product</span>
              <h1 className="font-bold text-5xl uppercase">
                xx99 mark ii headphones
              </h1>
              <p className="opacity-50 text-sm">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
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

            <div>
              <Image src={heroImg} alt="hero" />
            </div>
          </div>
        </section>
      </header>

      <section className="my-40 max-w-5xl mx-auto flex items-center justify-between">
        <ProductItem imageSrc={headphoneImg} title="Headphones" />
        <ProductItem imageSrc={speakerImg} title="Speakers" />
        <ProductItem imageSrc={earphonesImg} title="Earphones" />
      </section>

      <section
        className="max-w-5xl mx-auto rounded-md bg-colorOne flex items-start 
      justify-center pt-20 p-10 pb-0 gap-10"
      >
        <Image src={big9Speaker} alt="zx7 speaker" width={250} height={250} />
        <div className="space-y-8 w-80 mt-5">
          <h2 className="uppercase font-bold text-5xl text-white">
            zx9 speaker
          </h2>
          <p className="text-sm font-medium opacity-60">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            bgColor="bg-black"
            textColor="text-white"
            line=""
            lineWidth=""
            width=""
          >
            See product
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto rounded-md flex relative my-20">
        <div className="absolute left-20 top-24 space-y-5">
          <h2 className="font-bold text-2xl uppercase">zx7 speaker</h2>
          <Button
            bgColor="bg-transparent"
            textColor="text-black"
            line="outline"
            lineWidth="outline-2"
            width=""
          >
            See product
          </Button>
        </div>
        <Image src={big7Speaker} alt="zx7 speaker" className="rounded-md" />
      </section>

      <section className="max-w-5xl mx-auto flex gap-10 justify-between">
        <Image
          src={earphones}
          alt="earphones"
          className="rounded-md"
          width={400}
        />
        <div className="bg-colorThree rounded-md flex flex-col justify-center space-y-5 w-full p-10">
          <h2 className="font-bold text-2xl uppercase">yx1 earphones</h2>
          <Button
            bgColor="bg-transparent"
            textColor="text-black"
            line="outline"
            lineWidth="outline-2"
            width="w-40"
          >
            See product
          </Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto flex justify-between items-center my-20">
        <div className="w-96 space-y-5">
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
        <Image src={bestGear} alt="showcasing best gear" width={350} />
      </section>
    </main>
  );
}
