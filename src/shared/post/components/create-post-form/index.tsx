import React, { useState } from "react";
import * as ST from "shared/post/components/create-post-form/styled";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box/Box";
import { Button } from "@mui/material";
import { StepMessage } from "shared/post/components/create-post-form/step-message";
import { useFormik } from "formik";
import * as yup from "yup";
import { StepChatsSelect } from "shared/post/components/create-post-form/step-chats-select";
import { IChat } from "shared/chat/types/chat.interface";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
	addChatToDraft,
	addMessagesToDraft,
	clearChoose,
} from "shared/post/redux/draft/draft.slice";
import { createMessageService } from "shared/message/services/data/create-message.service";
import { MessageType } from "shared/message/interfaces/message/message-type.interface";
import { IRootState } from "redux/store";
import { fromMessageDtoService } from "shared/message/services/dto/from-dto.service";
import { createPost } from "shared/post/services/data";
import { postCreateToDtoService } from "shared/post/services/dto/create/to-dto.service";
import { IKeyboard } from "shared/message/interfaces/keyboard/keyboard.interface";
import { ButtonWithLoader } from "shared/components/button-with-loader";

const selector = (state: IRootState) => ({
	token: state.auth.token!,
	chats: state.post.draft.createPost.chooseChats.selectedChats,
	messages: state.post.draft.createPost.chooseChats.savedMessages,
});

interface IStep1 {
	text: string;
	notifications: boolean;
	buttons: IKeyboard[][];
}

interface IStep2 {
	chats: IChat[];
}
export const CreatePost = () => {
	const { t } = useTranslation("translation", {
		keyPrefix: "message.sendForm",
	});

	const [activeStep, setActiveStep] = useState(0);
	const [loading, setLoading] = useState(false);

	const { token, messages, chats } = useAppSelector(selector);

	const dispatch = useAppDispatch();

	const stepsToZero = () => {
		//TODO Need use addMessagesToDraft by props
		dispatch(clearChoose());
		setActiveStep(0);
	};
	const handleNext = async () => {
		switch (activeStep) {
			case 0:
				formik1step.handleSubmit();
				break;

			case 1:
				formik2step.handleSubmit();
				break;

			case steps.length - 1:
				try {
					await createPost(
						token,
						postCreateToDtoService({
							title: "Test title",
							chats: chats.map((chat) => chat._id),
							messages: messages.map((message) => message._id),
							pinMessage: false,
							postNow: true,
						})
					);
					setLoading(true);
					setLoading(false);
				} catch (e) {
					setLoading(false);
				}
				setActiveStep(activeStep + 1);
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

	const formik1step = useFormik<IStep1>({
		initialValues: {
			text: "",
			notifications: true,
			buttons: [],
		},
		validationSchema: validationSchema1step,
		onSubmit: async (values) => {
			// await createMessageService()
			try {
				setLoading(true);
				const message = await createMessageService(
					{
						type: MessageType.text,
						quill_delta: [values.text],
						notifications: true,
						keyboard: values.buttons,
					},
					token
				);
				//TODO Need use addMessagesToDraft by props
				dispatch(addMessagesToDraft([fromMessageDtoService(message)]));
				setLoading(false);
				setActiveStep(1);
			} catch (e) {
				setLoading(false);
			}
			// alert(JSON.stringify(values, null, 2));
		},
	});

	const validationSchema2step = yup.object({
		chats: yup.array().min(1, t("step2.emptyChatsArrayTextError") as string),
	});

	const formik2step = useFormik<IStep2>({
		initialValues: {
			chats: [],
		},
		validationSchema: validationSchema2step,
		onSubmit: (values) => {
			// alert(JSON.stringify(values, null, 2));
			//TODO Need use addMessagesToDraft by props
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
						buttons={formik1step.values.buttons}
						setFieldValue={formik1step.setFieldValue}
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
							<ButtonWithLoader
								loading={loading}
								variant={"contained"}
								handleClick={handleNext}
							>
								{activeStep === steps.length - 1
									? t("buttons.final")
									: t("buttons.next")}
							</ButtonWithLoader>
						</Box>
					</ST.StyledFooter>
				</>
			)}
		</ST.StyledBox>
	);
};
