import {
	IChatSettingsGreetings,
	IChatSettingsModeration,
	IChatSettingsUserRights,
} from "shared/chat/types/chat-settings/chat-sub-settings";

export interface ChatSettings {
	userRights: IChatSettingsUserRights;
	greetings: IChatSettingsGreetings;
	moderation?: IChatSettingsModeration;
}
