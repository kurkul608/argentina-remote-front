import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const WidgetWrapper = styled("div")`
	padding: 15px;
	background: ${(props) => color(props.theme.palette.mode).widgetBackGround};
	border: 1px solid
		${(props) => color(props.theme.palette.mode).widgetBorderColor};
	transition: background-color 0.3s;
`;
export const WidgetName = styled("h4")`
	color: ${(props) => color(props.theme.palette.mode).widgetTitleText};
`;
