import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../axios";
import { getRejectionValue } from "../../../shared/util";
import { AxiosResponse } from "axios";

export const signup = createAsyncThunk<
  AxiosResponse<{ message: string }>,
  { email: string; password: string; onSuccess: () => void },
  { rejectValue: { message: string } }
>(
  "auth/signup",
  async ({ email, password, onSuccess }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        email,
        password,
      });
      onSuccess();
      return response;
    } catch (e: unknown) {
      return rejectWithValue(getRejectionValue(e));
    }
  },
);

export const signin = createAsyncThunk<
  AxiosResponse<{
    message: string;
    data: { accessToken: string; expiration: number; refreshToken: string };
  }>,
  { email: string; password: string },
  { rejectValue: { message: string } }
>("auth/signin", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      email,
      password,
    });
    return response;
  } catch (e: unknown) {
    return rejectWithValue(getRejectionValue(e));
  }
});

export const logout = createAction("auth/logout");
