import React, { useEffect } from "react";
import { ITabMenu, TabMenu } from "shared/components/tab-menu";
import { Outlet, useMatch } from "react-router-dom";
import { TabMenuWrapper } from "shared/chat/components/chat-settings/styled";
import { useNavigate } from "react-router";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { getMemberRightsRouteService } from "shared/chat/services/router/settings/member-rights/get-member-rights-route.service";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const MembersRights = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(
			getMemberRightsRouteService(),
			"chatId",
			chatId || 0
		)
	);

	const TabConfig: ITabMenu[] = [
		{ route: MemberRightsRoutes.admin, name: "Admin" },
		{ route: MemberRightsRoutes.members, name: "Members" },
	];

	useEffect(() => {
		if (match) {
			navigate(MemberRightsRoutes.admin);
		}
	}, [match, navigate]);

	return (
		<TabMenuWrapper>
			<TabMenu
				items={TabConfig}
				baseRoute={getMemberRightsRouteService()}
				id={chatId || 0}
			/>
			<Outlet />
		</TabMenuWrapper>
	);
};
