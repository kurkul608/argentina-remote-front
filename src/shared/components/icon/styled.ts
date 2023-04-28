import styled, { css } from "styled-components";
import Home from "public/assets/icons/home.svg";
import Settings from "public/assets/icons/settings.svg";
import { color } from "constants/colors";
import { Theme } from "constants/theme";

export const StyledSettings = styled(Settings)<{ isActive: boolean }>`
	width: 2.4rem;
	height: 2.4rem;

	.settings_svg__inner {
		stroke: ${(props) => color(props.theme.mainTheme).iconColor};
	}
	.settings_svg__outer {
		stroke: ${(props) => color(props.theme.mainTheme).iconColor};
	}
`;

export const StyledHome = styled(Home)<{ isActive: boolean }>`
  width: 2.4rem;
  height: 2.4rem;

  .home_svg__body {
    fill: ${(props) =>
			props.isActive
				? color(props.theme.mainTheme).iconActive
				: color(props.theme.mainTheme).iconColor};

    fill-opacity: ${(props) =>
			props.theme.mainTheme === Theme.light ? 0.25 : 1};
  }

  .home_svg__roof {
    fill: ${(props) =>
			props.isActive
				? color(props.theme.mainTheme).iconActive
				: color(props.theme.mainTheme).iconColor}
  }
;

  .home_svg__tube {
    fill: ${(props) =>
			props.isActive
				? color(props.theme.mainTheme).iconActive
				: color(props.theme.mainTheme).iconColor}
  }
;
}

.home_svg__door {
  ${(props) => {
		return props.theme.mainTheme === Theme.dark
			? css`
					fill: white;
			  `
			: css`
					fill: ${props.isActive ? "white" : "black"};
			  `;
	}}
}
`;
