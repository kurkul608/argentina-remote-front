export interface ChatSettings {
	removeBots?: boolean;
	clearSystemMessages?: {
		clearAll: boolean;
		messageTypes: string[];
	};
	_id?: string;
}
