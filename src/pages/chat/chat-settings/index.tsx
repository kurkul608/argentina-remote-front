import React, { useEffect } from "react";
import Title from "shared/components/title";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { getChatAsync } from "shared/chat/redux/chat-info-page/chat.slice";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAuthToken } from "helpers/storage-parser";
import { getChatSettingsAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { getChatAdminsAsync } from "shared/chat/redux/chat-settings/user-rights.slice";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	auth: state.auth,
	id: state.chat.chat?._id,
	chatTitle: state.chat.chat?.tgChatInfo.chatInfo.title,
});

interface IDecorator {
	[key: string]: string;
}

export const ChatSettings = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const location = useLocation();
	const { chatId } = useParams();
	const dispatch = useAppDispatch();
	const { auth, id, chatTitle } = useAppSelector(selector);
	const token = getAuthToken(auth)!;

	useEffect(() => {
		if (chatId) {
			if (chatId !== id) {
				Promise.all([
					dispatch(getChatAsync({ id: chatId, token })),
					dispatch(getChatSettingsAsync({ id: chatId, token })),
					dispatch(getChatAdminsAsync({ token: token, id: chatId })),
				]);
			}
		}
	}, []);
	const decorator: IDecorator = {};
	if (chatId && chatTitle) {
		decorator[chatId] = chatTitle;
	}
	return (
		<>
			<Title>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} decorateCrumbs={decorator} />
			</Title>
			<Outlet />
		</>
	);
};
