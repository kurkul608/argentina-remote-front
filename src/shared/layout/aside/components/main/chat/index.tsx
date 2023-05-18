import React from "react";
import { routeBuilder } from "shared/router/services/route-builder";
import { NavButton } from "shared/layout/aside/components/nav-button";
import LayersIcon from "@mui/icons-material/Layers";
import { searchParamsBuilder } from "shared/router/services/search-params-builder";
import { getChatRouteService } from "shared/chat/services/router/get-chat-route.service";

interface IOwnProps {
	list: string;
	hiddenList: string;
}
export const Chat = (props: IOwnProps) => {
	return (
		<>
			<NavButton
				text={props.list}
				icon={<LayersIcon />}
				to={{
					pathname: routeBuilder(getChatRouteService()),
					search: searchParamsBuilder({ isHidden: false }),
				}}
				param={"isHidden"}
			/>
			<NavButton
				text={props.hiddenList}
				icon={<LayersIcon />}
				to={{
					pathname: routeBuilder(getChatRouteService()),
					search: searchParamsBuilder({ isHidden: true }),
				}}
				param={"isHidden"}
			/>
		</>
	);
};
