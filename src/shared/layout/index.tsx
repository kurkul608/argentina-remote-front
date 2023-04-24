import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { Main } from "./styled";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import Breakpoints from "constants/breakpoints";

const selector = (state: IRootState) => ({
	actualBreakpoint: state.resizer.actualBreakpoint,
});
export const Layout = () => {
	const { actualBreakpoint } = useAppSelector(selector);
	const isMobile =
		actualBreakpoint === Breakpoints.MOBILE ||
		actualBreakpoint === Breakpoints.SMALL_MOBILE;

	const [isAsideVisible, setIsAsideVisible] = useState(false);

	const isAsideVisibleHandler = () => {
		setIsAsideVisible(!isAsideVisible);
	};

	return (
		<>
			<Header
				isAsideVisible={isAsideVisible}
				isAsideVisibleHandler={isAsideVisibleHandler}
			/>
			<div style={{ display: "flex" }}>
				{(!isMobile || isAsideVisible) && <Aside />}
				<Main>
					<Outlet />
				</Main>
			</div>
		</>
	);
};
