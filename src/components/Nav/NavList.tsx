import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { LanguageContext } from "@/context/LanguageContext";
import routeLinks from "@/routeLinks";
import NavListItem from "./NavListItem";
import { useRouter } from "next/router";

const container = css`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
`;

export type NavInfo = {
  name: string;
  url: string;
  isButtonLink: boolean;
};

const NavList: FC = () => {
  const { lang, strings } = useContext(LanguageContext);

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
    </div>
  );
};

export default NavList;
