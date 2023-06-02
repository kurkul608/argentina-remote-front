import React, { useState } from "react";
import { TableWidget } from "shared/components/table-widget";
import Switch from "shared/components/switch-widget";
import Box from "@mui/material/Box";

const ChatRules = () => {
	const [value, setValue] = useState(false);
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
			<Switch
				description={"Allow chat admins to call bot commands"}
				value={value}
				callback={(val) => setValue(val)}
			/>
		</Box>
	);
};

export default ChatRules;
