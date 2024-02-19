import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";
import Header from "@/components/Header";
import PageMeta from "@/components/PageMeta";

const container = css({
  height: "100%",
});

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
