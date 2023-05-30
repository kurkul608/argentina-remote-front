import React from "react";
import { Widget } from "shared/components/widget";
import {
	LineDescription,
	LineTitle,
	SettingLine,
	SettingsUL,
} from "shared/chat/components/chat/styled";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
	chatMembersCount: state.chat.chat?.tgChatInfo.chatMembersCount,
});
const ChatInfoWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatInfoWidget",
	});

	const { chatInfo, chatMembersCount } = useAppSelector(selector);

	const count = chatMembersCount;
	return (
		<Widget name={t("infoWidgetTitle") as string}>
			<SettingsUL>
				<SettingLine>
					<LineTitle>{t("id")}</LineTitle>
					<LineDescription>{chatInfo?.id}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("chatTitle")}</LineTitle>
					<LineDescription>{chatInfo?.title}</LineDescription>
				</SettingLine>
				<SettingLine>
					<LineTitle>{t("count")}</LineTitle>
					<LineDescription>{count}</LineDescription>
				</SettingLine>
			</SettingsUL>
		</Widget>
	);
};

export default ChatInfoWidget;
