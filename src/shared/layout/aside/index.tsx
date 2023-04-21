import React from "react";
import { StyledAside } from "./styled";
import { ChatBlock } from "shared/layout/aside/components/chat-block";
import { MainBlock } from "shared/layout/aside/components/main-block";

export const Aside = () => {
	return (
		<StyledAside>
			<MainBlock />
			<ChatBlock />
		</StyledAside>
	);
};
