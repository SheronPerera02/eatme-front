import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { signin, signup } from "./actions";
import { toast } from "react-toastify";

export type AuthState = {
  access_token: string | null;
};

const initialState: AuthState = {
  access_token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.access_token = action.payload;
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
      const message = action.payload.data.message;
      localStorage.setItem("access_token", accessToken);
      state.access_token = accessToken;
      toast.success(message);
    });
    builder.addCase(signin.rejected, (_, action) => {
      toast.error(action.payload?.message);
    });
  },
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
