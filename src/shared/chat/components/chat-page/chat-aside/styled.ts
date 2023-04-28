import styled from "styled-components";
import { color } from "constants/colors";

export const ChatLeftBarWrapper = styled.div`
	border-top: 1px #f7b03e solid;
	font-size: 1.5rem;
`;
export const ChatBarTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 0 15px;
	margin-top: 10px;
	gap: 10px;
`;
export const ChatBarImageWrapper = styled.div`
	width: 24px;
	height: 24px;
	background-color: black;
	border-radius: 50px;
`;
export const ChatBarTitle = styled.span`
	color: ${(props) => color(props.theme.mainTheme).pageTitle};
`;

export const ChatNavWrapper = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
`;
