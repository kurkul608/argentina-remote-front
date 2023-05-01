import React from "react";
import { useTranslation } from "react-i18next";
import { Home } from "shared/layout/aside/components/main/home";
import { Post } from "shared/layout/aside/components/main/post";
import { Chat } from "shared/layout/aside/components/main/chat";

export const MainNavigation = () => {
	const { t } = useTranslation("translation", { keyPrefix: "aside" });

	return (
		<>
			<Home text={t("mainPage")} />
			<Chat list={t("chatList")} hiddenList={t("hiddenChatList")} />
			<Post
				main={t("posting.main")}
				listPlanned={t("posting.listPlanned")}
				contentPlan={t("posting.contentPlan")}
				draft={t("posting.draft")}
				listPublished={t("posting.listPublished")}
			/>
		</>
	);
};
