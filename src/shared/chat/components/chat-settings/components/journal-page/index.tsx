import React, { useEffect } from "react";
import { ITabMenu, TabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { TabMenuWrapper } from "shared/chat/components/chat-settings/styled";
import { useNavigate } from "react-router";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { getModerationRouteService } from "shared/chat/services/router/settings/moderation/get-moderation-route.service";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const JournalPage = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(getModerationRouteService(), "chatId", chatId || 0)
	);

	const TabConfig: ITabMenu[] = [
		{ route: ModerationRoutes.rules, name: "Rules" },
		{ route: ModerationRoutes.report, name: "Report" },
		{ route: ModerationRoutes.newcomers, name: "Newcomers" },
		{ route: ModerationRoutes.filters, name: "Filters" },
		{ route: ModerationRoutes.commands, name: "Commands" },
		{
			route: ModerationRoutes.warning,
			name: "Warning System",
		},
		{ route: ModerationRoutes.extra, name: "Extra" },
	];

	useEffect(() => {
		if (match) {
			navigate(ModerationRoutes.rules);
		}
	}, [match, navigate]);

	return (
		<TabMenuWrapper>
			<TabMenu
				items={TabConfig}
				baseRoute={getModerationRouteService()}
				id={chatId || 0}
			/>
			<Outlet />
		</TabMenuWrapper>
	);
};
