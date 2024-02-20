import { css, Global } from "@emotion/react";
import { FC, memo, ReactNode } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import { cursorStyle, outerCursorStyle } from "@/styles/cursorStyles";
import AnimatedCursor from "react-animated-cursor";

const pageContent = css`
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
`;

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh);
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

    <AnimatedCursor
      innerSize={10}
      outerSize={9}
      color="245, 145, 238"
      outerAlpha={0.01}
      innerScale={0.7}
      outerScale={1}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      innerStyle={cursorStyle}
      outerStyle={outerCursorStyle}
    />

    <Header />

    <div css={pageContent}>{children}</div>

    {/* <Footer /> */}
  </div>
));

Layout.displayName = "Layout";

export default Layout;
