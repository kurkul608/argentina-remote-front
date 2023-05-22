import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAuthToken } from "helpers/storage-parser";
import { getChatAsync } from "shared/chat/redux/chat-info-page/chat.slice";
import { getChatSettingsAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { getChatAdminsAsync } from "shared/chat/redux/chat-settings/user-rights.slice";
import { ICrumbsDecorator } from "shared/components/breadcrumbs";
import { IRootState } from "redux/store";
import PageWithBreadcrumbs from "shared/components/page-with-breadcrumbs";
import Typography from "@mui/material/Typography";
import ChatTopBar from "shared/chat/components/others/top-bar";

const selector = (state: IRootState) => ({
	auth: state.auth,
	id: state.chat.chat?._id,
	chatTitle: state.chat.chat?.tgChatInfo.chatInfo.title,
});

const ChatSettings = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const { chatId: paramsChatId } = useParams();

	const dispatch = useAppDispatch();

	const { auth, id, chatTitle } = useAppSelector(selector);

	const chatId = useMemo(() => id ?? paramsChatId, [id, paramsChatId]);

	const token = getAuthToken(auth)!;

	const decorator: ICrumbsDecorator = {
		...(chatId && chatTitle ? { [chatId]: chatTitle } : {}),
	};

	useEffect(() => {
		if (chatId) {
			Promise.all([
				dispatch(getChatAsync({ id: chatId, token })),
				dispatch(getChatSettingsAsync({ id: chatId, token })),
				dispatch(getChatAdminsAsync({ token: token, id: chatId })),
			]);
		}
	}, []);

	return (
		<>
			<PageWithBreadcrumbs
				topBar={<ChatTopBar />}
				title={<Typography variant={"h3"}>{t("chats")}</Typography>}
				decorator={decorator}
			>
				<Outlet />
			</PageWithBreadcrumbs>
		</>
	);
};

export default ChatSettings;
