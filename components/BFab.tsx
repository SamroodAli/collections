import { Fab } from "@mui/material";

interface Props {
  icon: React.ReactNode;
}

export default function BFab({ icon }: Props) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "absolute", bottom: [24, 36], right: [24, 32] }}
    >
      {icon}
    </Fab>
  );
}
