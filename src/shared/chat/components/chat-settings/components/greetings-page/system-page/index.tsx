import React from "react";
import { SwitchWidget } from "shared/components/switch-widget";
import { useTranslation } from "react-i18next";

export const SystemPage = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "settings.greetings.systemMessages",
	});
	return (
		<SwitchWidget
			name={t("clearSystemMessage.title")}
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
