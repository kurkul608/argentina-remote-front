import { IMessageDto } from "shared/message/interfaces/message-dto.interface";
import { IMessage } from "shared/message/interfaces/message.interface";

export const fromMessageDtoService = (dto: IMessageDto): IMessage => ({
	_id: dto._id,
	enableComments: dto.enable_comments,
	keyboard: dto.keyboard,
	notifications: dto.notifications,
	previewLinks: dto.preview_links,
	quillDelta: dto.quill_delta,
	type: dto.type,
});
