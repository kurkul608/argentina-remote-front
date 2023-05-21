import { Checkbox, FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Widget } from "shared/components/widget";
import {
	Description,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";

export interface SwitchWidgetProps {
	name: string;
	description: string;
	switchDescription?: string;
	value?: boolean;
	callback?: (value: boolean) => void;
	extraOptions?: string[];
	enabledOptions?: string[];
}

export const SwitchWidget = ({
	name,
	description,
	value,
	callback,
	extraOptions,
	switchDescription,
}: SwitchWidgetProps) => {
	const [isEnabled, setIsEnabled] = useState(value || false);
	const [isEnabledOption, setIsEnabledOption] = useState(value || false);
	const handleOnClick = () => setIsEnabled(!isEnabled);
	const handleOnClickOption = () => setIsEnabledOption(!isEnabledOption);

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
						</div>
					</Wrapper>
					{isEnabled && (
						<div style={{ display: "flex", alignItems: "center" }}>
							<div>{switchDescription}</div>
							<Switch onClick={handleOnClickOption} checked={isEnabledOption} />
						</div>
					)}
					{!isEnabledOption && isEnabled && extraOptions && (
						<div>
							<div>Select options:</div>
							{extraOptions.map((option) => {
								return (
									<div key={`switch-widget--${option}`}>
										<FormControlLabel control={<Checkbox />} label={option} />
									</div>
								);
							})}
						</div>
					)}
				</Widget>
			</StyledWidget>
		</>
	);
};
