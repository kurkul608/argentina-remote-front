import React from "react";
import { routeBuilder } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import HouseIcon from "@mui/icons-material/House";
import { NavButton } from "shared/layout/aside/components/nav-button";

interface IOwnProps {
	text: string;
}
export const Home = ({ text }: IOwnProps) => {
	return (
		<NavButton
			text={text}
			icon={<HouseIcon />}
			to={routeBuilder([Routes.admin])}
		/>
	);
};
