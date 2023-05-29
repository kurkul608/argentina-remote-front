import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Widget } from "shared/components/widget";
import {
	Description,
	StyledBox,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";

export interface SwitchWidgetProps {
	name: string;
	description: string;
	switchDescription?: string;
	value?: boolean;
	callback?: (value: boolean) => void;
}

export const SwitchWidget = ({
	name,
	description,
	value,
	callback,
}: SwitchWidgetProps) => {
	const [isEnabled, setIsEnabled] = useState(value || false);
	const handleOnClick = () => setIsEnabled(!isEnabled);
	useEffect(() => {
		if (callback) callback(isEnabled);
	}, [isEnabled]);
	return (
		<>
			<StyledWidget>
				<Widget name={name}>
					<Wrapper>
						<Description>{description}</Description>
						<StyledBox>
							<Switch onClick={handleOnClick} checked={isEnabled} />
						</StyledBox>
					</Wrapper>
				</Widget>
			</StyledWidget>
		</>
	);
};
