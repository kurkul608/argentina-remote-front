import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AuthPage } from "pages/auth";
import { ChatPage } from "pages/chat/chat-page";
import { ChatListPage } from "pages/chat/chat-list-page";
import { ChatSettings } from "pages/chat/chat-settings";
import { PrivateRoute } from "shared/router/private/private-route";
import { MembersRights } from "shared/chat/components/chat-settings/components/members-rights-page";
import { GreetingsPage } from "shared/chat/components/chat-settings/components/greetings-page";
import { RightsAdmin } from "shared/chat/components/chat-settings/components/members-rights-page/components/admin-page";
import { MembersPage } from "shared/chat/components/chat-settings/components/members-rights-page/components/members-page";
import { MessagePage } from "shared/chat/components/chat-settings/components/greetings-page/message-page";
import { ModerationPage } from "shared/chat/components/chat-settings/components/moderation-page";
import { ChatRulesPage } from "shared/chat/components/chat-settings/components/moderation-page/components/chat-rules-page";
import { ChatActivityPage } from "shared/chat/components/chat-settings/components/chat-activity-page";
import { ReputationPage } from "shared/chat/components/chat-settings/components/reputation-page";
import { JournalPage } from "shared/chat/components/chat-settings/components/journal-page";
import { PostMainPage } from "pages/post/main";
import { PostMain } from "shared/post/components/main";
import { PostDraftPage } from "pages/post/draft";
import { PostDraft } from "shared/post/components/draft";

const NotFound = () => {
	return <div>Page not found</div>;
};

export enum Routes {
	landing = "",
	admin = "admin",

	// Chat routes
	chatList = "chat",
	chat = ":chatId",
	chatSettings = "settings",
	chatSettingsMembersRights = "members-rights",
	chatSettingsMembersRightsAdmin = "admins",
	chatSettingsMembersRightsMembers = "members",
	chatSettingsGreeting = "greeting",
	chatSettingsGreetingMessage = "message",
	chatSettingsGreetingSystemMessages = "system-messages",
	chatSettingsGreetingLeftMembers = "left-members",
	chatSettingsGreetingLeftMisc = "misc",
	chatSettingsModeration = "moderation",
	chatSettingsModerationRules = "rules",
	chatSettingsModerationReport = "report",
	chatSettingsModerationNewcomers = "newcomers",
	chatSettingsModerationFilters = "filters",
	chatSettingsModerationCommands = "commands",
	chatSettingsModerationWarningSystem = "warning",
	chatSettingsModerationExtra = "extra",
	chatSettingsChatActivity = "chat-activity",
	chatSettingsReputation = "chat-reputation",
	chatSettingsReputationGeneral = "general",
	chatSettingsReputationAdvanced = "advanced",
	chatSettingsReputationExperience = "experience",
	chatSettingsReputationSpecialTriggers = "triggers",
	chatSettingsReputationTopsCustomization = "customization",
	chatSettingsJournal = "journal",

	//Posting routes
	post = "post",
	postDraft = "draft",

	//Auth routes
	auth = "auth/:token",
}

const postRoutes: RouteObject[] = [
	{
		path: Routes.post,
		element: <PostMainPage />,
		children: [
			{
				index: true,
				element: <PostMain />,
			},
			{
				path: Routes.postDraft,
				element: <PostDraftPage />,
				children: [
					{
						index: true,
						element: <PostDraft />,
					},
				],
			},
		],
	},
];

const chatSettingsRoutes: RouteObject[] = [
	{
		path: Routes.chatSettings,
		element: <ChatSettings />,
		children: [
			{
				path: Routes.chatSettingsMembersRights,
				element: <MembersRights />,
				children: [
					{
						path: Routes.chatSettingsMembersRightsAdmin,
						element: <RightsAdmin />,
					},
					{
						path: Routes.chatSettingsMembersRightsMembers,
						element: <MembersPage />,
					},
				],
			},
			{
				path: Routes.chatSettingsGreeting,
				element: <GreetingsPage />,
				children: [
					{
						path: Routes.chatSettingsGreetingMessage,
						element: <MessagePage />,
					},
					{
						path: Routes.chatSettingsGreetingSystemMessages,
						element: <div>System</div>,
					},
					{
						path: Routes.chatSettingsGreetingLeftMembers,
						element: <div>Left</div>,
					},
					{
						path: Routes.chatSettingsGreetingLeftMisc,
						element: <div>Misc</div>,
					},
				],
			},
			{
				path: Routes.chatSettingsModeration,
				element: <ModerationPage />,
				children: [
					{
						path: Routes.chatSettingsModerationRules,
						element: <ChatRulesPage />,
					},
				],
			},
			{
				path: Routes.chatSettingsChatActivity,
				element: <ChatActivityPage />,
			},
			{
				path: Routes.chatSettingsReputation,
				element: <ReputationPage />,
			},
			{
				path: Routes.chatSettingsJournal,
				element: <JournalPage />,
			},
		],
	},
];
const chatRoutes: RouteObject[] = [
	{
		path: Routes.chatList,
		children: [
			{
				element: <ChatListPage />,
				index: true,
			},
			{
				path: Routes.chat,
				children: [
					{
						element: <ChatPage />,
						index: true,
					},
					...chatSettingsRoutes,
				],
			},
		],
	},
];

const adminRoutes: RouteObject[] = [
	{
		path: Routes.admin,
		element: <PrivateRoute />,
		children: [
			{
				element: <></>,
				index: true,
			},
			...chatRoutes,
			...postRoutes,
		],
	},
];

export const router = createBrowserRouter([
	{
		path: Routes.landing,
		element: <></>,
		errorElement: <NotFound />,
	},
	...adminRoutes,
	{
		path: Routes.auth,
		element: <AuthPage />,
	},
]);
