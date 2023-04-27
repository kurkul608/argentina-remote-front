import { ChatMember } from "typegram/manage";

export interface IChatSettingsUserRights {
	adminList: ChatMember[];
	changeBotSettingsAllowedList?: string[];
	useBotCommandsList?: string[];
	notAffectByRulesList?: string[];
	allowChatAdminCallCommands: boolean;
}

export interface IChatSettingsGreetings {
	message: string[];
	systemMessages: boolean;
	leftMembers: boolean;
	misc: boolean;
}

export interface IChatSettingsModeration {
	rulesMessage: [];
	report: {
		reportIsEnable: boolean;
		deleteReportMessage: boolean;
		notifyAdmins: boolean;
		reportReportOnAdmins: boolean;
		additionalUserNotificationList: boolean;
	};
	newcomers: {
		chatTimeout: {
			countTime: number;
			time: "minute" | "hour" | "day";
		};
		timeToChangeUsername: {
			countTime: number;
			time: "minute" | "hour" | "day";
		};
	};
	security?: {
		faceControlUsers: boolean;
		faceControlCheckTimeout: {
			countTime: number;
			time: "minute" | "hour" | "day";
		};
		faceControlUserLoginControl: boolean;
		faceControlUsernameMinLength?: number;
		faceControlUsernameMaxLength?: number;
		faceControlUsernameSubstringList: [];
		faceControlBreakingUsername: boolean;
		faceControlPreventRTL: boolean;
		faceControlRTLPercent?: number;
		faceControlPreventHieroglyphs: boolean;
		faceControlHieroglyphsPercent?: number;

		faceControlMaxNumbersWarning: number;
		faceControlBanType: "no" | "banForever" | "timeout";
		faceControlBanMessage?: string;
		faceControlBanTime?: {
			countTime: number;
			time: string;
		};
		faceControlSubscriptionChannels: [];
	};
}
