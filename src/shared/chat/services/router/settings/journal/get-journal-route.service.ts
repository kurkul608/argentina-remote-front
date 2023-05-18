import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { JournalRoutes } from "shared/chat/router/settings/journal/journal.enum";

export const getJournalRouteService = (path?: JournalRoutes) => [
	...getSettingsRouteService(),
	JournalRoutes.journal,
	...(path ? [path] : []),
];
