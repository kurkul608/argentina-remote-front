import React, { useEffect } from "react";
import { IContentProps, TableWidget } from "shared/components/table-widget";
import { SwitchWidget } from "shared/components/switch-widget";
import { ContentWrapper } from "shared/chat/components/chat-settings/components/members-rights-page/styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateToggleFiled } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { getChatAdminsAsync } from "shared/chat/redux/chat-settings/user-rights.slice";
import { IRootState } from "redux/store";
import { ChatMemberAdministrator } from "typegram";

const selector = (state: IRootState) => ({
	userRights: state.chatSettings.chatSettingsUserRights.data,
	token: state.auth.token,
	id: state.chat.chat?._id,
});

export const RightsAdmin = () => {
	const { userRights, token, id } = useAppSelector(selector);
	const dispatch = useAppDispatch();
	const callBack = (value: boolean) => {
		dispatch(
			updateToggleFiled({
				field: "userRights.allowChatAdminCallCommands",
				value,
			})
		);
	};
	useEffect(() => {
		if (!!token && id) {
			dispatch(getChatAdminsAsync({ token: token, id: id }));
		}
	}, [id]);

	const adminChat: IContentProps[] = userRights.adminList.map((user) => {
		const misc: { [index: string]: boolean } = {};
		if (user.status === "administrator") {
			for (const i in user) {
				if (i !== "status" && i !== "user" && i !== "custom_title") {
					misc[i] = user[i as keyof ChatMemberAdministrator] as boolean;
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
		<ContentWrapper>
			<TableWidget title={"Admin List"} content={adminChat} />
			<SwitchWidget
				name={"Allow chat admins to call bot commands"}
				description={"Allow chat admins to call bot commands"}
				value={userRights.allowChatAdminCallCommands}
				callback={callBack}
			/>
		</ContentWrapper>
	);
};
