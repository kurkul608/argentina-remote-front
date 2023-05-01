// import { DefaultTheme } from "styled-components";
// import { Theme } from "constants/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { createTheme, Theme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export interface IThemeState {
	mode: PaletteMode;
}

export const initialThemeState: IThemeState = {
	mode: "dark",
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState: initialThemeState,
	reducers: {
		setMode: (state, action: PayloadAction<PaletteMode>) => {
			state.mode = action.payload;
			// state.theme.palette.mode = action.payload;
		},
	},
});

export const { setMode } = ThemeSlice.actions;

export default ThemeSlice.reducer;
