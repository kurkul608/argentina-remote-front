import React, { useEffect } from "react";
import { ITabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAppSelector } from "redux/hooks";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { IRootState } from "redux/store";
import { getGreetingRouteService } from "shared/chat/services/router/settings/greeting/get-greeting-route.service";
import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";
import TabWrapper from "shared/components/tab-wrapper";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

const GreetingsPage = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(getGreetingRouteService(), "chatId", chatId || 0)
	);

	const tabConfig: ITabMenu[] = [
		{
			route: GreetingRoutes.message,
			name: "Message",
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

	useEffect(() => {
		if (match) {
			navigate(GreetingRoutes.message);
		}
	}, [match, navigate]);
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
