import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";

const container = css({
  height: "100%",
  background: "red",
});

const ErrorPageContent: NextPage = () => {
  return (
    <PageContainer>
      <div css={container}>ErrorPageContent</div>
    </PageContainer>
  );
};

export default ErrorPageContent;
