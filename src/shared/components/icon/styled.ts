import styled, { css } from "styled-components";
import Home from "public/assets/icons/home.svg";
import { color, ColorsDark } from "constants/colors";

export const StyledHome = styled(Home)<{ isActive: boolean }>`
	.home_svg__body {
		${(props) => {
			return color(props.theme.mainTheme) === ColorsDark
				? css`
						fill: ${props.isActive ? "orange" : "white"};
				  `
				: css`
						fill: black;
				  `;
		}}
	}
	.home_svg__roof {
		${(props) => {
			return color(props.theme.mainTheme) === ColorsDark
				? css`
						fill: ${props.isActive ? "orange" : "white"};
				  `
				: css`
						fill: black;
				  `;
		}}
	}
	.home_svg__tube {
		${(props) => {
			return color(props.theme.mainTheme) === ColorsDark
				? css`
						fill: ${props.isActive ? "orange" : "white"};
				  `
				: css`
						fill: black;
				  `;
		}}
	}
	.home_svg__door {
		${(props) => {
			return color(props.theme.mainTheme) === ColorsDark
				? css`
						fill: ${props.isActive ? "white" : "white"};
				  `
				: css`
						fill: ${props.isActive ? "white" : "black"};
				  `;
		}}
	}
`;
