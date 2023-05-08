import React, { useEffect } from "react";
import { Widget } from "shared/components/widget";
import { LineDescription, LineTitle, SettingLine, SettingsUL } from "./styled";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getChatAsync } from "../../redux/chat-info-page/chat.slice";
import { getAuthToken } from "helpers/storage-parser";
import { IRootState } from "redux/store";
import { getChatSettingsAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { getChatAdminsAsync } from "shared/chat/redux/chat-settings/user-rights.slice";

const selector = (state: IRootState) => ({
	chatInfo: state.chat.chat?.tgChatInfo.chatInfo,
	chatMembersCount: state.chat.chat?.tgChatInfo.chatMembersCount,
	chatID: state.chat.chat?._id,
	auth: state.auth,
});
export const ChatInfoWidget = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chatInfoWidget",
	});
	const { chatId } = useParams();

	const { chatInfo, chatMembersCount, auth, chatID } = useAppSelector(selector);

	const dispatch = useAppDispatch();
	const token = getAuthToken(auth)!;

	useEffect(() => {
		if (chatId) {
			if (chatId !== chatID) {
				Promise.all([
					dispatch(getChatAsync({ id: chatId, token })),
					dispatch(getChatSettingsAsync({ id: chatId, token })),
					dispatch(getChatAdminsAsync({ token: token, id: chatId })),
				]);
			}
		}
	}, []);

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
