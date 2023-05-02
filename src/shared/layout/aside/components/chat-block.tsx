import React from "react";
import { StyledNavBar } from "shared/layout/aside/styled";
import { routeBuilderWithReplace } from "shared/router/services/route-builder";
import { Routes } from "shared/router";
import { ChatAside } from "shared/chat/components/chat-info-page/chat-aside";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";
import { useTranslation } from "react-i18next";
import { NavButton } from "./nav-button";
import { Home } from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	ListItemIcon,
} from "@mui/material";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import List from "@mui/material/List";
import DraftsIcon from "@mui/icons-material/Drafts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";

const selector = (state: IRootState) => ({
	chatId: state.chat.chat?._id,
});

export const ChatBlock = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });

	const { chatId } = useAppSelector(selector);

	const isHidden = !chatId;

	// const locate = useLocation();

	return chatId ? (
		<ChatAside isHidden={isHidden}>
			<StyledNavBar>
				<NavButton
					to={routeBuilderWithReplace(
						[Routes.admin, Routes.chatList, Routes.chat],
						"chatId",
						chatId
					)}
					icon={<Home />}
					text={t("chatCategories.info")}
				/>
				<Accordion
					defaultExpanded
					sx={(theme) => ({
						backgroundColor: theme.palette.background.paper,
						boxShadow: "none",
						"& .MuiAccordionSummary-root, .MuiAccordionDetails-root": {
							backgroundColor: theme.palette.background.paper,
						},
					})}
				>
					<AccordionSummary
						expandIcon={<ExpandLess />}
						sx={{
							justifyContent: "flex-start",
						}}
					>
						<ListItemIcon>
							<DynamicFeedIcon />
						</ListItemIcon>
						<ListItemText primary={t("chatCategories.settings")} />
					</AccordionSummary>
					<AccordionDetails>
						<List component="div" disablePadding>
							<NavButton
								text={t("settings.memberRights")}
								icon={<DraftsIcon />}
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
								sx={{ pl: 4 }}
							/>
							<NavButton
								text={t("settings.greeting")}
								icon={<CheckCircleOutlineIcon />}
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
								sx={{ pl: 4 }}
							/>
							<NavButton
								text={t("settings.greeting")}
								icon={<ScheduleIcon />}
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
								sx={{ pl: 4 }}
							/>
						</List>
					</AccordionDetails>
				</Accordion>
			</StyledNavBar>
		</ChatAside>
	) : (
		<></>
	);
};

//new
// export const ChatBlock = () => {
// 	const { t } = useTranslation("translation", { keyPrefix: "aside" });
//
// 	const { chatId } = useAppSelector(selector);
//
// 	const isHidden = !chatId;
//
// 	const locate = useLocation();
// 	const [settingsOpen, setSettings] = useState(false);
// 	const settingsHandler = () => setSettings(!settingsOpen);
//
// 	return chatId ? (
// 		<ChatAside isHidden={isHidden}>
// 			<StyledNavBar>
// 				<NavButton
// 					to={routeBuilderWithReplace(
// 						[Routes.admin, Routes.chatList, Routes.chat],
// 						"chatId",
// 						chatId
// 					)}
// 					icon={<Home />}
// 					text={t("chatCategories.info")}
// 				/>
// 				<ListItemButton onClick={settingsHandler}>
// 					<ListItemIcon>
// 						<DynamicFeedIcon />
// 					</ListItemIcon>
// 					<ListItemText primary={t("chatCategories.settings")} />
// 					{settingsOpen ? <ExpandLess /> : <ExpandMore />}
// 				</ListItemButton>
// 				<Collapse in={settingsOpen} timeout="auto" unmountOnExit>
// 					<List component="div" disablePadding>
// 						<NavButton
// 							text={t("settings.memberRights")}
// 							icon={<DraftsIcon />}
// 							to={routeBuilderWithReplace(
// 								[
// 									Routes.admin,
// 									Routes.chatList,
// 									Routes.chat,
// 									Routes.chatSettings,
// 									Routes.chatSettingsMembersRights,
// 								],
// 								"chatId",
// 								chatId
// 							)}
// 							sx={{ pl: 4 }}
// 						/>
// 						<NavButton
// 							text={t("settings.greeting")}
// 							icon={<CheckCircleOutlineIcon />}
// 							to={routeBuilderWithReplace(
// 								[
// 									Routes.admin,
// 									Routes.chatList,
// 									Routes.chat,
// 									Routes.chatSettings,
// 									Routes.chatSettingsGreeting,
// 								],
// 								"chatId",
// 								chatId
// 							)}
// 							sx={{ pl: 4 }}
// 						/>
// 						<NavButton
// 							text={t("settings.greeting")}
// 							icon={<ScheduleIcon />}
// 							to={routeBuilderWithReplace(
// 								[
// 									Routes.admin,
// 									Routes.chatList,
// 									Routes.chat,
// 									Routes.chatSettings,
// 									Routes.chatSettingsModeration,
// 								],
// 								"chatId",
// 								chatId
// 							)}
// 							sx={{ pl: 4 }}
// 						/>
// 					</List>
// 				</Collapse>
// 			</StyledNavBar>
// 		</ChatAside>
// 	) : (
// 		<></>
// 	);
// };

