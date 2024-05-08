import Image from "next/image";
import heroImg from "/public/images/home/desktop/image-hero.jpg";

export default function Home() {
  return (
    <main className="">
      {/* <header className="bg-black">
        <section className="max-w-7xl mx-auto">
          <div className="bg-colorFour/30 w-full h-[.5px]" />
          <div className="mt-10 flex items-center">
            <div className="text-white uppercase space-y-4 w-96">
              <span className="opacity-50 text-sm">new product</span>
              <h1 className="font-bold text-5xl">xx99 mark ii headphones</h1>
              <p className="opacity-50 text-sm lowercase">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="bg-colorOne text-xs px-4 py-2 uppercase">
                See product
              </button>
            </div>

            <div>
              <Image src={heroImg} alt="image" width={200} height={200} />
            </div>
          </div>
        </section>
      </header> */}
    </main>
  );
}
