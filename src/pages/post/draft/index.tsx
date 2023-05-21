import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { clearChat } from "shared/chat/redux/chat-info-page/chat.slice";
import { useAppDispatch } from "redux/hooks";

export const PostDraftPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(clearChat());
	}, []);
	return (
		<>
			<Outlet />
		</>
	);
};
