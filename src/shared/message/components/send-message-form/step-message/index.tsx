import Grid from "@mui/material/Grid/Grid";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button/Button";

interface IOwnProps {
	value: string;
	handleChange(e: React.ChangeEvent<any>): void;
	handleSubmit(e?: React.FormEvent<HTMLFormElement> | undefined): void;
	touched?: boolean;
	error?: string;
}
export const StepMessage = ({
	touched,
	value,
	error,
	handleChange,
	handleSubmit,
}: IOwnProps) => {
	const { t } = useTranslation("translation", {
		keyPrefix: "message.sendForm.step1",
	});
	return (
		<Box
			component={"form"}
			onSubmit={handleSubmit}
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				gap: 4,
			}}
		>
			<Typography variant="h6" gutterBottom>
				{t("fillDate")}
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField
						required
						id="text"
						name="text"
						value={value}
						onChange={handleChange}
						error={touched && Boolean(error)}
						helperText={touched && error}
						label={t("textFieldLabel")}
						fullWidth
						autoComplete="given-name"
						variant="standard"
					/>
				</Grid>
			</Grid>
			<Typography variant="h6" gutterBottom>
				{t("addButtons")}
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Button variant={"outlined"} sx={{ width: "100%" }} type={"button"}>
						{t("createLinkLabel")}
					</Button>
				</Grid>
				{/*<Grid item xs={12} sm={6}>*/}
				{/*	<Button sx={{ width: "100%" }}>{t("createLinkLabel")}</Button>*/}
				{/*</Grid>*/}
			</Grid>
		</Box>
	);
};
