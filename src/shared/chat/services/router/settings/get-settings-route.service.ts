import { SettingsRoutes } from "shared/chat/router/settings/settings.enum";
import { getChatRouteService } from "shared/chat/services/router/get-chat-route.service";
import { ChatRoutesEnum } from "shared/chat/router/chat.enum";

export const getSettingsRouteService = (path?: SettingsRoutes) => [
	...getChatRouteService(ChatRoutesEnum.chatId),
	SettingsRoutes.settings,
	...(path ? [path] : []),
];
