import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled("div")`
	position: relative;
	width: 100%;
	border-bottom: 1px solid gray;
	font-size: 2.2rem;
	padding-bottom: 5px;
	//&:after {
	//	position: absolute;
	//	content: "";
	//	width: 50px;
	//	height: 100%;
	//	right: 0;
	//	top: 0;
	//	filter: blur(4px);
	//	background-color: black;
	//	z-index: 1;
	//}
	//&:before {
	//	position: absolute;
	//	content: "";
	//	width: 50px;
	//	height: 100%;
	//	background-color: black;
	//	filter: blur(4px);
	//	opacity: 0.5;
	//	z-index: 1;
	//}
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
		&:after {
			position: absolute;
			bottom: -6px;
			width: 100%;
			display: block;
			content: "";
			border-bottom: 1px solid white;
			z-index: 1;
		}
	}
`;
