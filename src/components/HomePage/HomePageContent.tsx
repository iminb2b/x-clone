import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormGroup,
  IconButton,
  InputBase,
} from "@mui/material";
import { FC } from "react";
import { css } from "@emotion/react";
import logo from "@/assets/images/download.png";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

const container = css({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

const inputBox = css({
  border: "1px solid #dfe1e5",
  display: "flex",
  flexDirection: "row",
  padding: "0.25rem 1rem",
  borderRadius: "3rem",
  minWidth: "36.375rem",
});

const input = css({
  flex: "1",
});

const icon = css({});

const buttonContainer = css({
  display: "flex",
  gap: "2rem",
});

const HomePageContent: FC = () => {
  return <Box css={container}>s</Box>;
};

export default HomePageContent;
