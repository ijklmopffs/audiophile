import Link from "next/link";
import Image from "next/image";
import ProductItem from "@/components/ProductItem";
import heroImg from "/public/images/home/desktop/image-hero.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import big9Speaker from "/public/images/home/desktop/image-speaker-zx9.png";
import big7Speaker from "/public/images/home/desktop/image-speaker-zx7.jpg";

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
              <button className="bg-colorOne text-xs px-4 py-2 uppercase">
                See product
              </button>
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

      <section className="max-w-5xl mx-auto rounded-md bg-colorOne flex items-center justify-center p-10 pb-0 gap-10 bg-bgImage">
        <Image src={big9Speaker} alt="zx7 speaker" width={250} height={250} />
        <div className="space-y-5 w-80">
          <h2 className="uppercase font-bold text-5xl">zx9 speaker</h2>
          <p className="text-sm font-medium opacity-60">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="uppercase bg-black text-white px-4 py-2 text-xs">
            see product
          </button>
        </div>
      </section>
    </main>
  );
}
