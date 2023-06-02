import React from "react";
import * as ST from "shared/components/switch-widget/styled";

export interface SwitchWidgetProps {
	description: string;
	value: boolean;
	callback: (value: boolean) => void;
}

const Switch = ({ description, value, callback }: SwitchWidgetProps) => {
	const handleOnClick = () => callback(!value);

	return (
		<>
			<ST.StyledWidget>
				<ST.Wrapper>
					<ST.Description>{description}</ST.Description>
					<ST.StyledBox>
						<ST.StyledSwitch onClick={handleOnClick} checked={value} />
					</ST.StyledBox>
				</ST.Wrapper>
			</ST.StyledWidget>
		</>
	);
};

export default Switch;
