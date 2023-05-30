import { SystemMessageType } from "shared/chat/constants/settings/greetings/system/system-message";

export interface ChatSettings {
	removeBots?: boolean;
	clearSystemMessages?: {
		clearAll: boolean;
		messageTypes: SystemMessageType[];
	};
	_id?: string;
}
