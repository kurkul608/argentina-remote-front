import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "../shared/chat/redux/chat-page/chat-list.slice";
import authReducer from "../shared/auth/redux/auth.slice";
import chatInfoReducer from "../shared/chat/redux/chat-info-page/chat.slice";
// import chatSettingsUserRights from "shared/chat/redux/chat-settings/user-rights.slice";
import chatSettingsReducer from "../shared/chat/redux/chat-settings";
import themeReducer from "shared/theme/redux/theme.slice";
import resizeReducer from "shared/resizer/redux/resizer.slice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		resizer: resizeReducer,
		auth: authReducer,
		chats: chatReducer,
		chat: chatInfoReducer,
		chatSettings: chatSettingsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;
