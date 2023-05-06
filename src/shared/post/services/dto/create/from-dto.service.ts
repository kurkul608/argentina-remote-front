import { IPostCreate } from "shared/post/interfaces/post-create.interface";
import { IPostCreateDto } from "shared/post/interfaces/post-create-dto.interface";

export const postCreateFromDtoService = (dto: IPostCreateDto): IPostCreate => ({
	title: dto.title,
	messages: dto.messages,
	chats: dto.chats,
	pinMessage: dto.pin_message,
	tgDeleted: dto.tg_deleted,
	tgDeletedErrors: dto.tg_deleted_errors,
	tgDeletedErrorsCount: dto.tg_deleted_errors_count,
	postNow: dto.post_now,
});
