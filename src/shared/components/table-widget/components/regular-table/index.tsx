import React from "react";
import { ITableProps } from "shared/components/table-widget/index";
import {
	ContentWrapper,
	Item,
	ItemsTable,
	Name,
	NameWrapper,
	Status,
	Total,
} from "shared/components/table-widget/components/regular-table/styled";
import { Icon, IconName } from "shared/components/icon";

export interface ITableOptions {
	data: { [x: string]: boolean };
}

export const TableOptions = ({ data }: ITableOptions) => {
	const items = [];
	for (const [key, value] of Object.entries(data)) {
		items.push(<div>{`${key}:${value}`}</div>);
	}
	return <div>{items.map((item) => item)}</div>;
};

export const RegularTable = ({ content }: Pick<ITableProps, "content">) => {
	return (
		<ContentWrapper>
			{content && <Total>Total: {`${content.length}`}</Total>}
			<ItemsTable>
				{content &&
					content.map((item) => (
						<Item key={item.content}>
							<NameWrapper>
								<Icon name={IconName.user} />
								<Name>{item.content}</Name>
							</NameWrapper>
							{item.misc && <TableOptions data={item.misc} />}
							<Status>{item.status}</Status>
						</Item>
					))}
			</ItemsTable>
		</ContentWrapper>
	);
};
