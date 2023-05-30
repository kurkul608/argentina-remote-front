import { SystemMessageType } from "shared/chat/constants/settings/greetings/system/system-message";

export interface ChatSettingsDtoInterface {
	_id: string;
	remove_bots: boolean;
	clear_system_messages: {
		clear_all: boolean;
		message_types: SystemMessageType[];
	};
}
