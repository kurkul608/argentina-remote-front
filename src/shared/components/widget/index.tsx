import React from "react";
import * as ST from "shared/components/widget/styled";
import Title from "shared/components/title";
import { TFuncReturn } from "i18next";

interface IOwnProps {
	name?: string | TFuncReturn<any, any, any>;
	onClick?: () => void;
	children?: React.ReactNode;
}
export const Widget = ({ name, children, onClick }: IOwnProps) => {
	return (
		<ST.StyledWidget onClick={onClick}>
			<Title>{name}</Title>
			{children}
		</ST.StyledWidget>
	);
};
