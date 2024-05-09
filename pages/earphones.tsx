import React from "react";

export default function earphones() {
  return <div>hi</div>;
}

export async function getStaticProps() {
  return {
    props: {
      metadata: {
        title: "Audiophile | Earphones",
      },
    },
  };
}
