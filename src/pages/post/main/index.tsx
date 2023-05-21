import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { clearChat } from "shared/chat/redux/chat-info-page/chat.slice";

export const PostMainPage = () => {
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
