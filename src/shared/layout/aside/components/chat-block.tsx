import React from "react";
import { AsideAccordion, StyledNavBar } from "shared/layout/aside/styled";
import { NavLink, useLocation } from "react-router-dom";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { Accordion } from "shared/components/accordion";
import { routeExactMatch } from "shared/router/services/route-exact";
import { ChatAside } from "shared/chat/components/chat-page/chat-aside";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useTranslation } from "react-i18next";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const ChatBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });

	const { chatId } = useAppSelector(selector);

	const isHidden = !chatId;

	const locate = useLocation();

	return chatId ? (
		<ChatAside isHidden={isHidden}>
			<StyledNavBar>
				<NavLink
					end
					to={routeBuilderWithReplace(
						[Routes.admin, Routes.chatList, Routes.chat],
						"chatId",
						chatId
					)}
					className={({ isActive }) =>
						isActive ? "active-nav-link" : undefined
					}
					onClick={(e) => e.stopPropagation()}
				>
					<p>{t("chatCategories.info")}</p>
				</NavLink>
				<AsideAccordion>
					<Accordion
						name={"SETTINGS"}
						isOpen={routeExactMatch(locate.pathname, Routes.chatSettings, 1)}
					>
						<NavLink
							to={routeBuilderWithReplace(
								[
									Routes.admin,
									Routes.chatList,
									Routes.chat,
									Routes.chatSettings,
									Routes.chatSettingsMembersRights,
								],
								"chatId",
								chatId
							)}
							className={({ isActive }) =>
								isActive ? "active-nav-link" : undefined
							}
						>
							<p>User Rights</p>
						</NavLink>
						<NavLink
							to={routeBuilderWithReplace(
								[
									Routes.admin,
									Routes.chatList,
									Routes.chat,
									Routes.chatSettings,
									Routes.chatSettingsGreeting,
								],
								"chatId",
								chatId
							)}
							className={({ isActive }) =>
								isActive ? "active-nav-link" : undefined
							}
						>
							<p>Greeting</p>
						</NavLink>
						<NavLink
							to={routeBuilderWithReplace(
								[
									Routes.admin,
									Routes.chatList,
									Routes.chat,
									Routes.chatSettings,
									Routes.chatSettingsModeration,
								],
								"chatId",
								chatId
							)}
							className={({ isActive }) =>
								isActive ? "active-nav-link" : undefined
							}
						>
							<p>Moderation</p>
						</NavLink>
					</Accordion>
				</AsideAccordion>
			</StyledNavBar>
		</ChatAside>
	) : (
		<></>
	);
};
