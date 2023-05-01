import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

// export const WidgetWrapper = styled("div")`
// 	padding: 15px;
// 	background: ${(props) => color(props.theme.palette.mode).widgetBackGround};
// 	border: 1px solid
// 		${(props) => color(props.theme.palette.mode).widgetBorderColor};
// 	transition: background-color 0.3s;
// `;
// export const WidgetName = styled("h4")`
// 	color: ${(props) => color(props.theme.palette.mode).widgetTitleText};
// `;

export const StyledWidget = styled(Paper)({
	padding: 16,
	display: "flex",
	flexDirection: "column",
	height: 240,
});
