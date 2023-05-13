import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

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
	color: gray;
	cursor: pointer;
	white-space: nowrap;
	&.active {
		color: white;
		cursor: default;
	}
`;
