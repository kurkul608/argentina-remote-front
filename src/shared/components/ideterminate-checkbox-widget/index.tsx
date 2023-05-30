import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

export interface IOption<T> {
	title?: string;
	isChecked: boolean;
	value: T;
}

interface IndeterminateCheckboxWidgetProps<T, K extends IOption<T>> {
	values: K[];
	title?: string;
	description?: string;
	mainBoxTitle: string;
	onChangeCb: (main: boolean, arrayItems: K[]) => void;
}

const isChecked = (arr: boolean[]): boolean => {
	return arr.every((item) => item);
};
const isIndeterminate = (arr: boolean[]): boolean => {
	const filteredArrLength = arr.filter((item) => item).length;
	return filteredArrLength > 0 && filteredArrLength < arr.length;
};

const fromBooleanToItems = <T, K extends IOption<T>>(
	arrItem: K[],
	arrBoolean: boolean[]
): K[] => {
	const result: K[] = [];
	arrItem.forEach((item, index) => {
		if (arrBoolean[index]) {
			result.push(item);
		}
	});
	return result;
};

const IndeterminateCheckboxWidget = <T, K extends IOption<T>>({
	values,
	title,
	description,
	mainBoxTitle,
	onChangeCb,
}: IndeterminateCheckboxWidgetProps<T, K>) => {
	const initialChecked = values.map((val) => val.isChecked);
	const [checkedArr, setCheckedArr] = useState(initialChecked);

	const mainCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckedArr = new Array(values.length).fill(e.target.checked);
		const enabledValues: K[] = fromBooleanToItems(values, newCheckedArr);
		onChangeCb(isChecked(checkedArr), enabledValues);
		setCheckedArr(newCheckedArr);
	};

	const subCheckBoxOnChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		indexChecked: number
	) => {
		const copyArr = checkedArr.map((checked, indexArr) => {
			if (indexChecked === indexArr) {
				return e.target.checked;
			}
			return checked;
		});
		const enabledValues: K[] = fromBooleanToItems(values, copyArr);
		onChangeCb(isChecked(checkedArr), enabledValues);
		setCheckedArr(copyArr);
	};

	return (
		<Box>
			<Typography variant={"h5"}>{title}</Typography>
			<Typography>{description}</Typography>
			<FormControlLabel
				label={mainBoxTitle}
				control={
					<Checkbox
						checked={isChecked(checkedArr)}
						indeterminate={isIndeterminate(checkedArr)}
						onChange={mainCheckBoxOnChange}
					/>
				}
			/>
			<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
				{values.map((value, index) => {
					return (
						<FormControlLabel
							label={value.title}
							key={`checkbox--${value.value}`}
							control={
								<Checkbox
									checked={checkedArr[index]}
									onChange={(e) => subCheckBoxOnChange(e, index)}
								/>
							}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

export default IndeterminateCheckboxWidget;
