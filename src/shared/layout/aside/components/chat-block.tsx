import React from "react";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import ChatAside from "shared/chat/components/others/aside";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useTranslation } from "react-i18next";
import { NavButton } from "./nav-button";
import { Home } from "@mui/icons-material";
import { ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { AsideCollapse } from "shared/layout/aside/components/collapse";
import { useLocation } from "react-router-dom";
import { routeExactMatchV2 } from "shared/router/services/route-exact";
import { getModerationRouteService } from "shared/chat/services/router/settings/moderation/get-moderation-route.service";
import { getGreetingRouteService } from "shared/chat/services/router/settings/greeting/get-greeting-route.service";
import { getMemberRightsRouteService } from "shared/chat/services/router/settings/member-rights/get-member-rights-route.service";
import { getChatRouteService } from "shared/chat/services/router/get-chat-route.service";
import { ChatRoutesEnum } from "shared/chat/router/chat.enum";
import { getSettingsRouteService } from "shared/chat/services/router/settings/get-settings-route.service";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const ChatBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });

	const { chatId } = useAppSelector(selector);

	const isHidden = !chatId;
	const locate = useLocation();
	const inSettings = chatId
		? routeExactMatchV2(
				locate.pathname,
				routeBuilderWithReplace(getSettingsRouteService(), "chatId", chatId)
		  )
		: false;
	return chatId ? (
		<ChatAside isHidden={isHidden}>
			<NavButton
				to={routeBuilderWithReplace(
					getChatRouteService(ChatRoutesEnum.chatId),
					"chatId",
					chatId
				)}
				icon={<Home />}
				text={t("chatCategories.info")}
				end
			/>
			<AsideCollapse
				icon={<Home />}
				title={t("chatCategories.settings")}
				expandByDefault={inSettings}
			>
				<List component="div" disablePadding>
					<NavButton
						text={t("settings.memberRights")}
						icon={<DraftsIcon />}
						to={routeBuilderWithReplace(
							getMemberRightsRouteService(),
							"chatId",
							chatId
						)}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={t("settings.greeting")}
						icon={<CheckCircleOutlineIcon />}
						to={routeBuilderWithReplace(
							getGreetingRouteService(),
							"chatId",
							chatId
						)}
						sx={{ pl: 4 }}
					/>
					<NavButton
						text={t("settings.moderation")}
						icon={
							<ListItemIcon>
								<ScheduleIcon />
							</ListItemIcon>
						}
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
