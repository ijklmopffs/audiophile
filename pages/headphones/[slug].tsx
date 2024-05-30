import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sanityFetch } from "@/components/sanity/client";
import { urlFor } from "@/components/sanity/client";
import { useProvider } from "@/context/provider";
import ProductItem from "@/components/ProductItem";
import Button from "@/components/Button";
import addCommaToNumber from "@/helpers/convert";
import xx9 from "/public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99 from "/public/images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "/public/images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9 from "/public/images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";
import Example from "@/components/BarLoader";

interface Headphone {
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

export default function HeadphonePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [headphone, setHeadphone] = useState<Headphone | null>(null);
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
        const response = await fetch(`/api/headphone?slug=${slug}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.details || "Failed to fetch data");
        }
        const data = await response.json();
        setHeadphone(data);
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
    { label: "1x", value: headphone?.itemsOne },
    { label: "2x", value: headphone?.itemsTwo },
    { label: "1x", value: headphone?.itemsThree },
    { label: "1x", value: headphone?.itemsFour },
    { label: "1x", value: headphone?.itemsFive },
  ];

  if (loading) return <Example />;
  if (error) return <p>Error: {error}</p>;
  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    if (headphone !== null) {
      addToCart(headphone, figure);
    }
  };

  return (
    <main className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto my-8">
      <button
        className="my-10 font-medium text-sm text-black"
        onClick={handleGoBack}
      >
        Go back
      </button>
      <section className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-0 items-center justify-between">
        <img
          src={urlFor(headphone.product)}
          alt=""
          className="w-[24rem] h-[24rem] md:w-[34rem] md:h-[35rem] rounded-md"
        />

        <div className="space-y-5 w-[25rem]">
          {slug === "xx99-mark-ii-headphones" && (
            <span className="uppercase text-colorOne tracking-[.5em] font-normal text-sm">
              new product
            </span>
          )}
          <h1 className="font-bold text-3xl md:text-4xl w-48 md:w-auto">
            {headphone.name}
          </h1>
          <p className="font-medium text-sm text-black/70">
            {headphone.details}
          </p>
          <p className="font-bold text-lg tracking-widest">
            ${addCommaToNumber(headphone.price)}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5 bg-colorFour px-5 py-3">
              <button onClick={decQty}>-</button>
              <p>{figure}</p>
              <button onClick={incQty}>+</button>
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
        <div>
          <h2 className="font-bold text-3xl uppercase my-5">Features</h2>
          <p className="font-medium text-sm text-black/70 w-[28rem] md:w-[30rem]">
            {headphone.featureOne}
          </p>
          <p className="font-medium text-sm text-black/70 w-[28rem] md:w-[30rem] mt-10">
            {headphone.featureTwo}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-3xl uppercase my-5">in the box</h2>
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
            src={urlFor(headphone.displayOne)}
            alt={headphone.name}
            className="rounded-md h-[17rem]"
          />
          <img
            src={urlFor(headphone.displayTwo)}
            alt={headphone.name}
            className="rounded-md h-[17rem]"
          />
        </div>
        <img
          src={urlFor(headphone.displayThree)}
          alt={headphone.name}
          className="rounded-md h-[35rem] w-[34rem]"
        />
      </section>

      {slug === "xx99-mark-ii-headphones" && (
        <>
          <h3 className="text-center uppercase font-bold text-4xl mb-8">
            you may also like
          </h3>
          <section className="flex flex-col gap-16 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx9}
                alt="xx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">xx99 mark i</h3>
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
              <h3 className="font-bold text-2xl uppercase">xx59</h3>
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
            <div className="flex flex-col items-center gap-4">
              <Image
                src={zx9}
                alt="zx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">zx9 speaker</h3>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
                onClick={() => router.push("/headphones/zx9-speaker")}
              >
                see product
              </Button>
            </div>
          </section>
        </>
      )}

      {slug === "xx99-mark-i-headphones" && (
        <>
          <h3 className="text-center uppercase font-bold text-4xl mb-8">
            you may also like
          </h3>
          <section className="flex flex-col gap-16 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx99}
                alt="xx99"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">xx99 mark ii</h3>
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
              <h3 className="font-bold text-2xl uppercase">xx59</h3>
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
            <div className="flex flex-col items-center gap-4">
              <Image
                src={zx9}
                alt="zx9"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">zx9 speaker</h3>
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
          </section>
        </>
      )}

      {slug === "xx59-headphones" && (
        <>
          <h3 className="text-center uppercase font-bold text-4xl mb-8">
            you may also like
          </h3>
          <section className="flex flex-col gap-16 md:gap-0 md:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image
                src={xx99}
                alt="xx99"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">xx99 mark ii</h3>
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
              <h3 className="font-bold text-2xl uppercase">xx99 mark i</h3>
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
                src={zx9}
                alt="xx99"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="font-bold text-2xl uppercase">zx9 speaker</h3>
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
        className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row
      justify-between items-center my-20"
      >
        <div className="w-96 space-y-5 text-center lg:text-start">
          <h2 className="uppercase font-bold text-4xl text-black">
            Bringing you the <span className="text-colorOne">best</span> audio
            gear
          </h2>
          <p className="font-medium text-sm opacity-50 text-black/70">
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

export const getStaticPaths: GetStaticPaths = async () => {
  const HEADPHONES_QUERY = '*[_type == "headphones"]{ "slug": slug.current }';
  const headphones = await sanityFetch<{ slug: string }[]>({
    query: HEADPHONES_QUERY,
  });

  const paths = headphones.map((headphone) => ({
    params: { slug: headphone.slug },
  }));

  return {
    paths,
    fallback: true,
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
