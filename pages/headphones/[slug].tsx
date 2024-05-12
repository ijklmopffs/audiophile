import Image from "next/image";
import { useRouter } from "next/router";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/components/sanity/client";
import { urlFor } from "@/components/sanity/client";
import ProductItem from "@/components/ProductItem";
import Button from "@/components/Button";
import addCommaToNumber from "@/helpers/convert";
import HeadphonePageProps from "@/interfaces/headphone";
import xx9 from "/public/images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "/public/images/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9 from "/public/images/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import headphoneImg from "/public/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "/public/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/images/shared/desktop/image-category-thumbnail-earphones.png";
import bestGear from "/public/images/shared/desktop/image-best-gear.jpg";
import bestGearMobile from "/public/images/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/public/images/shared/tablet/image-best-gear.jpg";
import Link from "next/link";

// interface HeadphonePageProps {
//   headphone: SanityDocument | null;
// }

export default function HeadphonePage({ headphone }: HeadphonePageProps) {
  const router = useRouter();
  const { slug } = router.query;
  const handleGoBack = () => {
    router.back();
  };
  console.log(slug);

  if (!headphone) {
    return <div>Loading...</div>;
  }

  const items = [
    { label: "1x", value: headphone.itemsOne },
    { label: "2x", value: headphone.itemsTwo },
    { label: "1x", value: headphone.itemsThree },
    { label: "1x", value: headphone.itemsFour },
    { label: "1x", value: headphone.itemsFive },
  ];

  return (
    <main className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto my-8">
      <button
        className="my-10 font-medium text-sm text-black"
        onClick={handleGoBack}
      >
        Go back
      </button>
      <section className="flex items-center justify-between">
        <img
          src={urlFor(headphone.product)}
          alt=""
          className="w-[34rem] h-[35rem] rounded-md"
        />

        <div className="space-y-5 w-[25rem]">
          <span className="uppercase text-colorOne tracking-[.5em] font-normal text-sm">
            new product
          </span>
          <h1 className="font-bold text-4xl">{headphone.name}</h1>
          <p className="font-medium text-sm text-black/70">
            {headphone.details}
          </p>
          <p className="font-bold text-lg tracking-widest">
            ${addCommaToNumber(headphone.price)}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5 bg-colorFour px-5 py-3">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div>
              <Button
                bgColor="bg-colorOne"
                textColor="text-white"
                line=""
                lineWidth=""
                width=""
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl uppercase my-5">Features</h2>
          <p className="font-medium text-sm text-black/70 w-[30rem]">
            {headphone.featureOne}
          </p>
          <p className="font-medium text-sm text-black/70 w-[30rem] mt-10">
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

      <section className="my-40 flex items-center justify-between">
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
        <section className="flex items-center justify-between">
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
            >
              see product
            </Button>
          </div>
        </section>
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const HEADPHONE_QUERY = `*[_type == "headphones" && slug.current == $slug]{name, details, featureOne, featureTwo, price, product, itemsOne, itemsTwo, itemsThree, itemsFour, itemsFive, displayOne, displayTwo, displayThree}[0]`;

  const headphone = await sanityFetch<SanityDocument>({
    query: HEADPHONE_QUERY,
    params: { slug },
  });

  return {
    props: {
      headphone,
    },
  };
}

export async function getStaticPaths() {
  const HEADPHONE_SLUGS_QUERY = `*[_type == "headphones"].slug.current`;
  const headphoneSlugs = await sanityFetch<string[]>({
    query: HEADPHONE_SLUGS_QUERY,
  });

  const paths = headphoneSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
