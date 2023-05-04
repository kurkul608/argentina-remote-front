import { MessageType } from "shared/message/interfaces/message/message-type.interface";
import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";

export interface ICreateMessageInterface {
	type: MessageType;
	notifications: true;
	quillDelta?: string[];
	previewLinks?: true;
	enableComments?: true;
	keyboard?: IKeyboard[][];
}
