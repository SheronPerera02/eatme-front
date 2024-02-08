import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
