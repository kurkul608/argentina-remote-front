import { ICrumbsDecorator } from "shared/components/breadcrumbs/index";

export const LineDecorator = (str: string, lines: ICrumbsDecorator) => {
	return str in lines ? lines[str] : str;
};
