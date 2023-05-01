import React from "react";
// import { StyledNavBar } from "shared/layout/aside/styled";
import { NavLink } from "react-router-dom";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import HouseIcon from "@mui/icons-material/House";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
// import { searchParamsFinder } from "shared/router/services/search-params-finder";
// import BugReportIcon from "@mui/icons-material/BugReport";
import { useTranslation } from "react-i18next";
// import { searchParamsGrabber } from "shared/router/services/search-params-grabber";
import { ListItemButton, ListItemIcon } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import PeopleIcon from "@mui/icons-material/People";
// import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import ListItemText from "@mui/material/ListItemText";

export const MainBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	// const locate = useLocation();

	// const searchParams = searchParamsGrabber(locate.search);

	return (
		<>
			<ListItemButton
				component={NavLink}
				end
				to={routeBuilder([Routes.admin])}
				// className={({ isActive }) => (isActive ? "active-nav-link" : "")}
			>
				<ListItemIcon>
					<HouseIcon />
				</ListItemIcon>
				<ListItemText primary={t("mainPage")} />
			</ListItemButton>
			<ListItemButton
				component={NavLink}
				end
				to={{
					pathname: routeBuilder([Routes.admin, Routes.chatList]),
					search: searchParamsBuilder({ isHidden: false }),
				}}
				className={"string"}
			>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary={t("chatList")} />
			</ListItemButton>
			<ListItemButton
				component={NavLink}
				end
				to={{
					pathname: routeBuilder([Routes.admin, Routes.chatList]),
					search: searchParamsBuilder({ isHidden: true }),
				}}
			>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary={t("hiddenChatList")} />
			</ListItemButton>
		</>
	);
	// return (
	// 	<StyledNavBar>
	// 		<li>
	// 			<NavLink
	// 				end
	// 				to={routeBuilder([Routes.admin])}
	// 				className={({ isActive }) =>
	// 					isActive ? "active-nav-link" : undefined
	// 				}
	// 			>
	// 				<HouseIcon />
	// 				<p>{t("mainPage")}</p>
	// 			</NavLink>
	// 			<NavLink
	// 				end
	// 				to={{
	// 					pathname: routeBuilder([Routes.admin, Routes.chatList]),
	// 					search: searchParamsBuilder({ isHidden: false }),
	// 				}}
	// 				className={({ isActive }) =>
	// 					!searchParamsFinder(searchParams, "isHidden") && isActive
	// 						? "active-nav-link"
	// 						: undefined
	// 				}
	// 			>
	// 				<BugReportIcon />
	// 				<p>{t("chatList")}</p>
	// 			</NavLink>
	// 			<NavLink
	// 				end
	// 				to={{
	// 					pathname: routeBuilder([Routes.admin, Routes.chatList]),
	// 					search: searchParamsBuilder({ isHidden: true }),
	// 				}}
	// 				className={({ isActive }) =>
	// 					searchParamsFinder(searchParams, "isHidden") && isActive
	// 						? "active-nav-link"
	// 						: undefined
	// 				}
	// 			>
	// 				<BugReportIcon />
	// 				<p>{t("hiddenChatList")}</p>
	// 			</NavLink>
	// 		</li>
	// 	</StyledNavBar>
	// );
};
