import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box/Box";
import Switch from "@mui/material/Switch";

export const StyledWidget = styled("div")`
	max-width: 1000px;
	font-size: 1rem;
	color: white;
`;

export const Description = styled("div")`
	color: #878787;
	font-size: 1rem;
`;

export const Wrapper = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
`;

export const StyledSwitch = styled(Switch)``;
