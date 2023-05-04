import React, { useState } from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { ExpandMore } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
interface ICollapseProps {
	children: React.ReactNode;
	icon: React.ReactNode;
	title: string;
	expandByDefault?: boolean;
}

export const AsideCollapse = ({
	icon,
	children,
	title,
	expandByDefault,
}: ICollapseProps) => {
	const [collapse, setCollapseOpen] = useState(expandByDefault || false);

	const postOpenHandler = () => setCollapseOpen(!collapse);

	return (
		<>
			<ListItemButton onClick={postOpenHandler}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={title} />
				{collapse ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={collapse} timeout="auto" unmountOnExit>
				{children}
			</Collapse>
		</>
	);
};
