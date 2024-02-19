import { Box, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import AppsIcon from "@mui/icons-material/Apps";

const container = css({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
});

const flexContainer = css({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

const icon = css({});

const HomePageHeader: FC = () => {
  return <Box css={container}></Box>;
};

export default HomePageHeader;
