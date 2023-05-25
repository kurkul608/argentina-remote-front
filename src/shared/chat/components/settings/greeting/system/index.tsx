import React from "react";
import { SwitchWidget } from "shared/components/switch-widget";
import { useTranslation } from "react-i18next";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";

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
	const handleOnSwitchDisable = () => {
		dispatch(
			updateChatSettingsByIdAsync({
				token: token!,
				id: config._id!,
				config: {
					clear_system_messages: {
						clear_all: false,
						message_types: [],
					},
				},
			})
		);
	};

	return (
		<SwitchWidget
			name={t("clearSystemMessage.title")}
			value={
				config.clearSystemMessages?.clearAll ||
				!!config.clearSystemMessages?.messageTypes.length
			}
			onSwitchDisable={handleOnSwitchDisable}
			switchDescription={t("clearSystemMessage.option") || ""}
			description={t("clearSystemMessage.description")}
			extraOptions={[
				t("clearSystemMessage.systemMessages.newMember"),
				t("clearSystemMessage.systemMessages.leftMember"),
				t("clearSystemMessage.systemMessages.pinnedMessage"),
				t("clearSystemMessage.systemMessages.videoCallStart"),
				t("clearSystemMessage.systemMessages.videoCallEnd"),
				t("clearSystemMessage.systemMessages.autoDeleteTimerChanged"),
			]}
		/>
	);
};

export default System;
