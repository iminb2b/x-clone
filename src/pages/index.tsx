import HomePageFooter from "@/components/HomePage/HomePageFooter";
import HomePageContent from "@/components/HomePage/HomePageContent";
import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";
import HomePageHeader from "@/components/HomePage/HomePageHeader";

const container = css({
  height: "100%",
});

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <HomePageHeader />
      <HomePageContent />
      <HomePageFooter />
    </PageContainer>
  );
};

export default HomePage;
