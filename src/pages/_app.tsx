import ErrorPageContent from "@/components/ErrorPageContent";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { AppContextType, AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  const initialContextValue: AppContextType = {};

  if (pageProps.error) {
    return (
      <AppProvider initialState={initialContextValue}>
        <Layout>
          <ErrorPageContent />
        </Layout>
      </AppProvider>
    );
  }

  return (
    <AppProvider initialState={initialContextValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
