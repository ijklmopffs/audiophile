import Layout from "@/components/Layout";
import { AppProvider } from "@/context/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={`${manrope.variable} font-manrope`}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </main>
    </AppProvider>
  );
}
