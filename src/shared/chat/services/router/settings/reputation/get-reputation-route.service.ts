import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { ReputationRoutes } from "shared/chat/router/settings/reputation/reputation.enum";

export const getReputationRouteService = (path?: ReputationRoutes) => [
	...getSettingsRouteService(),
	ReputationRoutes.reputation,
	...(path ? [path] : []),
];
