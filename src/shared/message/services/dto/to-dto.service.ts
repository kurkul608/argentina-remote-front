import { IMessageDto } from "shared/message/interfaces/message/message-dto.interface";
import { IMessage } from "shared/message/interfaces/message/message.interface";
import { toKeyboardDtoService } from "shared/message/services/dto/keyboard/to-dto.service";

export const toDtoService = (message: IMessage): IMessageDto => ({
	_id: message._id,
	enable_comments: message.enableComments,
	keyboard: message.keyboard?.map((arr) => arr.map(toKeyboardDtoService)),
	notifications: message.notifications,
	preview_links: message.previewLinks,
	quill_delta: message.quillDelta,
	type: message.type,
	createdAt: message.createdAt,
	updatedAt: message.updatedAt,
});
