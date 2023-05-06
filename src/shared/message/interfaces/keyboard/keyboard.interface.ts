import { Keyboard } from "shared/message/interfaces/keyboard/keyboard-type.interface";

export interface IKeyboard {
	type: Keyboard;
	link?: Link;
	hiddenTextButton?: HiddenTextButton;
}

export interface Link {
	text: string;
	url: string;
}

export interface HiddenTextButton {
	buttonText: string;
	memberText: string;
	notMemberText: string;
}
