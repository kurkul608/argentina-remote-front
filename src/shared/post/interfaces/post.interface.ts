export interface IPost {
	_id: string;

	title: string;

	tgDeletedErrorsCount?: number;

	tgDeletedErrors: any[];

	tgDeleted: boolean;

	pinMessage: boolean;

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
