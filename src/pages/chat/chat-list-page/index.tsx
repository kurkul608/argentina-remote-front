import React, { useEffect } from "react";
import Title from "shared/components/title";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import { useAppDispatch } from "redux/hooks";
import { clearChat } from "shared/chat/redux/chat-info-page/chat.slice";
import ChatListWidget from "shared/chat/components/list";

export const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(clearChat());
	}, []);
	return (
		<>
			<Title>
				<h3>{t("chats")}</h3>
				<Breadcrumbs link={location.pathname} />
			</Title>
			<WidgetWrapper>
				<ChatListWidget />
			</WidgetWrapper>
		</>
	);
};
