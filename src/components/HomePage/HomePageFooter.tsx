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

const HomePageFooter: FC = () => {
  return <Box css={container}></Box>;
};

export default HomePageFooter;
