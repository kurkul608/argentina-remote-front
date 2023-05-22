import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";
import { CircularProgress } from "@mui/material";

const MembersRights = lazy(
	() => import("shared/chat/pages/settings/member-rights")
);

const RightsAdmin = lazy(
	() => import("shared/chat/components/settings/member-rights/admin-rights")
);
const RightsMembers = lazy(
	() => import("shared/chat/components/settings/member-rights/members-rights")
);

export const memberRights: RouteObject = {
	path: MemberRightsRoutes.membersRights,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<MembersRights />
		</Suspense>
	),
	children: [
		{
			path: MemberRightsRoutes.admin,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<RightsAdmin />
				</Suspense>
			),
		},
		{
			path: MemberRightsRoutes.members,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<RightsMembers />
				</Suspense>
			),
		},
	],
};
