import React from "react";
import { RouteObject } from "react-router-dom";
import { ChatSettings } from "pages/chat/chat-settings";
import { greetingRoute } from "shared/chat/router/settings/greeting";
import { moderationRoute } from "shared/chat/router/settings/moderation";
import { SettingsRoutes } from "./settings.enum";
import { memberRights } from "shared/chat/router/settings/member-rights";
import { activityRoute } from "shared/chat/router/settings/activity";
import { reputationRoute } from "shared/chat/router/settings/reputation";
import { journalRoute } from "shared/chat/router/settings/journal";

export const settingsRoute: RouteObject = {
	path: SettingsRoutes.settings,
	element: <ChatSettings />,
	children: [
		memberRights,
		greetingRoute,
		moderationRoute,
		activityRoute,
		reputationRoute,
		journalRoute,
	],
};
