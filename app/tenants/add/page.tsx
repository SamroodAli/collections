"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import AppLink from "@/components/AppLink";
import { useForm } from "react-hook-form";
import BFab from "@/components/BFab";
import { Close } from "@mui/icons-material";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      room: undefined,
    },
  });

  const onSubmit = console.log;

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" sx={{ gap: 3, display: "grid", minWidth: "100%" }}>
          <TextField
            {...register("name", { required: true })}
            label="Name"
            fullWidth
            error={!!errors["name"]}
            helperText={errors["name"] ? "Please enter a name" : ""}
          />
          <TextField
            type="room"
            inputProps={{
              min: "0",
              ...register("room", {
                required: true,
                valueAsNumber: true,
              }),
            }}
            label="Room Number"
            fullWidth
            error={!!errors["room"]}
            helperText={errors["room"] ? "Please enter a room" : ""}
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Box>
      </form>
      <AppLink href="/">
        <BFab icon={<Close />} />
      </AppLink>
    </Box>
  );
}
