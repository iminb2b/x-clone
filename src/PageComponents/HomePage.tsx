import HomePageFooter from "@/components/HomePage/HomePageFooter";
import HomePageContent from "@/components/HomePage/HomePageContent";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - Home Page"
        description={"Nhung Nguyen"}
        image={null}
      />
      <HomePageContent />
      <HomePageFooter />
    </PageContainer>
  );
};

export default HomePage;
