import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const TitleWrapper = styled("div")`
	grid-column-start: 1;
	grid-column-end: -1;
	font-size: 2rem;
	color: ${(props) => color(props.theme.palette.mode).pageTitle};
`;