// old

{
	/*<AsideAccordion>*/
}
{
	/*	<Accordion*/
}
{
	/*		name={"SETTINGS"}*/
}
{
	/*		isOpen={routeExactMatch(locate.pathname, Routes.chatSettings, 1)}*/
}
{
	/*	>*/
}
{
	/*		<NavLink*/
}
{
	/*			to={routeBuilderWithReplace(*/
}
{
	/*				[*/
}
{
	/*					Routes.admin,*/
}
{
	/*					Routes.chatList,*/
}
{
	/*					Routes.chat,*/
}
{
	/*					Routes.chatSettings,*/
}
{
	/*					Routes.chatSettingsMembersRights,*/
}
{
	/*				],*/
}
{
	/*				"chatId",*/
}
{
	/*				chatId*/
}
{
	/*			)}*/
}
{
	/*			className={({ isActive }) =>*/
}
{
	/*				isActive ? "active-nav-link" : undefined*/
}
{
	/*			}*/
}
{
	/*		>*/
}
{
	/*			<p>User Rights</p>*/
}
{
	/*		</NavLink>*/
}
{
	/*		<NavLink*/
}
{
	/*			to={routeBuilderWithReplace(*/
}
{
	/*				[*/
}
{
	/*					Routes.admin,*/
}
{
	/*					Routes.chatList,*/
}
{
	/*					Routes.chat,*/
}
{
	/*					Routes.chatSettings,*/
}
{
	/*					Routes.chatSettingsGreeting,*/
}
{
	/*				],*/
}
{
	/*				"chatId",*/
}
{
	/*				chatId*/
}
{
	/*			)}*/
}
{
	/*			className={({ isActive }) =>*/
}
{
	/*				isActive ? "active-nav-link" : undefined*/
}
{
	/*			}*/
}
{
	/*		>*/
}
{
	/*			<p>Greeting</p>*/
}
{
	/*		</NavLink>*/
}
{
	/*		<NavLink*/
}
{
	/*			to={routeBuilderWithReplace(*/
}
{
	/*				[*/
}
{
	/*					Routes.admin,*/
}
{
	/*					Routes.chatList,*/
}
{
	/*					Routes.chat,*/
}
{
	/*					Routes.chatSettings,*/
}
{
	/*					Routes.chatSettingsModeration,*/
}
{
	/*				],*/
}
{
	/*				"chatId",*/
}
{
	/*				chatId*/
}
{
	/*			)}*/
}
{
	/*			className={({ isActive }) =>*/
}
{
	/*				isActive ? "active-nav-link" : undefined*/
}
{
	/*			}*/
}
{
	/*		>*/
}
{
	/*			<p>Moderation</p>*/
}
{
	/*		</NavLink>*/
}
{
	/*	</Accordion>*/
}
{
	/*</AsideAccordion>*/
}
