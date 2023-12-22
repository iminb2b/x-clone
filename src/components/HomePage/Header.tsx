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

const Header: FC = () => {
  return (
    <Box css={container}>
      <div css={flexContainer}>
        <Link href="/about">About</Link>
        <Link href="/about">Store</Link>
      </div>

      <div css={flexContainer}>
        <Link href="/about">Gmail</Link>
        <Link href="/about">Images</Link>
        <Link href="/about">
          <AppsIcon css={icon} />
        </Link>
        <Button variant="contained">Sign In </Button>
      </div>
    </Box>
  );
};

export default Header;
