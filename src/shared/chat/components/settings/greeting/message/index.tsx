import React from "react";
import { MessageBuilder } from "shared/chat/components/settings/greeting/message/builder";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	id: state.chat.chat?.tgChatInfo.chatInfo.id,
	message: state.chatSettings.chatSettingsReducer.config.greetings.message,
});

const Message = () => {
	const { id, message } = useAppSelector(selector);
	return (
		<MessageBuilder
			name={"Greeting"}
			limit={10}
			messages={message}
			chatId={id || 0}
		/>
	);
};

export default Message;
