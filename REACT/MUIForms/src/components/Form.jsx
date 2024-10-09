import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

export default function Form() {
  const person = {};
  const { register, handleSubmit, setValue, watch } = useForm();

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
    console.log(watch("first_name"));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        {...register("first_name")}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>
        <Button variant="contained" color="error">
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
