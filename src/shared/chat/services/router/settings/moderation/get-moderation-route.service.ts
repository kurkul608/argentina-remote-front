import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";

export const getModerationRouteService = (path?: ModerationRoutes) => [
	...getSettingsRouteService(),
	ModerationRoutes.moderation,
	...(path ? [path] : []),
];
