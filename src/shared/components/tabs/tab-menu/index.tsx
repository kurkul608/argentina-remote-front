import React, { useEffect } from "react";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Tabs } from "@mui/material";
import { RoutesType } from "shared/router/route.enum";
import { useNavigate, useLocation } from "react-router-dom";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export interface ITabMenu {
	name: string;
	route: RoutesType;
}

export interface ITabMenuProps {
	items: ITabMenu[];
	baseRoute: RoutesType[];
	id: string | number;
}

const TabMenu = ({ baseRoute, items, id }: ITabMenuProps) => {
	const navigate = useNavigate();

	const { pathname } = useLocation();

	const selectedTab = items.findIndex(
		(item) =>
			pathname ===
			routeBuilderWithReplace([...baseRoute, item.route], "chatId", id)
	);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		const to = routeBuilderWithReplace(
			[...baseRoute, items[newValue].route],
			"chatId",
			id
		);
		navigate(to);
	};

	useEffect(() => {
		if (selectedTab < 0 && items.length && id) {
			const to = routeBuilderWithReplace(
				[...baseRoute, items[0].route],
				"chatId",
				id
			);
			navigate(to);
		}
	}, [id, pathname]);

	return (
		<Box
			sx={{ width: "100%", borderBottom: "1px solid", borderColor: "divider" }}
		>
			<Tabs
				value={selectedTab >= 0 ? selectedTab : 0}
				variant={"scrollable"}
				onChange={handleChange}
				allowScrollButtonsMobile
			>
				{items.map((item, i) => (
					<Tab key={`${item.name}--route--${i}`} label={item.name} />
				))}
			</Tabs>
		</Box>
	);
};

export default TabMenu;
