import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { greetingRoute } from "shared/chat/router/settings/greeting";
import { moderationRoute } from "shared/chat/router/settings/moderation";
import { SettingsRoutes } from "./settings.enum";
import { memberRights } from "shared/chat/router/settings/member-rights";
import { activityRoute } from "shared/chat/router/settings/activity";
import { reputationRoute } from "shared/chat/router/settings/reputation";
import { journalRoute } from "shared/chat/router/settings/journal";
import { CircularProgress } from "@mui/material";

const ChatSettings = lazy(() => import("shared/chat/pages/settings"));

export const settingsRoute: RouteObject = {
	path: SettingsRoutes.settings,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<ChatSettings />
		</Suspense>
	),
	children: [
		memberRights,
		greetingRoute,
		moderationRoute,
		activityRoute,
		reputationRoute,
		journalRoute,
	],
};
