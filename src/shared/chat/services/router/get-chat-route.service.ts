import { ChatRoutesEnum } from "shared/chat/router/chat.enum";

export const getChatRouteService = (path?: ChatRoutesEnum) => [
	ChatRoutesEnum.chat,
	...(path ? [path] : []),
];
