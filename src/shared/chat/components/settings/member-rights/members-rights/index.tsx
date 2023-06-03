import React, { useEffect, useState } from "react";
import { TableWidget } from "shared/components/table-widget";
import Box from "@mui/material/Box";
import { Widget } from "shared/components/widget";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import Switch from "shared/components/switch-widget";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const selector = (state: IRootState) => ({
	clearMessagesByChannel:
		state.chatSettings.chatSettingsReducer.config.clearMessagesByChannel,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	token: state.auth.token,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
});

const RightsMembers = () => {
	const { clearMessagesByChannel, token, isLoading, settingsId } =
		useAppSelector(selector);
	const dispatch = useAppDispatch();
	const [initialState, setInitialState] = useState({
		isEnable: false,
		text: "",
	});

	const { t } = useTranslation("translation", {
		keyPrefix: "settings.moderation.members-rights.deleteMessagesByChannel",
	});

	const { submitForm, values, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: initialState,
			enableReinitialize: true,
			onSubmit: (values) => {
				!isLoading &&
					clearMessagesByChannel &&
					dispatch(
						updateChatSettingsByIdAsync({
							token: token!,
							id: settingsId!,
							config: {
								clear_messages_by_channel: {
									isEnable: values.isEnable,
									text: values.text,
								},
							},
						})
					);
			},
		});

	const switchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event);
		submitForm();
	};
	useEffect(() => {
		if (clearMessagesByChannel)
			setInitialState({
				isEnable: clearMessagesByChannel.isEnable,
				text: clearMessagesByChannel.text || "",
			});
	}, [clearMessagesByChannel]);
	return (
		<Box
			sx={{
				display: "flex",
				marginTop: "10px",
				flexDirection: " column",
				gap: "20px",
			}}
		>
			<Widget>
				<Box
					component={"form"}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
					onSubmit={handleSubmit}
				>
					<Box>
						<Typography color={"text.primary"}>{t("title")}</Typography>
						<Switch
							description={t("description")}
							id="isEnable"
							name="isEnable"
							value={values.isEnable}
							onChange={switchChange}
						/>
					</Box>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography>{t("accordionTitle")}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box>
								<Typography color={"text.secondary"}>
									{t("messageAfterDeleteDescription")}
								</Typography>
								<TextField
									id="text"
									name="text"
									value={values.text}
									onChange={handleChange}
									error={touched.text && Boolean(errors.text)}
									helperText={touched.text && errors.text}
									label={t("messageAfterDeleteTitle")}
									fullWidth
									autoComplete="given-name"
									variant="standard"
								/>
								<Button
									color={"primary"}
									variant={"contained"}
									type={"submit"}
									fullWidth
									sx={{ marginTop: 1 }}
								>
									Save
								</Button>
							</Box>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Widget>

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
		</Box>
	);
};

export default RightsMembers;
