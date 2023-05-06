export interface IPostCreate {
	title: string;
	tgDeletedErrorsCount?: number;
	tgDeletedErrors?: any[];
	tgDeleted?: boolean;
	pinMessage?: boolean;
	postNow: boolean;
	chats: string[];
	messages: string[];
}
