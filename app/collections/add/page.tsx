"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import AppLink from "@/components/AppLink";
import { useForm } from "react-hook-form";
import BFab from "@/components/BFab";
import { Close } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";

interface InputSchema {
  tenant?: {
    id: number;
    name: string;
    label: string;
  } | null;
  date?: string;
  amount?: number;
}

export default function PTenant() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputSchema>({
    defaultValues: {
      tenant: undefined,
      date: new Date().toISOString().substring(0, 10),
      amount: undefined,
    },
  });

  const tenants = ["Alice", "Bob", "Charlie", "David"].map((name, id) => ({
    label: name,
    id,
    name,
  })); // Example names array

  const onSubmit = console.log;

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" sx={{ gap: 3, display: "grid", minWidth: "100%" }}>
          <FormControl fullWidth>
            <Autocomplete
              disablePortal
              options={tenants}
              onChange={(_, e) => {
                setValue("tenant", e);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tenant"
                  error={!!errors["tenant"]}
                />
              )}
            />

            {!!errors["tenant"] ? (
              <FormHelperText error>Please select a tenant</FormHelperText>
            ) : null}
          </FormControl>
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
            helperText={errors["amount"] ? "Please enter an amount" : ""}
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
