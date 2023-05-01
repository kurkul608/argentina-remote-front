import React, { useState } from "react";
import { ListItemButton, ListItemIcon } from "@mui/material";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { NavButton } from "shared/layout/aside/components/nav-button";

interface IOwnProps {
	main: string;
	draft: string;
	listPublished: string;
	listPlanned: string;
	contentPlan: string;
}
export const Post = (props: IOwnProps) => {
	const [postOpen, setPostOpen] = useState(false);

	const postOpenHandler = () => setPostOpen(!postOpen);

	return (
		<>
			<ListItemButton onClick={postOpenHandler}>
				<ListItemIcon>
					<DynamicFeedIcon />
				</ListItemIcon>
				<ListItemText primary={props.main} />
				{postOpen ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={postOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<NavButton
						text={props.draft}
						icon={<DraftsIcon />}
						to={routeBuilder([Routes.admin, Routes.post, Routes.postDraft])}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.listPublished}
						icon={<CheckCircleOutlineIcon />}
						to={routeBuilder([Routes.admin, Routes.post, Routes.postPublished])}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.listPlanned}
						icon={<ScheduleIcon />}
						to={routeBuilder([Routes.admin, Routes.post, Routes.postPlanned])}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.contentPlan}
						icon={<CalendarMonthIcon />}
						to={routeBuilder([
							Routes.admin,
							Routes.post,
							Routes.postContentPlan,
						])}
						sx={{ pl: 4 }}
					/>
				</List>
			</Collapse>
		</>
	);
};
