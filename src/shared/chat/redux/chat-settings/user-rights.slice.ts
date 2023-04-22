import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSettings } from "shared/chat/types/chat-settings";
import { getChatAdmins } from "shared/chat/services/data";
import { ChatAdminsDtoInterface } from "shared/chat/types/chat-settings/chat-admins-dto.interface";

export type configSettings = Pick<ChatSettings, "userRights">;

const initialState: configSettings["userRights"] = {
	adminList: [],
	changeBotSettingsAllowedList: [],
	allowChatAdminCallCommands: false,
	notAffectByRulesList: [],
	useBotCommandsList: [],
};

export interface GetAdminsParams {
	token: string;
	id: string;
}

export const getChatAdminsAsync = createAsyncThunk(
	"userRights/admins",
	async ({ token, id }: GetAdminsParams) => {
		return (await getChatAdmins(id, token)) as ChatAdminsDtoInterface;
	}
);

export const userRightsSlice = createSlice({
	name: "chat/settings/userRights",
	initialState,
	reducers: {
		addBotAdmin: (state, action: PayloadAction<string>) => {
			if (state.changeBotSettingsAllowedList)
				state.changeBotSettingsAllowedList.push(action.payload);
		},
		removeBotAdmin: (state, action: PayloadAction<string>) => {
			if (state.changeBotSettingsAllowedList)
				state.changeBotSettingsAllowedList.filter(
					(username) => username !== action.payload
				);
		},
		addCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.notAffectByRulesList)
				state.notAffectByRulesList.push(action.payload);
		},
		removeCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.notAffectByRulesList)
				state.notAffectByRulesList.filter(
					(username) => username !== action.payload
				);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getChatAdminsAsync.fulfilled,
			(state, action: PayloadAction<ChatAdminsDtoInterface>) => {
				state.adminList.push(...action.payload.admins);
			}
		);
		builder.addCase(getChatAdminsAsync.pending, (state) => {
			state.adminList = [];
		});
	},
});

export const {
	addBotAdmin,
	removeBotAdmin,
	addCommandListUser,
	removeCommandListUser,
} = userRightsSlice.actions;

export default userRightsSlice.reducer;
