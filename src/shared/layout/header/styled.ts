import { styled } from "@mui/material/styles";
import { color } from "constants/colors";
import BreakPoints from "constants/breakpoints";
import { ZIndex } from "constants/z-index";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";
import MuiAppBar from "@mui/material/AppBar";
import { drawerWidth } from "constants/size";
// import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export const StyledHeader = styled("header")`
	height: 57px;
	width: 100%;
	position: sticky;
	display: flex;
	align-items: center;
	background-color: ${(props) =>
		color(props.theme.palette.mode).widgetBackGround};
	z-index: ${ZIndex.HEADER};

	@media (max-width: ${BreakPoints.MOBILE}px) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		justify-content: space-between;
		padding: 0 15px;
	}
`;

export const StyledIHeaderInformationBlock = styled("div")`
	height: 100%;
	flex: 1 1 auto;
	display: flex;
	justify-content: space-between;

	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: none;
	}
`;

export const StyledHeaderLogoBlock = styled("div")`
	height: 100%;
	width: 240px;
	flex: 0 0 auto;
	background-color: ${(props) => color(props.theme.palette.mode).baseText};
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		font-size: 18px;
		color: ${(props) => color(props.theme.palette.mode).baseWhiteText};
	}

	@media (max-width: ${BreakPoints.MOBILE}px) {
		width: 50%;
	}
`;

export const StyledHeaderSearchBlock = styled("div")``;

export const StyledHeaderRightSideWrapper = styled("div")`
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const StyledHeaderDateBlock = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;

	time {
		color: ${(props) => color(props.theme.palette.mode).baseText};
		font-size: 15px;
	}
`;

export const StyledHeaderAccountWrapper = styled("div")`
	display: flex;
	gap: 5px;

	img {
		height: 36px;
		width: 36px;
		border-radius: 50%;
		object-fit: cover;
	}
`;

export const StyledHeaderNameBlock = styled("div")`
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: not-allowed;
	margin-right: 25px;

	p {
		font-size: 13px;
		color: ${(props) => color(props.theme.palette.mode).baseText};
	}

	span {
		font-size: 13px;
		color: ${(props) => color(props.theme.palette.mode).regularTabText};
	}
`;

interface IAsideSwitch {
	isActive?: boolean;
}
export const StyledHeaderAsideSwitch = styled("div")<IAsideSwitch>`
	width: 25px;
	height: 25px;
	border-radius: 4px;
	border: 1px solid ${(props) => color(props.theme.palette.mode).activeTabText};
	display: none;
	position: relative;
	transform: rotate(45deg);

	&:after {
		${(props) => (!props.isActive ? "display: none" : "")}
		content: "X";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) rotate(-45deg);
		color: ${(props) => color(props.theme.palette.mode).activeTabText};
	}

	@media (max-width: ${BreakPoints.MOBILE}px) {
		display: flex;
	}
`;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));
