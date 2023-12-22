import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";

const container = css({
  height: "100%",
  background: "red",
});

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <div css={container}>Hello World!</div>
    </PageContainer>
  );
};

export default HomePage;
