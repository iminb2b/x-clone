import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";

const logo = css`
  font-size: 2rem;
  font-weight: 700;
`;

const Logo: FC = () => {
  return (
    <Link href="/" css={logo}>
      min.
    </Link>
  );
};

export default Logo;
