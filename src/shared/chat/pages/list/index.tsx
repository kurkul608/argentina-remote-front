import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { WidgetWrapper } from "shared/components/widget/components/widget-wrapper";
import PageWithBreadcrumbs from "shared/components/page-with-breadcrumbs";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import ChatTopBar from "shared/chat/components/others/top-bar";

const ChatListWidget = lazy(() => import("shared/chat/components/list"));

const ChatListPage = () => {
	const { t } = useTranslation("translation", { keyPrefix: "chatsPage" });

	return (
		<>
			<PageWithBreadcrumbs
				topBar={<ChatTopBar />}
				title={<Typography variant={"h3"}>{t("chats")}</Typography>}
			>
				<Suspense fallback={<CircularProgress />}>
					<WidgetWrapper>
						<ChatListWidget />
					</WidgetWrapper>
				</Suspense>
			</PageWithBreadcrumbs>
		</>
	);
};

export default ChatListPage;
