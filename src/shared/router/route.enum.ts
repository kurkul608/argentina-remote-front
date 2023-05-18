import { ChatRoutesType } from "shared/chat/router/chat.enum";
import { PostRoutesType } from "shared/post/router/post.enum";
import { AuthRoutesType } from "shared/auth/router/auth.enum";

export enum Routes {
	admin = "",
}

export type RoutesType =
	| Routes
	| ChatRoutesType
	| PostRoutesType
	| AuthRoutesType;
