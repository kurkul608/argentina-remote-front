import { Header } from "./header";
import { Aside } from "./aside";
import { Outlet } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container/Container";

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
				<Container
					maxWidth="lg"
					sx={{
						mt: 4,
						mb: 4,
						display: "flex",
						flexDirection: "column",
						gap: "0.35em",
					}}
				>
					<Toolbar />
					<Outlet />
				</Container>
			</Box>
		</>
	);
};
