import { IMessageDto } from "shared/message/interfaces/message-dto.interface";
import { IMessage } from "shared/message/interfaces/message.interface";

export const toDtoService = (message: IMessage): IMessageDto => ({
	_id: message._id,
	enable_comments: message.enableComments,
	keyboard: message.keyboard,
	notifications: message.notifications,
	preview_links: message.previewLinks,
	quill_delta: message.quillDelta,
	type: message.type,
});
