import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";
import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";

export const getGreetingRouteService = (path?: GreetingRoutes) => [
	...getSettingsRouteService(),
	GreetingRoutes.greeting,
	...(path ? [path] : []),
];
