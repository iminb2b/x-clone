import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import routeLinks from "@/routeLinks";
import { match } from "ts-pattern";

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
`;

const LanguageLinks: FC<{
  lang: "vi" | "en";
}> = ({ lang }) => {
  console.log(lang);

  return match(lang)
    .with("en", () => (
      <Link href={routeLinks.homePage({ lang: "vi" })} css={link}>
        VI
      </Link>
    ))
    .with("vi", () => (
      <div>
        <Link href={routeLinks.homePage({ lang: "en" })} css={link}>
          EN
        </Link>
      </div>
    ))
    .otherwise(() => null);
};

export default LanguageLinks;
