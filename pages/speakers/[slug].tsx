import { useState, useEffect } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { sanityFetch } from "@/components/sanity/client";
import { urlFor } from "@/components/sanity/client";
import ProductItem from "@/components/ProductItem";
import Button from "@/components/Button";
import addCommaToNumber from "@/helpers/convert";
import xx9 from "/public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "/public/images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9 from "/public/images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7 from "/public/images/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";
import { useProvider } from "@/context/provider";
import Example from "@/components/BarLoader";

interface Speaker {
  name: string;
  slug: { current: string };
  id: string;
  details: string;
  featureOne: string;
  featureTwo: string;
  price: number;
  product: object;
  itemsOne: string;
  itemsTwo: string;
  itemsThree: string;
  itemsFour: string;
  itemsFive: string;
  displayOne: object;
  displayTwo: object;
  displayThree: object;
}

export default function SpeakerPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useProvider();
  const [figure, setFigure] = useState(1);

  const incQty = () => setFigure((prevFigure) => prevFigure + 1);
  const decQty = () => {
    setFigure((prevFigure) => (prevFigure > 1 ? prevFigure - 1 : prevFigure));
  };

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/speaker?slug=${slug}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.details || "Failed to fetch data");
        }
        const data = await response.json();
        setSpeaker(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const items = [
    { label: "2x", value: speaker?.itemsOne },
    { label: "2x", value: speaker?.itemsTwo },
    { label: "1x", value: speaker?.itemsThree },
    { label: "1x", value: speaker?.itemsFour },
    { label: "1x", value: speaker?.itemsFive },
  ];

  if (loading) return <Example />;
  if (error) return <p>Error: {error}</p>;
  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    if (speaker !== null) {
      addToCart(speaker, figure);
    }
  };

  return (
    <main className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-8">
      <button
        className="my-10 font-medium text-sm text-black p-2"
        onClick={handleGoBack}
      >
        Go back
      </button>
      <section className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-0 items-center justify-between">
        <img
          src={urlFor(speaker.product)}
          alt=""
          className="w-[21rem] h-[24rem] md:w-[34rem] md:h-[35rem] rounded-md"
        />

        <div className="space-y-5 w-80 md:w-[25rem]">
          {slug === "zx9-speaker" && (
            <span className="uppercase text-colorOne tracking-[.5em] font-normal text-sm">
              new product
            </span>
          )}
          <h1 className="font-bold text-3xl md:text-4xl w-48 md:w-auto text-black">
            {speaker.name}
          </h1>
          <p className="font-medium text-sm text-black/70">{speaker.details}</p>
          <p className="font-bold text-lg tracking-widest text-black">
            ${addCommaToNumber(speaker.price)}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5 bg-colorFour px-5 py-3">
              <button onClick={decQty} className="text-black">
                -
              </button>
              <p className="text-black">{figure}</p>
              <button onClick={incQty} className="text-black">
                +
              </button>
            </div>
            <div>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 md:my-40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <div className="p-2">
          <h2 className="font-bold text-3xl uppercase my-5 text-black">
            Features
          </h2>
          <p className="font-medium text-sm text-black/70 w-[21rem] md:w-[30rem]">
            {speaker.featureOne}
          </p>
          <p className="font-medium text-sm text-black/70 w-[21rem] md:w-[30rem] mt-10">
            {speaker.featureTwo}
          </p>
        </div>
        <div className="p-2">
          <h2 className="font-bold text-3xl uppercase my-5 text-black">
            in the box
          </h2>
          {items.map(
            (item, index) =>
              item.value && (
                <div key={index} className="flex items-center gap-4 my-3">
                  <span className="font-bold text-sm text-colorOne">
                    {item.label}
                  </span>
                  <p className="text-sm text-black/70 font-medium">
                    {item.value}
                  </p>
                </div>
              )
          )}
        </div>
      </section>

      <section className="my-20 md:my-40 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0">
        <div className="flex flex-col gap-4">
          <img
            src={urlFor(speaker.displayOne)}
            alt={speaker.name}
            className="rounded-md h-[17rem] w-4/5 md:w-auto mx-auto md:mx-0"
          />
          <img
            src={urlFor(speaker.displayTwo)}
            alt={speaker.name}
            className="rounded-md h-[17rem] w-4/5 md:w-auto mx-auto md:mx-0"
          />
        </div>
        <img
          src={urlFor(speaker.displayThree)}
          alt={speaker.name}
          className="rounded-md h-[35rem] md:w-[34rem] w-[90%] mx-auto md:mx-0"
        />
      </section>

      {slug === "zx9-speaker" && (
        <>
          <h3 className="text-center uppercase font-bold text-3xl md:text-4xl mb-8">
            you may also like
          </h3>

          <section className="flex flex-col gap-16 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={zx7}
                alt="xx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">
                zx7 speaker
              </h3>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/speakers/zx7-speaker")}
              >
                see product
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx9}
                alt="xx59"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">
                xx99 mark i
              </h3>
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
                see product
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx59}
                alt="zx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">xx59</h3>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/headphones/xx59-headphones")}
              >
                see product
              </Button>
            </div>
          </section>
        </>
      )}

      {slug === "zx7-speaker" && (
        <>
          <h3 className="text-center uppercase font-bold text-3xl md:text-4xl mb-8">
            you may also like
          </h3>
          <section className="flex flex-col gap-16 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={zx9}
                alt="zx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">
                zx9 speaker
              </h3>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/speakers/zx9-speaker")}
              >
                see product
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx9}
                alt="xx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">
                xx9 mark i
              </h3>
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
                see product
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx59}
                alt="xx59"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase text-black">xx59</h3>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/headphones/xx59-headphones")}
              >
                see product
              </Button>
            </div>
          </section>
        </>
      )}

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
          <p className="font-medium text-sm opacity-50 text-black/70 w-4/5 mx-auto md:w-auto md:mx-0">
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
          className="rounded-md hidden lg:block"
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

export const getStaticPaths: GetStaticPaths = async () => {
  const SPEAKER_QUERY = '*[_type == "speakers"]{ "slug": slug.current }';
  const speakers = await sanityFetch<{ slug: string }[]>({
    query: SPEAKER_QUERY,
  });

  const paths = speakers.map((speaker) => ({
    params: { slug: speaker.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  return {
    props: {
      slug,
      key: slug,
    },
  };
};
