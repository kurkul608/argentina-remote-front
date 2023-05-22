import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { JournalRoutes } from "shared/chat/router/settings/journal/journal.enum";
import { CircularProgress } from "@mui/material";

const JournalPage = lazy(() => import("shared/chat/pages/settings/journal"));

export const journalRoute: RouteObject = {
	path: JournalRoutes.journal,
	element: (
		<Suspense fallback={<CircularProgress />}>
			<JournalPage />
		</Suspense>
	),
};
