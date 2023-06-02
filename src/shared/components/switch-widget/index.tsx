import React from "react";
import * as ST from "shared/components/switch-widget/styled";
import { SwitchProps } from "@mui/material/Switch";

export interface SwitchWidgetProps extends SwitchProps {
	description: string;
	value: boolean;
	callback?: (value: boolean) => void;
}

const Switch = ({
	description,
	value,
	callback,
	...otherProps
}: SwitchWidgetProps) => {
	const handleOnClick = () => callback && callback(!value);

	return (
		<>
			<ST.StyledWidget>
				<ST.Wrapper>
					<ST.Description>{description}</ST.Description>
					<ST.StyledBox>
						<ST.StyledSwitch
							onClick={handleOnClick}
							checked={value}
							{...otherProps}
						/>
					</ST.StyledBox>
				</ST.Wrapper>
			</ST.StyledWidget>
		</>
	);
};

export default Switch;
