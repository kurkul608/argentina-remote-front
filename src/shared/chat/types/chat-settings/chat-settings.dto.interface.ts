import { SystemMessageType } from "shared/chat/constants/settings/greetings/system/system-message";

export interface ChatSettingsDtoInterface {
	_id: string;
	remove_bots: boolean;
	clear_system_messages: {
		clear_all: boolean;
		message_types: SystemMessageType[];
	};
	greeting?: {
		is_enable: boolean;
		previous_greetings?: number[];
		clear_last_message?: boolean;
		message?: string;
		clear_time?: string;
	};
}
