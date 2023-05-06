import React from "react";
import { ChatSelectForm } from "shared/chat/components/chat-select-form";
import Box from "@mui/material/Box";
import { IChat } from "shared/chat/types/chat.interface";
import { FormikErrors, FormikTouched } from "formik";
import { getChatsDraftAsync } from "shared/post/redux/draft/draft.slice";
import { IRootState } from "redux/store";
import { useAppSelector } from "redux/hooks";

interface IOwnProps {
	value: IChat[];
	setFieldValue(field: string, value: IChat[]): void;
	handleSubmit(e?: React.FormEvent<HTMLFormElement> | undefined): void;
	touched?: FormikTouched<IChat>[];
	error?: string | never[] | string[] | FormikErrors<IChat>[];
}

const selector = (state: IRootState) => {
	const chooseChats = state.post.draft.createPost.chooseChats;
	return {
		chats: chooseChats.list,
		page: chooseChats.page,
		total: chooseChats.total,
		isLoading: chooseChats.isLoading,
		selectedChats: chooseChats.selectedChats,
	};
};

export const StepChatsSelect = (props: IOwnProps) => {
	const state = useAppSelector(selector);
	return (
		<Box
			component={"form"}
			sx={{ width: "50%", display: "flex", justifyContent: "center" }}
		>
			<ChatSelectForm getChats={getChatsDraftAsync} {...state} {...props} />
		</Box>
	);
};
