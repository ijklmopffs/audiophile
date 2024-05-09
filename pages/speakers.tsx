import React from "react";

export default function speakers() {
  return <div>hi</div>;
}

export async function getStaticProps() {
  return {
    props: {
      metadata: {
        title: "Audiophile | Speakers",
        // description: "A jolly good fellow",
        // openGraph: {
        //   image: "https://example.com.image.jpg",
        //   url: "https:/example.com",
        // },
      },
    },
  };
}
