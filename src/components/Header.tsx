import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { LanguageContext } from "@/context/LanguageContext";
import Logo from "./Logo";
import { contentContainer } from "@/styles/generalStyles";
import NavList from "./Nav/NavList";

const container = css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
`;

const contentWrapper = css`
  ${contentContainer}

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => {
  const strings = useContext(LanguageContext);

  console.log(strings);

  return (
    <div css={container}>
      <div css={contentWrapper}>
        <Logo />
        <NavList />
      </div>
    </div>
  );
};

export default Header;
