import { SettingsRoutesType } from "shared/chat/router/settings/settings.enum";

export enum ChatRoutesEnum {
	// Chat
	chat = "chat",
	chatId = ":chatId",
}

export type ChatRoutesType = ChatRoutesEnum | SettingsRoutesType;
