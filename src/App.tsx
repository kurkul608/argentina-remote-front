import React, { useEffect } from "react";
// import { ThemeProvider } from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import GlobalStyles from "./global";
// import { Theme } from "constants/theme";
import { GlobalStyles } from "@mui/material";
import { RouterProvider } from "react-router";
import { router } from "shared/router";
import { logIn } from "shared/auth/redux/auth.slice";
import { getAuthToken } from "helpers/storage-parser";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { localStorageServiceGet } from "services/local-storage.service";
import { IRootState } from "redux/store";
import { setMode } from "shared/theme/redux/theme.slice";
import { Resizer } from "shared/resizer/components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { PaletteMode } from "@mui/material";
import { globalStyle } from "global";

// const theme = createTheme();
// t.breakpoints.
const selector = (state: IRootState) => ({
	auth: state.auth,
	mode: state.theme.mode,
});
export const App = () => {
	const dispatch = useAppDispatch();

	const { auth, mode } = useAppSelector(selector);

	const tokenStorage = getAuthToken(auth);

	const themeHandler = (mode: PaletteMode) => {
		dispatch(setMode(mode));
	};

	useEffect(() => {
		if (!tokenStorage) {
			const tokenFromLocalStorage = localStorageServiceGet("auth");
			dispatch(logIn(tokenFromLocalStorage));
		}
	}, [tokenStorage]);

	useEffect(() => {
		if (!window.matchMedia) {
			themeHandler("light");
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				themeHandler("dark");
			} else {
				themeHandler("light");
			}
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", (e) => {
					if (e.matches) {
						themeHandler("dark");
					} else {
						themeHandler("light");
					}
				});
		}
	}, []);

	const theme = createTheme({
		palette: {
			mode,
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Resizer />
			<GlobalStyles styles={globalStyle} />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
