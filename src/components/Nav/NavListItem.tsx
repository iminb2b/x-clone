import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";
import buttonStyles from "@/styles/buttonStyles";
import { AppContext } from "@/context/AppContext";

const link = ({ darkmode }: { darkmode: boolean }) => css`
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      background-color: ${darkmode ? colors.white : colors.textPrimary};
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = ({ darkmode }: { darkmode: boolean }) => css`
  color: ${darkmode ? colors.green : colors.purple};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    background-color: ${darkmode ? colors.green : colors.purple};
    width: 80%;
    left: 10%;
  }
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
}> = ({ item, isActive }) => {
  const {
    state: { darkmode },
  } = useContext(AppContext);

  if (item.isButtonLink)
    return (
      <Link href={item.url} css={buttonStyles({ darkmode })}>
        {item.name}
      </Link>
    );

  return (
    <Link
      href={item.url}
      css={isActive ? activeLink({ darkmode }) : link({ darkmode })}
    >
      {item.name}
    </Link>
  );
};

export default NavListItem;
