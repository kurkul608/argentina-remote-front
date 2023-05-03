import { MessageType } from "shared/message/interfaces/message-type.interface";

export interface IMessageDto {
	_id: string;
	type: MessageType;
	notifications: true;
	quill_delta?: string[];
	preview_links?: true;
	enable_comments?: true;
	keyboard?: [];
}
