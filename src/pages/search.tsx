import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";
import SearchPageHeader from "@/components/SearchPage/SearchPageHeader";
import { useEffect, useState } from "react";
import SearchPageContent from "@/components/SearchPage/SearchPageContent";

const container = css({
  height: "100%",
});

const HomePage: NextPage = () => {
  const [data, setData] = useState();

  const searchData = async (query: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_ENGINE_ID}&q=${query}`,
      );

      const returnedData = await response.json();

      setData(returnedData);

      console.log(returnedData);
    } catch (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    }
  };

  useEffect(() => {
    searchData("hello");
  }, []);

  return (
    <PageContainer>
      <SearchPageHeader />
      <SearchPageContent data={data} />
    </PageContainer>
  );
};

export default HomePage;
