import React from "react";
import { StyledTab } from "shared/components/tab/styled";

interface ITabProps {
	children?: React.ReactNode;
}

export const Tab = ({ children }: ITabProps) => {
	return <StyledTab label={children} />;
};
