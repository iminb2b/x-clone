import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";
import { useRouter } from "next/router";

const link = css`
  color: ${colors.textPrimary};
  transition: all 0.3s ease;
`;

const buttonLink = css`
  color: ${colors.white};
  background-color: ${colors.purple};
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${colors.purple};

  &:hover {
    background-color: ${colors.white};
    color: ${colors.purple};
    border: 2px solid ${colors.purple};
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
      <Link href={item.url} css={buttonLink}>
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
