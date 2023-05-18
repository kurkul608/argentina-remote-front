import React from "react";

import { RouteObject } from "react-router-dom";
import { ChatListPage } from "pages/chat/chat-list-page";
import { ChatPage } from "pages/chat/chat-page";
import { ChatRoutesEnum } from "shared/chat/router/chat.enum";
import { settingsRoute } from "shared/chat/router/settings";

export const chatRoute: RouteObject = {
	path: ChatRoutesEnum.chat,
	children: [
		{
			element: <ChatListPage />,
			index: true,
		},
		{
			path: ChatRoutesEnum.chatId,
			children: [
				{
					element: <ChatPage />,
					index: true,
				},
				settingsRoute,
			],
		},
	],
};
