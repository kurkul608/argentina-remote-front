import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { Theme } from "constants/theme";
import { RouterProvider } from "react-router";
import { router } from "shared/router";
import { logIn } from "shared/auth/redux/auth.slice";
import { getAuthToken } from "helpers/storage-parser";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { localStorageServiceGet } from "services/local-storage.service";
import { IRootState } from "redux/store";
import { setTheme } from "shared/theme/redux/theme.slice";
import { Resizer } from "shared/resizer/components";

const selector = (state: IRootState) => ({
	auth: state.auth,
	theme: state.theme.theme,
});
export const App = () => {
	const dispatch = useAppDispatch();

	const { auth, theme } = useAppSelector(selector);

	const tokenStorage = getAuthToken(auth);

	const themeHandler = (theme: Theme) => {
		dispatch(setTheme(theme));
	};

	useEffect(() => {
		if (!tokenStorage) {
			const tokenFromLocalStorage = localStorageServiceGet("auth");
			dispatch(logIn(tokenFromLocalStorage));
		}
	}, [tokenStorage]);

	useEffect(() => {
		if (!window.matchMedia) {
			themeHandler(Theme.light);
		} else {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				themeHandler(Theme.dark);
			} else {
				themeHandler(Theme.light);
			}
			window
				.matchMedia("(prefers-color-scheme: dark)")
				.addEventListener("change", (e) => {
					if (e.matches) {
						themeHandler(Theme.dark);
					} else {
						themeHandler(Theme.light);
					}
				});
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Resizer />
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};
