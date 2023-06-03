import React from "react";
import { IContentProps, TableWidget } from "shared/components/table-widget";
import Switch from "shared/components/switch-widget";
import { useAppSelector } from "redux/hooks";
import { IRootState } from "redux/store";
import { ChatMemberAdministrator } from "typegram";
import Box from "@mui/material/Box";

const selector = (state: IRootState) => ({
	userRights: state.chatSettings.chatSettingsUserRights.data,
	token: state.auth.token,
	id: state.chat.chat?._id,
});

const RightsAdmin = () => {
	const { userRights } = useAppSelector(selector);

	const adminChat: IContentProps[] = userRights.adminList.map((user) => {
		const misc: { [index: string]: boolean } = {};
		if (user.status === "administrator") {
			for (const permission in user) {
				if (
					permission !== "status" &&
					permission !== "user" &&
					permission !== "custom_title"
				) {
					misc[permission] = user[
						permission as keyof ChatMemberAdministrator
					] as boolean;
				}
			}
		}
		return {
			content: user.user.username,
			status: user.status,
			misc,
		};
	});

	return (
		<Box
			sx={{
				display: "flex",
				marginTop: "10px",
				flexDirection: " column",
				gap: "20px",
			}}
		>
			<TableWidget title={"Admin List"} content={adminChat} />
			<Switch
				description={"Allow chat admins to call bot commands"}
				value={userRights.allowChatAdminCallCommands}
				// callback={callBack}
			/>
		</Box>
	);
};

export default RightsAdmin;
