import { DefaultTheme } from "styled-components";
import { Theme } from "constants/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IThemeState {
	theme: DefaultTheme;
}

export const initialThemeState: IThemeState = {
	theme: {
		mainTheme: Theme.light,
	},
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState: initialThemeState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme.mainTheme = action.payload;
		},
	},
});

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
