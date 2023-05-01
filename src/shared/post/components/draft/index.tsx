import { Grid } from "@mui/material";
import React from "react";
import { Widget } from "shared/components/widget";
import { useTranslation } from "react-i18next";

export const PostDraft = () => {
	const { t } = useTranslation("translation", { keyPrefix: "post.draft" });
	return (
		<Grid container spacing={3}>
			{/* Chart */}
			<Grid item xs={12}>
				<Widget name={t("pageTitle")}> Widget for drafts list</Widget>
			</Grid>
			<Grid item xs={12}>
				<Widget name={t("createWidget.title")}>
					Widget for create post content
				</Widget>
			</Grid>
			{/*<Grid item xs={12} md={8} lg={1}>*/}
			{/*	<Paper*/}
			{/*		sx={{*/}
			{/*			p: 2,*/}
			{/*			display: "flex",*/}
			{/*			flexDirection: "column",*/}
			{/*			height: 240,*/}
			{/*		}}*/}
			{/*	>*/}
			{/*		/!*<Chart />*!/*/}
			{/*		Grid content*/}
			{/*	</Paper>*/}
			{/*</Grid>*/}
		</Grid>
	);
};
