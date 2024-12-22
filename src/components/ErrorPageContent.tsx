import PageContainer from "@/components/PageContent";
import { css } from "@emotion/react";
import { NextPage } from "next";
import PageMeta from "./PageMeta";
import { contentContainer } from "@/styles/generalStyles";

import buttonStyles from "@/styles/buttonStyles";
import routeLinks from "@/routeLinks";
import Link from "next/link";

const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 5rem);
  padding-top: 10rem;
`;

const contentWrapper = css`
  ${contentContainer}
`;

const error404 = css``;

const ErrorPageContent: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="Page Not Found" description="Page Not Found" />
      <div css={container}>
        <div css={contentWrapper}>
          <div>
            <p css={error404}>404</p>
            <h1>ERROR: Page Not Found</h1>
          </div>
          <Link
            css={buttonStyles({ size: "large" })}
            href={routeLinks.homePage}
          >
            Go to Home Page
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ErrorPageContent;
