import React from "react";
import TabMenu, { ITabMenu } from "shared/components/tabs/tab-menu";
import { RoutesType } from "shared/router/route.enum";
import Box from "@mui/material/Box";

interface IOwnProps {
	tabConfig: ITabMenu[];
	children: React.ReactNode;
	baseRoute: RoutesType[];
	id: string | number;
}
const Tabs = ({ tabConfig, id, children, baseRoute }: IOwnProps) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: "0.35em" }}>
			<TabMenu items={tabConfig} baseRoute={baseRoute} id={id} />
			{children}
		</Box>
	);
};

export default Tabs;
