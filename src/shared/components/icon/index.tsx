import React from "react";
import User from "../../../public/assets/icons/user.svg";
import Chat from "public/assets/icons/chat.svg";
import CloseEye from "public/assets/icons/eye-close.svg";
import { StyledHome, StyledSettings } from "shared/components/icon/styled";

export enum IconName {
	user = "user",
	settings = "settings",
	home = "home",
	chat = "chat",
	closeEye = "closeEye",
}

export interface IconProps {
	name: IconName;
	isActive?: boolean;
}

export const Icon = ({ name, isActive }: IconProps) => {
	switch (name) {
		case IconName.user:
			return <User />;
		case IconName.settings:
			return <StyledSettings isActive={isActive || false} />;
		case IconName.home:
			return <StyledHome isActive={isActive || false} />;
		case IconName.chat:
			return <Chat />;
		case IconName.closeEye:
			return <CloseEye />;
		default:
			return <></>;
	}
};
