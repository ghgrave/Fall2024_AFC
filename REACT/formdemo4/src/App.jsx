import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";

function App() {
  const userSchema = object({
    fname: string()
      .required("Please submit first name.")
      .max(5, "Must be less than 5 characters."),
    lname: string()
      .min(1, "Must have at least one character.")
      .max(5, "Cannot be more than 5 characters in length"),
    age: number()
      .positive("Must be a positive number")
      .lessThan(100, "Must be less than 100."),
    email: string()
      .email("Must be correct email format.")
      .required("Email is required"),
    password: string()
      .max(11, "Too many characters")
      .min(9, "Needs more than 8 characters"),
  });

  const {
    register, // instead of name in input, this is how we target each input
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleChange = (event) => {
    setValue(event.target.name, event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          {...register("fname")}
          id="fname"
          onChange={handleChange}
        />
        {errors.fname && <span>{errors.fname.message}</span>}
        <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          {...register("lname")}
          id="lname"
          onChange={handleChange}
        />
        {errors.lname && <span>{errors.lname.message}</span>}
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          {...register("age")}
          id="age"
          onChange={handleChange}
        />
        {errors.age && <span>{errors.age.message}</span>}
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          {...register("email")}
          id="email"
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          {...register("password")}
          id="password"
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
