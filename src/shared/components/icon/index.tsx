import React from "react";
import User from "../../../public/assets/icons/user.svg";
import {
	StyledChat,
	StyledEyeClose,
	StyledHome,
	StyledSettings,
} from "shared/components/icon/styled";

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
			return <StyledSettings $isActive={isActive || false} />;
		case IconName.home:
			return <StyledHome $isActive={isActive || false} />;
		case IconName.chat:
			return <StyledChat $isActive={isActive || false} />;
		case IconName.closeEye:
			return <StyledEyeClose $isActive={isActive || false} />;
		default:
			return <></>;
	}
};
