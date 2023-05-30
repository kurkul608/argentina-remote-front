export const systemMessage: SystemMessageType[] = [
	"new_member",
	"left_member",
	"video_call_start",
	"video_call_end",
	"auto_delete_timer_changed",
	"pinned_message",
];

export type SystemMessageType =
	| "new_member"
	| "left_member"
	| "video_call_start"
	| "video_call_end"
	| "auto_delete_timer_changed"
	| "pinned_message";
