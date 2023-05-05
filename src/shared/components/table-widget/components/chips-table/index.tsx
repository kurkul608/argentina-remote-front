import React from "react";
import { ITableProps } from "shared/components/table-widget/index";

export const ChipsTable = ({ content }: Pick<ITableProps, "content">) => {
	return (
		<div>
			{content?.length &&
				content.map((item) => <div key={item.content}>{item.content}</div>)}
		</div>
	);
};
