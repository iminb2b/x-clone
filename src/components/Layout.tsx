import { css, Global } from "@emotion/react";
import { FC, memo, ReactNode } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import { contentContainer } from "@/styles/generalStyles";

const pageContent = css`
  ${contentContainer}

  flex: 1 0 auto;
  width: 100%;
`;

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: url("/images/bgImg.png");
  background-color: #fff;
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
`;

const Layout: FC<{
  children: ReactNode;
}> = memo(({ children }) => (
  <div css={pageContainer}>
    <Global styles={globalStyles} />

    <Header />

    <div css={pageContent}>{children}</div>

    {/* <Footer /> */}
  </div>
));

Layout.displayName = "Layout";

export default Layout;
