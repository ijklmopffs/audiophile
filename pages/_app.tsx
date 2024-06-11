import Layout from "@/components/Layout";
import { AppProvider } from "@/context/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={`${manrope.variable} font-manrope`}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </main>
    </AppProvider>
  );
}
