import React, { useState } from "react";
import * as ST from "./styled";
import { ChatBlock } from "shared/layout/aside/components/chat-block";
import { MainBlock } from "shared/layout/aside/components/main-block";
import { IconButton, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";

export const Aside = () => {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	return (
		// <StyledAside>
		// 	<MainBlock />
		// 	<ChatBlock />
		// </StyledAside>
		<ST.StyledDrawer variant="permanent" open={open}>
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					px: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				{/*{mainListItems}*/}
				<MainBlock />
				<Divider sx={{ my: 1 }} />
				{/*{secondaryListItems}*/}
				<ChatBlock />
			</List>
		</ST.StyledDrawer>
	);
};
