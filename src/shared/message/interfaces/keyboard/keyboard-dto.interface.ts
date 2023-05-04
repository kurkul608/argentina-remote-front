import { Keyboard } from "shared/message/interfaces/keyboard/keyboard-type.interface";

export interface IKeyboardDto {
	type: Keyboard;
	link?: Link;
	hidden_text_button?: HiddenTextButtonDto;
}

export interface Link {
	text: string;
	url: string;
}

export interface HiddenTextButtonDto {
	button_text: string;
	member_text: string;
	not_member_text: string;
}
