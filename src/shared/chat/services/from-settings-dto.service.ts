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
	clearMessagesByChannel: {
		isEnable: dto.clear_messages_by_channel.isEnable,
		text: dto.clear_messages_by_channel.text,
	},
	messageCharacterLimit: {
		isEnable: dto.message_character_limit.is_enable,
		characterLimit: dto.message_character_limit.character_limit,
		message: dto.message_character_limit.message,
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
	...(dto.ban_words
		? {
				banWords: {
					dictionary: dto.ban_words.dictionary,
					isEnabled: dto.ban_words.is_enabled,
				},
		  }
		: {}),
	_id: dto._id,
});
