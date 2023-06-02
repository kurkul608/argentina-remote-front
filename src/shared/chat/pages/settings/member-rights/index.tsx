import React, { useEffect } from "react";
import { IRootState } from "redux/store";
import { useNavigate } from "react-router";
import { useAppSelector } from "redux/hooks";
import { Outlet, useMatch } from "react-router-dom";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { getMemberRightsRouteService } from "shared/chat/services/router/settings/member-rights/get-member-rights-route.service";
import { ITabMenu } from "shared/components/tabs/tab-menu";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";
import TabWrapper from "shared/components/tabs";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

const MembersRights = () => {
	const navigate = useNavigate();
	const { chatId } = useAppSelector(selector);

	const match = useMatch(
		routeBuilderWithReplace(
			getMemberRightsRouteService(),
			"chatId",
			chatId || 0
		)
	);

	const tabConfig: ITabMenu[] = [
		{ route: MemberRightsRoutes.admin, name: "Admin" },
		{ route: MemberRightsRoutes.members, name: "Members" },
	];

	useEffect(() => {
		if (match) {
			navigate(MemberRightsRoutes.admin);
		}
	}, [match, navigate]);

	return (
		<TabWrapper
			id={chatId || 0}
			baseRoute={getMemberRightsRouteService()}
			tabConfig={tabConfig}
		>
			<Outlet />
		</TabWrapper>
	);
};

export default MembersRights;
