import { ICreateMessageDtoInterface } from "shared/message/interfaces/message/create-message-dto.interface";
import { ICreateMessageInterface } from "shared/message/interfaces/message/create-message.interface";
import { fromKeyboardDtoService } from "shared/message/services/dto/keyboard/from-dto.service";

export const fromMessageCreateDtoService = (
	dto: ICreateMessageDtoInterface
): ICreateMessageInterface => ({
	enableComments: dto.enable_comments,
	keyboard: dto.keyboard?.map((arr) => arr.map(fromKeyboardDtoService)),
	notifications: dto.notifications,
	previewLinks: dto.preview_links,
	quillDelta: dto.quill_delta,
	type: dto.type,
});
