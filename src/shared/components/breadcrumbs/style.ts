import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const BreadcrumbsWrapper = styled("div")`
	display: flex;
	gap: 10px;
	font-size: 1.4rem;
`;

export const Breadcrumb = styled("div")`
	cursor: pointer;
	position: relative;
	color: ${(props) => color(props.theme.palette.mode).regularTabText};
	&:hover {
		&:after {
			position: absolute;
			width: 100%;
			display: block;

			content: "";
			border-bottom: 1px gray solid;
		}
	}

	&:last-child {
		cursor: default;
		color: ${(props) => color(props.theme.palette.mode).activeTabText};
		&:hover {
			&:after {
				position: absolute;
				width: 100%;
				display: block;

				content: "";
				border-bottom: none;
			}
		}
	}
`;

export const Separator = styled("div")`
	user-select: none;
	color: ${(props) => color(props.theme.palette.mode).regularTabText};
`;

export const BreadcrumbWrapper = styled("div")`
	display: flex;
	gap: 10px;
`;
