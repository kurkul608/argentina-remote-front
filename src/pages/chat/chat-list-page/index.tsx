import React from "react";
import Title from "shared/components/title";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import ChatListWidget from "shared/chat/components/list";

export const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });
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
