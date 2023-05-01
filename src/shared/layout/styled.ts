import { styled } from "@mui/material/styles";
import BreakPoints from "constants/breakpoints";
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
// import { drawerWidth } from "constants/size";

export const Main = styled("main")`
	width: 100%;
	padding: 25px;

	@media (max-width: ${BreakPoints.MOBILE}px) {
		height: auto;
		min-height: 100vh;
		padding-top: 80px;
	}
`;
