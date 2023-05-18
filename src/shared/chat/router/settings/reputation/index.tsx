import { RouteObject } from "react-router-dom";
import React from "react";
import { ReputationPage } from "shared/chat/components/chat-settings/components/reputation-page";
import { ReputationRoutes } from "shared/chat/router/settings/reputation/reputation.enum";

export const reputationRoute: RouteObject = {
	path: ReputationRoutes.reputation,
	element: <ReputationPage />,
};
