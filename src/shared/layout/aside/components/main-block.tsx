import React from "react";
import { StyledNavBar } from "shared/layout/aside/styled";
import { NavLink, useLocation } from "react-router-dom";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import HouseIcon from "@mui/icons-material/House";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
import { searchParamsFinder } from "shared/router/services/search-params-finder";
import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";

export const MainBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const locate = useLocation();

	const searchParams = searchParamsGrabber(locate.search);

	return (
		<StyledNavBar>
			<li>
				<NavLink
					end
					to={routeBuilder([Routes.admin])}
					className={({ isActive }) =>
						isActive ? "active-nav-link" : undefined
					}
				>
					<HouseIcon />
					<p>{t("mainPage")}</p>
				</NavLink>
				<NavLink
					end
					to={{
						pathname: routeBuilder([Routes.admin, Routes.chatList]),
						search: searchParamsBuilder({ isHidden: false }),
					}}
					className={({ isActive }) =>
						!searchParamsFinder(searchParams, "isHidden") && isActive
							? "active-nav-link"
							: undefined
					}
				>
					<BugReportIcon />
					<p>{t("chatList")}</p>
				</NavLink>
				<NavLink
					end
					to={{
						pathname: routeBuilder([Routes.admin, Routes.chatList]),
						search: searchParamsBuilder({ isHidden: true }),
					}}
					className={({ isActive }) =>
						searchParamsFinder(searchParams, "isHidden") && isActive
							? "active-nav-link"
							: undefined
					}
				>
					<BugReportIcon />
					<p>{t("hiddenChatList")}</p>
				</NavLink>
			</li>
		</StyledNavBar>
	);
};
