import React, { useCallback, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import {
	clearChat,
	getChatAsync,
} from "shared/chat/redux/chat-info-page/chat.slice";
import {
	clearSettings,
	getChatSettingsAsync,
} from "shared/chat/redux/chat-settings/chat-settings.slice";

const selector = (state: IRootState) => ({
	chatID: state.chat.chat?._id,
	auth: state.auth,
});

const ChatPage = () => {
	const { chatId } = useParams();

	const {
		auth: { token },
	} = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const getChatInfo = useCallback(() => {
		dispatch(getChatAsync({ id: chatId!, token: token! }));
		dispatch(getChatSettingsAsync({ id: chatId!, token: token! }));
	}, [chatId]);

	useEffect(() => {
		if (chatId && token) {
			getChatInfo();
		}
		return () => {
			dispatch(clearChat());
			dispatch(clearSettings());
		};
	}, []);
	return <Outlet />;
};

export default ChatPage;
