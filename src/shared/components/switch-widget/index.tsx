import { Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Widget } from "shared/components/widget";
import {
	AdvancedButton,
	Description,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";
import { Settings } from "@mui/icons-material";

export interface SwitchWidgetProps {
	name: string;
	description: string;
	value?: boolean;
	callback?: (value: boolean) => void;
	extraOptions?: string[];
}

export const SwitchWidget = ({
	name,
	description,
	value,
	callback,
	extraOptions,
}: SwitchWidgetProps) => {
	const [isEnabled, setIsEnabled] = useState(value || false);
	const [isAdvancedMode, setAdvancedMode] = useState(false);
	const handleOnClick = () => setIsEnabled(!isEnabled);
	const handleAdvancedButtonOnClick = () => setAdvancedMode(!isAdvancedMode);
	useEffect(() => {
		if (callback) callback(isEnabled);
	}, [isEnabled]);
	return (
		<>
			<StyledWidget>
				<Widget name={name}>
					<Wrapper>
						<Description>{description}</Description>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Switch onClick={handleOnClick} checked={isEnabled} />
							{extraOptions && (
								<AdvancedButton onClick={handleAdvancedButtonOnClick}>
									<Settings />
								</AdvancedButton>
							)}
						</div>
					</Wrapper>
					{isAdvancedMode && <div>{extraOptions}</div>}
				</Widget>
			</StyledWidget>
		</>
	);
};
