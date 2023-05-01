import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const OuterWrapper = styled("div")`
	.invalid {
		border: 1px ${(props) => color(props.theme.palette.mode).inputErrorColor}
			solid;
	}
	.invalid-text {
		color: ${(props) => color(props.theme.palette.mode).inputErrorColor};
	}
`;

export const InputWrapper = styled("div")`
	position: relative;
	padding: 0 10px;
	border: 1px #f7b03e solid;
	background: ${(props) => color(props.theme.palette.mode).backGround};
	border-radius: 5px;
`;
export const StyledInput = styled("input")`
	color: ${(props) => color(props.theme.palette.mode).widgetMainText};
	background: ${(props) => color(props.theme.palette.mode).backGround};
	padding: 10px 0;
	width: 100%;
	border: none;
`;

export const Placeholder = styled("label")`
	position: absolute;
	font-size: 1.5rem;
	top: 8px;
	left: 11px;
	transition: all 0.3s;
	color: ${(props) => color(props.theme.palette.mode).authInputLabel};
	user-select: none;
	z-index: 0;

	${InputWrapper}:focus-within & {
		top: -23px;
		left: 0;
		color: ${(props) => color(props.theme.palette.mode).authInputFilled};
		transition: all 0.3s;
	}
`;

export const PlaceholderFilled = styled(Placeholder)`
	top: -23px;
	left: 0;
	color: ${(props) => color(props.theme.palette.mode).authInputFilled};
`;

export const Error = styled("p")`
	margin-top: 10px;
	font-size: 1.4rem;
	color: ${(props) => color(props.theme.palette.mode).widgetMainText};
`;
