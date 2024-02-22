import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { AppContext } from "@/context/AppContext";
import routeLinks from "@/routeLinks";
import NavListItem from "./NavListItem";
import { useRouter } from "next/router";
import LanguageLinks from "./LanguageLinks";
import DarkModeSettings from "./DarkModeSettings";

const container = css`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export type NavInfo = {
  name: string;
  url: string;
  isButtonLink: boolean;
};

const NavList: FC = () => {
  const {
    state: { lang },
  } = useContext(AppContext);

  const router = useRouter();

  const navListInfo: NavInfo[] = [
    {
      name: "About",
      url: routeLinks.about({ lang }),
      isButtonLink: false,
    },
    {
      name: "Work",
      isButtonLink: false,
      url: routeLinks.projects({ lang }),
    },
    {
      name: "Contact",
      isButtonLink: true,
      url: routeLinks.contact({ lang }),
    },
  ];

  return (
    <div css={container}>
      {navListInfo.map((item, index) => (
        <NavListItem
          item={item}
          key={index}
          isActive={router.asPath === item.url}
        />
      ))}

      <LanguageLinks lang={lang} />

      <DarkModeSettings />
    </div>
  );
};

export default NavList;
