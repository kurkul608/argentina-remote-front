import React from "react";
import { ITabMenu } from "shared/components/tab-menu";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { getGreetingRouteService } from "shared/chat/services/router/settings/greeting/get-greeting-route.service";
import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";
import TabWrapper from "shared/components/tab-wrapper";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

const GreetingsPage = () => {
	const { chatId } = useAppSelector(selector);

	const tabConfig: ITabMenu[] = [
		{
			route: GreetingRoutes.botValidation,
			name: "Bot Validation",
		},
		{
			route: GreetingRoutes.messages,
			name: "System messages",
		},
		{
			route: GreetingRoutes.members,
			name: "Left Members",
		},
		{ route: GreetingRoutes.misc, name: "Misc" },
	];

	return (
		<TabWrapper
			id={chatId || 0}
			tabConfig={tabConfig}
			baseRoute={getGreetingRouteService()}
		>
			<Outlet />
		</TabWrapper>
	);
};

export default GreetingsPage;
