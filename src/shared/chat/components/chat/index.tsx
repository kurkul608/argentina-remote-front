import React, { Suspense } from "react";
import { useAppSelector } from "redux/hooks";
import { useParams } from "react-router";
import PageWithBreadcrumbs from "shared/components/page-with-breadcrumbs";
import Typography from "@mui/material/Typography";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import { ICrumbsDecorator } from "shared/components/breadcrumbs";
import { IRootState } from "redux/store";
import { CircularProgress } from "@mui/material";
import ChatTopBar from "shared/chat/components/others/top-bar";
import ChatInfoWidget from "shared/chat/components/chat/chat-info";

const selector = (state: IRootState) => ({
	chatTitle: state.chat.chat?.tgChatInfo.chatInfo.title,
});

const ChatIdPage = () => {
	const { chatTitle } = useAppSelector(selector);
	const { chatId } = useParams();
	const decorator: ICrumbsDecorator = {};
	if (chatId && chatTitle) {
		decorator[chatId] = chatTitle;
	}
	return (
		<PageWithBreadcrumbs
			title={<Typography variant={"h3"}>{chatTitle}</Typography>}
			isLoading={!chatTitle}
			decorator={decorator}
			topBar={<ChatTopBar />}
		>
			<Suspense fallback={<CircularProgress />}>
				<WidgetWrapper>
					<ChatInfoWidget />
				</WidgetWrapper>
			</Suspense>
		</PageWithBreadcrumbs>
	);
};

export default ChatIdPage;
