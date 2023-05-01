import React from "react";
// import { LanguageSwitchButton, LanguageSwitchWrapper } from "./styled";
import * as ST from "./styled";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "@mui/material";

export const LanguageSwitch = () => {
	const { i18n } = useTranslation("translation");
	const changeLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
		const target = event.target as HTMLButtonElement;
		i18n.changeLanguage(target.value);
	};
	return (
		<ButtonGroup
			disableElevation
			variant="contained"
			aria-label="Disabled elevation buttons"
		>
			<ST.StyledButton value={"en"} onClick={changeLanguage}>
				English
			</ST.StyledButton>
			<ST.StyledButton value={"ru"} onClick={changeLanguage}>
				Русский
			</ST.StyledButton>
		</ButtonGroup>
		// <LanguageSwitchWrapper>
		// 	<LanguageSwitchButton
		// 		type={"button"}
		// 		value={"ru"}
		// 		onClick={changeLanguage}
		// 		active={i18n.language === "ru"}
		// 	>
		// 		ru
		// 	</LanguageSwitchButton>
		// 	<LanguageSwitchButton
		// 		type={"button"}
		// 		value={"en"}
		// 		onClick={changeLanguage}
		// 		active={i18n.language === "en"}
		// 	>
		// 		en
		// 	</LanguageSwitchButton>
		// </LanguageSwitchWrapper>
	);
};
