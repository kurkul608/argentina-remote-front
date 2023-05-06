import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const BreadcrumbsWrapper = styled("div")`
	display: flex;
	gap: 10px;
	font-size: 1.4rem;
	@media (max-width: 1024px) {
		flex-wrap: wrap;
	}
	@media (max-width: 450px) {
		font-size: 1.2rem;
	}
`;

export const Breadcrumb = styled("div")`
	cursor: pointer;
	position: relative;
	color: ${(props) => color(props.theme.palette.mode).regularTabText};
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.9rem;
	@media (max-width: 1024px) {
		max-width: 250px;
	}
	@media (max-width: 450px) {
		max-width: 75px;
	}
	@media (max-width: 359px) {
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
	@media (max-width: 640px) {
		gap: 5px;
	}
`;
