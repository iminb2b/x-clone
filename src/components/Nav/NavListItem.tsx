import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";
import { useRouter } from "next/router";
import buttonStyles from "@/styles/buttonStyles";

const link = css`
  color: ${colors.textPrimary};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      background-color: ${colors.textPrimary};
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = css`
  color: ${colors.purple};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    background-color: ${colors.purple};
    width: 80%;
    left: 10%;
  }
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  if (item.isButtonLink)
    return (
      <Link href={item.url} css={buttonStyles}>
        {item.name}
      </Link>
    );

  return (
    <Link href={item.url} css={isActive ? activeLink : link}>
      {item.name}
    </Link>
  );
};

export default NavListItem;
