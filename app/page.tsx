import * as React from "react";
import Box from "@mui/material/Box";
import { Add as AddIcon } from "@mui/icons-material";
import BFab from "@/components/BFab";
import AppLink from "@/components/AppLink";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppLink href="/collections/add">
        <BFab icon={<AddIcon />} />
      </AppLink>
    </Box>
  );
}
