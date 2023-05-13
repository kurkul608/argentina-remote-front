import React from "react";
import { ChatTopBar } from "shared/chat/components/chat-info-page/chat-top-bar";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import { Breadcrumbs } from "shared/components/breadcrumbs";
import Title from "shared/components/title";
import { useAppSelector } from "redux/hooks";
import { ChatInfoWidget } from "shared/chat/components/chat-info-page";
import { IRootState } from "redux/store";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router";

const selector = (state: IRootState) => ({
	chatTitle: state.chat.chat?.tgChatInfo.chatInfo.title,
});

interface IDecorator {
	[key: string]: string;
}

export const ChatPage = () => {
	const { chatTitle } = useAppSelector(selector);
	const location = useLocation();
	const { chatId } = useParams();
	const decorator: IDecorator = {};
	if (chatId && chatTitle) {
		decorator[chatId] = chatTitle;
	}
	return (
		<>
			<Title>
				<h3>{chatTitle}</h3>
				<Breadcrumbs link={location.pathname} decorateCrumbs={decorator} />
			</Title>
			<ChatTopBar />
			<WidgetWrapper>
				<ChatInfoWidget />
			</WidgetWrapper>
		</>
	);
};
