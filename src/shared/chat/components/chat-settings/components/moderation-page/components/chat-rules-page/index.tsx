import { ContentWrapper } from "shared/chat/components/chat-settings/components/members-rights-page/styled";
import { TableWidget } from "shared/components/table-widget";
import React from "react";

export const ChatRulesPage = () => {
	return (
		<ContentWrapper>
			<TableWidget
				title={"Admin List"}
				content={[{ content: "ad", status: "ad", misc: "asd" }]}
			/>
			{/*<SwitchWidget*/}
			{/*	name={"Allow chat admins to call bot commands"}*/}
			{/*	description={"Allow chat admins to call bot commands"}*/}
			{/*	value={userRights.allowChatAdminCallCommands}*/}
			{/*/>*/}
			{/*);*/}
		</ContentWrapper>
	);
};
