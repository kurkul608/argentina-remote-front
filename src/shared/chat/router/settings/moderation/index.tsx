import { RouteObject } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";
import { CircularProgress } from "@mui/material";

const ModerationPage = lazy(
	() => import("shared/chat/pages/settings/moderation")
);

const ChatRules = lazy(
	() => import("shared/chat/components/settings/moderation/chat-rules")
);
const MessagesFilters = lazy(
	() => import("shared/chat/components/settings/moderation/messages-filters")
);

export const moderationRoute: RouteObject = {
	path: ModerationRoutes.moderation,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<ModerationPage />
		</Suspense>
	),
	children: [
		{
			path: ModerationRoutes.rules,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<ChatRules />
				</Suspense>
			),
		},
		{
			path: ModerationRoutes.filters,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<MessagesFilters />
				</Suspense>
			),
		},
	],
};
