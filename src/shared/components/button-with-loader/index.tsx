import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { green } from "@mui/material/colors";
import Box from "@mui/material/Box/Box";

interface IOwnProps {
	loading: boolean;
	variant?: "contained" | "outlined" | "text";
	handleClick(): void;
	children: React.ReactNode;
}

export const ButtonWithLoader = ({
	children,
	loading,
	variant,
	handleClick,
}: IOwnProps) => {
	return (
		<Box sx={{ position: "relative" }}>
			<Button variant={variant} onClick={handleClick} disabled={loading}>
				{children}
			</Button>
			{loading && (
				<CircularProgress
					size={24}
					sx={{
						color: green[500],
						position: "absolute",
						top: "50%",
						left: "50%",
						marginTop: "-12px",
						marginLeft: "-12px",
					}}
				/>
			)}
		</Box>
	);
};
