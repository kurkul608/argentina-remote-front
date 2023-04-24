import React, { useState } from "react";
import { Widget } from "shared/widget";
import { ChipsTable } from "shared/components/table-widget/components/chips-table";
import { TextTable } from "shared/components/table-widget/components/text-table";
import { RegularTable } from "shared/components/table-widget/components/regular-table";
import {
	Description,
	StyledTable,
} from "shared/components/table-widget/styled";

export enum ITableStyles {
	chips = "chips",
	text = "text",
	table = "table",
}

export interface IContentProps {
	content?: string;
	status: string;

	misc?: {
		[x: string]: boolean;
	};
}

export interface ITableProps {
	style: ITableStyles;
	content?: IContentProps[];
}

export interface ITableWidgetProps {
	title: string;
	description?: string;
	content?: IContentProps[];
	isEditable?: boolean;
	handleOnDelete?: () => void;
	handleOnCreate?: () => void;
	handleOnUpdate?: () => void;
}

export const TableWidget = ({
	title,
	description,
	content,
}: ITableWidgetProps) => {
	const [style, setStyle] = useState(ITableStyles.table);
	const handleOnClick = (style: ITableStyles) => {
		setStyle(style);
	};
	const keys = Object.entries(ITableStyles);
	return (
		<StyledTable>
			<Widget name={title}>
				<Description>{description}</Description>
				{keys.map(([key, value]) => (
					<button
						style={{ width: 20, height: 50 }}
						key={`button-style-${key}`}
						type="button"
						onClick={() => handleOnClick(ITableStyles[value])}
					/>
				))}
				<Table style={style} content={content} />
			</Widget>
		</StyledTable>
	);
};

const Table = ({ style, content }: ITableProps) => {
	switch (style) {
		case ITableStyles.chips:
			return <ChipsTable content={content} />;
		case ITableStyles.text:
			return <TextTable content={content} />;
		default:
			return <RegularTable content={content} />;
	}
};
