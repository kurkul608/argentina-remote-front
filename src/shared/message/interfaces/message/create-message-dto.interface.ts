import { MessageType } from "shared/message/interfaces/message/message-type.interface";
import { IKeyboardDto } from "shared/message/interfaces/keyboard/keyboard-dto.interface";

export interface ICreateMessageDtoInterface {
	type: MessageType;
	notifications: true;
	quill_delta?: string[];
	preview_links?: true;
	enable_comments?: true;
	keyboard?: IKeyboardDto[][];
}
