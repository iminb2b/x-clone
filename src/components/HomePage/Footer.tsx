import { Box, Container } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";

const container = css({
  background: "#f2f2f2",
});

const flexContainer = css({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  padding: "1rem ",
});

const locationContainer = css({
  padding: "1rem ",
  borderBottom: "1px solid #dadce0",
});

const linkContainer = css({
  display: "flex",
  justifyContent: "space-evenly",
});

const Footer: FC = () => {
  return (
    <Box css={container}>
      <div css={locationContainer}>Canada</div>

      <div css={linkContainer}>
        <div css={flexContainer}>
          <Link href="/about">Advertising</Link>
          <Link href="/about">Business</Link>
          <Link href="/about">How Search works</Link>
        </div>
        <div css={flexContainer}>
          <Link href="/about">Privacy</Link>
          <Link href="/about">Terms</Link>
          <Link href="/about">Settings</Link>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
