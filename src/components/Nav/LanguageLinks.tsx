import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import { match } from "ts-pattern";
import ViFlagIcon from "@/icons/ViFlagIcon";
import CaFlagIcon from "@/icons/CaFlagIcon";

const link = css`
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  gap: 0.35rem;
  /*
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
  } */
`;

const LanguageLinks: FC<{
  lang: "vi" | "en";
}> = ({ lang }) => {
  return match(lang)
    .with("en", () => (
      <Link href={routeLinks.homePage({ lang: "vi" })} css={link}>
        Vi |<ViFlagIcon />
      </Link>
    ))
    .with("vi", () => (
      <div>
        <Link href={routeLinks.homePage({ lang: "en" })} css={link}>
          En|
          <CaFlagIcon />
        </Link>
      </div>
    ))
    .otherwise(() => null);
};

export default LanguageLinks;
