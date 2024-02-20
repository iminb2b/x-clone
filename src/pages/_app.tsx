import ErrorPageContent from "@/components/ErrorPageContent";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import stringsEn from "@/strings/stringsEn";
import stringsVi from "@/strings/stringsVi";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LanguageContext,
  LanguageContextType,
} from "@/context/LanguageContext";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  const router = useRouter();

  const localeInfo = router.asPath.slice(1, 3);

  const localeStrings = localeInfo === "en" ? stringsEn : stringsVi;

  const initialContextValue: LanguageContextType = {
    strings: localeStrings,
    lang: localeInfo === "vi" ? "vi" : "en",
  };

  if (pageProps.error) {
    return (
      <LanguageContext.Provider value={initialContextValue}>
        <Layout>
          <ErrorPageContent />
        </Layout>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={initialContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageContext.Provider>
  );
}
