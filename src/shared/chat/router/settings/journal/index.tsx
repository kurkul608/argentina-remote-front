import { RouteObject } from "react-router-dom";
import React from "react";
import { JournalPage } from "shared/chat/components/chat-settings/components/journal-page";
import { JournalRoutes } from "shared/chat/router/settings/journal/journal.enum";

export const journalRoute: RouteObject = {
	path: JournalRoutes.journal,
	element: <JournalPage />,
};
