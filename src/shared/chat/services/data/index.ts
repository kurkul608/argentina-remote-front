import { get, patch, post } from "services/api";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChatDto } from "shared/chat/types/chat-dto.interface";
import { ChatAdminsDtoInterface } from "shared/chat/types/chat-settings/chat-admins-dto.interface";
import { ChatSettingsDtoInterface } from "shared/chat/types/chat-settings/chat-settings.dto.interface";

export interface AllChatsQuery {
	[key: string]: number | boolean | undefined | string;
	limit: number;
	offset: number;
	isHidden?: boolean;
}

export interface ChatChangeVisibleQuery {
	[key: string]: boolean;
	isHidden: boolean;
}

export interface UpdateSettings {
	remove_bots?: boolean;
	clear_system_messages?: {
		clear_all: boolean;
		message_types: string[];
	};
}

export const getChatsList = (token: string, query: AllChatsQuery) =>
	get<ITableDataInterface<IChatDto>>("chats", {
		authToken: token,
		query,
	});

export const getChat = (id: string, token: string) =>
	get<IChatDto>(`chats/${id}`, { authToken: token });

export const getChatAdmins = (id: string, token: string) =>
	get<ChatAdminsDtoInterface>(`setting/${id}/admin`, { authToken: token });

export const getSettingsById = (id: string, token: string) =>
	get<ChatSettingsDtoInterface>(`setting/${id}`, { authToken: token });

export const getSettingsByChatId = (id: string, token: string) =>
	get<ChatSettingsDtoInterface>(`setting/by-chat/${id}`, { authToken: token });

export const updateSettings = (
	id: string,
	token: string,
	body: UpdateSettings
) =>
	patch<ChatSettingsDtoInterface>(`setting/${id}`, {
		authToken: token,
		body,
	});

export const chatChangeVisible = (
	id: string,
	query: ChatChangeVisibleQuery,
	token: string
) =>
	post<IChatDto>(`chats/${id}/change-visible`, {
		authToken: token,
		query,
	});
