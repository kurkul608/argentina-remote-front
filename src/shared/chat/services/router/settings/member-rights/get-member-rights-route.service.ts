import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";

export const getMemberRightsRouteService = (path?: MemberRightsRoutes) => [
	...getSettingsRouteService(),
	MemberRightsRoutes.membersRights,
	...(path ? [path] : []),
];
