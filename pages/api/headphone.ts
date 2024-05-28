import type { NextApiRequest, NextApiResponse } from "next";
import { sanityFetch } from "@/components/sanity/client";
import { SanityDocument } from "@sanity/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };
  const HEADPHONE_QUERY = `*[_type == "headphones" && slug.current == $slug]{name, details, id, featureOne, featureTwo, price, product, itemsOne, itemsTwo, itemsThree, itemsFour, itemsFive, displayOne, displayTwo, displayThree, slug}[0]`;

  try {
    const headphone: SanityDocument = await sanityFetch<SanityDocument>({
      query: HEADPHONE_QUERY,
      params: { slug },
    });
    res.status(200).json(headphone);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export default handler;
