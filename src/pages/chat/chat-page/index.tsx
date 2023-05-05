import React from "react";
import { ChatTopBar } from "shared/chat/components/chat-info-page/chat-top-bar";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import Title from "shared/components/title";
import { useAppSelector } from "redux/hooks";
import { ChatInfoWidget } from "shared/chat/components/chat-info-page";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
});

export const ChatPage = () => {
	const { chatInfo } = useAppSelector(selector);
	return (
		<>
			<Title>
				<h3>{chatInfo?.title}</h3>
				<Breadcrumbs link={location.pathname} />
			</Title>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatInfoWidget />
			</WidgetWrapper>
		</>
	);
};
