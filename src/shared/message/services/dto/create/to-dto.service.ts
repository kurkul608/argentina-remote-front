import { ICreateMessageInterface } from "shared/message/interfaces/message/create-message.interface";
import { ICreateMessageDtoInterface } from "shared/message/interfaces/message/create-message-dto.interface";
import { toKeyboardDtoService } from "shared/message/services/dto/keyboard/to-dto.service";

export const toDtoMessageCreateService = (
	message: ICreateMessageInterface
): ICreateMessageDtoInterface => ({
	type: message.type,
	keyboard: message.keyboard?.map((arr) => arr.map(toKeyboardDtoService)),
	notifications: message.notifications,
	preview_links: message.previewLinks,
	quill_delta: message.quillDelta,
	enable_comments: message.enableComments,
});
