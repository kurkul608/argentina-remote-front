import React, { useEffect } from "react";
import { ContentProps, TableWidget } from "shared/components/table-widget";
import { SwitchWidget } from "shared/components/switch-widget";
import { ContentWrapper } from "shared/chat/components/chat-settings/components/members-rights-page/styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateToggleFiled } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { getChatAdminsAsync } from "shared/chat/redux/chat-settings/user-rights.slice";

export const RightsAdmin = () => {
	const { userRights, token, id } = useAppSelector((state) => ({
		userRights: state.chatSettings.chatSettingsUserRights,
		token: state.auth.token,
		id: state.chat.chat?._id,
	}));
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

	const adminChat: ContentProps[] = userRights.adminList.map((user) => {
		return {
			content: user.user.username,
			status: user.status,
			misc: "dopinfa",
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
			);
		</ContentWrapper>
	);
};
