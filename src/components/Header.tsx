import { FC, useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { LanguageContext } from "@/context/LanguageContext";
import Logo from "./Logo";
import { contentContainer } from "@/styles/generalStyles";
import NavList from "./Nav/NavList";
import colors from "@/value/colors";
import { useDialogStore } from "@ariakit/react";
import NavMenuMobileButton from "./Nav/NavMenuMobileButton";
import NavListMobile from "./Nav/NavListMobile";
const container = ({ scrollNav }: { scrollNav: boolean }) => css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
  background-color: ${scrollNav ? colors.white : "transparent"};
  box-shadow: ${scrollNav ? "rgba(0, 0, 0, 0.1) 0px 4px 12px;" : "none"};

  transition: all 0.3s ease;
`;

const contentWrapper = css`
  ${contentContainer}

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => {
  const strings = useContext(LanguageContext);

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const mobileHeaderNavDialogStore = useDialogStore();
  const mobileHeaderNavDialogIsMounted =
    mobileHeaderNavDialogStore.useState("mounted");

  return (
    <div
      css={container({
        scrollNav: mobileHeaderNavDialogIsMounted || scrollNav,
      })}
    >
      <div css={contentWrapper}>
        <Logo />
        <NavList />

        <NavMenuMobileButton dialogStore={mobileHeaderNavDialogStore} />

        {mobileHeaderNavDialogIsMounted && (
          <NavListMobile dialogStore={mobileHeaderNavDialogStore} />
        )}
      </div>
    </div>
  );
};

export default Header;
