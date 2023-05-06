import { IChat } from "shared/chat/types/chat.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getChatsList } from "shared/chat/services/data";
import { IGetAllChats } from "shared/chat/redux/chat-page/chat-list.slice";
import { fromChatDtoService } from "shared/chat/services/from-chat-dto.service";
import { Limits } from "constants/limits";
import { IMessage } from "shared/message/interfaces/message/message.interface";

export interface IDraftState {
	createPost: {
		chooseChats: {
			list: IChat[];
			isLoading: boolean;
			error: string;
			total: number;
			page: number;
			hasMore: boolean;
			q: string;

			selectedChats: IChat[];
			savedMessages: IMessage[];
		};
	};
}
export const draftInitialState: IDraftState = {
	createPost: {
		chooseChats: {
			list: [],
			total: 0,
			isLoading: false,
			error: "",
			page: 0,
			hasMore: false,
			q: "",

			selectedChats: [],
			savedMessages: [],
		},
	},
};

export const getChatsDraftAsync = createAsyncThunk(
	"draft/getChats",
	async ({ token, params }: IGetAllChats) => {
		const { page, limit, isHidden, q } = params;
		return getChatsList(token, {
			limit: limit,
			offset: page * limit,
			isHidden: isHidden,
			q,
		});
	}
);

export const draftSlice = createSlice({
	name: "draft",
	initialState: draftInitialState,
	reducers: {
		addChatToDraft: (state, action: PayloadAction<IChat[]>) => {
			state.createPost.chooseChats.selectedChats = action.payload;
		},
		clearChoose: (state) => {
			state.createPost.chooseChats = draftInitialState.createPost.chooseChats;
		},
		addMessagesToDraft: (state, action: PayloadAction<IMessage[]>) => {
			state.createPost.chooseChats.savedMessages = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getChatsDraftAsync.pending, (state, action) => {
			const clearByQ =
				state.createPost.chooseChats.q !== action.meta.arg.params.q;

			state.createPost.chooseChats = {
				...state.createPost.chooseChats,
				list: clearByQ ? [] : state.createPost.chooseChats.list,
				page: action.meta.arg.params.page + 1,
				isLoading: true,
			};
		});

		builder.addCase(getChatsDraftAsync.fulfilled, (state, action) => {
			state.createPost.chooseChats = {
				...state.createPost.chooseChats,
				isLoading: false,
				error: "",
				total: action.payload.total,
				hasMore:
					state.createPost.chooseChats.page * Limits.chatsPerPage <
					action.payload.total,
				list: state.createPost.chooseChats.list.concat(
					action.payload.data.map(fromChatDtoService)
				),
			};
		});

		builder.addCase(getChatsDraftAsync.rejected, (state, action) => {
			state.createPost.chooseChats = {
				...state.createPost.chooseChats,
				isLoading: false,
				error: action.payload as string,
			};
		});
	},
});
export const { addChatToDraft, clearChoose, addMessagesToDraft } =
	draftSlice.actions;

export default draftSlice.reducer;
