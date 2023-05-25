export interface ChatSettingsDtoInterface {
	_id: string;
	remove_bots: boolean;
	clear_system_messages: {
		clear_all: boolean;
		message_types: string[];
	};
}
