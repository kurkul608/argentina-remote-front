import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(() => ({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

export const StyledFooter = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
}));
