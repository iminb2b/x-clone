import HomePageFooter from "@/components/HomePage/HomePageFooter";
import HomePageHero from "@/components/HomePage/HomePageHero";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMySkills from "@/components/HomePage/HomePageMySkills";
import HomePageMyServices from "@/components/HomePage/HomePageMySevices";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - Home Page"
        description={"Nhung Nguyen"}
        image={null}
      />
      <HomePageHero />
      <HomePageMyServices />
      <HomePageMySkills />
      <HomePageFooter />
    </PageContainer>
  );
};

export default HomePage;
