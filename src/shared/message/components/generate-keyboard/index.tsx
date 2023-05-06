import React, { useState } from "react";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid/Grid";
import { useTranslation } from "react-i18next";
import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";
import { Keyboard } from "shared/message/interfaces/keyboard/keyboard-type.interface";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LinkIcon from "@mui/icons-material/Link";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as yup from "yup";
import Typography from "@mui/material/Typography";

const getIconByType = (type: Keyboard) => {
	switch (type) {
		case Keyboard.link:
			return <LinkIcon />;
		default:
			return <QuestionMarkIcon />;
	}
};

const options = Object.values(Keyboard);

interface IDialogHandler {
	rowIndex?: number;
	button?: [number, number];
}

interface IButtonHandler {
	button: IKeyboard;
	rowIndex?: number;
	remove?: boolean;
}

interface IKeyboardForm {
	type?: Keyboard | null;
	linkText?: string;
	linkUrl?: string;
}

interface IOwnProps {
	setFieldValue(field: string, value: IKeyboard[][]): void;
	buttons: IKeyboard[][];
}

export const GenerateKeyboard = ({
	buttons,
	setFieldValue: setButtons,
}: IOwnProps) => {
	const { t } = useTranslation("translation", {
		keyPrefix: "message",
	});

	const [dialogOpen, setDialogOpen] = useState(false);
	const [dialogRow, setDialogRow] = useState<number | undefined>(undefined);
	const [selectedButton, setSelectedButton] = useState<
		[number, number] | undefined
	>(undefined);
	const [typeSelectOpen, setTypeSelectOpen] = useState(false);

	const selectTypeHandler = () => {
		setTypeSelectOpen(!typeSelectOpen);
	};

	const dialogHandler = ({ button, rowIndex }: IDialogHandler) => {
		setSelectedButton(button);
		setDialogRow(rowIndex);
		setDialogOpen(!dialogOpen);
		button
			? resetForm({
					values: {
						linkText: buttons[button[0]][button[1]].link?.text,
						linkUrl: buttons[button[0]][button[1]].link?.url,
						type: buttons[button[0]][button[1]].type,
					},
			  })
			: resetForm({ values: { type: undefined } });
	};
	const handleButton = ({ button, rowIndex, remove }: IButtonHandler) => {
		if (selectedButton && remove) {
			setButtons(
				"buttons",
				[...buttons].map((row, rowIndex) =>
					[...row].filter(
						(c, columnIndex) =>
							!(
								rowIndex === selectedButton[0] &&
								columnIndex === selectedButton[1]
							)
					)
				)
			);
		} else if (selectedButton) {
			setButtons(
				"buttons",
				[...buttons].map((row, rowIndex) =>
					row.map((c, columnIndex) =>
						rowIndex === selectedButton[0] && columnIndex === selectedButton[1]
							? button
							: c
					)
				)
			);
		} else if (rowIndex !== undefined && buttons[rowIndex] !== undefined) {
			setButtons(
				"buttons",
				buttons.map((row, index) =>
					index === rowIndex ? [...row, button] : row
				)
			);
		} else {
			setButtons("buttons", [...buttons, [button]]);
		}
	};

	const validationSchema = yup.object({
		type: yup
			.string()
			.required(t("keyboard.typeValidation.required") as string)
			.oneOf(
				Object.values(Keyboard),
				t("keyboard.typeValidation.invalidType") as string
			),
		linkText: yup.string().when("type", {
			is: Keyboard.link,
			then: (field) =>
				field
					.required(t("keyboard.link.textValidation") as string)
					.min(1, t("keyboard.link.textValidation") as string),
			otherwise: (field) => field.notRequired(),
		}),
		linkUrl: yup.string().when("type", {
			is: Keyboard.link,
			then: (field) =>
				field
					.required(t("keyboard.link.linkValidation") as string)
					.url(t("keyboard.link.linkValidation") as string),
			otherwise: (field) => field.notRequired(),
		}),
	});

	const {
		handleSubmit,
		handleChange,
		values,
		errors,
		resetForm,
		touched,
		setFieldValue,
	} = useFormik<IKeyboardForm>({
		initialValues: {
			type: undefined,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			dialogHandler({});
			handleButton({
				button: {
					type: values.type!,
					link: { text: values.linkText!, url: values.linkUrl! },
				},
				rowIndex: dialogRow,
			});
			resetForm();
		},
	});

	const getKeyboardTitle = (keyboard?: Keyboard | null) => {
		switch (keyboard) {
			case Keyboard.link:
				return t("keyboard.link.title");
			default:
				return undefined;
		}
	};

	return (
		<Box sx={{ width: "100%", mb: 2 }}>
			<Grid container spacing={3}>
				{buttons.map((row, rowIndex) => (
					<Grid
						item
						xs={12}
						key={`generate-keyboard--row${rowIndex}`}
						sx={{
							display: "flex",
							gap: 2,
							"> *": {
								flex: "1 1 auto",
								maxWidth: "100%",
							},
						}}
					>
						{row.map((cell, columnIndex) => (
							<>
								<Button
									variant={"outlined"}
									type={"button"}
									// onClick={() => handleButton(rowIndex)}
									color={"secondary"}
									onClick={() =>
										dialogHandler({ button: [rowIndex, columnIndex] })
									}
									startIcon={getIconByType(cell.type)}
									key={`generate-keyboard--row${rowIndex}--button--${columnIndex}-tg}`}
								>
									<Typography noWrap>{cell.link?.text}</Typography>
								</Button>
								{columnIndex < 7 && columnIndex === row.length - 1 && (
									<Button
										variant={"contained"}
										type={"button"}
										// onClick={() => handleButton(rowIndex)}
										onClick={() => dialogHandler({ rowIndex })}
										startIcon={<AddIcon />}
										key={`generate-keyboard--row${rowIndex}--button--${columnIndex}-plus`}
									/>
								)}
							</>
						))}
					</Grid>
				))}
				<Grid item xs={12}>
					<Button
						variant={"contained"}
						sx={{ width: "100%" }}
						type={"button"}
						onClick={() => dialogHandler({})}
					>
						{buttons.length
							? t("sendForm.step1.addNewRow")
							: t("sendForm.step1.createLinkLabel")}
					</Button>
				</Grid>
			</Grid>
			<Dialog open={dialogOpen}>
				<DialogTitle>{t("sendForm.step1.keyboardDialog.title")}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{t("sendForm.step1.keyboardDialog.description")}
					</DialogContentText>
					<Grid
						container
						sx={{ width: "100%", p: 1 }}
						spacing={1}
						component={"form"}
						// onSubmit={formik.handleSubmit}
					>
						<Grid item xs={12}>
							<Autocomplete
								renderInput={(params) => (
									<TextField
										{...params}
										label={t("sendForm.step1.keyboardDialog.autocompleteLabel")}
									/>
								)}
								value={values.type || null}
								onChange={(e, value) => setFieldValue("type", value)}
								getOptionLabel={(option) => getKeyboardTitle(option) || ""}
								options={options}
								onOpen={selectTypeHandler}
								onClose={selectTypeHandler}
							/>
						</Grid>
						{!!values.type && (
							<>
								<Grid item xs={12} md={6}>
									<TextField
										sx={{ width: "100%" }}
										name={"linkText"}
										label={t("keyboard.link.textLabel")}
										value={values.linkText}
										onChange={handleChange}
										error={touched.linkText && Boolean(errors.linkText)}
										helperText={touched.linkText && errors.linkText}
										variant={"standard"}
									/>
								</Grid>
								<Grid item xs={12} md={6}>
									<TextField
										sx={{ width: "100%" }}
										name={"linkUrl"}
										label={t("keyboard.link.linkLabel")}
										value={values.linkUrl}
										onChange={handleChange}
										error={touched.linkUrl && Boolean(errors.linkUrl)}
										helperText={touched.linkUrl && errors.linkUrl}
										variant={"standard"}
									/>
								</Grid>
							</>
						)}
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button
						variant={"contained"}
						onClick={() => {
							selectedButton &&
								handleButton({
									button: buttons[selectedButton[0]][selectedButton[1]],
									remove: true,
								});
							dialogHandler({});
						}}
						disabled={!selectedButton}
						color={"error"}
					>
						{t("sendForm.step1.keyboardDialog.buttonRemove")}
					</Button>
					<Button
						variant={"contained"}
						onClick={() => handleSubmit()}
						disabled={!values.type}
					>
						{selectedButton
							? t("sendForm.step1.keyboardDialog.buttonChange")
							: t("sendForm.step1.keyboardDialog.buttonSuccess")}
					</Button>
					<Button variant={"outlined"} onClick={() => dialogHandler({})}>
						{t("sendForm.step1.keyboardDialog.buttonClose")}
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};
