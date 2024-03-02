import * as React from "react";
import Box from "@mui/material/Box";
import { Add as AddIcon } from "@mui/icons-material";
import BFab from "@/components/BFab";
import AppLink from "@/components/AppLink";
import { Typography } from "@mui/material";
import { vCenter } from "@/constants/styles";

export default function ButtonAppBar() {
  return (
    <Box>
      <Box sx={{ ...vCenter, mt: 10 }}>
        <Typography variant="h1">Collections App</Typography>
      </Box>
      <AppLink href="/collections/add">
        <BFab icon={<AddIcon />} />
      </AppLink>
    </Box>
  );
}
