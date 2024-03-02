import * as React from "react";
import Box from "@mui/material/Box";
import { Add as AddIcon } from "@mui/icons-material";
import Link from "next/link";
import BFab from "@/components/BFab";

export default function ButtonAppBar() {
  return (
    <Box>
      <Link href="/add">
        <BFab icon={<AddIcon />} />
      </Link>
    </Box>
  );
}
