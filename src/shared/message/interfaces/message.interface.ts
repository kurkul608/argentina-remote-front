import { MessageType } from "shared/message/interfaces/message-type.interface";

export interface IMessage {
	_id: string;
	type: MessageType;
	notifications: true;
	quillDelta?: string[];
	previewLinks?: true;
	enableComments?: true;
	keyboard?: [];
}
