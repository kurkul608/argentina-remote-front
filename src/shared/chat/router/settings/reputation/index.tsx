import { RouteObject } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { ReputationRoutes } from "shared/chat/router/settings/reputation/reputation.enum";
import { CircularProgress } from "@mui/material";

const ReputationPage = lazy(
	() => import("shared/chat/pages/settings/reputation")
);

export const reputationRoute: RouteObject = {
	path: ReputationRoutes.reputation,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<ReputationPage />
		</Suspense>
	),
};
