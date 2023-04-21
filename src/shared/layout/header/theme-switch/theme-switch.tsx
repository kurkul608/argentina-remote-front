import React from "react";
import * as ST from "./styled";
import { Theme } from "constants/theme";
import { setTheme } from "shared/theme/redux/theme.slice";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const selector = (state: IRootState) => ({
	theme: state.theme.theme.mainTheme,
});
export const ThemeSwitch = () => {
	const { theme } = useAppSelector(selector);
	const dispatch = useAppDispatch();

	const themeHandler = (theme: Theme) => {
		dispatch(setTheme(theme));
	};
	return (
		<ST.ThemeSwitchWrapper>
			<ST.ThemeSwitchButton
				type={"button"}
				onClick={() => themeHandler(Theme.light)}
				active={theme === Theme.light}
			>
				L
			</ST.ThemeSwitchButton>
			<ST.ThemeSwitchButton
				type={"button"}
				value={Theme.dark}
				onClick={() => themeHandler(Theme.dark)}
				active={theme === Theme.dark}
			>
				D
			</ST.ThemeSwitchButton>
		</ST.ThemeSwitchWrapper>
	);
};
