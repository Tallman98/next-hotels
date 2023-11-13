"use client";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { PageProps } from "@/types";

const theme = createTheme({
  typography: {
    body2: {
      color: "#084482",
    },
  },
});

export default function BasicBreadcrumbs({ params }: PageProps) {
  return (
    <ThemeProvider theme={theme}>
      <div
        role="presentation"
        className="flex  xl:max-w-[1350px] 2xl:max-w-[1780px]  mx-auto justify-between text-sm"
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="large" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography variant="body2">{params.city}(1,257 hotels)</Typography>
        </Breadcrumbs>
      </div>
    </ThemeProvider>
  );
}
