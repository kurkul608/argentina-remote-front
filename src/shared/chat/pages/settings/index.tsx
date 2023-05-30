import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router";
import { useAppSelector } from "redux/hooks";
import { ICrumbsDecorator } from "shared/components/breadcrumbs";
import { IRootState } from "redux/store";
import PageWithBreadcrumbs from "shared/components/page-with-breadcrumbs";
import Typography from "@mui/material/Typography";
import ChatTopBar from "shared/chat/components/others/top-bar";

const selector = (state: IRootState) => ({
	id: state.chat.chat?._id,
	chatTitle: state.chat.chat?.tgChatInfo.chatInfo.title,
});

const ChatSettings = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const { chatId: paramsChatId } = useParams();

	const { id, chatTitle } = useAppSelector(selector);

	const chatId = useMemo(() => id ?? paramsChatId, [id, paramsChatId]);

	const decorator: ICrumbsDecorator = {
		...(chatId && chatTitle ? { [chatId]: chatTitle } : {}),
	};

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
