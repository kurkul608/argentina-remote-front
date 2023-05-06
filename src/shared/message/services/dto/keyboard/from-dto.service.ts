import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";
import { IKeyboardDto } from "shared/message/interfaces/keyboard/keyboard-dto.interface";

export const fromKeyboardDtoService = (dto: IKeyboardDto): IKeyboard => ({
	type: dto.type,
	link: dto.link,
	hiddenTextButton: dto.hidden_text_button
		? {
				memberText: dto.hidden_text_button.member_text,
				notMemberText: dto.hidden_text_button.not_member_text,
				buttonText: dto.hidden_text_button.button_text,
		  }
		: undefined,
});
