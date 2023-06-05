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

const selector = (state: IRootState) => ({
	messageCharacterLimit:
		state.chatSettings.chatSettingsReducer.config.messageCharacterLimit,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	token: state.auth.token,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
});

const ChatRules = () => {
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
			<Widget>
				<Box
					component={"form"}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}
					onSubmit={handleSubmit}
				>
					<Box>
						<Typography>Title</Typography>
						<Switch
							id="isEnable"
							name="isEnable"
							description={"Allow chat admins to call bot commands"}
							value={!!values.isEnable}
							onChange={switchChange}
						/>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>{"фыв"}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Box sx={{ display: "flex", gap: 1 }}>
									<TextField
										id="characterLimit"
										name="characterLimit"
										onChange={handleChange}
										inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
										value={values.characterLimit}
										helperText={touched.message && errors.message}
										fullWidth
										InputLabelProps={{ shrink: true }}
										label={"symbols"}
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
										label={"message"}
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
