import { RouteObject } from "react-router-dom";
import React from "react";
import { ModerationPage } from "shared/chat/components/chat-settings/components/moderation-page";
import { ChatRulesPage } from "shared/chat/components/chat-settings/components/moderation-page/components/chat-rules-page";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";

export const moderationRoute: RouteObject = {
	path: ModerationRoutes.moderation,
	element: <ModerationPage />,
	children: [
		{
			path: ModerationRoutes.rules,
			element: <ChatRulesPage />,
		},
		{
			path: ModerationRoutes.filters,
			element: <ChatRulesPage />,
		},
	],
};
