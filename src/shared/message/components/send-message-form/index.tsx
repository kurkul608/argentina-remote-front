import React, { useState } from "react";
import * as ST from "./styled";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box/Box";
import { Button } from "@mui/material";
import { StepMessage } from "shared/message/components/send-message-form/step-message";
import { useFormik } from "formik";
import * as yup from "yup";
import { StepChatsSelect } from "shared/message/components/send-message-form/step-chats-select";
import { IChat } from "shared/chat/types/chat.interface";
import { useAppDispatch } from "redux/hooks";
import {
	addChatToDraft,
	clearChoose,
} from "shared/post/redux/draft/draft.slice";
export const SendMessageForm = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "message.sendForm",
	});

	const [activeStep, setActiveStep] = useState(0);

	const dispatch = useAppDispatch();

	const stepsToZero = () => {
		dispatch(clearChoose());
		setActiveStep(0);
	};
	const handleNext = () => {
		switch (activeStep) {
			case 0:
				formik1step.handleSubmit();
				break;

			case 1:
				formik2step.handleSubmit();
				break;

			default:
				setActiveStep(activeStep + 1);
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const validationSchema1step = yup.object({
		text: yup.string().required(t("step1.emptyMessageTextError") as string),
	});

	const formik1step = useFormik({
		initialValues: {
			text: "",
		},
		validationSchema: validationSchema1step,
		onSubmit: () => {
			// alert(JSON.stringify(values, null, 2));
			setActiveStep(1);
		},
	});

	const validationSchema2step = yup.object({
		chats: yup.array().min(1, t("step2.emptyChatsArrayTextError") as string),
	});

	const formik2step = useFormik({
		initialValues: {
			chats: [] as IChat[],
		},
		validationSchema: validationSchema2step,
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			dispatch(addChatToDraft(values.chats));
			setActiveStep(2);
		},
	});

	const steps = [t("step1.stepName"), t("step2.stepName"), t("step3.stepName")];
	const getStepContent = (step: number) => {
		switch (step) {
			case 0:
				return (
					<StepMessage
						handleChange={formik1step.handleChange}
						handleSubmit={formik1step.handleSubmit}
						error={formik1step.errors.text}
						value={formik1step.values.text}
						touched={formik1step.touched.text}
					/>
				);
			case 1:
				return (
					<StepChatsSelect
						setFieldValue={formik2step.setFieldValue}
						handleSubmit={formik2step.handleSubmit}
						error={formik2step.errors.chats}
						value={formik2step.values.chats}
						touched={formik2step.touched.chats}
					/>
				);
			case 2:
				return <></>;
			// default:
			// 	throw new Error('Unknown step');
		}
	};

	return (
		<ST.StyledBox>
			<Typography component="h1" variant="h4" align="center">
				{t("title")}
			</Typography>
			<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length ? (
				<>
					<Typography variant="h5" gutterBottom>
						{t("final.message")}
					</Typography>
					<Typography variant="subtitle1">{t("final.description")}</Typography>
					<Button variant="contained" onClick={stepsToZero} sx={{ mt: 5 }}>
						{t("buttons.more")}
					</Button>
				</>
			) : (
				<>
					{getStepContent(activeStep)}
					<ST.StyledFooter>
						<Button variant="outlined" color={"secondary"}>
							{t("buttons.sendMySelf")}
						</Button>
						<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 5 }}>
							{activeStep !== 0 && (
								<Button onClick={handleBack}>{t("buttons.back")}</Button>
							)}
							<Button variant="contained" onClick={handleNext}>
								{activeStep === steps.length - 1
									? t("buttons.final")
									: t("buttons.next")}
							</Button>
						</Box>
					</ST.StyledFooter>
				</>
			)}
		</ST.StyledBox>
	);
};
