import { SystemMessageType } from "shared/chat/constants/settings/greetings/system/system-message";

export interface ChatSettings {
	removeBots?: boolean;
	clearSystemMessages?: {
		clearAll: boolean;
		messageTypes: SystemMessageType[];
	};
	greeting?: {
		isEnable: boolean;
		previousGreetings?: number[];
		clearLastMessage?: boolean;
		message?: string;
		clearTime?: string;
	};
	stickerCleaner?: {
		removeStickers: boolean;
		removeGif: boolean;
		removeEmoji: boolean;
	};
	messageCharacterLimit?: {
		isEnable: boolean;
		characterLimit?: number;
		message?: string;
	};
	clearMessagesByChannel?: {
		isEnable: boolean;
		text?: string;
	};
	banWords?: {
		isEnabled: boolean;
		dictionary: string[];
	};
	_id?: string;
}
