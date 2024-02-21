import Head from "next/head";
import { StaticImageData } from "next/image";
import { FC, memo } from "react";

const PageMeta: FC<{
  description: string | null;
  title: string | null;
}> = memo(({ description, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title ?? ""} />
      <meta name="twitter:title" content={title ?? ""} />

      <meta name="description" content={description ?? ""} />
      <meta name="twitter:description" content={description ?? ""} />
      <meta property="og:description" content={description ?? ""} />
    </Head>
  );
});

PageMeta.displayName = "PageMeta";

export default PageMeta;
