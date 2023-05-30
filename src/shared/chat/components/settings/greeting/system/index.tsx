import React from "react";
import { useTranslation } from "react-i18next";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import IndeterminateCheckboxWidget, {
	IValueParams,
} from "shared/components/ideterminate-checkbox-widget";

const selector = (state: IRootState) => ({
	token: state.auth.token,
	config: state.chatSettings.chatSettingsReducer.config,
});

const System = () => {
	const dispatch = useAppDispatch();
	const { config, token } = useAppSelector(selector);
	const { t } = useTranslation("translation", {
		keyPrefix: "settings.greetings.systemMessages",
	});
	const onChangeCallback = (clearAll: boolean, items: IValueParams[]) => {
		dispatch(
			updateChatSettingsByIdAsync({
				token: token!,
				id: config._id!,
				config: {
					clear_system_messages: {
						clear_all: clearAll,
						message_types: clearAll ? [] : items.map((item) => item.value),
					},
				},
			})
		);
	};
	const clearSystemMessagesOptions: IValueParams[] = [
		{
			value: "new_member",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes("new_member") ||
				false,
			title: t("clearSystemMessage.systemMessages.newMember"),
		},
		{
			value: "left_member",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes("left_member") ||
				false,
			title: t("clearSystemMessage.systemMessages.leftMember"),
		},
		{
			value: "pinned_message",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes("pinned_message") ||
				false,
			title: t("clearSystemMessage.systemMessages.pinnedMessage"),
		},
		{
			value: "video_call_start",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes("video_call_start") ||
				false,
			title: t("clearSystemMessage.systemMessages.videoCallStart"),
		},
		{
			value: "video_call_end",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes("video_call_end") ||
				false,
			title: t("clearSystemMessage.systemMessages.videoCallEnd"),
		},
		{
			value: "auto_delete_timer_changed",
			isChecked:
				config.clearSystemMessages?.messageTypes.includes(
					"auto_delete_timer_changed"
				) || false,
			title: t("clearSystemMessage.systemMessages.autoDeleteTimerChanged"),
		},
	];
	return (
		<div>
			<IndeterminateCheckboxWidget
				values={clearSystemMessagesOptions}
				name={t("clearSystemMessage.title")}
				description={t("clearSystemMessage.description") || ""}
				mainBoxTitle={t("clearSystemMessage.option")}
				onChangeCb={onChangeCallback}
			/>
		</div>
	);
};

export default System;
