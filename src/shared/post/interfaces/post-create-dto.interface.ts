export interface IPostCreateDto {
	title: string;
	tg_deleted_errors_count?: number;
	tg_deleted_errors?: any[];
	tg_deleted?: boolean;
	pin_message?: boolean;
	post_now: boolean;
	chats: string[];
	messages: string[];
}
