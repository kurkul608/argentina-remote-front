import { IPost } from "shared/post/interfaces/post.interface";
import { IPostDto } from "shared/post/interfaces/post-dto.interface";

export const postToDtoService = (dto: IPost): IPostDto => ({
	_id: dto._id,
	title: dto.title,
	owner: dto.owner,
	messages: dto.messages,
	chats: dto.chats,
	pin_message: dto.pinMessage,
	tg_deleted: dto.tgDeleted,
	tg_deleted_errors: dto.tgDeletedErrors,
	tg_deleted_errors_count: dto.tgDeletedErrorsCount,

	scheduleAt: dto.scheduleAt,
	createdAt: dto.createdAt,
	updatedAt: dto.updatedAt,
});
