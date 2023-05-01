import React from "react";
import * as ST from "./styled";
import { setMode } from "shared/theme/redux/theme.slice";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const selector = (state: IRootState) => ({
	mode: state.theme.mode,
});
export const ThemeSwitch = () => {
	const { mode } = useAppSelector(selector);
	const dispatch = useAppDispatch();

	const themeHandler = () => {
		dispatch(setMode(mode === "dark" ? "light" : "dark"));
	};
	return (
		<ST.ThemeSwitchWrapper>
			<ST.ThemeSwitchThemeSwitch
				sx={{ m: 1 }}
				checked={mode === "dark"}
				onChange={themeHandler}
			/>
		</ST.ThemeSwitchWrapper>
	);
};
