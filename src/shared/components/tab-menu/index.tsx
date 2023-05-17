import React, { useState } from "react";
import { MenuItem, StyledWrapper } from "shared/components/tab-menu/styled";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { Tabs } from "@mui/material";
import { Tab } from "../tab";

export interface ITabMenu {
	name: string;
	route: Routes;
}

export interface ITabMenuProps {
	items: ITabMenu[];
	baseRoute: Routes[];
	id: string | number;
}

export const TabMenu = ({ baseRoute, items, id }: ITabMenuProps) => {
	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	return (
		<StyledWrapper>
			<Tabs
				value={value}
				onChange={handleChange}
				variant={"scrollable"}
				allowScrollButtonsMobile
				sx={{
					"& .MuiTabs-indicator": {
						display: "none",
					},
				}}
			>
				{items.map((item, i) => (
					<Tab key={`${item.name}--route--${i}`}>
						<MenuItem
							end
							key={`menu--item--${i}`}
							to={routeBuilderWithReplace(
								[...baseRoute, item.route],
								"chatId",
								id
							)}
						>
							{item.name}
						</MenuItem>
					</Tab>
				))}
			</Tabs>
		</StyledWrapper>
	);
};
