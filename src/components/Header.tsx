import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import Logo from "./Logo";
import NavList from "./Nav/NavList";
import { useDialogStore } from "@ariakit/react";
const container = ({ scrollNav }: { scrollNav: boolean }) => css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.5rem 0;

  width: ${scrollNav ? "70%" : "100%"};
  max-width: ${scrollNav ? "1000px" : "100%"};

  @media screen and (max-width: 720px) {
    width: 90%;
  }
`;

const Header: FC = () => {
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
      <div>
        <Logo />
        <NavList />
      </div>
    </div>
  );
};

export default Header;
