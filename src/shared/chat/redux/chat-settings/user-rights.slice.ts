import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getChatAdmins } from "shared/chat/services/data";
import { ChatAdminsDtoInterface } from "shared/chat/types/chat-settings/chat-admins-dto.interface";
import { IChatSettingsUserRights } from "shared/chat/types/chat-settings/chat-sub-settings";

export interface IUserSettings {
	data: IChatSettingsUserRights;
	isLoading: boolean;
}

const initialState: IUserSettings = {
	data: {
		adminList: [],
		allowChatAdminCallCommands: false,
		notAffectByRulesList: [],
		changeBotSettingsAllowedList: [],
		useBotCommandsList: [],
	},
	isLoading: false,
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
			if (state.data.changeBotSettingsAllowedList)
				state.data.changeBotSettingsAllowedList.push(action.payload);
		},
		removeBotAdmin: (state, action: PayloadAction<string>) => {
			if (state.data.changeBotSettingsAllowedList)
				state.data.changeBotSettingsAllowedList.filter(
					(username) => username !== action.payload
				);
		},
		addCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.data.notAffectByRulesList)
				state.data.notAffectByRulesList.push(action.payload);
		},
		removeCommandListUser: (state, action: PayloadAction<string>) => {
			if (state.data.notAffectByRulesList)
				state.data.notAffectByRulesList.filter(
					(username) => username !== action.payload
				);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getChatAdminsAsync.fulfilled,
			(state, action: PayloadAction<ChatAdminsDtoInterface>) => {
				state.data.adminList.push(...action.payload.data);
				state.isLoading = false;
			}
		);
		builder.addCase(getChatAdminsAsync.pending, (state) => {
			state.data.adminList = [];
			state.isLoading = true;
		});
		builder.addCase(getChatAdminsAsync.rejected, (state) => {
			state.data.adminList = [];
			state.isLoading = false;
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
