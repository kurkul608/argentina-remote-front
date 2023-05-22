import React from "react";
import * as ST from "shared/chat/components/others/aside/styled";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

interface IChatLeftBar {
	isHidden: boolean;
	children?: React.ReactNode;
}

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
	chatPhoto: state.chat.chat?.tgChatInfo.photos.small,
});

const ChatAside = ({ isHidden, children }: IChatLeftBar) => {
	const { chatInfo, chatPhoto } = useAppSelector(selector);
	return (
		<>
			{isHidden ? null : (
				<ST.ChatLeftBarWrapper>
					<ST.ChatBarTitleWrapper>
						<ST.ImgWrapper>
							<ST.ChatBarImageWrapper imageUrl={chatPhoto} />
						</ST.ImgWrapper>
						<ST.ChatBarTitle>{chatInfo?.title}</ST.ChatBarTitle>
					</ST.ChatBarTitleWrapper>
					<ST.ChatNavWrapper>{children}</ST.ChatNavWrapper>
				</ST.ChatLeftBarWrapper>
			)}
		</>
	);
};

export default ChatAside;
