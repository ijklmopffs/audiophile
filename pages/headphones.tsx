import React from "react";

export default function headphones() {
  return <div>hi</div>;
}

export async function getStaticProps() {
  return {
    props: {
      metadata: {
        title: "Audiophile | Headphones",
        // description: "A jolly good fellow",
        // openGraph: {
        //   image: "https://example.com.image.jpg",
        //   url: "https:/example.com",
        // },
      },
    },
  };
}
