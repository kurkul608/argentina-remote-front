import React, { useEffect } from "react";
import { Widget } from "shared/components/widget";
import { IRootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateChatSettingsByIdAsync } from "shared/chat/redux/chat-settings/chat-settings.slice";
import Switch from "shared/components/switch-widget";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const selector = (state: IRootState) => ({
	stickerCleaner: state.chatSettings.chatSettingsReducer.config.stickerCleaner,
	settingsId: state.chatSettings.chatSettingsReducer.config._id,
	isLoading: state.chatSettings.chatSettingsReducer.isLoading,
	token: state.auth.token,
});

const MessagesFilters = () => {
	const { isLoading, settingsId, token, stickerCleaner } =
		useAppSelector(selector);

	const dispatch = useAppDispatch();

	const { t } = useTranslation("translation", {
		keyPrefix: "settings.moderation.messagesFilters.stickerCleaner",
	});

	const { handleSubmit, submitForm, handleChange, setFieldValue, values } =
		useFormik({
			initialValues: {
				removeStickers: !!stickerCleaner?.removeStickers,
				removeGif: !!stickerCleaner?.removeGif,
				removeEmoji: !!stickerCleaner?.removeEmoji,
			},
			onSubmit: (values) => {
				!isLoading &&
					stickerCleaner &&
					dispatch(
						updateChatSettingsByIdAsync({
							token: token!,
							id: settingsId!,
							config: {
								sticker_cleaner: {
									remove_stickers: values.removeStickers,
									remove_gif: values.removeGif,
									remove_emoji: values.removeEmoji,
								},
							},
						})
					);
			},
		});

	useEffect(() => {
		if (stickerCleaner) {
			setFieldValue("removeStickers", stickerCleaner.removeStickers);
			setFieldValue("removeGif", stickerCleaner.removeGif);
			setFieldValue("removeEmoji", stickerCleaner.removeEmoji);
		}
	}, [stickerCleaner]);

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
					<Typography color={"text.primary"}>
						{t("removeStickerTitle")}
					</Typography>
					<Switch
						description={t("removeStickerDescription")}
						value={values.removeStickers}
						id="removeStickers"
						name="removeStickers"
						onChange={switchChange}
					/>
				</Box>
				<Box>
					<Typography color={"text.primary"}>
						{t("removeStickerGif")}
					</Typography>
					<Switch
						description={t("removeGifDescription")}
						value={values.removeGif}
						id="removeGif"
						name="removeGif"
						onChange={switchChange}
					/>
				</Box>
				<Box>
					<Typography color={"text.primary"}>
						{t("removeStickerEmoji")}
					</Typography>
					<Switch
						description={t("removeEmojiDescription")}
						value={values.removeEmoji}
						id="removeEmoji"
						name="removeEmoji"
						onChange={switchChange}
					/>
				</Box>
			</Box>
		</Widget>
	);
};

export default MessagesFilters;
