import { IMessageDto } from "shared/message/interfaces/message/message-dto.interface";
import { IMessage } from "shared/message/interfaces/message/message.interface";
import { fromKeyboardDtoService } from "shared/message/services/dto/keyboard/from-dto.service";

export const fromMessageDtoService = (dto: IMessageDto): IMessage => ({
	_id: dto._id,
	enableComments: dto.enable_comments,
	keyboard: dto.keyboard?.map((arr) => arr.map(fromKeyboardDtoService)),
	notifications: dto.notifications,
	previewLinks: dto.preview_links,
	quillDelta: dto.quill_delta,
	type: dto.type,
	createdAt: dto.createdAt,
	updatedAt: dto.updatedAt,
});
