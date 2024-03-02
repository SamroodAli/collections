import BFab from "@/components/BFab";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <Box>
      <Link href="/">
        <BFab icon={<Close />} />
      </Link>
    </Box>
  );
}
