import Footer from "@/components/HomePage/Footer";
import Header from "@/components/HomePage/Header";
import HomePageContent from "@/components/HomePage/HomePageContent";
import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";

const container = css({
  height: "100%",
});

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Header />
      <HomePageContent />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
