export interface IPostDto {
	_id: string;

	title: string;

	tg_deleted_errors_count?: number;

	tg_deleted_errors: any[];

	tg_deleted: boolean;

	pin_message: boolean;

	// chats: [Types.ObjectId];
	chats: string[];

	// messages: [Types.ObjectId];
	messages: string[];

	// owner: Types.ObjectId;
	owner: string;

	scheduleAt?: Date;

	createdAt: Date;

	updatedAt: Date;
}
