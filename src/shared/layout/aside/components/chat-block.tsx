import React from "react";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import ChatAside from "shared/chat/components/others/aside";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useTranslation } from "react-i18next";
import { NavButton } from "./nav-button";
import List from "@mui/material/List";
import { AsideCollapse } from "shared/layout/aside/components/collapse";
import { useLocation, useParams } from "react-router-dom";
import { routeExactMatchV2 } from "shared/router/services/route-exact";
import { getModerationRouteService } from "shared/chat/services/router/settings/moderation/get-moderation-route.service";
import { getGreetingRouteService } from "shared/chat/services/router/settings/greeting/get-greeting-route.service";
import { getMemberRightsRouteService } from "shared/chat/services/router/settings/member-rights/get-member-rights-route.service";
import { getChatRouteService } from "shared/chat/services/router/get-chat-route.service";
import { ChatRoutesEnum } from "shared/chat/router/chat.enum";
import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";
import { routeFinder } from "shared/router/services/route-finder";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MessageIcon from "@mui/icons-material/Message";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const ChatBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });

	const { chatId } = useAppSelector(selector);

	const isHidden = !chatId;
	const locate = useLocation();
	const { chatId: routeChatId } = useParams();
	const inChat = routeFinder(locate.pathname, routeChatId);
	const inSettings = chatId
		? routeExactMatchV2(
				locate.pathname,
				routeBuilderWithReplace(getSettingsRouteService(), "chatId", chatId)
		  )
		: false;
	return chatId && inChat ? (
		<ChatAside isHidden={isHidden}>
			<NavButton
				to={routeBuilderWithReplace(
					getChatRouteService(ChatRoutesEnum.chatId),
					"chatId",
					chatId
				)}
				icon={<InfoIcon />}
				text={t("chatCategories.info")}
				end
			/>
			<AsideCollapse
				icon={<SettingsIcon />}
				title={t("chatCategories.settings")}
				expandByDefault={inSettings}
			>
				<List component="div" disablePadding>
					<NavButton
						text={t("settings.memberRights")}
						icon={<ManageAccountsIcon />}
						to={routeBuilderWithReplace(
							getMemberRightsRouteService(),
							"chatId",
							chatId
						)}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={t("settings.greeting")}
						icon={<MessageIcon />}
						to={routeBuilderWithReplace(
							getGreetingRouteService(),
							"chatId",
							chatId
						)}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={t("settings.moderation")}
						icon={<AddModeratorIcon />}
						to={routeBuilderWithReplace(
							getModerationRouteService(),
							"chatId",
							chatId
						)}
						sx={{ pl: 4 }}
					/>
				</List>
			</AsideCollapse>
		</ChatAside>
	) : (
		<></>
	);
};
