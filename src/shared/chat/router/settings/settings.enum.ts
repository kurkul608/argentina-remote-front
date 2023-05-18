import { ReputationRoutes } from "shared/chat/router/settings/reputation/reputation.enum";
import { ModerationRoutes } from "shared/chat/router/settings/moderation/moderation.enum";
import { MemberRightsRoutes } from "shared/chat/router/settings/member-rights/member-rights.enum";
import { JournalRoutes } from "shared/chat/router/settings/journal/journal.enum";
import { GreetingRoutes } from "shared/chat/router/settings/greeting/greeting.enum";
import { ActivityRoutes } from "shared/chat/router/settings/activity/activity.enum";

export enum SettingsRoutes {
	settings = "settings",
}

export type SettingsRoutesType =
	| SettingsRoutes
	| ReputationRoutes
	| ModerationRoutes
	| MemberRightsRoutes
	| JournalRoutes
	| GreetingRoutes
	| ActivityRoutes;
