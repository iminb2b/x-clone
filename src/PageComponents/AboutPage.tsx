import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageAboutMe from "@/components/HomePage/HomePageAboutMe";

const AboutPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - About Me"
        description={"Information about Nhung Nguyen"}
      />
      <HomePageAboutMe />
    </PageContainer>
  );
};

export default AboutPage;
