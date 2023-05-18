import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { ActivityRoutes } from "shared/chat/router/settings/activity/activity.enum";

export const getActivityRouteService = (path?: ActivityRoutes) => [
	...getSettingsRouteService(),
	ActivityRoutes.activity,
	...(path ? [path] : []),
];
