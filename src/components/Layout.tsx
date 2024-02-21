import { css, Global } from "@emotion/react";
import { FC, memo, ReactNode, useContext } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import { cursorStyle, outerCursorStyle } from "@/styles/cursorStyles";
import AnimatedCursor from "react-animated-cursor";
import { AppContext } from "@/context/AppContext";
import colors from "@/value/colors";

const pageContent = css`
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
`;

const pageContainer = ({ darkmode }: { darkmode: boolean }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh);
  background-image: url("/images/bgImg.png");
  background-color: ${darkmode ? colors.blue : colors.white};
  color: ${darkmode ? colors.white : colors.textPrimary};
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
`;

const Layout: FC<{
  children: ReactNode;
}> = memo(({ children }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  return (
    <div css={pageContainer({ darkmode })}>
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
  );
});

Layout.displayName = "Layout";

export default Layout;
