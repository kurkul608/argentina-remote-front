import React, { ReactNode } from "react";
import { NavLink } from "shared/layout/aside/components/navlink";
import { searchParamsFinder } from "shared/router/services/search-params-finder";
import { ListItemButton, ListItemIcon, SxProps } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { To, useLocation } from "react-router-dom";
import { searchParamsGrabber } from "shared/router/services/search-params-grabber";
import { Theme } from "@mui/material/styles";

type IOwnProps = {
	children?: ReactNode;
	to: To;
	param?: string;
	text: string;
	icon: ReactNode;
	sx?: SxProps<Theme>;
	end?: boolean;
};

export const NavButton = ({
	children,
	to,
	param,
	text,
	icon,
	sx,
	end,
}: IOwnProps) => {
	const locate = useLocation();

	const searchParams = searchParamsGrabber(locate.search);
	const matchParam = () => {
		if (param !== undefined) {
			return searchParamsFinder(searchParams, param);
		}
		return true;
	};

	return (
		<ListItemButton
			component={NavLink}
			end={end}
			to={to}
			sx={{
				...sx,
				"&.active-nav-link": {
					".MuiListItemIcon-root": {
						color: "primary.main",
					},
				},
			}}
			activeClassName={({ isActive }) =>
				matchParam() && isActive ? "active-nav-link" : undefined
			}
		>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={text} />
			{children}
		</ListItemButton>
	);
};
