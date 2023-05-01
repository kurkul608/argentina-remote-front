import { styled } from "@mui/material/styles";
import { color } from "constants/colors";
import { Button } from "@mui/material";

export const LanguageSwitchWrapper = styled("div")`
	display: flex;
	gap: 15px;
`;

interface IButtonProps {
	active: boolean;
}
export const LanguageSwitchButton = styled("button")<IButtonProps>`
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	color: ${(props) =>
		props.active
			? color(props.theme.palette.mode).activeTabText
			: color(props.theme.palette.mode).breadcrumbsTitleText};
	border: ${(props) =>
		props.active
			? `1px solid ${color(props.theme.palette.mode).activeTabText}`
			: `1px solid ${color(props.theme.palette.mode).breadcrumbsTitleText}`};
	font-size: 16px;
	height: 30px;
	width: 30px;
`;

export const StyledButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));
