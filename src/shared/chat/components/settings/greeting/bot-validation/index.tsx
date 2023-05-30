import React from "react";
import { Widget } from "shared/components/widget";
import Switch from "shared/components/switch-widget";
import { useTranslation } from "react-i18next";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";

const selector = (state: IRootState) => ({
	removeBots: state.chatSettings.chatSettingsReducer.config.removeBots,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
	token: state.auth.token,
});
const BotValidation = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "settings.greetings.botValidation",
	});

	const { removeBots, settingsId, isLoading, token } = useAppSelector(selector);
	const dispatch = useAppDispatch();

	const changeHandler = () => {
		!isLoading &&
			dispatch(
				updateChatSettingsByIdAsync({
					token: token!,
					id: settingsId!,
					config: {
						remove_bots: !removeBots,
					},
				})
			);
	};

	return (
		<Widget name={t("widgetName")}>
			<Switch
				description={t("switchDescription")}
				value={removeBots}
				callback={changeHandler}
			/>
		</Widget>
	);
};

export default BotValidation;
