import { Switch } from "@mui/material";
import React, { useState } from "react";
import { Widget } from "shared/components/widget";
import {
	Description,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";

export interface SwitchWidgetProps {
	name: string;
	description: string;
}

export const SwitchWidget = ({ name, description }: SwitchWidgetProps) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const handleOnClick = () => {
		setIsEnabled(!isEnabled);
	};
	return (
		<>
			<StyledWidget>
				<Widget name={name}>
					<Wrapper>
						<Description>{description}</Description>
						<Switch onClick={handleOnClick} checked={isEnabled} />
					</Wrapper>
				</Widget>
			</StyledWidget>
		</>
	);
};
