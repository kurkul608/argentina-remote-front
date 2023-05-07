import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const BreadcrumbsWrapper = styled("div")`
	display: flex;
	gap: 10px;
	font-size: 1.4rem;
	@media (max-width: ${(props) => props.theme.breakpoints.values.lg}px) {
		flex-wrap: wrap;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
		font-size: 1.2rem;
	}
`;

export const Breadcrumb = styled("div")`
	cursor: pointer;
	position: relative;
	color: ${(props) => color(props.theme.palette.mode).regularTabText};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 350px;
	@media (max-width: ${(props) => props.theme.breakpoints.values.lg}px) {
		max-width: 250px;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.values.sm}px) {
		max-width: 75px;
	}
	@media (max-width: ${(props) => props.theme.breakpoints.values.xs}px) {
		max-width: 75px;
	}
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
	@media (max-width: ${(props) => props.theme.breakpoints.values.md}) {
		gap: 5px;
	}
`;
