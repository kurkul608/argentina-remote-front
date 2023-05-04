import { IPostCreate } from "shared/post/interfaces/post-create.interface";
import { IPostCreateDto } from "shared/post/interfaces/post-create-dto.interface";

export const postCreateToDtoService = (dto: IPostCreate): IPostCreateDto => ({
	title: dto.title,
	messages: dto.messages,
	chats: dto.chats,
	pin_message: dto.pinMessage,
	tg_deleted: dto.tgDeleted,
	tg_deleted_errors: dto.tgDeletedErrors,
	tg_deleted_errors_count: dto.tgDeletedErrorsCount,
	post_now: dto.postNow,
});
