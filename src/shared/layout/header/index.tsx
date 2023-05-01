import React, { useState } from "react";
import * as ST from "./styled";
// import { Link } from "react-router-dom";
// import Moment from "react-moment";
// import { LanguageSwitch } from "./language-switch/language-switch";
// import { Logout } from "shared/layout/header/logout";
// import { ThemeSwitch } from "shared/layout/header/theme-switch/theme-switch";

// import { Portal } from "@mui/base";

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
// import Badge from "@mui/material/Badge";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { setAside } from "shared/theme/redux/theme.slice";
import { useTranslation } from "react-i18next";

const selector = (state: IRootState) => ({
	open: state.theme.isAsideOpen,
});

export const Header = () => {
	const { t: info } = useTranslation("translation", { keyPrefix: "info" });
	const { t: headerDialog } = useTranslation("translation", {
		keyPrefix: "header.dialog",
	});

	const { open } = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

	const settingsHandler = () => {
		setIsSettingsDialogOpen(!isSettingsDialogOpen);
	};

	const toggleDrawer = () => {
		dispatch(setAside());
	};

	return (
		<ST.AppBar position="absolute" open={open}>
			<Toolbar
				sx={{
					pr: "24px", // keep right padding when drawer closed
				}}
			>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={toggleDrawer}
					sx={{
						marginRight: "36px",
						...(open && { display: "none" }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}
				>
					{info("appName")} {info("dashboard")}
				</Typography>
				<IconButton color="inherit">
					<SettingsIcon onClick={settingsHandler} />
					{/*<Badge badgeContent={4} color="secondary">*/}
					{/*	<NotificationsIcon />*/}
					{/*</Badge>*/}
				</IconButton>
				<Dialog
					open={isSettingsDialogOpen}
					// fullWidth={fullWidth}
					maxWidth="sm"
					onClose={settingsHandler}
				>
					<DialogTitle>{headerDialog("title")}</DialogTitle>
					<DialogContent>
						<DialogContentText>{headerDialog("description")}</DialogContentText>
					</DialogContent>
				</Dialog>
			</Toolbar>
		</ST.AppBar>
	);
};
