import { ChatSettingsDtoInterface } from "shared/chat/types/chat-settings/chat-settings.dto.interface";
import { ChatSettings } from "shared/chat/types/chat-settings/chat-settings";

export const fromSettingsDtoService = (
	dto: ChatSettingsDtoInterface
): ChatSettings => ({
	removeBots: dto.remove_bots,
	clearSystemMessages: {
		clearAll: dto.clear_system_messages!.clear_all,
		messageTypes: dto.clear_system_messages!.message_types,
	},
	_id: dto._id,
});
