import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const InnerCircle = styled("circle")<{
	dashedArrayValue: number;
	offset: number;
	color: string;
}>`
	stroke-dasharray: ${(props) => props.dashedArrayValue},
		${(props) => props.dashedArrayValue};
	stroke-dashoffset: ${(props) => props.offset};
	stroke-linecap: round;

	stroke-width: 2;
	transition: stroke-dashoffset 0.35s ease 0s;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;

	stroke: ${(props) => {
		switch (props.color) {
			case "base":
				return color(props.theme.palette.mode).limitCircleBaseColor;
			case "attention":
				return color(props.theme.palette.mode).limitCircleSecondaryColor;
			case "error":
				return color(props.theme.palette.mode).limitCircleErrorColor;
		}
	}};
`;

export const CircleWrapper = styled("span")`
	display: inline-block;
	border-radius: 50%;
`;
