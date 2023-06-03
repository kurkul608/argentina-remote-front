import React from "react";

import StickersCleaner from "shared/chat/components/settings/moderation/messages-filters/stickers-cleaner";
import BanWords from "shared/chat/components/settings/moderation/messages-filters/ban-words";

const MessagesFilters = () => {
	return (
		<>
			<StickersCleaner />
			<BanWords />
		</>
	);
};

export default MessagesFilters;
