import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { signin, signup } from "./actions";
import { toast } from "react-toastify";

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
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
      const accessToken = action.payload.data.data.accessToken;
      const refreshToken = action.payload.data.data.refreshToken;
      const message = action.payload.data.message;
      localStorage.setItem(
        "auth",
        JSON.stringify({ accessToken, refreshToken }),
      );
      state.accessToken = accessToken;
      toast.success(message);
    });
    builder.addCase(signin.rejected, (_, action) => {
      toast.error(action.payload?.message);
    });
  },
});

export const { setAccessToken, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;
