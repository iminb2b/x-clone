import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";

const AboutPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta
        title="Min - About Me"
        description={"Information about Nhung Nguyen"}
        image={null}
      />
    </PageContainer>
  );
};

export default AboutPage;
