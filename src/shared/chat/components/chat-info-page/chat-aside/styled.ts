import { styled } from "@mui/material/styles";
import { color } from "constants/colors";

export const ChatLeftBarWrapper = styled("div")`
	font-size: 1.5rem;
`;
export const ChatBarTitleWrapper = styled("div")`
	display: flex;
	align-items: center;
	margin-top: 15px;
	align-content: flex-end;
	padding: 0 16px;
`;

export const ImgWrapper = styled("div")`
	min-width: 56px;
`;

export const ChatBarImageWrapper = styled("div")<{ imageUrl?: string }>`
	width: 24px;
	height: 24px;
	background: ${({ imageUrl, theme }) =>
		imageUrl
			? `url(${imageUrl})`
			: color(theme.palette.mode).chatPhotoBackgroundColor};
	background-size: 100%;
	border-radius: 50px;
`;
export const ChatBarTitle = styled("span")`
	color: ${(props) => color(props.theme.palette.mode).baseText};
`;

export const ChatNavWrapper = styled("div")`
	margin-top: 20px;
	margin-bottom: 20px;
`;
