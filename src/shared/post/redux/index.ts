import draftReducer from "./draft/draft.slice";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
	draft: draftReducer,
});
