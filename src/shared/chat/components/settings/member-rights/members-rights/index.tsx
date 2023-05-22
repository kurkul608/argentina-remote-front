import React from "react";
import { TableWidget } from "shared/components/table-widget";
import Box from "@mui/material/Box";

const RightsMembers = () => {
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
				title={"Users who change the bot settings on the site"}
				description={
					"Users who are here on the site can configure greeting, moderation, chat greeting, reputation, log, triggers, etc."
				}
			/>
			<TableWidget
				title={"Users who control the bot using commands"}
				description={
					"You can see the list of commands by link. The users in this list are not subject to the chat rules"
				}
			/>
			<TableWidget
				title={"Users who will not be affected by filters"}
				description={"Users who will not be affected by filters"}
			/>
			);
		</Box>
	);
};

export default RightsMembers;
