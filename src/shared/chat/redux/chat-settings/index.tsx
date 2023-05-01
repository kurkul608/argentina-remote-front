import { combineReducers } from "@reduxjs/toolkit";
import chatSettingsUserRights from "shared/chat/redux/chat-settings/user-rights.slice";
import chatSettingsReducer from "shared/chat/redux/chat-settings/chat-settings.slice";

export default combineReducers({
	chatSettingsUserRights,
	chatSettingsReducer,
});
