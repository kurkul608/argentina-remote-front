import React from "react";
import { ITabMenu, TabMenu } from "shared/components/tab-menu";
import * as ST from "./styled";
import { RoutesType } from "shared/router/route.enum";

interface IOwnProps {
	tabConfig: ITabMenu[];
	children: React.ReactNode;
	baseRoute: RoutesType[];
	id: string | number;
}
const TabWrapper = ({ tabConfig, id, children, baseRoute }: IOwnProps) => {
	return (
		<ST.TabMenuWrapper>
			<TabMenu items={tabConfig} baseRoute={baseRoute} id={id} />
			{children}
		</ST.TabMenuWrapper>
	);
};

export default TabWrapper;
