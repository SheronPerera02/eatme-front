import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axios";

export const signup = createAsyncThunk<
  { message: string },
  { email: string; password: string }
>("auth/signup", async ({ email, password }) => {
  const response = await axiosInstance.post("/auth/signup", {
    email,
    password,
  });
  return response.data;
});

export const signin = createAsyncThunk<
  { accessToken: string },
  { email: string; password: string }
>("auth/signin", async ({ email, password }) => {
  const response = await axiosInstance.post("/auth/signin", {
    email,
    password,
  });
  return response.data;
});
