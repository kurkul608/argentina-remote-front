import { IPost } from "shared/post/interfaces/post.interface";
import { IPostDto } from "shared/post/interfaces/post-dto.interface";

export const postFromDtoService = (dto: IPostDto): IPost => ({
	_id: dto._id,
	title: dto.title,
	owner: dto.owner,
	messages: dto.messages,
	chats: dto.chats,
	pinMessage: dto.pin_message,
	tgDeleted: dto.tg_deleted,
	tgDeletedErrors: dto.tg_deleted_errors,
	tgDeletedErrorsCount: dto.tg_deleted_errors_count,

	scheduleAt: dto.scheduleAt,
	createdAt: dto.createdAt,
	updatedAt: dto.updatedAt,
});
