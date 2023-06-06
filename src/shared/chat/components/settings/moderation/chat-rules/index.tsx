import React from "react";
import Switch from "shared/components/switch-widget";
import Box from "@mui/material/Box";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { Widget } from "shared/components/widget";
import { useFormik } from "formik";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import Typography from "@mui/material/Typography/Typography";
import TextField from "@mui/material/TextField/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { boolean, number, object, string } from "yup";

const selector = (state: IRootState) => ({
	messageCharacterLimit:
		state.chatSettings.chatSettingsReducer.config.messageCharacterLimit,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	token: state.auth.token,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
});

const ChatRules = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "settings.moderation.rules.messageLengthLimit",
	});

	const messageLengthLimitSchema = object({
		isEnable: boolean().required(),
		characterLimit: number().positive().integer(),
		message: string(),
	});

	const { messageCharacterLimit, token, isLoading, settingsId } =
		useAppSelector(selector);
	const dispatch = useAppDispatch();

	const { submitForm, values, handleChange, handleSubmit, errors, touched } =
		useFormik({
			initialValues: {
				isEnable: messageCharacterLimit?.isEnable,
				characterLimit: messageCharacterLimit?.characterLimit,
				message: messageCharacterLimit?.message,
			},
			validationSchema: messageLengthLimitSchema,
			enableReinitialize: true,
			onSubmit: (values) => {
				!isLoading &&
					messageCharacterLimit &&
					dispatch(
						updateChatSettingsByIdAsync({
							token: token!,
							id: settingsId!,
							config: {
								message_character_limit: {
									is_enable: !!values.isEnable,
									character_limit: values.characterLimit,
									message: values.message,
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
	return (
		<Box
			sx={{
				display: "flex",
				marginTop: "10px",
				flexDirection: " column",
				gap: "20px",
			}}
		>
			<Widget name={t("widgetName")}>
				<Box
					component={"form"}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
					onSubmit={handleSubmit}
				>
					<Box>
						<Switch
							id="isEnable"
							name="isEnable"
							description={t("widgetDescription")}
							value={!!values.isEnable}
							onChange={switchChange}
						/>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>{t("accordionTitle")}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box sx={{ display: "flex", gap: 1 }}>
									<TextField
										id="characterLimit"
										name="characterLimit"
										onChange={handleChange}
										inputProps={{
											inputMode: "numeric",
											pattern: "[0-9]*",
											min: 1,
										}}
										value={values.characterLimit}
										helperText={touched.characterLimit && errors.characterLimit}
										fullWidth
										InputLabelProps={{ shrink: true }}
										label={t("limitSymbolsLabel")}
										type="number"
									/>
									<TextField
										id="message"
										name="message"
										onChange={handleChange}
										value={values.message}
										helperText={touched.message && errors.message}
										fullWidth
										InputLabelProps={{ shrink: true }}
										label={t("messageLabel")}
									/>
								</Box>
								<Button
									color={"primary"}
									variant={"contained"}
									type={"submit"}
									fullWidth
									sx={{ marginTop: 1 }}
								>
									Save
								</Button>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Box>
			</Widget>
		</Box>
	);
};

export default ChatRules;
