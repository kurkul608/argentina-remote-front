import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { routeBuilder } from "shared/router/services/route-builder";
import { NavButton } from "shared/layout/aside/components/nav-button";
import { AsideCollapse } from "shared/layout/aside/components/collapse";
import { useTranslation } from "react-i18next";
import { routeExactMatchV2 } from "shared/router/services/route-exact";
import { useLocation } from "react-router-dom";
import { getPostRouteService } from "shared/post/services/router/get-post-route.service";
import { PostRoutes } from "shared/post/router/post.enum";

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
		routeBuilder(getPostRouteService())
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
						to={routeBuilder(getPostRouteService(PostRoutes.draft))}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.listPublished}
						icon={<CheckCircleOutlineIcon />}
						to={routeBuilder(getPostRouteService(PostRoutes.published))}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.listPlanned}
						icon={<ScheduleIcon />}
						to={routeBuilder(getPostRouteService(PostRoutes.planned))}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={props.contentPlan}
						icon={<CalendarMonthIcon />}
						to={routeBuilder(getPostRouteService(PostRoutes.contentPlan))}
						sx={{ pl: 4 }}
					/>
				</List>
			</AsideCollapse>
		</>
	);
};
