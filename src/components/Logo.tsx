import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import colors from "@/value/colors";

const logo = css`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.purple};
  }
`;

const Logo: FC = () => {
  return (
    <Link href="/" css={logo}>
      min.
    </Link>
  );
};

export default Logo;
