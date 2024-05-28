import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Audiophile</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
