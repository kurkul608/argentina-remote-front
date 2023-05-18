import { RouteObject } from "react-router-dom";
import { GreetingsPage } from "shared/chat/components/chat-settings/components/greetings-page";
import { MessagePage } from "shared/chat/components/chat-settings/components/greetings-page/message-page";
import React from "react";
import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";

export const greetingRoute: RouteObject = {
	path: GreetingRoutes.greeting,
	element: <GreetingsPage />,
	children: [
		{
			path: GreetingRoutes.message,
			element: <MessagePage />,
		},
		{
			path: GreetingRoutes.messages,
			element: <div>System</div>,
		},
		{
			path: GreetingRoutes.members,
			element: <div>Left</div>,
		},
		{
			path: GreetingRoutes.misc,
			element: <div>Misc</div>,
		},
	],
};
