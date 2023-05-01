import React, { forwardRef } from "react";
import {
	NavLink as NavBase,
	NavLinkProps,
	useLocation,
} from "react-router-dom";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import HouseIcon from "@mui/icons-material/House";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
import { searchParamsFinder } from "shared/router/services/search-params-finder";
import { useTranslation } from "react-i18next";
import { ListItemButton, ListItemIcon } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import ListItemText from "@mui/material/ListItemText";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";

export interface ICustomNavLinkProps extends NavLinkProps {
	activeClassName: (props: {
		isActive: boolean;
		isPending: boolean;
	}) => string | undefined;
	className?: string;
}

// eslint-disable-next-line react/display-name
const NavLink = forwardRef<HTMLAnchorElement, ICustomNavLinkProps>(
	({ activeClassName, className, ...props }, ref) => (
		// <NavBase ref={ref} {...props} className={activeClassName} />
		<NavBase
			ref={ref}
			{...props}
			className={(props) =>
				`${activeClassName(props) ?? ""} ${className ?? ""}`
			}
		/>
	)
);

export const MainBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });
	const locate = useLocation();

	const searchParams = searchParamsGrabber(locate.search);

	return (
		<>
			<ListItemButton
				component={NavLink}
				end
				to={routeBuilder([Routes.admin])}
				sx={(theme) => ({
					"&.active-nav-link": {
						".MuiListItemIcon-root": {
							color: theme.palette.primary.main,
						},
					},
				})}
				activeClassName={({ isActive }) => (isActive ? "active-nav-link" : "")}
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
				sx={(theme) => ({
					"&.active-nav-link": {
						".MuiListItemIcon-root": {
							color: theme.palette.primary.main,
						},
					},
				})}
				activeClassName={({ isActive }) =>
					!searchParamsFinder(searchParams, "isHidden") && isActive
						? "active-nav-link"
						: undefined
				}
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
				sx={(theme) => ({
					"&.active-nav-link": {
						".MuiListItemIcon-root": {
							color: theme.palette.primary.main,
						},
					},
				})}
				activeClassName={({ isActive }) =>
					searchParamsFinder(searchParams, "isHidden") && isActive
						? "active-nav-link"
						: undefined
				}
			>
				<ListItemIcon>
					<LayersIcon />
				</ListItemIcon>
				<ListItemText primary={t("hiddenChatList")} />
			</ListItemButton>
		</>
	);
};
