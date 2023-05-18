import { RouteObject } from "react-router-dom";
import React from "react";
import { ChatActivityPage } from "shared/chat/components/chat-settings/components/chat-activity-page";
import { ActivityRoutes } from "shared/chat/router/settings/activity/activity.enum";

export const activityRoute: RouteObject = {
	path: ActivityRoutes.activity,
	element: <ChatActivityPage />,
};
