"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export interface Props {
  children: React.ReactNode;
}

export default function StylingProvider({ children }: Props) {
  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
