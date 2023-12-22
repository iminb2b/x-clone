import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

// import globalStyles from "src/styles/globalStyles";

const pageContent = css({
  flex: "1 0 auto",
  width: "100%",
});

const pageContainer = css({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Layout: FC<{
  children: ReactNode;
}> = memo(({ children }) => (
  <div css={pageContainer}>
    {/* <Global styles={globalStyles} /> */}

    {/* <Header /> */}

    <div css={pageContent}>{children}</div>

    {/* <Footer /> */}
  </div>
));

Layout.displayName = "Layout";

export default Layout;
