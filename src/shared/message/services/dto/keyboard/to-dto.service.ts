import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";
import { IKeyboardDto } from "shared/message/interfaces/keyboard/keyboard-dto.interface";

export const toKeyboardDtoService = (keyboard: IKeyboard): IKeyboardDto => ({
	type: keyboard.type,
	link: keyboard.link,
	hidden_text_button: keyboard.hiddenTextButton
		? {
				member_text: keyboard.hiddenTextButton.memberText,
				not_member_text: keyboard.hiddenTextButton.notMemberText,
				button_text: keyboard.hiddenTextButton.buttonText,
		  }
		: undefined,
});
