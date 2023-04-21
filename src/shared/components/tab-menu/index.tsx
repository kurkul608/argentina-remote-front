import React from "react";
import {
	MenuItem,
	MenuTable,
	StyledWrapper,
} from "shared/components/tab-menu/styled";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";

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
	return (
		<StyledWrapper>
			<MenuTable>
				{items.map((item, i) => (
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
				))}
			</MenuTable>
		</StyledWrapper>
	);
};
