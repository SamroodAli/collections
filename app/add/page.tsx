"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
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
      date: new Date().toISOString().substring(0, 10),
      amount: undefined,
    },
  });

  const onSubmit = console.log;

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 2, p: 2 }}>
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
            type="date"
            {...register("date", { required: true })}
            label="Date"
            fullWidth
            error={!!errors["date"]}
            helperText={errors["date"] ? "Please enter a date" : ""}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="number"
            inputProps={{
              min: "0",
              ...register("amount", {
                required: true,
                valueAsNumber: true,
              }),
            }}
            label="Amount"
            fullWidth
            error={!!errors["amount"]}
            helperText={errors["amount"] ? "Please enter a amount" : ""}
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Box>
      </form>
      <Link href="/">
        <BFab icon={<Close />} />
      </Link>
    </Box>
  );
}
