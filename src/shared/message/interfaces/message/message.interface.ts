import { MessageType } from "shared/message/interfaces/message/message-type.interface";
import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";

export interface IMessage {
	_id: string;
	type: MessageType;
	notifications: true;
	quillDelta?: string[];
	previewLinks?: true;
	enableComments?: true;
	keyboard?: IKeyboard[][];
	createdAt: Date;
	updatedAt: Date;
}
