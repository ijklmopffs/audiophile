import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        {/* <title>{children.props.metadata.title}</title> */}
        <title>Audiophile | Home</title>
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
