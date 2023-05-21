import React from "react";
import { SwitchWidget } from "shared/components/switch-widget";

export const SystemPage = () => {
	return (
		<SwitchWidget
			name={"Clear system messages"}
			description={"Clear messages from Telegram chat service"}
			extraOptions={["new_member", "left_member"]}
		/>
	);
};
