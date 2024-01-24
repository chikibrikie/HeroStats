import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "app/model";

export interface ISettingsState {
  currentTheme: "dark" | "light";
}

const initialState: ISettingsState = {
  currentTheme: "dark",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.currentTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = settingsSlice.actions;

export const selectCurentTheme = (state: RootState) =>
  state.settings.currentTheme;

export default settingsSlice.reducer;
