import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { color } from "constants/colors";

export const StyledWrapper = styled("div")`
	position: relative;
	width: 100%;
	border-bottom: 1px solid gray;
	font-size: 2.2rem;
`;

export const MenuTable = styled("ul")`
	display: flex;
	gap: 30px;
	text-transform: uppercase;
	overflow-x: auto;
	overflow-y: hidden;
`;
export const MenuItem = styled(NavLink)`
	position: relative;
	color: ${({ theme }) => color(theme.palette.mode).widgetMainText};
	cursor: pointer;
	white-space: nowrap;
	&.active {
		color: ${({ theme }) => color(theme.palette.mode).activeTabText};
		cursor: default;
	}
`;
