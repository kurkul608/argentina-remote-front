// import { DefaultTheme } from "styled-components";
// import { Theme } from "constants/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createTheme, Theme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export interface IThemeState {
	mode: PaletteMode;
	isAsideOpen: boolean;
}

export const initialThemeState: IThemeState = {
	mode: "dark",
	isAsideOpen: false,
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState: initialThemeState,
	reducers: {
		setMode: (state, action: PayloadAction<PaletteMode>) => {
			state.mode = action.payload;
		},
		setAside: (state) => {
			state.isAsideOpen = !state.isAsideOpen;
		},
	},
});

export const { setMode, setAside } = ThemeSlice.actions;

export default ThemeSlice.reducer;
