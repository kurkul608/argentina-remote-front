import React from "react";
import { useTranslation } from "react-i18next";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import {
	systemMessage,
	SystemMessageType,
} from "shared/chat/constants/settings/greetings/system/system-message";
import IndeterminateCheckboxWidget, {
	IOption,
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
	const onChangeCallback = (
		clearAll: boolean,
		items: IOption<SystemMessageType>[]
	) => {
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
	const systemMessageValues = systemMessage.map((value: SystemMessageType) => ({
		value,
		isChecked:
			config.clearSystemMessages?.messageTypes.includes(value) || false,
		title: t(`clearSystemMessage.systemMessages.${value}`),
	}));
	return (
		<IndeterminateCheckboxWidget
			values={systemMessageValues}
			title={t("clearSystemMessage.title") || ""}
			description={t("clearSystemMessage.description") || ""}
			mainBoxTitle={t("clearSystemMessage.option")}
			onChangeCb={onChangeCallback}
		/>
	);
};

export default System;
