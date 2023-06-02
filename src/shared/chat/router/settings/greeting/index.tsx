import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";
import { CircularProgress } from "@mui/material";

const GreetingsPage = lazy(() => import("shared/chat/pages/settings/greeting"));

const BotValidation = lazy(
	() => import("shared/chat/components/settings/greeting/bot-validation")
);

const System = lazy(
	() => import("shared/chat/components/settings/greeting/system")
);
const GreetingMessage = lazy(
	() => import("shared/chat/components/settings/greeting/greeting-message")
);

export const greetingRoute: RouteObject = {
	path: GreetingRoutes.greeting,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<GreetingsPage />
		</Suspense>
	),
	children: [
		{
			path: GreetingRoutes.botValidation,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<BotValidation />
				</Suspense>
			),
		},
		{
			path: GreetingRoutes.messages,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<System />
				</Suspense>
			),
		},
		{
			path: GreetingRoutes.greetingMessage,
			element: (
				<Suspense fallback={<CircularProgress />}>
					<GreetingMessage />
				</Suspense>
			),
		},
		{
			path: GreetingRoutes.misc,
			element: <div>Misc</div>,
		},
	],
};
