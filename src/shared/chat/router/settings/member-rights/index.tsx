import { RouteObject } from "react-router-dom";
import { MembersRights } from "shared/chat/components/chat-settings/components/members-rights-page";
import { RightsAdmin } from "shared/chat/components/chat-settings/components/members-rights-page/components/admin-page";
import { MembersPage } from "shared/chat/components/chat-settings/components/members-rights-page/components/members-page";
import React from "react";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";

export const memberRights: RouteObject = {
	path: MemberRightsRoutes.membersRights,
	element: <MembersRights />,
	children: [
		{
			path: MemberRightsRoutes.admin,
			element: <RightsAdmin />,
		},
		{
			path: MemberRightsRoutes.members,
			element: <MembersPage />,
		},
	],
};
