import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatSettings } from "shared/chat/types/chat-settings/chat-settings";
import {
	getSettingsByChatId,
	getSettingsById,
	UpdateSettings,
	updateSettings,
} from "shared/chat/services/data";
import { WritableDraft } from "immer/dist/types/types-external";
import { fromSettingsDtoService } from "shared/chat/services/from-settings-dto.service";
import { ChatSettingsDtoInterface } from "shared/chat/types/chat-settings/chat-settings.dto.interface";

export interface IChatSettings {
	config: ChatSettings;
	isLoading: boolean;
}
export interface GetChatAsyncParams {
	token: string;
	id: string;
}

export interface UpdateChatParams extends GetChatAsyncParams {
	config: UpdateSettings;
}
export const getChatSettingsAsync = createAsyncThunk(
	"chats/getSettings",
	async ({ token, id }: GetChatAsyncParams) => {
		return await getSettingsByChatId(id, token);
	}
);
export const getChatSettingsByIdAsync = createAsyncThunk(
	"chats/getSettingsById",
	async ({ token, id }: GetChatAsyncParams) => {
		return await getSettingsById(id, token);
	}
);

export const updateChatSettingsByIdAsync = createAsyncThunk(
	"chats/updateSettingsById",
	async ({ token, id, config }: UpdateChatParams) => {
		return await updateSettings(id, token, config);
	}
);

const initialState: IChatSettings = {
	config: {},
	isLoading: false,
};

export const chatSettingsSlice = createSlice({
	name: "chat/settings",
	initialState,
	reducers: {
		clearSettings: (state) => {
			state.config = initialState.config;
		},
		updateToggleFiled: (
			state,
			action: PayloadAction<{ field: string; value: boolean }>
		) => {
			let obj: WritableDraft<any> = state.config;
			const fieldPath = action.payload.field.split(".");
			for (let i = 0; i < fieldPath.length - 1; i++) {
				obj = obj[fieldPath[i]];
			}
			obj[fieldPath[fieldPath.length - 1]] = action.payload.value;
		},
		// addAdmin: (state, action: PayloadAction<string>) => {
		// 	state.config.userRights.adminList.push(action.payload);
		// },
		// removeAdmin: (state, action: PayloadAction<string>) => {
		// 	state.config.userRights.adminList.filter(
		// 		(username) => username !== action.payload
		// 	);
		// },
		// addBotAdmin: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.changeBotSettingsAllowedList)
		// 		state.config.userRights.changeBotSettingsAllowedList.push(
		// 			action.payload
		// 		);
		// },
		// removeBotAdmin: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.changeBotSettingsAllowedList)
		// 		state.config.userRights.changeBotSettingsAllowedList.filter(
		// 			(username) => username !== action.payload
		// 		);
		// },
		// addCommandListUser: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.notAffectByRulesList)
		// 		state.config.userRights.notAffectByRulesList.push(action.payload);
		// },
		// removeCommandListUser: (state, action: PayloadAction<string>) => {
		// 	if (state.config.userRights.notAffectByRulesList)
		// 		state.config.userRights.notAffectByRulesList.filter(
		// 			(username) => username !== action.payload
		// 		);
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(
			getChatSettingsAsync.fulfilled,
			(state, action: PayloadAction<ChatSettingsDtoInterface>) => {
				state.config = fromSettingsDtoService(action.payload);
				state.isLoading = false;
			}
		);
		builder.addCase(getChatSettingsAsync.pending, (state) => {
			state.config = {};
			state.isLoading = true;
		});
		builder.addCase(getChatSettingsAsync.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(
			getChatSettingsByIdAsync.fulfilled,
			(state, action: PayloadAction<ChatSettingsDtoInterface>) => {
				state.config = fromSettingsDtoService(action.payload);
				state.isLoading = false;
			}
		);
		builder.addCase(getChatSettingsByIdAsync.pending, (state) => {
			state.config = {};
			state.isLoading = true;
		});
		builder.addCase(getChatSettingsByIdAsync.rejected, (state) => {
			state.isLoading = false;
		});
		builder.addCase(
			updateChatSettingsByIdAsync.fulfilled,
			(state, action: PayloadAction<ChatSettingsDtoInterface>) => {
				state.config = fromSettingsDtoService(action.payload);
				state.isLoading = false;
			}
		);
		builder.addCase(updateChatSettingsByIdAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(updateChatSettingsByIdAsync.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const { clearSettings, updateToggleFiled } = chatSettingsSlice.actions;
export default chatSettingsSlice.reducer;
