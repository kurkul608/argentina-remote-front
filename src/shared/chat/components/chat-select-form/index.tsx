import React, { useEffect } from "react";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { getAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { Limits } from "constants/limits";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const selector = (state: IRootState) => ({
	chats: state.chats.list,
	page: state.chats.page,
	isLoading: state.chats.isLoading,
	token: state.auth.token!,
});
export const ChatSelectForm = () => {
	const [open, setOpen] = React.useState(false);

	const { chats, token, page, isLoading } = useAppSelector(selector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			getAllChats({
				token,
				params: { limit: Limits.chatsPerPage, page, isHidden: false },
			})
		);
	}, []);
	return (
		<Autocomplete
			multiple
			id="asynchronous-demo"
			sx={{ width: 300 }}
			open={open}
			// onInputChange={(e, val) => {
			// 	console.log(e.target);
			// 	console.log(val);
			// }}
			onOpen={() => {
				setOpen(true);
			}}
			onClose={() => {
				setOpen(false);
			}}
			isOptionEqualToValue={(option, value) =>
				option.tgChatInfo.chatInfo.title === value.tgChatInfo.chatInfo.title
			}
			getOptionLabel={(option) => option.tgChatInfo.chatInfo.title}
			options={chats}
			loading={isLoading}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Asynchronous"
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{isLoading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
				/>
			)}
		/>
	);
};
