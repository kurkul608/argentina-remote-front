import React from "react";
import { Widget } from "shared/components/widget";
import _ from "lodash";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useFormik } from "formik";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography";
import Switch from "shared/components/switch-widget";
import { Chip } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { useTranslation } from "react-i18next";

const selector = (state: IRootState) => ({
	banWords: state.chatSettings.chatSettingsReducer.config.banWords,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
	token: state.auth.token,
});

const BanWords = () => {
	const { banWords, token, settingsId, isLoading } = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const { t } = useTranslation("translation", {
		keyPrefix: "settings.moderation.messagesFilters.banWords",
	});

	const { handleSubmit, submitForm, handleChange, setFieldValue, values } =
		useFormik({
			initialValues: {
				isEnable: !!banWords?.isEnabled,
				dictionary: banWords?.dictionary ?? [],
				newWord: "",
			},
			enableReinitialize: true,
			onSubmit: (values) => {
				!isLoading &&
					banWords &&
					dispatch(
						updateChatSettingsByIdAsync({
							token: token!,
							id: settingsId!,
							config: {
								ban_words: {
									dictionary: values.dictionary,
									is_enabled: values.isEnable,
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

	const handleBanWordsDelete = (value: string) => {
		const filteredDictionary = _.filter(
			values.dictionary,
			(item) => item !== value
		);

		setFieldValue("dictionary", filteredDictionary);
		submitForm();
	};

	const handleBanWordsAdd = (value: string) => {
		const filteredDictionary = _.filter(
			values.dictionary,
			(item) => item !== value
		);

		setFieldValue("dictionary", [...filteredDictionary, value]);
		setFieldValue("newWord", "");
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
					<Typography color={"text.primary"}>{t("enableTitle")}</Typography>
					<Switch
						description={t("enableDescription")}
						value={values.isEnable}
						id="isEnable"
						name="isEnable"
						disabled={isLoading}
						onChange={switchChange}
					/>
				</Box>
				<Box>
					<Typography color={"text.primary"}>{t("banWordsTitle")}</Typography>
					{values.dictionary.map((word, index) => (
						<Chip
							key={`ban-words-chips--${word}-${index}`}
							variant="outlined"
							color="primary"
							size="small"
							label={word}
							onDelete={() => handleBanWordsDelete(word)}
						/>
					))}
				</Box>
				<Box>
					<Typography color={"text.primary"}>{t("addNewTitle")}</Typography>
					<Box sx={{ display: "flex", gap: 3 }}>
						<TextField
							sx={{ flex: "1 1 auto" }}
							disabled={isLoading}
							label={t("addNewLabel")}
							value={values.newWord}
							id="newWord"
							name="newWord"
							variant="filled"
							onChange={handleChange}
						/>
						<Button
							color={"primary"}
							type={"button"}
							variant={"contained"}
							onClick={() => handleBanWordsAdd(values.newWord)}
							disabled={isLoading || !values.newWord.length}
						>
							{t("addNewButton")}
						</Button>
					</Box>
				</Box>
			</Box>
		</Widget>
	);
};

export default BanWords;
