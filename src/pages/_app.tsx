import ErrorPageContent from "@/components/ErrorPageContent";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Layout>
        <ErrorPageContent />
      </Layout>
    );
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
