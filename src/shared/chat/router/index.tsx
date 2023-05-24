import React, { lazy, Suspense } from "react";

import { RouteObject } from "react-router-dom";

import { ChatRoutesEnum } from "shared/chat/router/chat.enum";
import { settingsRoute } from "shared/chat/router/settings";
import { CircularProgress } from "@mui/material";

const ChatListPage = lazy(() => import("shared/chat/pages/list"));
const ChatPage = lazy(() => import("shared/chat/pages/chat"));

export const chatRoute: RouteObject = {
	path: ChatRoutesEnum.chat,
	children: [
		{
			element: (
				<Suspense fallback={<CircularProgress />}>
					<ChatListPage />
				</Suspense>
			),
			index: true,
		},
		{
			path: ChatRoutesEnum.chatId,
			children: [
				{
					element: (
						<Suspense fallback={<CircularProgress />}>
							<ChatPage />
						</Suspense>
					),
					index: true,
				},
				settingsRoute,
			],
		},
	],
};
