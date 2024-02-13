import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { logout, signin, signup } from "./actions";
import { toast } from "react-toastify";

export type AuthState = {
  auth: {
    accessToken: string;
    expiration: number;
    refreshToken: string;
  } | null;
};

const initialState: AuthState = {
  auth: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (
      state,
      action: PayloadAction<{
        accessToken: string;
        expiration: number;
        refreshToken: string;
      } | null>,
    ) => {
      state.auth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (_, action) => {
      toast.success(action.payload.data.message);
    });
    builder.addCase(signup.rejected, (_, action) => {
      toast.error(action.payload?.message);
    });
    builder.addCase(signin.fulfilled, (state, action) => {
      const { accessToken, expiration, refreshToken } =
        action.payload.data.data;
      const message = action.payload.data.message;
      localStorage.setItem(
        "auth",
        JSON.stringify({ accessToken, expiration, refreshToken }),
      );
      state.auth = { accessToken, expiration, refreshToken };
      toast.success(message);
    });
    builder.addCase(signin.rejected, (_, action) => {
      toast.error(action.payload?.message);
    });
    builder.addCase(logout, (state) => {
      localStorage.removeItem("auth");
      state.auth = null;
    });
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
