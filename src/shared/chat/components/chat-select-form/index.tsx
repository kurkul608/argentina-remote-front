import React, { useEffect, useState } from "react";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Limits } from "constants/limits";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useTranslation } from "react-i18next";
import { IChat } from "shared/chat/types/chat.interface";
import { FormikErrors, FormikTouched } from "formik";
import { IGetAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { ITableDataInterface } from "interfaces/dto/table-data.interface";
import { IChatDto } from "shared/chat/types/chat-dto.interface";

interface IOwnProps {
	value: IChat[];
	setFieldValue(field: string, value: IChat[]): void;
	handleSubmit(e?: React.FormEvent<HTMLFormElement> | undefined): void;
	touched?: FormikTouched<IChat>[];
	error?: string | never[] | string[] | FormikErrors<IChat>[];

	getChats(
		arg: IGetAllChats
	): AsyncThunkAction<ITableDataInterface<IChatDto>, IGetAllChats, object>;

	chats: IChat[];
	selectedChats: IChat[];
	page: number;
	total: number;
	isLoading: boolean;
}

const selector = (state: IRootState) => ({ token: state.auth.token! });

export const ChatSelectForm = (props: IOwnProps) => {
	const { t } = useTranslation("translation", {
		keyPrefix: "chat.selectForm",
	});

	const [open, setOpen] = useState(false);

	const { token } = useAppSelector(selector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			props.getChats({
				token,
				params: {
					limit: Limits.chatsPerChatSelect,
					page: 0,
					isHidden: false,
					// q,
				},
			})
		);
	}, []);

	return (
		<Autocomplete
			multiple
			id="asynchronous-demo"
			sx={{ width: "100%" }}
			open={open}
			value={props.value}
			onChange={(_, value) => props.setFieldValue("chats", value)}
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
			options={props.chats}
			loading={props.isLoading}
			renderInput={(params) => (
				<TextField
					{...params}
					label={t("label")}
					name={"chats"}
					error={Boolean(props.touched && props.error)}
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{props.isLoading ? (
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
