import React from "react";
import { SwitchWidget } from "shared/components/switch-widget";

export const SystemPage = () => {
	return (
		<SwitchWidget
			name={"Clear system messages"}
			switchDescription={"Clear all:"}
			description={"Clear messages from Telegram chat service"}
			extraOptions={[
				"new_member",
				"left_member",
				"pinned_messages",
				"video_call_start",
				"video_call_end",
				"auto_delete_timer_changed",
				"pinned_message",
			]}
		/>
	);
};
