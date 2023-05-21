import { Checkbox, FormControlLabel, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Widget } from "shared/components/widget";
import {
	Description,
	StyledBox,
	StyledWidget,
	Wrapper,
} from "shared/components/switch-widget/styled";
import Box from "@mui/material/Box/Box";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography/Typography";

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
	const { t } = useTranslation("translation", {
		keyPrefix: "options",
	});
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
						<StyledBox>
							<Switch onClick={handleOnClick} checked={isEnabled} />
						</StyledBox>
					</Wrapper>
					{isEnabled && (
						<StyledBox>
							<Typography>{switchDescription}</Typography>
							<Switch onClick={handleOnClickOption} checked={isEnabledOption} />
						</StyledBox>
					)}
					{!isEnabledOption && isEnabled && extraOptions && (
						<Box>
							<StyledBox>{`${t("select")}:`}</StyledBox>
							{extraOptions.map((option) => {
								return (
									<StyledBox key={`switch-widget--${option}`}>
										<FormControlLabel control={<Checkbox />} label={option} />
									</StyledBox>
								);
							})}
						</Box>
					)}
				</Widget>
			</StyledWidget>
		</>
	);
};
