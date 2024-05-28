import type { NextApiRequest, NextApiResponse } from "next";
import { sanityFetch } from "@/components/sanity/client";
import { SanityDocument } from "@sanity/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };
  const EARPHONE_QUERY = `*[_type == "earphones" && slug.current == $slug]{name, details, id, featureOne, featureTwo, price, product, itemsOne, itemsTwo, itemsThree, itemsFour, itemsFive, displayOne, displayTwo, displayThree, slug}[0]`;

  try {
    const earphone: SanityDocument = await sanityFetch<SanityDocument>({
      query: EARPHONE_QUERY,
      params: { slug },
    });
    res.status(200).json(earphone);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export default handler;
