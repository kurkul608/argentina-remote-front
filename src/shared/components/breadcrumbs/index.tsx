import React from "react";
import { LinkParserService } from "./services/link-parser.service";
import { useNavigate } from "react-router";
import {
	Breadcrumb,
	BreadcrumbsWrapper,
	BreadcrumbWrapper,
	Separator,
} from "./style";
import { LineDecorator } from "shared/components/breadcrumbs/services/line-decorator.service";

export interface ICrumbsDecorator {
	[x: string]: string;
}

interface IBreadcrumbs {
	link: string;
	separator?: string;
	decorateCrumbs?: ICrumbsDecorator;
}
export const Breadcrumbs = ({
	link,
	separator,
	decorateCrumbs,
}: IBreadcrumbs) => {
	const navigate = useNavigate();
	const links = LinkParserService(link);
	return (
		<BreadcrumbsWrapper>
			{links.map((value, i, arr) => (
				<BreadcrumbWrapper key={`beadcrumb-wrapper--${value}`}>
					<Breadcrumb onClick={() => navigate(value, { replace: true })}>
						{decorateCrumbs
							? LineDecorator(value.split("/").pop() || "", decorateCrumbs)
							: value.split("/").pop()}
					</Breadcrumb>
					{i < arr.length - 1 ? (
						<Separator>{separator || "/"}</Separator>
					) : null}
				</BreadcrumbWrapper>
			))}
		</BreadcrumbsWrapper>
	);
};
