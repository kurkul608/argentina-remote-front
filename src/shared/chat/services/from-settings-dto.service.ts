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
	...(dto.greeting
		? {
				greeting: {
					isEnable: dto.greeting.is_enable,
					message: dto.greeting.message,
					previousGreetings: dto.greeting.previous_greetings,
					clearTime: dto.greeting.clear_time,
					clearLastMessage: dto.greeting.clear_last_message,
				},
		  }
		: {}),
	...(dto.sticker_cleaner
		? {
				stickerCleaner: {
					removeEmoji: dto.sticker_cleaner.remove_emoji,
					removeStickers: dto.sticker_cleaner.remove_stickers,
					removeGif: dto.sticker_cleaner.remove_gif,
				},
		  }
		: {}),
	_id: dto._id,
});
