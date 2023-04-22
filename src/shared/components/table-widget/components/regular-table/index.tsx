import React from "react";
import { TableProps } from "shared/components/table-widget/index";
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

export const RegularTable = ({ content }: Pick<TableProps, "content">) => {
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
							<Status>{item.status}</Status>
						</Item>
					))}
			</ItemsTable>
		</ContentWrapper>
	);
};
