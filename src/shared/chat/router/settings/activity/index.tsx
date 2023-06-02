import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { ActivityRoutes } from "shared/chat/router/settings/activity/activity.enum";
import { CircularProgress } from "@mui/material";

const ChatActivityPage = lazy(
	() => import("shared/chat/pages/settings/activity")
);

export const activityRoute: RouteObject = {
	path: ActivityRoutes.activity,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<ChatActivityPage />
		</Suspense>
	),
};
