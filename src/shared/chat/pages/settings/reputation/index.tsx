import React, { useEffect } from "react";
import { ITabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { useNavigate } from "react-router";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { getModerationRouteService } from "shared/chat/services/router/settings/moderation/get-moderation-route.service";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";
import TabWrapper from "shared/components/tab-wrapper";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

const ReputationPage = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(getModerationRouteService(), "chatId", chatId || 0)
	);

	const tabConfig: ITabMenu[] = [
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
		<TabWrapper
			tabConfig={tabConfig}
			id={chatId || 0}
			baseRoute={getModerationRouteService()}
		>
			<Outlet />
		</TabWrapper>
	);
};

export default ReputationPage;
