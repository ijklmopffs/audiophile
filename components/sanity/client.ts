import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "0ajtq2wo",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  });
}

const builder: any = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
