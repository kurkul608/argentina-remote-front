import React, { useEffect } from "react";
import { ITabMenu, TabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { Routes } from "shared/router";
import { TabMenuWrapper } from "shared/chat/components/chat-settings/styled";
import { useNavigate } from "react-router";
import { useAppSelector } from "redux/hooks";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const GreetingsPage = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(
			[
				Routes.admin,
				Routes.chatList,
				Routes.chat,
				Routes.chatSettings,
				Routes.chatSettingsGreeting,
			],
			"chatId",
			chatId || 0
		)
	);

	const tabConfig: ITabMenu[] = [
		{
			route: Routes.chatSettingsGreetingMessage,
			name: "Message",
		},
		{
			route: Routes.chatSettingsGreetingSystemMessages,
			name: "System messages",
		},
		{
			route: Routes.chatSettingsGreetingLeftMembers,
			name: "Left Members",
		},
		{ route: Routes.chatSettingsGreetingLeftMisc, name: "Misc" },
	];
	useEffect(() => {
		if (match) {
			navigate(Routes.chatSettingsGreetingMessage);
		}
	}, [match, navigate]);
	return (
		<TabMenuWrapper>
			<TabMenu
				items={tabConfig}
				baseRoute={[
					Routes.admin,
					Routes.chatList,
					Routes.chat,
					Routes.chatSettings,
					Routes.chatSettingsGreeting,
				]}
				id={chatId || 0}
			/>
			<Outlet />
		</TabMenuWrapper>
	);
};
