import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";

export const Layout = () => {
	return (
		<>
			<Header />
			<Aside />
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: "100vh",
					overflow: "auto",
				}}
			>
				<Outlet />
			</Box>
			{/*<Header*/}
			{/*	isAsideVisible={isAsideVisible}*/}
			{/*	isAsideVisibleHandler={isAsideVisibleHandler}*/}
			{/*/>*/}
			{/*<div style={{ display: "flex" }}>*/}
			{/*	{(!isMobile || isAsideVisible) && <Aside />}*/}
			{/*	<Main>*/}
			{/*		<Outlet />*/}
			{/*	</Main>*/}
			{/*</div>*/}
		</>
	);
};
