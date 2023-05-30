import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Widget } from "shared/components/widget";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";

export interface IOption {
	title: string;
	isChecked: boolean;
	value: string;
}

interface IndeterminateCheckboxWidgetProps<T extends IOption> {
	values: T[];
	name: string;
	description?: string;
	mainBoxTitle: string;
	onChangeCb: (main: boolean, arrayItems: T[]) => void;
}

const isChecked = (arr: boolean[]): boolean => {
	return arr.every((item) => item);
};
const isIndeterminate = (arr: boolean[]): boolean => {
	const filteredArrLength = arr.filter((item) => item).length;
	return filteredArrLength > 0 && filteredArrLength < arr.length;
};

const fromBooleanToItems = <T extends IOption>(
	arrItem: T[],
	arrBoolean: boolean[]
): T[] => {
	const result: T[] = [];
	arrItem.forEach((item, index) => {
		if (arrBoolean[index]) {
			result.push(item);
		}
	});
	return result;
};

const IndeterminateCheckboxWidget = <T extends IOption>({
	values,
	name,
	description,
	mainBoxTitle,
	onChangeCb,
}: IndeterminateCheckboxWidgetProps<T>) => {
	const initialChecked = values.map((val) => val.isChecked);
	const [checkedArr, setCheckedArr] = useState(initialChecked);

	const mainCheckBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCheckedArr(new Array(values.length).fill(e.target.checked));
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
		setCheckedArr(copyArr);
	};

	useEffect(() => {
		const enabledValues: T[] = fromBooleanToItems(values, checkedArr);
		onChangeCb(isChecked(checkedArr), enabledValues);
	}, [checkedArr]);

	return (
		<Widget name={name}>
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
		</Widget>
	);
};

export default IndeterminateCheckboxWidget;
