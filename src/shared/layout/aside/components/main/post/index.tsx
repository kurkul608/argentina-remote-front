import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { NavButton } from "shared/layout/aside/components/nav-button";
import { AsideCollapse } from "shared/layout/aside/components/collapse";
import { useTranslation } from "react-i18next";
import { routeExactMatchV2 } from "shared/router/services/route-exact";
import { useLocation } from "react-router-dom";

interface IOwnProps {
	main: string;
	draft: string;
	listPublished: string;
	listPlanned: string;
	contentPlan: string;
}
export const Post = (props: IOwnProps) => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const locate = useLocation();
	const inPost = routeExactMatchV2(
		locate.pathname,
		routeBuilder([Routes.admin, Routes.post])
	);
	return (
		<>
			<AsideCollapse
				icon={<DynamicFeedIcon />}
				title={t("posting.main")}
				expandByDefault={inPost}
			>
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
			</AsideCollapse>
		</>
	);
};
