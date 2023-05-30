import React from "react";
import { TableWidget } from "shared/components/table-widget";
import Switch from "shared/components/switch-widget";
import Box from "@mui/material/Box";

const ChatRules = () => {
	return (
		<Box
			sx={{
				display: "flex",
				marginTop: "10px",
				flexDirection: " column",
				gap: "20px",
			}}
		>
			<TableWidget
				title={"Admin List"}
				content={[{ content: "ad", status: "ad" }]}
			/>
			<Switch description={"Allow chat admins to call bot commands"} />
		</Box>
	);
};

export default ChatRules;
