import React from "react";
import { Widget } from "shared/components/widget";
import Box from "@mui/material/Box";
import Switch from "shared/components/switch-widget";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import { useTranslation } from "react-i18next";

const selector = (state: IRootState) => ({
	greeting: state.chatSettings.chatSettingsReducer.config.greeting,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
	token: state.auth.token,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
});

const GreetingMessage = () => {
	const { greeting, settingsId, isLoading, token } = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const { t } = useTranslation("translation", {
		keyPrefix: "settings.greetings.greetingMessage",
	});
	const {
		submitForm,
		setFieldValue,
		values,
		handleChange,
		handleSubmit,
		errors,
		touched,
	} = useFormik({
		initialValues: {
			isEnable: !!greeting?.isEnable,
			clearLastMessage: !!greeting?.clearLastMessage,
			previousGreetings: greeting?.previousGreetings,
			message: greeting?.message,
			clearTime: greeting?.clearTime,
		},
		enableReinitialize: true,
		onSubmit: (values) => {
			!isLoading &&
				dispatch(
					updateChatSettingsByIdAsync({
						token: token!,
						id: settingsId!,
						config: {
							greeting: {
								message: values.message,
								clear_last_message: values.clearLastMessage,
								clear_time: values.clearTime,
								previous_greetings: values.previousGreetings,
								is_enable: !!values.isEnable,
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
		<Widget name={t("widgetName")}>
			<Box
				component={"form"}
				sx={{ display: "flex", flexDirection: "column", gap: 2 }}
				onSubmit={handleSubmit}
			>
				<Box>
					<Typography color={"text.primary"}>{t("isEnabledTitle")}</Typography>
					<Switch
						description={t("isEnabledDescription")}
						id="isEnable"
						name="isEnable"
						value={values.isEnable}
						onChange={switchChange}
					/>
				</Box>
				<Box>
					<Typography color={"text.primary"}>
						{t("deletePreviousTitle")}
					</Typography>
					<Switch
						description={t("deletePreviousDescription")}
						id="clearLastMessage"
						name="clearLastMessage"
						value={values.clearLastMessage}
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
					<AccordionDetails
						sx={{ display: "flex", flexDirection: "column", gap: 2 }}
					>
						<Box>
							<Typography color={"text.primary"}>
								{t("greetingMessageTitle")}
							</Typography>
							<Typography color={"text.secondary"}>
								{t("greetingMessageDescription")}
							</Typography>
							<TextField
								id="message"
								name="message"
								value={values.message}
								onChange={handleChange}
								error={touched.message && Boolean(errors.message)}
								helperText={touched.message && errors.message}
								label={t("greetingMessageLabel")}
								fullWidth
								autoComplete="given-name"
								variant="standard"
							/>
						</Box>
						<Box>
							<Typography color={"text.primary"}>
								{t("clearTimeTitle")}
							</Typography>
							<Typography color={"text.secondary"}>
								{t("clearTimeDescription")}
							</Typography>
							<TimePicker
								views={["minutes", "seconds"]}
								format="mm:ss"
								value={moment(values.clearTime ?? "00:00", "mm:ss")}
								onChange={(value) =>
									setFieldValue("clearTime", value?.format("mm:ss"))
								}
							/>
						</Box>
						<Button color={"primary"} variant={"contained"} type={"submit"}>
							Save
						</Button>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Widget>
	);
};

export default GreetingMessage;
