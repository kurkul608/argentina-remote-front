import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { color } from "constants/colors";
import { StyledAccordionMenu } from "shared/components/accordion/styled";
import BreakPoints from "constants/breakpoints";
import { ZIndex } from "constants/z-index";
import { drawerWidth } from "constants/size";

export const StyledAside = styled("aside")`
	height: 100%;
	width: 240px;
	flex: 1 0 240px;
	background-color: ${(props) =>
		color(props.theme.palette.mode).widgetBackGround};
	z-index: ${ZIndex.ASIDE};

	@media (max-width: ${BreakPoints.MOBILE}px) {
		//display: none;
		position: absolute;
		padding-top: 90px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export const StyledNavBar = styled("ul")`
	width: 100%;
	a {
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
		height: 42px;
		display: flex;
		gap: 10px;
		align-items: center;

		&:hover {
			background-color: ${(props) =>
				color(props.theme.palette.mode).activeNavLinkBackground};
			p {
				color: ${(props) => color(props.theme.palette.mode).activeTabText};
			}
		}
		svg {
			height: 20px;
			width: auto;
			fill: white;
		}
		p {
			font-size: 1.3rem;
			color: ${(props) => color(props.theme.palette.mode).regularTabText};
			text-transform: uppercase;
		}
	}
	.active-nav-link {
		background-color: ${(props) =>
			color(props.theme.palette.mode).activeNavLinkBackground};
		p {
			color: ${(props) => color(props.theme.palette.mode).activeTabText};
		}
	}
`;

export const AsideAccordion = styled("div")`
	${StyledAccordionMenu} {
		padding-left: 15px;
		padding-right: 15px;
		width: 100%;
		height: 42px;
		display: flex;
		gap: 10px;
		align-items: center;
		font-size: 1.3rem;
		color: ${(props) => color(props.theme.palette.mode).regularTabText};
		text-transform: uppercase;
		&:hover {
			background-color: ${(props) =>
				color(props.theme.palette.mode).activeNavLinkBackground};
		}
	}
	.accordion--active {
		color: ${(props) => color(props.theme.palette.mode).activeTabText};
	}
`;

export const StyledDrawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		// backgroundColor: theme.palette.background.default,
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));
